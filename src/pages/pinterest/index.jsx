import React, { Component } from 'react'
import Masonry from 'masonry-layout'  //实现瀑布流
import imagesloaded  from 'imagesloaded' //监听图片加载
import InfiniteScroll from 'react-infinite-scroller' //下拉加载
import axios from 'axios'
import './styles.less'

const arr = [
  'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3008142408,2229729459&fm=26&gp=0.jpg',
  'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
  'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2458227883,4095122505&fm=26&gp=0.jpg',
  'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1761250919,1896060533&fm=26&gp=0.jpg',
  'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2852083094,372235004&fm=26&gp=0.jpg',
  'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2944705163,3932100810&fm=26&gp=0.jpg',
  'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3104686528,572431609&fm=26&gp=0.jpg',
]

export default class Pinterest extends Component {
  state = {
    data: arr,
    hasMore: true, // 是否开启下拉加载
  }
  
  componentDidMount () {
    // this.loadMoreData()
    this.imagesOnload()
  }
  //图片懒加载
  imagesOnload = () => {
    const elLoad = imagesloaded('.pages_hoc')  //获取下拉加载里面的第一个盒子
    //always 图片已全部加载，或被确认加载失败
    elLoad.on('always', () => {
      // 调用瀑布流
      this.advanceWidth()
    })
  }

  //瀑布流
  advanceWidth = () => {
    var elem = document.querySelector('.pages_hoc');

    new Masonry( elem, {
      itemSelector: '.imgBox', //要布局的网格元素
      columnWidth: '.imgBox', //自适应
      fitWidth: true, // 设置网格容器宽度等于网格宽度
      gutter: 20,
    });
  }

  // 下拉加载
  loadMoreData = page => {
    const { data } = this.state
    if( page + 1 > 3 ) return false //这个3是我模拟的总条数 到了最后一页就停止请求数据
    axios.post('https://blogs.zdldove.top/Home/Apis/listWithPage')
      .then(res => {
        this.setState({
          data: [...data, ...arr] //拼接每次加载的数据 arr是我自定义的数据
        }, () => {
          this.imagesOnload() // 每次获取完数据 触发
        })
      })
  }

  render() {
    const { data, hasMore } = this.state
    //监听window滚动，useWindow={true} ，并且把pages_pinterest样式去掉。
    return (
      <div className='pages_pinterest'>
        {/* 下拉加载 */}
        <InfiniteScroll
          initialLoad={false} // 不让它进入直接加载
          // pageStart={1} // 设置初始化请求的页数
          loadMore={this.loadMoreData}  // 监听的ajax请求
          hasMore={hasMore} // 是否继续监听滚动事件 true 监听 | false 不再监听
          useWindow={true} // 监听 window 滚动条
        >
          <div className="pages_hoc">
            {
              data.map((item, index) => {
                return (
                  <div key={index} className='imgBox'>
                    <img src={item} />
                  </div>
                )
              })
            }
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}
