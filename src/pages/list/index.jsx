import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller'
import { listWithPage } from '@/action/home'
import './styles.less'

function List (props) {
  const { data, count, listWithPage } =  props

  const [hasMore, setHasMore] = useState(true)
  const [arr, setArr] = useState([])
  // 初始化数据
  useEffect(() => {
    listWithPage({page: 1, limit: 6})
    setArr([...data])
  }, [])

  const loadMoreData = async (page = 1) => {
    // 超过200条数据 不继续监听下拉事件
    if (count && arr.length >= count) return false

    const res = await listWithPage({page, limit: 6})

    if (res.payload.code == 200) setArr([...arr, ...res.payload.result.list])
  }
  
  return (
    <div className='pages-list'>
      <InfiniteScroll
        initialLoad={false} // 不让它进入直接加载
        pageStart={1} // 设置初始化请求的页数
        loadMore={loadMoreData}  // 监听的ajax请求
        hasMore={true} // 是否继续监听滚动事件 true 监听 | false 不再监听
        useWindow={false} // 不监听 window 滚动条
      >
        <div className="pages-hoc">
          {
            arr.map(item => {
              return (
                <div key={item.id}>
                  <p>{item.title}</p>
                  <p>{item.tags}</p>
                </div>
              )
            })
          }
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default connect(({ home }) => {
  return{
    data: home.listData,
    count: home.count
  }
}, {
  listWithPage,
})(List)