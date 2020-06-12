import React from 'react';
import { Table } from 'antd';

export default  function Tables (props) {
  const { datas, columns } = props

  return (
    <Table columns={columns} dataSource={datas} rowKey="id" />
  )
}
