//import * as actions from '../actions';
import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';
import {userSigninRequest} from '../../actions';


export default class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			authenticated: false,
			redirect: false,
			username: '',
			password: ''
		}
	}

	onChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}

	onSubmit(e) {
		e.preventDefault();
		var username = this.state.username;
		var password = this.state.password;
		console.log(username, password);
		var self = this;
		// this.props.userSigninRequest(this.state);    // for redux thunk
		axios.post('/signin', {username, password})
		.then(function(response) {
			console.log(response)
			self.setState({authenticated: true, redirect: true})
			localStorage.setItem('token', response.token)
		})
		.catch(function(error) {
			alert("Invalid Username/Password")
		})
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
				<button type="submit">Sign In</button>
			</form>
		);
	}
}

// export default connect((state) => {return{}}, {userSigninRequest})(SignIn)   // for redux-thunk
