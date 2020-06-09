import { useState, useEffect } from 'react';

export default function useMouse() {
  const [data, setData] = useState({ x: 1, y: 2 });

  useEffect(() => {
    const _b = document.body
    const fn = event => {
      setData({ ...data, ...{ x: event.clientX, y: event.clientY }})
    }
    _b.addEventListener('mousemove', fn)
    return () => _b.removeEventListener('mousemove', fn)
  })
  return data
}