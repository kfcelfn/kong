import React, { useState , useEffect } from 'react'
import { Mouse } from '@@'

export default function Hook (props) {
  const [count, setCount] = useState(0)
  const { x, y } = Mouse()
  console.log(1)

  useEffect(() => {
    setCount(1)
    console.log(3, '---------------')
    setTimeout(() => {
      console.log(count, '上一次的值')
    }, 0);
  }, [])

  console.log(2)

  return (
    <div>
      {count}
      <p>
        {x} - {y}
      </p>
    </div>
  )
}
// 1 2 3   1 2 0
/**
 * 1、 先执行hook函数， 把count数组解构出来   输出 1   再走2   直接渲染  再进行 副作用useEffect  调用setCount  输出3 ， 再重新渲染hook函数
 * 
 * 
 * 
 * 
 * 
 * 
*/