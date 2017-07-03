
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../actions'
import App from './components/app';
import {SIGNIN_SUCCESS} from '../actions'

const store = createStore(reducer, {}, applyMiddleware(thunk, logger));

const token=localStorage.getItem('token')
if(token) {
  store.dispatch({type: SIGNIN_SUCCESS})
}

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<App />
			</div>
		</BrowserRouter>
	</Provider>
	, document.querySelector('.container'));
