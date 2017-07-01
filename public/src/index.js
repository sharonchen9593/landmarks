
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../actions'

import App from './components/app';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Upload from './components/Upload';
import NavBar from './components/navbar';
import Account from './components/account';
import Signout from './components/signout';

const store = createStore(reducer, {}, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Route path="/" component={NavBar} />
				<Route path="/signin" component={SignIn}/>
				<Route path ="/signup" component={SignUp} />
				<Route path ="/Upload" component={Upload} />
				<Route path ="/account" component={Account} />
				<Route path ="/signout" component={Signout} />
			</div>
		</BrowserRouter>
	</Provider>
	, document.querySelector('.container'));
