
 
const defaultState = {
  data: [],
}
 
export default function home (state = defaultState, action) {
  switch (action.type) {
    case 'GETDATA':
      return {
        ...state, 
        data: action.payload.users
      }
 
    default:
      return state
  }
}