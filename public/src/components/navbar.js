import React from 'react';
import {Nav,Navbar,NavDropdown, MenuItem, NavItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import {connect} from 'react-redux'


class NavBar extends React.Component {

  renderLinks() {
    if (localStorage.token) {
      return (

        <Nav pullRight>
          <LinkContainer to='/profile'>
            <NavItem eventKey={1} href="#">Profile</NavItem>
          </LinkContainer>
          <LinkContainer to='/signout'>
            <NavItem eventKey={3} href="/signout">Sign Out</NavItem>
          </LinkContainer>
        </Nav>
      )
    } else if (!localStorage.token) {
      return (
        <Nav pullRight>
          <LinkContainer to='/signin'>
            <NavItem eventKey={1} href="/signin">Login</NavItem>
          </LinkContainer>
          <LinkContainer to='/signup'>
            <NavItem eventKey={2} href="/signup">Sign Up</NavItem>
          </LinkContainer>
        </Nav>
      )
    }
  }

  render() {
    return (
      <div>
        <Navbar collapseOnSelect className="navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/" className="brand">LandMarks</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>

            {this.renderLinks()}

          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps)(NavBar);
