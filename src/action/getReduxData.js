import { post } from '@/utils/request'
import api from '@/services/api'

export const getData = () => {
  return{
    type: 'GETDATA', 
    payload: post(api.getuser) 
  }
}