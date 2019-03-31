// диалог по созданию менеджера

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { apiSaveManager } from '../../../../api/manager' // апи(общение с сервером)
import { apiCheckExistLogin } from '../../../../api/user'

import Input from '../../elements/Input' // контролл инпут(ввод текста)
import FormHead from '../../elements/FormHead' // шапка модального окна(название и крестик)
import Button from '../../elements/Button' // кнопка
import { FlexBox, FlexRow, ModalContainer } from '../../elements/StyleDialogs/styled' // стили для верстки
import ModalDialog from '../../ModalDialog' // модальное окно
import Cropper from '../../cropper' // кроппер(обрезка картинки)
import { Container } from './styled' // стили для окна менеджера
import PhotoPlaceholder from '../../../../images/PhotoPlaceholder.png' // плейсхолдер для фото(то что по умолчанию стоит)

class CreateManager extends React.Component {
  state = {
    fieldValue: {}, // значение полей формы
    error: {},
    file: undefined,
    imagePreviewUrl: '',
    cropperWindow: false
  };

  componentDidMount() {
    let image = new Image();
    image.crossOrigin = "anonymous";
    var canvas = document.createElement("canvas"),
      canvasContext = canvas.getContext("2d");
    image.onload = () => {
      canvas.width = 130;
      canvas.height = 140;
      canvasContext.drawImage(image, 0, 0, 130, 140);
      this.hadleCropSaveImage(canvas);
    }
    image.src = PhotoPlaceholder;
  }

  hadleCropSaveImage = image => {
    image.toBlob(
      img => {
        this.setState({
          imagePreviewUrl: image.toDataURL(),
          file: img,
          cropperWindow: false,
        })
        //this.props.fetchSetStudentPhoto(img);
      },
      'image/jpeg',
      1
    )
  }

  handleSelectImage(event) {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
        cropperWindow: true,
      });
    }

    reader.readAsDataURL(file)
  }

  changeInputHandler = event => {
    var name = event.target.name ? event.target.name : event.target.id,
      val = event.target.value;
    this.setState(prevState => ({
      fieldValue: { ...prevState.fieldValue, [name]: val, },
      error: { ...prevState.error, [name]: false },
    }));
  }

  create = async () => {
    if (this.validate() && await this.checkExistLogin()) {
      let { fieldValue, file } = this.state;
      let form = new FormData();
      Object.keys(fieldValue).map(key => {
        if (fieldValue[key])
          form.append(`${key}`, fieldValue[key])
      });
      form.append('photo', file);
      apiSaveManager(form)
        .then(res => this.props.onHide())
    }
  }

  checkExistLogin = async () => {
    return await apiCheckExistLogin(this.state.fieldValue.login)
      .then(({ data }) => {
        this.setState(prevState => ({
          error: {
            ...prevState.error,
            loginIsExist: data.LoginIsExist
          }
        }))
        return !data.LoginIsExist;
      });
    //return res
  }

  validate = () => {
    var val = this.state.fieldValue;

    if (!val.middleName
      || !val.firstName
      || !val.lastName
      || !val.phone
      || !val.mail
      || !val.login
      || !val.newPassword
      || val.newPassword !== val.confirmPassword
    ) {
      this.setState(prevSate => (
        {
          error: {
            ...prevSate.error,
            middleName: !prevSate.fieldValue.middleName,
            firstName: !prevSate.fieldValue.firstName,
            lastName: !prevSate.fieldValue.lastName,
            phone: !prevSate.fieldValue.phone,
            mail: !prevSate.fieldValue.mail,
            login: !prevSate.fieldValue.login,
            newPassword: !prevSate.fieldValue.newPassword,
            confirmPassword: prevSate.fieldValue.newPassword !== prevSate.fieldValue.confirmPassword
          }
        }
      ))
      return false;
    }
    return true;
  }

  render() {
    const { cropperWindow, imagePreviewUrl } = this.state;
    return (
      <ModalDialog show={this.props.show} onHide={this.props.onHide}>
        <ModalContainer>
          <Container>
            <FormHead text="Добавить менеджера" handleClick={this.props.onHide} />
            <FlexBox>
              <FlexRow className="flex-row">
                <div className="image-left-col">
                  <div>
                    <Input id="middleName"
                      type="text"
                      isRequired={true}
                      placeholder="Фамилия"
                      value={this.state.fieldValue.middleName}
                      onChange={this.changeInputHandler}
                      error={this.state.error.middleName}
                    />
                    {
                      this.state.error.middleName
                      && (<div className="error-message">Введите фамилию!</div>)
                    }
                  </div>
                  <div>
                    <Input id="firstName"
                      type="text"
                      isRequired={true}
                      placeholder="Имя"
                      value={this.state.fieldValue.firstName}
                      onChange={this.changeInputHandler}
                      error={this.state.error.firstName}
                    />
                    {
                      this.state.error.firstName
                      && (<div className="error-message">Введите имя!</div>)
                    }
                  </div>
                </div>
                <div className="image-right-col">
                  <img src={imagePreviewUrl} className="image" onClick={() => document.getElementById('file-input').click()} />
                  <Button onClick={() => document.getElementById('file-input').click()} value="Выбрать фото" />
                  <input
                    type="file"
                    id="file-input"
                    onClick={(e) => e.target.value = null}
                    onChange={(e) => this.handleSelectImage(e)}
                    accept="image/*"
                    style={{ display: 'none' }}
                  />
                </div>
              </FlexRow>
              <FlexRow className="flex-row">
                <div>
                  <Input id="lastName"
                    type="text"
                    isRequired={true}
                    placeholder="Отчество"
                    value={this.state.fieldValue.lastName}
                    onChange={this.changeInputHandler}
                    error={this.state.error.lastName}
                  />
                  {
                    this.state.error.lastName
                    && (<div className="error-message">Введите отчество!</div>)
                  }
                </div>
                <div>
                  <Input id="phone"
                    type="text"
                    isRequired={true}
                    placeholder="Телефон"
                    value={this.state.fieldValue.phone}
                    onChange={this.changeInputHandler}
                    error={this.state.error.phone}
                  />
                  {
                    this.state.error.phone
                    && (<div className="error-message">Введите телефон!</div>)
                  }
                </div>
              </FlexRow>
              <FlexRow className="flex-row">
                <div>
                  <Input id="mail"
                    type="text"
                    isRequired={true}
                    placeholder="Почта"
                    value={this.state.fieldValue.mail}
                    onChange={this.changeInputHandler}
                    error={this.state.error.mail}
                  />
                  {
                    this.state.error.mail
                    && (<div className="error-message">Введите почту!</div>)
                  }
                </div>
                <div>
                  <Input id="login"
                    type="text"
                    isRequired={true}
                    placeholder="Логин"
                    value={this.state.fieldValue.login}
                    onChange={this.changeInputHandler}
                    error={this.state.error.login || this.state.error.loginIsExist}
                  />
                  {
                    this.state.error.login
                    && (<div className="error-message">Введите логин!</div>)
                  }
                  {
                    this.state.error.loginIsExist
                    && (<div className="error-message">Такой пользователь уже есть!</div>)
                  }
                </div>
              </FlexRow>
              <FlexRow className="flex-row">
                <div>
                  <Input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    placeholder="Новый пароль"
                    isRequire="true"
                    value={this.state.fieldValue.newPassword}
                    onChange={this.changeInputHandler}
                    error={this.state.error.newPassword}
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Повторите новый пароль"
                    isRequire="true"
                    value={this.state.fieldValue.confirmPassword}
                    onChange={this.changeInputHandler}
                    error={this.state.error.confirmPassword}
                  />
                </div>
              </FlexRow>
            </FlexBox>
            <div className="form-submit">
              <Button onClick={this.create} value="Сохранить" />
            </div>
          </Container>
          {cropperWindow &&
            (<Cropper
              isOpen={cropperWindow}
              src={imagePreviewUrl}
              saveImage={this.hadleCropSaveImage}
            />)}
        </ModalContainer>
      </ModalDialog>
    );
  }
}


CreateManager.props = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
}

CreateManager.state = {
  fieldValue: PropTypes.shape(
    {
      middleName: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      phone: PropTypes.string,
      mail: PropTypes.string,
      login: PropTypes.string,
      newPassword: PropTypes.string,
    }
  ),
  error: PropTypes.shape(
    {
      middleName: PropTypes.bool,
      firstName: PropTypes.bool,
      lastName: PropTypes.bool,
      phone: PropTypes.bool,
      mail: PropTypes.bool,
      login: PropTypes.bool,
      loginIsExist: PropTypes.bool,
      newPassword: PropTypes.bool,
    }
  ),
  file: PropTypes.object,
  imagePreviewUrl: PropTypes.string,
  cropperWindow: PropTypes.bool
}

//const mapStateToProps = state => ({
//  troops: getTroopList(state),
//})

export default connect(null)(CreateManager)
