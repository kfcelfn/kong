import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { post } from '@/utils/request'
import api from '@/services/api'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function Login() {

  const onFinish = async values => {
    const res = await post(api.loginUser, values)

    if (res.status == 200) {
      message.success('登录成功');
      window.location.href = '/';
    }else{
      message.error('账户或密码错误');
    }
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='page-login'>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={ onFinish }
        onFinishFailed={ onFinishFailed }
      >
        <Form.Item 
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="pwd"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}