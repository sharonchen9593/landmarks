import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {userSignupRequest} from '../../actions';
import { Redirect } from 'react-router';

class Signup extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      username: '',
      password: '',
      confirmPassword: '',
      authenticated: false,
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
      this.props.userSignupRequest({username, password})     // for redux-thunk
  	  // axios.post('/signup', {username, password})
  	  // .then(function(response) {
  		 //  console.log(response)
  		 //  self.setState({authenticated: true, redirect: true})
  		 //  localStorage.setItem('token', response.token)
  	  // })
  	  // .catch(function(error) {
  		 //  alert("Invalid Username/Password")
  	  // })
    }
    else {
      alert("Password does not match")
    }

  }

  render() {
    let {isSignupSuccess, signupError} = this.props;

    return (
      <form onSubmit = {this.onSubmit.bind(this)} className = "signinform">
        <h1>Sign Up</h1>
        <br />
        <label>Username:</label>
        <br />
        <input type="text"
               name="username"
               value={this.state.username}
               onChange = {this.onChange.bind(this)}
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange = {this.onChange.bind(this)}
        />
        <br />
        <label>Confirm Password:</label>
        <br />
        <input type="password"
               name="confirmPassword"
               value={this.state.confirmPassword}
               onChange = {this.onChange.bind(this)}
        />
        <br />
        <button type="submit">Submit</button>

        {isSignupSuccess && <Redirect to= '/profile'/>}
        {signupError && <div>Invalid Username or Password</div>}
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignupSuccess: state.isSignupSuccess,
    signupError: state.signupError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userSignupRequest: (username, password) => dispatch(userSignupRequest(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)     // for redux-thunk









