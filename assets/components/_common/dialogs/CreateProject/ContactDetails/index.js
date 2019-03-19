import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Input from '../../../elements/Input'
import { FlexBox, FlexRow } from '../../../elements/StyleDialogs/styled'

class ContactDetails extends React.Component {
  state = {
    fieldValue: {}, // значение полей формы
    error: {},
  };

  changeInputHandler = event => {
    var name = event.target.name ? event.target.name : event.target.id,
      val = event.target.value;
    this.setState(prevState => ({
      fieldValue: { ...prevState.fieldValue, [name]: val, },
      error: { ...prevState.error, [name]: false },
    }));
  }


  render() {
    return (
            <FlexBox>
              <FlexRow className="flex-row">
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

                </div>
              </FlexRow>
            </FlexBox>
    );
  }
}

ContactDetails.state = {
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
  )
}

export default connect(null)(ContactDetails)
