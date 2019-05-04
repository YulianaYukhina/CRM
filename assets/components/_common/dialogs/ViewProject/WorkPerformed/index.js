import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Picky from 'react-picky' // выпадающий список с чекбоксами внутри
import 'react-picky/dist/picky.css'

import { FlexBox, FlexRow } from '../../../elements/StyleDialogs/styled'
import { design, constructionWork, specialEngineeringSystems } from '../../../../../constants/workPerformedConstants'

import { fetchSetCreateProjectFieldValue } from '../../../../../redux/modules/project'
import { getCreateProjectFields } from '../../../../../selectors/project'

import WorckList from './WorckList'

class WorkPerformed extends React.Component {

  render() {
    var fields = this.props.fields
    return (
      <FlexBox style={{ maxWidth: '480px' }}>
        <FlexRow className="flex-row">
          <WorckList placeholder="Дизайн" items={fields.design}/>
        </FlexRow>
        <FlexRow className="flex-row">
        <WorckList placeholder="Строительные работы" items={fields.constructionWork}/>
        </FlexRow>
        <FlexRow className="flex-row">
        <WorckList placeholder="Специальные инженерные системы" items={fields.specialEngineeringSystems}/>
        </FlexRow>
      </FlexBox>
    );
  }
}

const mapStateToProps = state => ({
  fields: getCreateProjectFields(state),
 })

export default connect(mapStateToProps, { fetchSetCreateProjectFieldValue })(WorkPerformed)
