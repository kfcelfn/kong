import React, { useState } from 'react';
let preCount = ''

export default function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);
  const [arr, setArr] = useState([1,2,3]);
  const [obj, setObj] = useState({name: '铁柱'});
  const [num, setNum] = useState(() => {
    let a = 1
    if (a > 1) {
      a = 2
    } else {
      a = 3
    }
    return a
  })
  // 执行完修改，就会去重新渲染这个组件 并把最新的值返回回来
  const add = () => {
    // setCount(count + 1)
    setAge(age + 1)
    setNum(num + 1)

    // 第一种拿到上一次的值
    setTimeout(() => {
      console.log(count, 'a') //相当于闭包，输出的是上一次的值
    })
    //第二种拿到上一次的值
    setCount(old => {
      console.log(old, 'c')
      return old + 1
    })
    // 第三种拿到上一次的值
    preCount = count   //最外层定义个变量。 然后再里面把count赋值给外面的变量
  }
  console.log(preCount, 'd')
  console.log(count, 'b')

  const edit = () => {
    arr.push(4)
    setArr([...arr])
    setObj({...obj, name: '狗蛋'})
  }
  return (
    <div>
      <p>{count}-{age} - {num}</p>
      <p><button onClick={add}>Click me</button></p>
      <p>{JSON.stringify(arr)}</p>
      <p>{obj.name}</p>
      <p><button onClick={edit}>修改数组和对象</button></p>
    </div>
  );
}