import axios from 'axios';
import {router as BrowserRouter} from 'react-router-dom';

export function userSignupRequest(userData) {
  console.log(userData)
  return (dispatch) => {
		axios.post('/signup', userData).then(function(response) {
      console.log("success")
    }).catch(function() {
      console.log("failed")
    })
	}
}

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
    })
    .catch(function(error) {
      console.log("failed", error)

      dispatch(setSigninError(error));
    })
  }
}


// reducer


const SIGNIN_SUCCESS="SIGNIN_SUCCESS"
const SIGNIN_ERROR="SIGNIN_ERROR"



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

export default function reducer(state={
  isSigninSuccess: false,
  signinError: null
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

    default:
      return state;
  }
}











