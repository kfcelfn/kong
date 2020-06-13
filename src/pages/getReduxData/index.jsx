import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '@/action/getReduxData'

function Hook(props) {
  const { getData, data } = props

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default connect(state => {
  return{
    data: state.getReduxData.data
  }
}, {
  getData
})(Hook)