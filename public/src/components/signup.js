import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {userSignupRequest} from '../../actions';
import { Redirect } from 'react-router';

export default class Signup extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      username: '',
      password: '',
      confirmPassword: '',
      authenticated: false,
      redirect: false
    }
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();
    var username = this.state.username;
    var password = this.state.password;
    var confirmPassword = this.state.confirmPassword;
    var self = this;
    if (password === confirmPassword) {
      // this.props.userSignupRequest({username, password})     // for redux-thunk
  	  axios.post('/signup', {username, password})
  	  .then(function(response) {
  		  console.log(response)
  		  self.setState({authenticated: true, redirect: true})
  		  localStorage.setItem('token', response.token)
  	  })
  	  .catch(function(error) {
  		  alert("Invalid Username/Password")
  	  })
    }
    else {
      alert("Password does not match")
    }

  }

  render() {
    if (this.state.redirect) {
      return <Redirect to= '/account'/>;
    }
    return (
      <form onSubmit = {this.onSubmit.bind(this)}>
        <label>Username:</label>
        <input type="text"
               name="username"
               value={this.state.username}
               onChange = {this.onChange.bind(this)}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange = {this.onChange.bind(this)}
        />
        <label>Confirm Password:</label>
        <input type="password"
               name="confirmPassword"
               value={this.state.confirmPassword}
               onChange = {this.onChange.bind(this)}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Signup.propTypes = {
// 	userSignupRequest: React.PropTypes.func.isRequired
// };

// export default connect(null, {userSignupRequest})(Signup)    // for redux-thunk