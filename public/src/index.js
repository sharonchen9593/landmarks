// dont need to import React because already imported in index.html

import Compnent1 from './components/component1';

class App extends React.Component {
	
	render() {
		return (
			<div>
				Hello from index.js
				<Compnent1 />
			</div>
	);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'))

