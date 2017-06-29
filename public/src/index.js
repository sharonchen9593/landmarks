import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';

import reducers from './reducers';
import App from './components/app';
import SignIn from './components/signin';
import Signup from './components/signup';
import UploadImagesHere from './components/UploadImagesHere'

var createStoreWithMiddelware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddelware(reducers)}>
	  <BrowserRouter>
		  <div>
			  <Route path="/" component={App} />
			  <Route path="/signin" component={SignIn}/>
			  <Route path ="/signup" component={Signup} />
			  <Route path ="/Upload" component={UploadImagesHere} />
		  </div>
	  </BrowserRouter>
  </Provider>
	, document.querySelector('.container'));
