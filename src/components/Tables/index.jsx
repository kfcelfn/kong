import React, { useState } from 'react';
import { Table } from 'antd';

export default  function Tables (props) {
  const { datas, columns, rowSelections } = props
  
  return (
    <Table
      rowSelection={rowSelections} 
      columns={columns} 
      dataSource={datas} 
      rowKey="id"
    />
  )
}
