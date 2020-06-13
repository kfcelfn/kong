import React, { useEffect } from 'react'
import echarts from 'echarts'
import './styles.less'

export default function PubulicChart (props) {
  const { names, option } = props

  const echartFn = (names, option) => {
    var myChart = echarts.init(document.getElementsByClassName(names)[0]);
    var option = option
    window.addEventListener('resize', () => {
      myChart.resize()
    })
    myChart.setOption(option);
  }

  useEffect(() => {
    echartFn(names, option)
  })

  return (
    <div className={names}></div>
  )
}