import React from 'react';
import { Menu } from 'antd';

export default  function Sider (props) {
  const { navList } = props

  const handleClick = e => {
    // console.log('click ', e);
  };

  return (
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['form']}
      mode="inline"
    >
      {
        navList.map(item => {
          return <Menu.Item key={item.key}>{item.title}</Menu.Item>
        })
      }
    </Menu>
  )
}
