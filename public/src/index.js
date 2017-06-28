
import {BrowserRouter, Route} from 'react-router-dom';

import App from './components/app';
import SignIn from './components/signin';
import Register from './components/register';
import Upload from './components/UploadImagesHere'

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route path="/" component={App} />
			<Route path="/signin" component={SignIn}/>
			<Route path ="/signup" component={register} />
			<Route path ="/Upload" component={UploadImagesHere} />
		</div>
	</BrowserRouter>

	, document.querySelector('.container'));

