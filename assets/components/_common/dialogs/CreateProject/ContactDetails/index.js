import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Input from '../../../elements/Input'
import { FlexBox, FlexRow } from '../../../elements/StyleDialogs/styled'
import { fetchSetCreateProjectFieldValue } from '../../../../../redux/modules/project'
import { getCreateProjectFields, getCreateProjectFieldsErorrs } from '../../../../../selectors/project'

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
    var {fields, errors} = this.props
    return (
            <FlexBox>
              <FlexRow className="flex-row">
                <div>
                  <Input id="responsibleMiddleName"
                      type="text"
                      isRequired={true}
                      placeholder="Фамилия"
                      value={fields.responsibleMiddleName}
                      onChange={this.changeInputHandler}
                      error={errors.responsibleMiddleName}
                    />
                    {
                      errors.responsibleMiddleName
                      && (<div className="error-message">Введите фамилию!</div>)
                    }
                </div>
                <div>
                <Input id="responsibleFirstName"
                      type="text"
                      isRequired={true}
                      placeholder="Имя"
                      value={fields.responsibleFirstName}
                      onChange={this.changeInputHandler}
                      error={errors.responsibleFirstName}
                    />
                    {
                      errors.responsibleFirstName
                      && (<div className="error-message">Введите имя!</div>)
                    }
                </div>
              </FlexRow>
              <FlexRow className="flex-row">
                <div>
                <Input id="responsibleLastName"
                    type="text"
                    isRequired={true}
                    placeholder="Отчество"
                    value={fields.responsibleLastName}
                    onChange={this.changeInputHandler}
                    error={errors.responsibleLastName}
                  />
                  {
                    errors.responsibleLastName
                    && (<div className="error-message">Введите отчество!</div>)
                  }
                </div>
                <div>
                <Input id="responsiblePhone"
                    type="text"
                    isRequired={true}
                    placeholder="Телефон"
                    value={fields.responsiblePhone}
                    onChange={this.changeInputHandler}
                    error={errors.responsiblePhone}
                  />
                  {
                    errors.responsiblePhone
                    && (<div className="error-message">Введите телефон!</div>)
                  }
                </div>
              </FlexRow>
              <FlexRow className="flex-row">
                <div>
                <Input id="responsibleMail"
                    type="text"
                    isRequired={false}
                    placeholder="Почта"
                    value={fields.responsibleMail}
                    onChange={this.changeInputHandler}
                  />
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
  errors: getCreateProjectFieldsErorrs(state),
 })

export default connect(mapStateToProps, { fetchSetCreateProjectFieldValue })(ContactDetails)
