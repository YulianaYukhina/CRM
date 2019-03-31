import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Input from '../../../elements/Input'
import Select from '../../../elements/Select'
import { FlexBox, FlexRow } from '../../../elements/StyleDialogs/styled'

import { apiGetManagerList } from '../../../../../api/manager'

import { fetchSetCreateProjectFieldValue } from '../../../../../redux/modules/project'
import { getCreateProjectFields, getCreateProjectFieldsErorrs } from '../../../../../selectors/project'

class ProjectInfo extends React.Component {
  state = {
    fieldValue: {}, // значение полей формы
    error: {},
    managers: []
  };

  changeInputHandler = event => {
    var name = event.target.name ? event.target.name : event.target.id,
      val = event.target.value;
    this.props.fetchSetCreateProjectFieldValue({name: name, value: val,});
  }

  componentDidMount() {
    apiGetManagerList().then(res => {
      res.data && res.data.map(ob => ob.initials = ob.surname + ' ' + ob.name.charAt(0) + '. ' + ob.patronymic.charAt(0) + '.')
      this.props.fetchSetCreateProjectFieldValue({ name: 'managers', value: res.data })
    });
  }

  render() {
    var organizations = [ // TODO тянуть с бека
      {
        key: '1',
        id: '1',
        val: 'sber',
        text: 'Сбербанк'
      },
      {
        key: '2',
        id: '2',
        val: 'tinkoff',
        text: 'Тинькофф'
      },
    ]

    var { managers } = this.state;
    var { fields, errors} = this.props
    return (
      <FlexBox>
        <FlexRow className="flex-row">
          <div>
            <Select
              id="organization"
              isRequired={true}
              placeholder="Организация"
              data={organizations}
              selectedValue={fields.organization}
              onChange={this.changeInputHandler}
              error={errors.organization}
            />
            {
              errors.organization
              && (<div className="error-message">Выберите организацию!</div>)
            }
            <div style={{ marginTop: '40px' }}>
              <Input id="projectName"
                type="text"
                isRequired={true}
                placeholder="Название проекта"
                value={fields.projectName}
                onChange={this.changeInputHandler}
                error={errors.projectName}
              />
              {
                errors.projectName
                && (<div className="error-message">Введите название!</div>)
              }
            </div>
          </div>
          <div>
            <div className="address-text">
              <textarea
                id="addres"
                placeholder="Адрес, например: г. Москва ул. Чехода д. 23"
                onChange={this.changeInputHandler}
                tabIndex="10"
                maxLength="250"
              />
            </div>
            {
              errors.addres
              && (<div className="error-message">Введите адрес!</div>)
            }
          </div>
        </FlexRow>
        <FlexRow>
          <div>
            <Select
              id="manager"
              isRequired={true}
              placeholder="Менеджер"
              data={fields.managers}
              value="id"
              text="initials"
              selectedValue={fields.manager}
              onChange={this.changeInputHandler}
              error={errors.manager}
            />
            {
              errors.manager
              && (<div className="error-message">Выберите ответственного менеджера!</div>)
            }
          </div>

          <div>
            <Input id="documents"
              type="text"
              isRequired={false}
              placeholder="Документы по проекту"
              value={fields.documents}
              onChange={this.changeInputHandler}
            />
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

export default connect(mapStateToProps, { fetchSetCreateProjectFieldValue })(ProjectInfo)
