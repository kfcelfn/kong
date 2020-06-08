import { observable, action } from "mobx";
import { get } from '@/utils/request' 
import api from '@/services/api'

class Store {
  @observable name = '铁柱'
  @observable data = []

  // 请求数据
  @action async fetch () {
    const res = await get(api.getuser)
    
    if(res.status == 200){
      this.data = res.users
    }
  }
  // 修改name值
  @action setName (option) {
    this.name = option
  }
}

const homeStore = new Store()

export default homeStore