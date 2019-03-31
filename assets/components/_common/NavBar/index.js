import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { apiLogout } from '../../../api/user'
import { Container } from './styled'

import CreateManager from '../dialogs/CreateManager'
import CreateProject from '../dialogs/CreateProject'
import CreateOrganization from '../dialogs/CreateOrganization'


class NavBar extends React.Component {

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

    const isAdmin = localStorage.getItem('role') == 'admin'
    if (isAdmin)
      return (
        <Container>
          <Navbar bg="light" expand="lg" onSelect={this.click}>
            <Nav className="mr-auto">
            <Nav.Link eventKey='CreateOrganization'>Добавить организацию</Nav.Link>
              {this.state.openModalWindow.CreateOrganization && (
                <CreateOrganization show={this.state.openModalWindow.CreateOrganization} onHide={() => this.click('CreateOrganization')} />
              )}
              <Nav.Link eventKey='CreateManager'>Добавить менеджера</Nav.Link>
              {this.state.openModalWindow.CreateManager && (
                <CreateManager show={this.state.openModalWindow.CreateManager} onHide={() => this.click('CreateManager')} />
              )}
              <Nav.Link eventKey='CreateProject'>Добавить проект</Nav.Link>
              {this.state.openModalWindow.CreateProject && (
                <CreateProject show={this.state.openModalWindow.CreateProject} onHide={() => this.click('CreateProject')} />
              )}
              <Nav.Link eventKey={'Exit'} style={{ position: 'absolute', right: '20px' }}>Exit</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      );
    else
      return (
        <Container>
          <Navbar bg="light" expand="lg" onSelect={this.click}>
            <Nav className="mr-auto">
              <Nav.Link eventKey='Home'>Home</Nav.Link>
              <Nav.Link eventKey={'Exit'} style={{ position: 'absolute', right: '20px' }}>Exit</Nav.Link>
              <NavDropdown title="Dropdown">
                <NavDropdown.Item eventKey="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="#action/3.2">Another action</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar>
        </Container>
      );
  }
}

export default NavBar
