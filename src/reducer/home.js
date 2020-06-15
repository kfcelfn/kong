import { handleActions } from 'redux-actions'
import * as TYPE from '@/constants/actionTypes'
 
const defaultState = {
  data: [],
}

export default handleActions({
  [TYPE.GET_DATA]: (state, action) => ({ ...state,  data: action.payload.users }) 
}, defaultState)