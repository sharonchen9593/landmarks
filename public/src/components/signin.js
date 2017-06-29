//import * as actions from '../actions';
import React from 'react';
import {reduxForm} from 'redux-form';

class SignIn extends React.Component {

	handleFormSubmit({username, password}) {

		console.log(username, password)
	}

	render() {
		var {handleSubmit, fields: {username, password}} = this.props;
    return (
      <form onSubmit = {handleSubmit(this.handleFormSubmit.bind(this))}>
      	<fieldset>
      		<label>Username</label>
        	<input {...username} />
        </fieldset>
        <fieldset>
      		<label>Password</label>
        	<input {...password} />
        </fieldset>
        <button action="submit">Sign In</button>
      </form>
    );
  }
}

export default reduxForm({
	form: 'signin',
	fields: ['username', 'password']
})(SignIn)