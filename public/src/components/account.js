import React from 'react';
import { Redirect } from 'react-router';

export default class Account extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
  var self = this;
  setTimeout(() => {
    self.setState({loading: false}); }, 1000);
}

  render() {
    if (this.state.loading) {
      return (
        <div>Sign in success! Redirecting...</div>
        )
    } else {
      return (
        <Redirect to= '/profile'/>
        )
    }
  }
}
