import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-default">
+      <div className="container-fluid">
+        <div className="navbar-header">
+          <NavLink href="/" className="navbar-brand">Red Dice</NavLink>
+        </div>
+
+        <div className="collapse navbar-collapse">
+          <ul className="nav navbar-nav navbar-right">
+            <li><NavLink href="/signup">Sign up</NavLink></li>
+          </ul>
+        </div>
+      </div>
+    </nav>
      </div>
    );
  }
}
