import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Tabs, Tab } from 'react-bootstrap' // бутстрам вкладки

import Input from '../../elements/Input'
import Select from '../../elements/Select'
import FormHead from '../../elements/FormHead'
import Button from '../../elements/Button'
import { FlexBox, FlexRow, ModalContainer } from '../../elements/StyleDialogs/styled'
import ModalDialog from '../../ModalDialog'
import { Container } from './styled'

import {
  fetchSetCreateProjectFieldValueNull,
  fetchSetCreateProjectFieldValueError,
  fetchGetProjectList,
  fetchGetProjectByID,
} from '../../../../redux/modules/project'
import { getCreateProjectFields } from '../../../../selectors/project'
import { apiSaveProject } from '../../../../api/project'

import ProjectInfo from './ProjectInfo'
import ContactDetails from './ContactDetails'
import WorkPerformed from './WorkPerformed'

class CreateProject extends React.Component {
  state = {
    key: 'ProjectInfo',
  };

  componentDidMount() {
    if (this.props.id) {
      this.props.fetchGetProjectByID(this.props.id);
    }
  }

  create = () => {
    if (this.validate()) {
      apiSaveProject(this.props.fields)
        .then(res => {
          this.props.fetchSetCreateProjectFieldValueNull();
          this.props.fetchGetProjectList();
          this.props.onHide()
        })
    }
  }

  validate = () => {
    var val = this.props.fields;

    if (!val.responsibleMiddleName
      || !val.responsibleFirstName
      || !val.responsibleLastName
      || !val.responsiblePhone
      || !val.manager
      || !val.organization
      || !val.projectName
    ) {
      this.props.fetchSetCreateProjectFieldValueError({
        responsibleMiddleName: !val.responsibleMiddleName,
        responsibleFirstName: !val.responsibleFirstName,
        responsibleLastName: !val.responsibleLastName,
        responsiblePhone: !val.responsiblePhone,
        manager: !val.manager,
        organization: !val.organization,
        projectName: !val.projectName,
      })
      return false;
    }
    return true;
  }

  render() {
    return (
      <ModalDialog show={this.props.show} onHide={this.props.onHide}>
        <ModalContainer>
          <Container>
            <FormHead text="Создать проект" handleClick={this.props.onHide} />
            <div className="create-project-container-tabs">
              <Tabs
                id="CreateProjectTabs"
                activeKey={this.state.key}
                onSelect={key => this.setState({ key })}
                className="CreateProjectTabs"
              >
                <Tab eventKey="ProjectInfo" title="Информация о проекте">
                  <ProjectInfo />
                </Tab>
                <Tab eventKey="ContactDetails" title="Контактные данные">
                  <ContactDetails />
                </Tab>
                <Tab eventKey="WorkPerformed" title="Выполняемые работы">
                  <WorkPerformed />
                </Tab>
              </Tabs>
            </div>
            <div className="form-submit">
              <Button onClick={this.create} value="Сохранить" />
            </div>
          </Container>
        </ModalContainer>
      </ModalDialog>
    );
  }
}


CreateProject.props = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  id: PropTypes.string,
}

const mapStateToProps = state => ({
  fields: getCreateProjectFields(state),
})

const fetch = {
  fetchSetCreateProjectFieldValueNull,
  fetchSetCreateProjectFieldValueError,
  fetchGetProjectList,
  fetchGetProjectByID,
}

export default connect(mapStateToProps, fetch)(CreateProject)
