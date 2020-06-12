import React, { useEffect } from 'react';
import { Modal, Form, Input, } from 'antd';

export default function Home (props) {
  const { visible, onCancel, onCreate, titleFlag, editData } = props

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
    const [form] = Form.useForm()

    // 表单回填
    useEffect(() => {
      form.setFieldsValue({
        name: editData.name,
        age: editData.age
      })
    })
    
    return (
      <Modal
        visible={visible}
        title={!titleFlag ? '添加' : '修改'}
        okText="保存"
        cancelText="取消"
        onCancel={onCancel}
        getContainer={false}
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
    )
  }

  return (
    <CollectionCreateForm
      visible={visible} 
      onCreate={onCreate}
      onCancel={onCancel}
    />
  )
}
