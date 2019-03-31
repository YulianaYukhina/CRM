import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchGetProjectList } from '../../../redux/modules/project'
import { getProjectList } from '../../../selectors/project'

import ProjectListItem from './projectListItem'
import { Container } from './styled'

class ProjectList extends React.Component {

  componentDidMount() {
    this.props.fetchGetProjectList();
  }
  render() {
    var { projects } = this.props;
    return (
      <Container>
        {(projects && projects.map(ob => {
          return (<ProjectListItem
            projectId = {ob.id}
            organization={ob.organization}
            projectName={ob.projectName}
            manager = {ob.manager ? (ob.manager.surname + ' ' + ob.manager.name + ' ' + ob.manager.patronymic) : ''}
            addres ={ob.addres}
            />)
        }))}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  projects: getProjectList(state),
})

export default connect(mapStateToProps, { fetchGetProjectList })(ProjectList)

