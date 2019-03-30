//@flow
import React from 'react'

import NavBar from '../../_common/NavBar'
import ProjectListItem from '../../_common/projectListItem'


class AdminCabinet extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div style={{marginTop: "20px"}}>
        <ProjectListItem />
        <ProjectListItem />
        <ProjectListItem />
        <ProjectListItem />
        <ProjectListItem />
        <ProjectListItem />
        </div>
      </div>
    )
  }
}
export default AdminCabinet
