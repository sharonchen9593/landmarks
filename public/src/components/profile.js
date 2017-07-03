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
      <div className = "profile">
  			<div className = "content1">
          <h1>Passport</h1>
          <div className = "fontawesome"><i className="fa fa-user-circle-o"></i></div>
          <p>Name: {username}</p>
          <p>Location: Earth</p>
        </div>
        <div className = "content2">
          <h1>Saved Destinations </h1>
        </div>
      </div>
		);
	}
}
