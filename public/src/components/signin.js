//import * as actions from '../actions';
import React from 'react';
import {reduxForm} from 'redux-form';

class SignIn extends React.Component {

	signin({email, password}) {

		console.log(email, password)
	}

	render() {
		var {handleSubmit, fields: {username, password}} = this.props
    return (
      <form onSubmit = {handleSubmit(this.signin.bind(this))}>
      	<fieldset>
      		<label>Username</label>
        	<input {...username} />
        </fieldset>
        <fieldset>
      		<label>Password</label>
        	<input {...password} />
        </fieldset>
        <button type="submit">Sign In</button>
      </form>
    );
  }
}

export default reduxForm({
	form: 'signin',
	fields: ['username', 'password']
})(SignIn)