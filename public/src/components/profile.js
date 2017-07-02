import React from 'react';
import { Redirect } from 'react-router';

const username=localStorage.getItem('username')

export default class Profile extends React.Component {

	render() {
    if (!localStorage.getItem('reload')) {
      localStorage.setItem('reload', true)
      window.location.reload()
    }
		return (
      <div>
			<div>Profile Page</div>
      <div>Hello, {username}</div>
      </div>
		);
	}
}
