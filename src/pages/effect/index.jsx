import React, { useState, useEffect } from 'react';
import useMouse from '@/pages/effect/mouse'
import { post } from '@/utils/request'
import api from '@/services/api'

export default function Example() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const { x, y } = useMouse()

  useEffect(() => {
    post(api.getuser)
      .then(res => {
        setData(res.users)
      })
  }, [count])

  return (
    <div>
      <p>
        {JSON.stringify(data)}
      </p>
      <p>
        <button onClick={() => setCount(count + 1)}>点击</button>
      </p>
      <p>{count}</p>
      <p>
        {x} - {y}
      </p>
    </div>
  );
}