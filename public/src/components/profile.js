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
  			<header>Profile Page</header>
        <div className = "content">
          <p>Hello, {username}</p>
          <p>Saved Landmarks: </p>
        </div>
      </div>
		);
	}
}
