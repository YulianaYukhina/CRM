//@flow
// основная страница пользователя
import React from 'react'
import NavBar from '../../_common/NavBar'
import ProjectList from '../../_common/projectList'

class UserCabinet extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div style={{ marginTop: "20px" }}>
          <ProjectList />
        </div>
      </div>
    )
  }
}
export default UserCabinet
