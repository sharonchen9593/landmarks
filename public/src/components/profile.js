import React from 'react';
import { Redirect } from 'react-router';

const username=localStorage.getItem('username')

export default class Profile extends React.Component {

  componentDidMount() {
    //axios request to get user data
  }


	render() {
		return (
      <div>
			<div>Profile Page</div>
      <div>Hello, {username}</div>
      </div>
		);
	}
}
