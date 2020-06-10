import React, { useState, useEffect } from 'react';
import { Button, Table, Space, Modal, Form, Input, message } from 'antd';
import { connect } from 'react-redux';
import { getData, insertUser, deleteUser, updateUser } from '@/action/home'

const Home = props => {
  const { datas, getData, insertUser, deleteUser, updateUser } = props

  const [visible, setVisible] = useState(false)
  const [titleFlag, setTitleFlag] = useState(null)

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
  ];
  // 初始化数据
  useEffect(() => {
    getData()
  }, [])
  //添加前
  const insertBefore = () => {
    setVisible(true)
    setTitleFlag(null)
  }
  //编辑前
  const editBefore = text => {
    setVisible(true)
    setTitleFlag(text.id)
    
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
  //保存
  const onCreate = async values => {
    if (!titleFlag) {
      const res = await insertUser(values)
      
      if (res.payload.status == 200) {
        message.success('添加成功');
        getData()
      } else {
        message.error('添加失败');
      }
    } else {
      values.id = titleFlag
      const res = await updateUser(values)

      if (res.payload.status == 200) {
        message.success('修改成功');
        getData()
      } else {
        message.error('修改失败');
      }
    }
    setVisible(false);
  };

  interface Values {
    title: string;
    description: string;
    modifier: string;
  }
  
  interface CollectionCreateFormProps {
    visible: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;
  }
  
  const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    visible,
    onCreate,
    onCancel,
  }) => {
    const [form] = Form.useForm();

    return (
      <Modal
        visible={visible}
        title={!titleFlag ? '添加' : '修改'}
        okText="保存"
        cancelText="取消"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              form.resetFields();
              onCreate(values);
            })
            .catch(info => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{ modifier: 'public' }}
        >
          <Form.Item
            name="name"
            label="名字"
            rules={[{ required: true, message: 'Please input the title of collection!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item 
            name="age" 
            label="年龄"
            rules={[{ required: true, message: 'Please input the title of collection!' }]}
          >
            <Input type="textarea" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };
  
  return (
    <div className='pages-home'>
      <p><Button type="primary" onClick={insertBefore}>添加</Button></p>

      <Table columns={columns} dataSource={datas} rowKey="id"/>

      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => setVisible(false) }
      />
    </div>
  )
}

export default connect(state => {
  return{
    datas: state.home.data
  }
}, {
  getData,
  insertUser,
  deleteUser,
  updateUser,
})(Home)