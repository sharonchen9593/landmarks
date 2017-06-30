//import * as actions from '../actions';
import React from 'react';

export default class SignIn extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			authenticated: false,
			username: "",
			password: ""
		}
	}
	
	handleSubmit(event) {
		event.preventDefault();
		console.log(this)
	}
	
	render() {
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
