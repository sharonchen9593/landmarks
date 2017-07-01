import axios from 'axios';

export function userSignupRequest(userData) {
  console.log(userData)
  return (dispatch) => {
		return axios.post('/signup', userData).then(function(response) {
      console.log("success")
    }).catch(function() {
      console.log("failed")
    })
	}
}