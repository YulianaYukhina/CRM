import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ContextMenuTrigger, ContextMenu, MenuItem } from 'react-contextmenu'

import { fetchGetProjectList, fetchDeleteProject } from '../../../redux/modules/project'
import { getProjectList } from '../../../selectors/project'

import CreateProject from '../dialogs/CreateProject'
import ViewProject from '../dialogs/ViewProject'
import ProjectListItem from './projectListItem'
import Input from '../elements/Input'
import { Container, SearchContainer } from './styled'

class ProjectList extends React.Component {
  state = {
    editProjectOpenWindow: false,
    currentProjectId: '',
    viewProjectOpenWindow: false,
    search: '',
    searchTimer: 0,
  }

  changeInputHandler = event => {
    var val = event.target.value;
    clearTimeout(this.state.searchTimer);
    var timer = setTimeout((search) => {
      //TODO найти проекты
      if(search)
        console.log(search);
    }, 800, val);
    this.setState({ search: val, searchTimer: timer });
  }

  toggleOpenWindowEditProject = () => {
    let windowIsOpen = !this.state.editProjectOpenWindow;
    this.setState({ editProjectOpenWindow: windowIsOpen });
  }
  toggleOpenWindowViewProject = (id) => {
    if (id) {
      this.setState({ currentProjectId: id });
    }
    let windowIsOpen = !this.state.viewProjectOpenWindow;
    this.setState({ viewProjectOpenWindow: windowIsOpen });
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
          this.setState({ currentProjectId: data.id })
          this.toggleOpenWindowEditProject()
          break;
        }
      case 'viewProject':
        {
          this.setState({ currentProjectId: data.id })
          this.toggleOpenWindowViewProject()
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
        <SearchContainer>
          <Input id="search"
            type="text"
            isRequired={false}
            placeholder="Поиск"
            value={this.state.search}
            onChange={this.changeInputHandler}
          />
        </SearchContainer>
        {(projects && projects.map(ob => {
          return (<ContextMenuTrigger
            id="projectListMenu"
            projectId={ob.id}
            key={ob.id}
            collect={this.collect}
          >
            <ProjectListItem
              projectId={ob.id}
              organization={ob.organization ? ob.organization.name : ''}
              projectName={ob.projectName}
              manager={ob.manager ? (ob.manager.surname + ' ' + ob.manager.name + ' ' + ob.manager.patronymic) : ''}
              addres={ob.addres}
              onClick={() => this.toggleOpenWindowViewProject(ob.id)}
            />
          </ContextMenuTrigger>)
        }))}

        {this.state.editProjectOpenWindow && (
          <CreateProject id={this.state.currentProjectId} show={this.state.editProjectOpenWindow} onHide={this.toggleOpenWindowEditProject} />
        )}

        {this.state.viewProjectOpenWindow && (
          <ViewProject id={this.state.currentProjectId} show={this.state.viewProjectOpenWindow} onHide={this.toggleOpenWindowViewProject} />
        )}

        <ContextMenu id="projectListMenu">
          <MenuItem onClick={this.menuClick} data={{ type: 'viewProject' }}>Информация о проекте</MenuItem>
          <MenuItem onClick={this.menuClick} data={{ type: 'editProject' }}>Редактировать проект</MenuItem>
          <MenuItem onClick={this.menuClick} data={{ type: 'deleteProject' }}>Удалить проект</MenuItem>
        </ContextMenu>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  projects: getProjectList(state),
})

export default connect(mapStateToProps, { fetchGetProjectList, fetchDeleteProject })(ProjectList)

