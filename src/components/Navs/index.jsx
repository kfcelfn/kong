import React from 'react';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom'

export default  function Sider (props) {
  const { navList } = props
  const history = useHistory()

  const handleClick = e => {
    history.push(e.key)
  };

  return (
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={[history.location.pathname]}
      mode="inline"
    >
      <h1>{navList.title}</h1>

      {
        navList.data.map(item => {
          return <Menu.Item key={item.path}>{item.title}</Menu.Item>
        })
      }

      <p><a href="#">{navList.purchase}</a></p>
    </Menu>
  )
}