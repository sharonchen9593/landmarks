import React from 'react';
import { Switch, Route } from 'react-router-dom'
import SignUp from './signup';
import MainPage from './mainpage';
import Signout from './signout';
import SignIn from './signin';
import Profile from './profile';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MainPage}/>
      <Route path='/signup' component={SignUp}/>
      <Route path='/signout' component={Signout}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/profile' component={Profile}/>


    </Switch>
  </main>
)

export default Main;
