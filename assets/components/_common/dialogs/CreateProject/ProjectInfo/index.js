import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Input from '../../../elements/Input'
import Select from '../../../elements/Select'
import { FlexBox, FlexRow } from '../../../elements/StyleDialogs/styled'

class ProjectInfo extends React.Component {
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
    var organizations = [ // TODO тянуть с бека
      {
        id: '1',
        val: 'sber',
        text: 'Сбербанк'
      },
      {
        id: '2',
        val: 'tinkoff',
        text: 'Тинькофф'
      },
    ]

    var managers = [ // TODO тянуть с бека
      {
        id: '1',
        val: 'test',
        text: 'Test T. T.',
        getText: () => 'Test T. R.'
      },
      {
        id: '2',
        val: 'admin',
        text: 'Иванов И. TEXT.',
        getText: () => 'Иванов И. T.'
      },
    ]
    return (
      <FlexBox>
        <FlexRow className="flex-row">
          <div>
            <Select
              id="organization"
              isRequired={true}
              placeholder="Организация"
              data={organizations}
              selectedValue={this.state.fieldValue.organization}
              onChange={this.changeInputHandler}
              error={this.state.error.organization}
            />
            {
              this.state.error.organization
              && (<div className="error-message">Выберите организацию!</div>)
            }
            <div style={{ marginTop: '40px' }}>
              <Input id="projectName"
                type="text"
                isRequired={true}
                placeholder="Название проекта"
                value={this.state.fieldValue.projectName}
                onChange={this.changeInputHandler}
                error={this.state.error.projectName}
              />
              {
                this.state.error.projectName
                && (<div className="error-message">Введите название!</div>)
              }
            </div>
          </div>
          <div>
            <div className="address-text">
              {/* <label>Адрес</label> */}
              <textarea
                id="address"
                placeholder="Адрес, например: г. Москва ул. Чехода д. 23"
                onChange={this.changeInputHandler}
                tabIndex="10"
                maxLength="250"
              />
            </div>
            {
              this.state.error.address
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
              data={managers}
              text="func()"
              selectedValue={this.state.fieldValue.manager}
              onChange={this.changeInputHandler}
              error={this.state.error.manager}
            />
            {
              this.state.error.manager
              && (<div className="error-message">Выберите ответственного менеджера!</div>)
            }
          </div>

          <div>
            <Input id="documents"
              type="text"
              isRequired={false}
              placeholder="Документы по проекту"
              value={this.state.fieldValue.documents}
              onChange={this.changeInputHandler}
            />
          </div>
        </FlexRow>
      </FlexBox>
    );
  }
}

ProjectInfo.state = {
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

export default connect(null)(ProjectInfo)
