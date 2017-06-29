export default class SignIn extends React.Component {
	render() {
		return (
			<form>
				Username:
				<input type="text" name="username" />
				Password:
				<input type="text" name="password" />
				<input type="submit" name="submit" />
			</form>
		);
	}
}
