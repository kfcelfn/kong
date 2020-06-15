import { useState , useEffect } from 'react'

export default function useMouse () {
  const [site, setSite] = useState({ x: 0, y: 0})

  useEffect(() => {
    const fn = e => {
      setSite({x: e.clientX, y: e.clientY})
    }

    document.addEventListener('mouseover', fn)

    return () => {
      document.removeEventListener('mouseover', fn);
    }
  }, [])

  return site
}