import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ContextMenuTrigger, ContextMenu, MenuItem } from 'react-contextmenu'

import { fetchGetProjectList, fetchDeleteProject } from '../../../redux/modules/project'
import { getProjectList } from '../../../selectors/project'

import CreateProject from '../dialogs/CreateProject'
import ProjectListItem from './projectListItem'
import { Container } from './styled'

class ProjectList extends React.Component {
  state = {
    editProjectOpenWindow: false,
    currentProjectId: '',
  }

  toggleOpenWindowProject = () =>{
    let windowIsOpen = !this.state.editProjectOpenWindow;
    this.setState({editProjectOpenWindow: windowIsOpen});
  }

  collect = props => ({
    id: props.projectId,
  })


  menuClick = async (e, data) => {
    switch (data.type) {
      case 'deleteProject':
        {
          this.props.fetchDeleteProject(data.id);
          break;
        }
      case 'editProject':
        {
          this.setState({currentProjectId: data.id})
          this.toggleOpenWindowProject()
          break;
        }
      default:
    }
  }
  componentDidMount() {
    this.props.fetchGetProjectList();
  }
  render() {
    var { projects } = this.props;
    return (
      <Container>
        {(projects && projects.map(ob => {
          return (<ContextMenuTrigger
            id="projectListMenu"
            projectId={ob.id}
            key={ob.id}
            collect={this.collect}
          >
            <ProjectListItem
              projectId={ob.id}
              organization={ob.organization}
              projectName={ob.projectName}
              manager={ob.manager ? (ob.manager.surname + ' ' + ob.manager.name + ' ' + ob.manager.patronymic) : ''}
              addres={ob.addres}
            />
          </ContextMenuTrigger>)
        }))}

        {this.state.editProjectOpenWindow && (
          <CreateProject id={this.state.currentProjectId} show={this.state.editProjectOpenWindow} onHide={this.toggleOpenWindowProject} />
        )}

        <ContextMenu id="projectListMenu">
          <MenuItem onClick={this.menuClick} data={{ type: 'deleteProject' }}>Удалить проект</MenuItem>
          <MenuItem onClick={this.menuClick} data={{ type: 'editProject' }}>Редактировать проект</MenuItem>
        </ContextMenu>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  projects: getProjectList(state),
})

export default connect(mapStateToProps, { fetchGetProjectList, fetchDeleteProject })(ProjectList)

