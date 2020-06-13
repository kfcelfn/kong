import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Redirect } from 'react-router-dom';
import { Navs } from '@@'
import './styles.less'

const navList = {
  title: 'APPUI Admin',
  purchase: 'Purchase a license',
  data:[
    {
      title: 'APPS',
      key: 'apps',
      path: '/apps',
      flag: 0
    },
    {
      title: 'Home',
      key: 'home',
      path: '/home'
    },
    {
      title: 'List',
      key:'list',
      path: '/list'
    },
    {
      title: 'COMPOENTS',
      key: 'components',
      path: 'components',
      flag: 0
    },
    {
      title: 'Eachart',
      key: 'echart',
      path: '/echart'
    },
    {
      title: 'Forms',
      key:'Error',
      path: '/error'
    },
    {
      title: 'Tables',
      key: 'tables',
      path: '/tables'
    },
    {
      title: 'Pages',
      key:'pages',
      path: '/pages'
    },
    {
      title: 'JS plugins',
      key:'jsplugins',
      path: '/jsplugins'
    },
  ]
}

export default function LRlayout (props) {
  return (
    <div className='layout-LRwrap'>
      <Navs navList={navList} />

      <section className='section'>
        <div className='section-header'>
          header
        </div>

        <div className='main'>
          {renderRoutes(props.route.children)}
          <Redirect to="/home" />
        </div>
      </section>
    </div>
  )
}