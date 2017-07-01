
import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';
import {userSigninRequest} from '../../actions/signin';


class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			authenticated: false,
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
		this.props.userSigninRequest(this.state);    // for redux thunk
		// axios.post('/signin', {username, password})
		// .then(function(response) {
		// 	console.log(response)
		// 	self.setState({authenticated: true, redirect: true})
		// 	localStorage.setItem('token', response.token)
		// })
		// .catch(function(error) {
		// 	alert("Invalid Username/Password")
		// })
	}

	render() {
		let {isSigninSuccess, signinError} = this.props;

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
				{isSigninSuccess && <Redirect to= '/account'/>}
				{signinError && <div>Invalid Username or Password</div>}
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isSigninSuccess: state.isSigninSuccess,
		signinError: state.signinError
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		userSigninRequest: (username, password) => dispatch(userSigninRequest(username, password))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)   // for redux-thunk







