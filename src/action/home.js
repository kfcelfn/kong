import { createActions } from 'redux-actions'
import * as TYPE from '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'

export default createActions({
  [TYPE.GET_DATA]: option => get(api.getuser) 
})