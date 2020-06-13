import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import { connect } from 'react-redux';
import { getData, insertUser, deleteUser, updateUser  } from '@/action/home'
import { Tables, Modals } from '@@'
import './styles.less'

function Home (props) {
  const { datas, getData, insertUser, deleteUser, updateUser } = props
  const [initData, setInitData] = useState([]);
  const [selectionType] = useState('checkbox');
  const [checkedData, setCheckedData] = useState([])
  const [visible, setVisible] = useState(false)
  const [titleFlag, setTitleFlag] = useState(null)
  const [editData, seteditData] = useState({})
  const [arr, seteArr] = useState([])
 
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
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (text,record) => (
        <input 
          defaultValue={text} 
          disabled={record.count == 0 ? false : true} 
          onBlur={event => inputBlur(event,record)}
        />
      )     
    },
    {
      title: 'Action',
      key: 'action',
      render: text => (
        <Space size="middle">
          <Button onClick={() => editBefore(text)} disabled={text.count == 0 ? false : true}>编辑</Button>
          <Button onClick={() => deleteUserFn(text)} disabled={text.count == 0 ? false : true}>删除</Button>
        </Space>
      ),
    }
  ]
  // 初始化数据
  useEffect(() => {
    getData()
    setInitData(datas)
  }, [])
  const editCount = (opt, record) => {
    datas.forEach(v => {
      if (v.id == record.id) v.count = opt
    })
    return setInitData(datas)
  }
  const rowSelections = {
    onChange: (_, selectedRows) => {
      setCheckedData([...selectedRows])
      
      console.log(selectedRows)
      console.log(checkedData)
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', 
      name: record.name,
    }),
    onSelect: (record, selected) => {
      selected ? editCount(1, record) : editCount(0, record)
    },
    onSelectAll: selected => {
      selected ? datas.forEach(v => v.count = 1) : datas.forEach(v => v.count = 0)
      setInitData(datas)
    }
  }
  let rowSelection = {
    type: selectionType,
    ...rowSelections,
  }
  //取消列表选中状态
  const cancalChecked = option => {
    const arr = checkedData.filter(item => item.id != option.id)
    setCheckedData([...arr])
  }
  const inputBlur = async (event,option) => {
    option.name = event.target.value
    const res = await updateUser(option)

    if(res.payload.status == 200) {
      message.success('修改成功');
    }
    getData()
    // console.log(datas)
  }
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
  }

  return (
    <div className='pages-home'>
      <header className='header'>
        <p>
          tags: {
            checkedData.map(item => {
              return <span key={item.id} className='checkedStyle' onClick={() => cancalChecked(item)}>{item.name}</span>
            })
          }
        </p>

        <p>
          <Button type="primary" onClick={insertBefore}>添加</Button>
        </p>  
      </header>

      <section className='section'>
        <Tables 
          datas={datas} 
          columns={columns}
          rowSelections={rowSelection} 
        />

        <Modals 
          visible={visible}  //显示、隐藏
          onCancel={() => {setVisible(false)}}  //取消模态框
          onCreate={onCreate} //保存
          titleFlag={titleFlag} //title标题文字
          editData={editData} //表单回填数据
        />
      </section>
    </div>
  )
}

export default connect(({ home }) => {
  return{
    datas: home.data,
  }
}, {
  getData,
  insertUser,
  deleteUser,
  updateUser,
})(Home)