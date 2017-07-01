import axios from 'axios';
import {router as BrowserRouter} from 'react-router-dom';

export function userSignupRequest(userData) {
  console.log(userData)
  return (dispatch) => {
    dispatch(setSignupPending(true));
    dispatch(setSignupSuccess(false));
    dispatch(setSignupError(null));

    axios.post('/signup', userData)
    .then(function(response) {
      console.log("success", response)
      dispatch(setSignupPending(false));
      dispatch(setSignupSuccess(true));
      dispatch({type: SIGNUP_SUCCESS})

      localStorage.setItem('token', response.data.token)
    })
    .catch(function(error) {
      console.log("failed", error)
      dispatch(setSignupPending(false));
      dispatch(setSignupError(error));
    })
  }
}


// reducer

const SIGNUP_PENDING="SIGNUP_PENDING"
const SIGNUP_SUCCESS="SIGNUP_SUCCESS"
const SIGNUP_ERROR="SIGNUP_ERROR"

function setSignupPending(isSignupPending) {
  return {
    type: SIGNUP_PENDING,
    isSignupPending
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
  isSignupPending: false,
  isSignupSuccess: false,
  signupError: null
}, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    return {
      ...state,
      authenticated: true,
      isSignupSuccess: action.isSignupSuccess
    };

    case SIGNUP_PENDING:
    return {
      ...state,
      authenticated: false,
      isSignupPending: action.isSignupPending
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











