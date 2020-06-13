import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

export default 
@inject('homeStore') 
@observer
class extends Component {
  // 初始化数据
  componentDidMount () {
    this.props.homeStore.fetch()
  }

  // 修改name值
  editName = () => {
    this.props.homeStore.setName('小白')
  }
  render() {
    const { data, name } = this.props.homeStore

    return (
      <div className='page-home'>
        { name }
        <button onClick={this.editName}>修改name值</button>
        <div>
          {JSON.stringify(data)}
        </div>
      </div>
    )
  }
}
