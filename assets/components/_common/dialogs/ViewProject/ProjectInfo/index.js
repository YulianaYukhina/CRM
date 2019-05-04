import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import InfoBox from '../../../elements/InfoBox'
import { FlexBox, FlexRow } from '../../../elements/StyleDialogs/styled'

import { apiGetManagerList } from '../../../../../api/manager'
import {apiGetOrganizationList} from '../../../../../api/organization'

import { fetchSetCreateProjectFieldValue } from '../../../../../redux/modules/project'
import { getCreateProjectFields, getCreateProjectFieldsErorrs } from '../../../../../selectors/project'

class ProjectInfo extends React.Component {

  state = {
    manager: '',
    organization: '',
    responsibleName: '',
  }

  componentDidMount() {
    apiGetManagerList().then(res => {
      var manager = res.data && res.data.find(ob => ob.id == this.props.fields.manager) 
      manager = manager && (manager.surname + ' ' + manager.name.charAt(0) + '. ' + manager.patronymic.charAt(0) + '.')
      this.setState({manager});
    });

    apiGetOrganizationList().then(res => {
      var organization = res.data && res.data.find( ob => ob.id == this.props.fields.organization);
      organization = organization && organization.name;
      res.data && this.setState({organization});
    })
  }

  render() {
    var { fields } = this.props;
    var {responsibleMiddleName, responsibleFirstName, responsibleLastName} = fields;
    var responsibleName = ((responsibleMiddleName && responsibleMiddleName) + (responsibleFirstName && (' ' + responsibleFirstName.charAt(0) + '. ')) + (responsibleLastName && (responsibleLastName.charAt(0) + '.'))) || '';
    var {organization, manager} = this.state;
    return (
      <FlexBox>
        <FlexRow className="flex-row">
          <div>
            <InfoBox label="Организация" text={organization} />
            <InfoBox style={{ marginTop: '20px' }} label="Название проекта" text={fields.projectName} />
          </div>
          <div>
            {/* <div className="address-text"> */}
            <InfoBox label="Адрес" text={fields.addres} />
            {/* </div> */}
          </div>
        </FlexRow>
        <FlexRow>
          <InfoBox text={manager} label="Менеджер" />
          <InfoBox text={fields.documents} label="Документы" />
        </FlexRow>
        <FlexRow>
          <InfoBox text={responsibleName} label="Заказчик" />
          <InfoBox text={fields.responsiblePhone} label="Телефон заказчика" />
        </FlexRow>
        <FlexRow>
          <InfoBox text={fields.responsibleMail} label="Почта заказчика" />
          {/* <InfoBox text={fields.documents} label="Документы" /> */}
        </FlexRow>
      </FlexBox>
    );
  }
}

const mapStateToProps = state => ({
 fields: getCreateProjectFields(state)
})

export default connect(mapStateToProps)(ProjectInfo)
