const defaultState = {
  data: [],
}
 
export default function home (state = defaultState, action) {
  switch (action.type) {
    case 'HOME_GET_USER':
      return {
        ...state, 
        data: action.payload.users
      }
 
    default:
      return state
  }
}