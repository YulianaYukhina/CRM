import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Tabs, Tab } from 'react-bootstrap' // бутстрам вкладки

import FormHead from '../../elements/FormHead'
import { ModalContainer } from '../../elements/StyleDialogs/styled'
import ModalDialog from '../../ModalDialog'
import { Container } from './styled'

import { fetchGetProjectByID } from '../../../../redux/modules/project'
import { getCreateProjectFields } from '../../../../selectors/project'

import ProjectInfo from './ProjectInfo'
import WorkPerformed from './WorkPerformed'
import Chat from './Chat'

class ViewProject extends React.Component {
  state = {
    key: 'ProjectInfo',
  };

  componentDidMount() {
    if (this.props.id) {
      this.props.fetchGetProjectByID(this.props.id);
    }
  }

  render() {
    return (
      <ModalDialog show={this.props.show} onHide={this.props.onHide}>
        <ModalContainer>
          <Container>
            <FormHead text="Информация о проекте" handleClick={this.props.onHide} />
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
                <Tab eventKey="WorkPerformed" title="Выполняемые работы">
                  <WorkPerformed />
                </Tab>
                <Tab eventKey="Chat" title="Чат">
                  <Chat />
                </Tab>
              </Tabs>
            </div>
          </Container>
        </ModalContainer>
      </ModalDialog>
    );
  }
}


ViewProject.props = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  id: PropTypes.string,
}

const mapStateToProps = state => ({
  fields: getCreateProjectFields(state),
})

const fetch = {
  fetchGetProjectByID,
}

export default connect(mapStateToProps, fetch)(ViewProject)
