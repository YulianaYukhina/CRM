//@flow

// то что видит админ

import React from 'react'

import { Navbar, Nav } from 'react-bootstrap'
import { apiLogout } from '../../../api/user'

import CreateManager from '../../_common/dialogs/CreateManager'


class MainAdminCabinet extends React.Component {

  state = {
    openModalWindow: [],
  }

  click = (key) => { // work
    var val = !this.state.openModalWindow[key];
    if (key == 'Exit') {
      apiLogout();
    }
    else {
      this.setState(prevState => ({
        openModalWindow: { ...prevState.openModalWindow, [key]: val, }
      }))
      console.log(key);
    }
  }
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" onSelect={this.click}>
          <Nav className="mr-auto">
            <Nav.Link eventKey='CreateManager'>Добавить менеджера</Nav.Link>
            {this.state.openModalWindow.CreateManager && (
              <CreateManager show={this.state.openModalWindow.CreateManager} onHide={() => this.click('CreateManager')} />
            )}
            <Nav.Link eventKey={'Exit'} style={{ position: 'absolute', right: '20px' }}>Exit</Nav.Link>
          </Nav>
        </Navbar>
        <div style={{ marginTop: "20px" }}>
        </div>
      </div>
    )
  }
}
export default MainAdminCabinet
