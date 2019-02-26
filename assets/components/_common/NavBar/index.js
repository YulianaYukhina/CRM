import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
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
      this.setState(prevState => ({
        openModalWindow: { ...prevState.openModalWindow, [key]: val, }
      }))
    }
  }
  render() {

    const isAdmin = localStorage.getItem('role') == 'Admin'
    if (isAdmin)
      return (
        <Container>
          {
            <button onClick={() => apiLogout()}>Выход</button>
          // <Navbar fixedTop onSelect={this.click}>
          //   <Nav>
          //     {
          //   //   <NavItem eventKey={'StudentCreate'} >
          //   //     Добавить студента
          //   // </NavItem>
          //   //   {this.state.openModalWindow.StudentCreate && (
          //   //     <CreateStudent show={this.state.openModalWindow.StudentCreate} onHide={() => this.click('StudentCreate')} />
          //   //   )}
          //     }
          //     <NavItem eventKey={'Exit'} style={{ position: 'absolute', right: '10px' }} >
          //       Выход
          //     </NavItem>
          //   </Nav>
          // </Navbar>
          }
        </Container>
      );
    else
      return (
        <Container>
          {
            <button onClick={() => apiLogout()}>Выход</button>
          // <Navbar fixedTop onSelect={this.click}>
          //   <Nav>
          //     <NavItem eventKey={'Exit'} style={{ position: 'absolute', right: '10px' }} >
          //       Выход
          //     </NavItem>
          //   </Nav>
          // </Navbar>
          }
        </Container>
        );
  }
}

export default NavBar