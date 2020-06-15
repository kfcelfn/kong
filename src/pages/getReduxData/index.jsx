import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as TYPE from '@/constants/actionTypes'
import { str } from '@/utils/string'      
import homeAction from '@/action/home'

console.log(homeAction)

export default connect(({ home }) => {
  return {
    data: home.data
  }
}, {
  getData: homeAction[str(TYPE.GET_DATA)],
})(Hook)

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

