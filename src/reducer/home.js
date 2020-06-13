import * as TYPE from '@/constants/actionTypes'

const defaultState = {
  data: [],
  listData: [],
  count: 0
}
 
export default function home (state = defaultState, action) {
  switch (action.type) {
    case TYPE.HOME_GET_USER:
      return {
        ...state, 
        data: action.payload.users
      }
    case TYPE.LIST_LISTWITHPAGE:
      return {
        ...state, 
        listData: action.payload.result.list,
        count: action.payload.result.count
      }
 
    default:
      return state
  }
}