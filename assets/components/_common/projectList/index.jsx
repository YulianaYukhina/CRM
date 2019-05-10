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
import { Container, SearchContainer, OnlyMyProjects } from './styled'

class ProjectList extends React.Component {
  state = {
    editProjectOpenWindow: false,
    currentProjectId: '',
    viewProjectOpenWindow: false,
    search: '',
    searchTimer: 0,
    onlyMyProjects: false,
  }

  changeInputHandler = event => {
    var val = event.target.value;
    clearTimeout(this.state.searchTimer);
    var timer = setTimeout((search, onlyMyProjects) => {
      this.props.fetchGetProjectList({ search, onlyMyProjects });
    }, 800, val, this.state.onlyMyProjects);
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
    const isAdmin = localStorage.getItem('role') == 'admin'
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
          { localStorage.getItem('role') == 'admin' &&
          (<OnlyMyProjects>
            <input id="onlyMyProjects"
              type="checkbox"
              valye={this.state.onlyMyProjects}
              onChange={() => {
                this.setState(preventState => {
                this.props.fetchGetProjectList({ search: this.state.search, onlyMyProjects: !preventState.onlyMyProjects })
                  return {onlyMyProjects: !preventState.onlyMyProjects} });
              }}
            />
            <label htmlFor="onlyMyProjects">Только мои проекты</label>
          </OnlyMyProjects>)
          }
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

        {((!projects || projects.length === 0) && (
          <div>Проектов нет</div>
        ))}

        {this.state.editProjectOpenWindow && isAdmin && (
          <CreateProject id={this.state.currentProjectId} show={this.state.editProjectOpenWindow} onHide={this.toggleOpenWindowEditProject} />
        )}

        {this.state.viewProjectOpenWindow && (
          <ViewProject id={this.state.currentProjectId} show={this.state.viewProjectOpenWindow} onHide={this.toggleOpenWindowViewProject} />
        )}

        <ContextMenu id="projectListMenu">
          <MenuItem onClick={this.menuClick} data={{ type: 'viewProject' }}>Информация о проекте</MenuItem>
          {isAdmin && (<MenuItem onClick={this.menuClick} data={{ type: 'editProject' }}>Редактировать проект</MenuItem>)}
          {isAdmin && (<MenuItem onClick={this.menuClick} data={{ type: 'deleteProject' }}>Удалить проект</MenuItem>)}
        </ContextMenu>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  projects: getProjectList(state),
})

export default connect(mapStateToProps, { fetchGetProjectList, fetchDeleteProject })(ProjectList)

