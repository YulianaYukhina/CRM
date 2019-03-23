import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Picky from 'react-picky'
import 'react-picky/dist/picky.css'

import Input from '../../../elements/Input'
import Select from '../../../elements/Select'
import { FlexBox, FlexRow } from '../../../elements/StyleDialogs/styled'
import { design, constructionWork, specialEngineeringSystems } from '../../../../../constants/workPerformedConstants'

import { fetchSetCreateProjectFieldValue } from '../../../../../redux/modules/project'
import { getCreateProjectFields } from '../../../../../selectors/project'

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
    this.props.fetchSetCreateProjectFieldValue({name: name, value: val,});
  }

  changeSelectedFields = (fieldName, val) => {
    this.props.fetchSetCreateProjectFieldValue({name: fieldName, value: val,});
  }

  render() {
    var fields = this.props.fields
    return (
      <FlexBox style={{ maxWidth: '480px' }}>
        <FlexRow className="flex-row">
          <div style={{ width: '100%' }}>
            <Picky
              options={design}
              value={fields.design}
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
              value={fields.constructionWork}
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
              value={fields.specialEngineeringSystems}
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

const mapStateToProps = state => ({
  fields: getCreateProjectFields(state),
 })

export default connect(mapStateToProps, { fetchSetCreateProjectFieldValue })(WorkPerformed)
