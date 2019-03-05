import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { apiLogout } from '../../../api/user'
import { Container } from './styled'


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
      // this.setState(prevState => ({
      //   openModalWindow: { ...prevState.openModalWindow, [key]: val, }
      // }))
      console.log(key);
    }
  }
  render() {

    const isAdmin = localStorage.getItem('role') == 'Admin'
    if (isAdmin)
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
