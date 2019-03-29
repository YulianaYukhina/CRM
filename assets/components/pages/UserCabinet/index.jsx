//@flow
// основная страница пользователя
import React from 'react'
import NavBar from '../../_common/NavBar'
import axios from 'axios'


class UserCabinet extends React.Component {
  user = () => {
    axios.get('/testUser');
  }
  admin = () => {
    axios.get('/testAdmin');
  }
  test = () => {
    axios.get('/testTest');
  }
  render() {
    return (
      <div>
        <NavBar/>
          Страница пользователя
          <button onClick={this.user}>user</button>
          <button onClick={this.admin}>admin</button>

          <button onClick={this.test}>test</button>
      </div>
    )
  }
}
export default UserCabinet
