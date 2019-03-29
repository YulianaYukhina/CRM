//@flow

// то что видит админ

import React from 'react'

import NavBar from '../../_common/NavBar'


class AdminCabinet extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
          Страница админа
      </div>
    )
  }
}
export default AdminCabinet
