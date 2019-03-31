
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { apiCheckExistLogin } from '../../../../api/user'
import {apiSaveOrganization} from '../../../../api/organization'

import Input from '../../elements/Input' // контролл инпут(ввод текста)
import FormHead from '../../elements/FormHead' // шапка модального окна(название и крестик)
import Button from '../../elements/Button' // кнопка
import { FlexBox, FlexRow, ModalContainer } from '../../elements/StyleDialogs/styled' // стили для верстки
import ModalDialog from '../../ModalDialog' // модальное окно
import { Container } from './styled' // стили для окна менеджера

class CreateOrganization extends React.Component {
  state = {
    fieldValue: {}, // значение полей формы
    error: {}
  };

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
      apiSaveOrganization(fieldValue)
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
  }

  validate = () => {
    var val = this.state.fieldValue;

    if (!val.name
      || !val.login
      || !val.newPassword
      || val.newPassword !== val.confirmPassword
    ) {
      this.setState(prevSate => (
        {
          error: {
            ...prevSate.error,
            name: !prevSate.fieldValue.name,
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
    return (
      <ModalDialog show={this.props.show} onHide={this.props.onHide}>
        <ModalContainer>
          <Container>
            <FormHead text="Добавить организацию" handleClick={this.props.onHide} />
            <FlexBox>
              <FlexRow className="flex-row">
                <div>
                  <Input id="name"
                    type="text"
                    isRequired={true}
                    placeholder="Название организации"
                    value={this.state.fieldValue.name}
                    onChange={this.changeInputHandler}
                    error={this.state.error.name}
                  />
                  {
                    this.state.error.name
                    && (<div className="error-message">Введите название!</div>)
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
        </ModalContainer>
      </ModalDialog>
    );
  }
}


CreateOrganization.props = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
}

CreateOrganization.state = {
  fieldValue: PropTypes.shape(
    {
      name: PropTypes.string,
      login: PropTypes.string,
      password: PropTypes.string,
      newPassword: PropTypes.string,
    }
  ),
  error: PropTypes.shape(
    {
      name: PropTypes.bool,
      login: PropTypes.bool,
      loginIsExist: PropTypes.bool,
      password: PropTypes.bool,
      newPassword: PropTypes.bool,
    }
  ),
}

export default connect(null)(CreateOrganization)
