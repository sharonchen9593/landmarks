
import {BrowserRouter, Route} from 'react-router-dom';

import App from './components/app';
import SignIn from './components/signin';
import Register from './components/register';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route path="/" component={App} />
			<Route path="/signin" component={SignIn}/>
			<Route path ="/register" component={register} />
		</div>
	</BrowserRouter>

	, document.querySelector('.container'));

