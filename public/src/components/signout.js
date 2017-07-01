import React from 'react';
import {connect} from 'react-redux';
// import action?

class Signout extends React.Component {
  componentWillMount() {
    this.props.signoutUser();
  }
  render() {
    return <div>You are signed out.</div>
  }
}

export default connect()(Signout)