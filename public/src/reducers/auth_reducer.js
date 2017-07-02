export default function(state={}, action) {
  switch(action.type) {
    case AUTH_USER:
      return {...state, authenticated: true};
    case DEAUTH_USER:
      return {...state, authenticated: false};
  }

  return state;
}

