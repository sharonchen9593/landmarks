
import {BrowserRouter, Route} from 'react-router-dom';

import App from './components/app';
import SignIn from './components/signin';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route path="/" component={App}>
			</Route>
			<Route path="/signin" component={SignIn}>
			</Route>
		</div>
	</BrowserRouter>
	
	, document.querySelector('.container'));

