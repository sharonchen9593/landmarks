import React from 'react';

export default class Signup extends React.Component {
  render() {
    return (
      <form>
        Username:
        <input type="text" name="username" />
        Password:
        <input type="text" name="password" />
        Confirm Password:
        <input type="text" name="password" />
        <input type="submit" name="submit" />
      </form>
    );
  }
}
