import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import { connect } from 'react-redux';
import { getData, insertUser, deleteUser, updateUser } from '@/action/home'
import { Navs, Tables, Modals } from '@@'
import './styles.less'

// 侧边导航栏数据
const navList = [
  {
    title: 'Form',
    key: 'form',
    path: '/form'
  },
  {
    title: 'List',
    key:'list',
    path: '/list'
  },
]

function Home (props) {
  const { datas, getData, insertUser, deleteUser, updateUser } = props

  const [visible, setVisible] = useState(false)
  const [titleFlag, setTitleFlag] = useState(null)
  const [editData, seteditData] = useState({})

  const columns = [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '名字',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Action',
      key: 'action',
      render: text => (
        <Space size="middle">
          <a onClick={() => editBefore(text)}>编辑</a>
          <a onClick={() => deleteUserFn(text)}>删除</a>
        </Space>
      ),
    },
  ] 

  // 初始化数据
  useEffect(() => {
    getData()
  }, [])
  //添加前
  const insertBefore = () => {
    setVisible(true)
    setTitleFlag(null)
    seteditData({})
  }
  //编辑前
  const editBefore = text => {
    setVisible(true)
    setTitleFlag(text.id)
    seteditData({...text})
  }
  //删除
  const deleteUserFn = async text => {
    const res = await deleteUser({id: text.id})

    if (res.payload.status == 200) {
      message.success('删除成功');
      getData()
    } else {
      message.error('删除失败');
    }
  }
  // 保存
  const onCreate = async values => {
    if (!titleFlag) {
      const res = await insertUser(values)
      
      if (res.payload.status == 200) {
        message.success('添加成功');
      }
    } else {
      values.id = titleFlag
      const res = await updateUser(values)

      if (res.payload.status == 200) {
        message.success('修改成功');
      }
    }
    getData()
    setVisible(false);
  };

  return (
    <div className='pages-home'>
      <Navs navList={navList} />

      <div className='main'>
        <p><Button type="primary" onClick={insertBefore}>添加</Button></p>

        <Tables datas={datas} columns={columns} />

        <Modals 
          visible={visible}  //显示、隐藏
          onCancel={() => {setVisible(false)}}  //取消模态框
          onCreate={onCreate} //保存
          titleFlag={titleFlag} //title标题文字
          editData={editData}
        />
      </div>
    </div>
  )
}

export default connect(({ home }) => {
  return{
    datas: home.data
  }
}, {
  getData,
  insertUser,
  deleteUser,
  updateUser,
})(Home)