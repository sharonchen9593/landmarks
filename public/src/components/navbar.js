import React from 'react';
import {Nav,Navbar,NavDropdown, MenuItem, NavItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
      <Navbar inverse collapseOnSelect>
   <Navbar.Header>
     <Navbar.Brand>
       <a href="/">Landmarks!</a>
     </Navbar.Brand>
     <Navbar.Toggle />
   </Navbar.Header>
   <Navbar.Collapse>

     <Nav>
     <LinkContainer to='profile'>
       <NavItem eventKey={1} href="#">Profile</NavItem>
       </LinkContainer>
     </Nav>
     <Nav pullRight>
     <LinkContainer to='/signin'>
       <NavItem eventKey={1} href="/signin">Login</NavItem>
    </LinkContainer>
    <LinkContainer to='signup'>
       <NavItem eventKey={2} href="/signup">Sign Up</NavItem>
       </LinkContainer>
     </Nav>
   </Navbar.Collapse>
 </Navbar>
      </div>
    );
  }
}
