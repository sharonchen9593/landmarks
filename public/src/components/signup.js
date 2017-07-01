import React from 'react';

export default class Signup extends React.Component {
  constructor(props) {
    super(props)
    
    this.state={
      username: '',
      password: '',
      confirmPassword: ''
    }
  }
  
  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  }
  
  render() {
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
