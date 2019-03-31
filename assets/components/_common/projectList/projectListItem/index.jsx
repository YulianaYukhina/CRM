import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Container, Addres, Name, Organization, Manager } from './styled'

class ProjectListItem extends React.Component {
  render() {
    var { projectId, organization, projectName, manager, addres } = this.props;
    return (
      <Container>
        <div>
          <Organization>{organization}</Organization>
          <Name>{projectName}</Name>
        </div>
        <Manager>{manager}</Manager>
        <Addres>{addres}</Addres>
      </Container>
    )
  }
}

ProjectListItem.Props = {
  projectId: PropTypes.string,
  organization: PropTypes.string,
  projectName: PropTypes.string,
  manager: PropTypes.string,
  addres: PropTypes.string,
}
export default ProjectListItem
