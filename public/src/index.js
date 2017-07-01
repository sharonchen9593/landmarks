
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import thunk from 'redux-thunk';

import App from './components/app';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Upload from './components/Upload';
import NavBar from './components/navbar';
import Account from './components/account';

const store = createStore(
	(state={}) => state,
	applyMiddleware(thunk)
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Route path="/" component={NavBar} />
				<Route path="/signin" component={SignIn}/>
				<Route path ="/signup" component={SignUp} />
				<Route path ="/Upload" component={Upload} />
				<Route path ="/account" component={Account} />
			</div>
		</BrowserRouter>
	</Provider>
	, document.querySelector('.container'));
