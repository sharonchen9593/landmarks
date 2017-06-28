
import {BrowserRouter, Route} from 'react-router-dom';

import App from './components/app';
import SignIn from './components/signin';
import Signup from './components/signup';
import Upload from './components/UploadImagesHere'

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route path="/" component={App} />
			<Route path="/signin" component={SignIn}/>
			<Route path ="/signup" component={Signup} />
			<Route path ="/Upload" component={UploadImagesHere} />
		</div>
	</BrowserRouter>

	, document.querySelector('.container'));
