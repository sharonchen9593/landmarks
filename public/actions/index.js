import axios from 'axios';
import {router as BrowserRouter} from 'react-router-dom';

export function userSigninRequest(userData) {
  console.log(userData)
  return (dispatch) => {

    dispatch(setSigninSuccess(false));
    dispatch(setSigninError(null));

    axios.post('/signin', userData)
    .then(function(response) {
      console.log("success", response)

      dispatch(setSigninSuccess(true));
      dispatch({type: SIGNIN_SUCCESS})

      localStorage.setItem('token', response.data.token)
      localStorage.setItem('username', userData.username)
    })
    .catch(function(error) {
      console.log("failed", error)

      dispatch(setSigninError(error));
    })
  }
}

export function userSignoutRequest() {
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  localStorage.removeItem('reload')
  return {type: SIGNOUT}
}

export function userSignupRequest(userData) {
  console.log(userData)
  return (dispatch) => {
    dispatch(setSignupSuccess(false));
    dispatch(setSignupError(null));

    axios.post('/signup', userData)
    .then(function(response) {
      console.log("success", response)
      dispatch(setSignupSuccess(true));
      dispatch({type: SIGNUP_SUCCESS})

      localStorage.setItem('token', response.data.token)
      localStorage.setItem('username', userData.username)
    })
    .catch(function(error) {
      console.log("failed", error)
      dispatch(setSignupError(error));
    })
  }
}


// reducer


export const SIGNIN_SUCCESS="SIGNIN_SUCCESS";
const SIGNIN_ERROR="SIGNIN_ERROR";
const SIGNOUT = "SIGNOUT";
const SIGNUP_SUCCESS="SIGNUP_SUCCESS";
const SIGNUP_ERROR="SIGNUP_ERROR";



function setSigninSuccess(isSigninSuccess) {
  return {
    type: SIGNIN_SUCCESS,
    isSigninSuccess
  }
}

function setSigninError(signinError) {
  return {
    type: SIGNIN_ERROR,
    signinError
  }
}

function setSignupSuccess(isSignupSuccess) {
  return {
    type: SIGNUP_SUCCESS,
    isSignupSuccess
  }
}

function setSignupError(signupError) {
  return {
    type: SIGNUP_ERROR,
    signupError
  }
}


export default function reducer(state={
  isSigninSuccess: false,
  signinError: null,
  isSignupSuccess: false,
  signupError: null
}, action) {
  switch (action.type) {
    case SIGNIN_SUCCESS:
    return {
      ...state,
      authenticated: true,
      isSigninSuccess: action.isSigninSuccess
    };


    case SIGNIN_ERROR:
    return {
      ...state,
      authenticated: false,
      signinError: action.signinError
    };

    case SIGNOUT:
    return {
      ...state,
      authenticated: false
    }

    case SIGNUP_SUCCESS:
    return {
      ...state,
      authenticated: true,
      isSignupSuccess: action.isSignupSuccess
    };

    case SIGNUP_ERROR:
    return {
      ...state,
      authenticated: false,
      signupError: action.signupError
    };

    default:
      return state;
  }
}











