import React, { Component } from 'react';
import { Switch, Route, NavLink } from "react-router-dom";
import { BasicHome } from '@/router/assembly';
import './styles.less'

const BasicDetail = () => <div>详情</div>
const BasicShopping = () => <div>购物车</div>
const BasicNoLogin = () => <div>未登录</div>

export default class Basic extends Component {
  render() {
    return (
      <div className='layout_basic'>
        <Switch>
          <Route path='/detail' component={ BasicDetail } />
          <Route path='/nologin' component={ BasicNoLogin } />
          <Route path='/shop' component={ BasicShopping } />
          <Route path='/' component={ BasicHome } />
        </Switch>

        <ul className='footerNav'>
          <li><NavLink to='/' exact>首页</NavLink></li>
          <li><NavLink to='/detail' exact>分类</NavLink></li>
          <li><NavLink to='/shop' exact>购物车</NavLink></li>
          <li><NavLink to='/nologin' exact>未登录</NavLink></li>
        </ul>
      </div>
    )
  }
}
