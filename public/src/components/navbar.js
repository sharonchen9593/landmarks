import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavLink href="signup">SignUp</NavLink> <NavLink href="#">SignIn</NavLink> <NavLink href="#">Profile</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
        </Nav>
      </div>
    );
  }
}
