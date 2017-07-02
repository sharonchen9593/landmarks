import React from 'react';
import Dropzone from 'react-dropzone';
import Basic from './basic';

export default class MainPage extends React.Component {
	render() {
		return (

  <form method='post' action='/upload' encType='multipart/form-data'>
  <input type='file' name='image'/>
  <input type='submit' /></form>

		);
	}
}
