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
    axios.post('/signin', userData)
    .then(function(response) {
      console.log("success")

    })
    .catch(function(error) {
      console.log("failed", error)
    })
  }
}