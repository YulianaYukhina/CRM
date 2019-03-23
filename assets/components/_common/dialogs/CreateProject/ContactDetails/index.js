import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Input from '../../../elements/Input'
import { FlexBox, FlexRow } from '../../../elements/StyleDialogs/styled'
import { fetchSetCreateProjectFieldValue } from '../../../../../redux/modules/project'
import { getCreateProjectFields } from '../../../../../selectors/project'

class ContactDetails extends React.Component {
  state = {
    fieldValue: {}, // значение полей формы
    error: {},
  };

  changeInputHandler = event => {
    var name = event.target.name ? event.target.name : event.target.id,
      val = event.target.value;
    this.props.fetchSetCreateProjectFieldValue({name: name, value: val,});
  }


  render() {
    var fields = this.props.fields
    return (
            <FlexBox>
              <FlexRow className="flex-row">
                <div>
                  <Input id="middleName"
                      type="text"
                      isRequired={true}
                      placeholder="Фамилия"
                      value={fields.middleName}
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
                      value={fields.firstName}
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
                    value={fields.lastName}
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
                    value={fields.phone}
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
                    value={fields.mail}
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


const mapStateToProps = state => ({
  fields: getCreateProjectFields(state),
 })

export default connect(mapStateToProps, { fetchSetCreateProjectFieldValue })(ContactDetails)
