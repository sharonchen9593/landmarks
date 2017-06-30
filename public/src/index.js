
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';

import {BrowserRouter, Route} from 'react-router-dom';
import App from './components/app';
import SignIn from './components/signin';

import SignUp from './components/signup';
import Upload from './components/Upload';
import NavBar from './components/navbar';


ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route path="/" component={NavBar} />
			<Route path="/signin" component={SignIn}/>
			<Route path ="/signup" component={SignUp} />
			<Route path ="/Upload" component={Upload} />
		</div>
	</BrowserRouter>
	, document.querySelector('.container'));
