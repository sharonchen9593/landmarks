//import * as actions from '../actions';
import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router'


export default class SignIn extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			authenticated: false,
			redirect: false
		}
	}
	
	
	handleSubmit(event) {
		event.preventDefault();
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		console.log(this.refs.username.value, this.refs.password.value, __dirname+'signin')
		
		this.setState = this.setState.bind(this)
		
		
		$.ajax({
			url: __dirname+'signin',
			type: 'POST',
			context: this,
			data: JSON.stringify({username:username, password:password}),
			contentType: 'application/json',
			success: function(response) {
				this.setState({authenticated: true, redirect: true})
			},
			error: function() {
				alert('Wrong Username/Password')
			}
		})
		
		
		// this.signIn(username, password, function(response) {
		// 	console.log("this", this)
		// 	console.log(response)
		// 	this.setState({authenticated: true, redirect: true});
		// })

	}
	
	signIn(username, password, callback) {
	}
	
	render() {
		if (this.state.redirect) {
			return <Redirect to= '/account'/>;
		}
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				Username:
				<input type="text" ref="username" />
				Password:
				<input type="text" ref="password" />
				<button type="submit">Sign In</button>
			</form>
		);
	}
}
