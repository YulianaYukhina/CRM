import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Picky from 'react-picky'
import 'react-picky/dist/picky.css'

import Input from '../../../elements/Input'
import Select from '../../../elements/Select'
import { FlexBox, FlexRow } from '../../../elements/StyleDialogs/styled'
import { design, constructionWork, specialEngineeringSystems } from '../../../../../constants/workPerformedConstants'

class WorkPerformed extends React.Component {
  state = {
    fieldValue: {
      design: [],
      constructionWork: [],
      specialEngineeringSystems: [],
    }, // значение полей формы
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

  changeSelectedFields = (fieldName, val) => {
    this.setState(prevState => {
      prevState.fieldValue[fieldName] = val;
      return {
        fieldValue: prevState.fieldValue
      }
    });
  }

  render() {
    return (
      <FlexBox style={{ maxWidth: '480px' }}>
        <FlexRow className="flex-row">
          <div style={{ width: '100%' }}>
            <Picky
              options={design}
              value={this.state.fieldValue.design}
              onChange={value => this.changeSelectedFields('design', value)}
              multiple={true}
              valueKey="val"
              labelKey="text"
              numberDisplayed="2"
              placeholder=""
            />
            {
              this.state.error.projectName
              && (<div className="error-message">Введите название!</div>)
            }
          </div>
        </FlexRow>
        <FlexRow className="flex-row">
          <div style={{ width: '100%' }}>
            <Picky
              options={constructionWork}
              value={this.state.fieldValue.constructionWork}
              onChange={value => this.changeSelectedFields('constructionWork', value)}
              multiple={true}
              valueKey="val"
              labelKey="text"
              numberDisplayed="2"
              placeholder=""
            />
            {
              this.state.error.projectName
              && (<div className="error-message">Введите название!</div>)
            }
          </div>
        </FlexRow>
        <FlexRow className="flex-row">
          <div style={{ width: '100%' }}>
            <Picky
              options={specialEngineeringSystems}
              value={this.state.fieldValue.specialEngineeringSystems}
              onChange={value => this.changeSelectedFields('specialEngineeringSystems', value)}
              multiple={true}
              valueKey="val"
              labelKey="text"
              numberDisplayed="2"
              placeholder=""
            />
            {
              this.state.error.projectName
              && (<div className="error-message">Введите название!</div>)
            }
          </div>
        </FlexRow>
      </FlexBox>
    );
  }
}

WorkPerformed.state = {
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

export default connect(null)(WorkPerformed)
