import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Input from '../../elements/Input'
import Select from '../../elements/Select'
import FormHead from '../../elements/FormHead'
import Button from '../../elements/Button'
import { FlexBox, FlexRow, ModalContainer } from '../../elements/StyleDialogs/styled'
import {
  apiCreatePrepod,
  apiGetPrepodFromId,
  apiUpdatePrepod
} from '../../../../api/prepod'

import ModalDialog from '../../ModalDialog'

import { Container } from './styled'

class CreatePrepod extends React.Component {
  state = {
    fieldValue: {}, // значение полей формы
    error: {}
  }

  changeSelect = event => {
    var name = event.target.name ? event.target.name : event.target.id,
      val = event.target.value;
    this.setState(prevState => ({
      fieldValue: { ...prevState.fieldValue, [name]: val, },
      error: { ...prevState.error, [name]: false},
    }));
  }

  create= () => {
    if (this.validate()) {
      if (this.props.prepodId) {
        apiUpdatePrepod(this.state.fieldValue)
          .then(() => this.props.onHide());
      } else {
        apiCreatePrepod(this.state.fieldValue)
          .then(() => this.props.onHide());
      }
      
    }

  }

  validate = () => {

    var val = this.state.fieldValue;

    if (!val.middleName
      || !val.firstName
      || !val.lastName
      || !val.coolness
    ) {
      this.setState(prevSate => (
        {
          error: {
            ...prevSate.error,
            middleName: !prevSate.fieldValue.middleName,
            firstName: !prevSate.fieldValue.firstName,
            lastName: !prevSate.fieldValue.lastName,
            coolness: !prevSate.fieldValue.coolness,
          }
        }
      ))
      return false;
    }
    return true;
  }

  componentDidMount() {
    var self = this;
    if (this.props.prepodId) {
      apiGetPrepodFromId({ id: this.props.prepodId }).then(res =>
        self.setState({ fieldValue: { ...res, id: self.props.prepodId } }
        ))
    }
  }

  render() {
    // TODO Вынести в константы
    var coolness = [
      { id: '0', val: 'Полковник' },
      { id: '1', val: 'Подполковник' },
      { id: '2', val: 'Майор' },
      { id: '3', val: 'Капитан' },
    ]
    return (
      <ModalDialog show={this.props.show} onHide={this.props.onHide}>
        <ModalContainer>
          <Container>
            <FormHead text="Добавить преподавателя" handleClick={this.props.onHide} />
            <FlexBox>
              <FlexRow className="flex-row">
                <div>
                  <Input id="middleName"
                    type="text"
                    isRequired={true}
                    placeholder="Фамилия"
                    value={this.state.fieldValue.middleName}
                    onChange={this.changeSelect}
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
                    onChange={this.changeSelect}
                    error={this.state.error.firstName}
                  />
                  {
                    this.state.error.firstName
                    && (<div className="error-message">Введите имя!</div>)
                  }
                </div>
              </FlexRow>
              <FlexRow className="flex-row">
                <div>
                  <Input id="lastName"
                    type="text"
                    isRequired={true}
                    placeholder="Отчество"
                    value={this.state.fieldValue.lastName}
                    onChange={this.changeSelect}
                    error={this.state.error.lastName}
                  />
                  {
                    this.state.error.lastName
                    && (<div className="error-message">Введите отчество!</div>)
                  }
                </div>
                <div>
                  <Select id="coolness"
                    data={coolness}
                    value="id"
                    text="val"
                    placeholder="Звание"
                    selectedValue={this.state.fieldValue.coolness}
                    onChange={this.changeSelect}
                    error={this.state.error.coolness}
                  />
                  {
                    this.state.error.coolness
                    && (<div className="error-message">Выберите звание!</div>)
                  }
                </div>
              </FlexRow>
              <FlexRow className="flex-row">
                <div>
                  <Input id="prepodRank"
                    type="text"
                    isRequired={false}
                    placeholder="Должность"
                    value={this.state.fieldValue.prepodRank}
                    onChange={this.changeSelect}
                  />
                </div>
                <div>
                  <Input id="additionalInfo"
                    type="text"
                    isRequired={false}
                    placeholder="Дополнительно"
                    value={this.state.fieldValue.additionalInfo}
                    onChange={this.changeSelect}
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

CreatePrepod.props = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  prepodId: PropTypes.string,
}

CreatePrepod.state = {
  fieldValue: PropTypes.array,
}


//const mapStateToProps = state => ({
//  troops: getTroopList(state),
//})

export default connect(null)(CreatePrepod)