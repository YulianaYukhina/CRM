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

<<<<<<< HEAD
import ProjectInfo from './ProjectInfo' // 1 вкладка(инфа о проекте)
import ContactDetails from './ContactDetails' // 2 вкладка (контактная инфа)
import WorkPerformed from './WorkPerformed' // 3 вкладка(работы)
=======
import { fetchSetCreateProjectFieldValueNull, fetchSetCreateProjectFieldValueError } from '../../../../redux/modules/project'
import { getCreateProjectFields } from '../../../../selectors/project'
import { apiSaveProject } from '../../../../api/project'

import ProjectInfo from './ProjectInfo'
import ContactDetails from './ContactDetails'
import WorkPerformed from './WorkPerformed'
>>>>>>> f5f014380bef7b1f894ba7f03da4b73d52e4e672

class CreateProject extends React.Component {
  state = {
    key: 'ProjectInfo',
  };

  create = () => {
    if (this.validate()) {
      apiSaveProject(this.props.fields)
        .then(res => {
          this.props.fetchSetCreateProjectFieldValueNull();
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
}

const mapStateToProps = state => ({
  fields: getCreateProjectFields(state),
})

export default connect(mapStateToProps, { fetchSetCreateProjectFieldValueNull, fetchSetCreateProjectFieldValueError })(CreateProject)
