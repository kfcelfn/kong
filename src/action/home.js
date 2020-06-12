import * as TYPE from '@/constants/actionTypes'
import { post } from '@/utils/request'
import api from '@/services/api'
// 登录
export const getData = () => {
  return{
    type: TYPE.HOME_GET_USER, 
    payload: post(api.getUser) 
  }
}
//添加
export const insertUser = option => {
  return{
    type: TYPE.HOME_INSERT_USER, 
    payload: post(api.addUser, option) 
  }
}
//修改
export const updateUser = option => {
  return{
    type: TYPE.HOME_UPDATE_USER, 
    payload: post(api.updateUser, option) 
  }
}
//删除
export const deleteUser = option => {
  return{
    type: TYPE.HOME_DELETE_USER, 
    payload: post(api.deleteUser, option) 
  }
}