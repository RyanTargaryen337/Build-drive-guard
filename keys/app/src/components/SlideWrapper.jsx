import { useEffect, useRef, useState } from 'react'

export default function SlideWrapper({ isActive, children }) {
  const [state, setState] = useState(isActive ? 'active' : 'hidden')
  const prev = useRef(isActive)

  useEffect(() => {
    if (isActive === prev.current) return
    prev.current = isActive

    if (isActive) {
      setState('active')
    } else {
      setState('out')
      const t = setTimeout(() => setState('hidden'), 360)
      return () => clearTimeout(t)
    }
  }, [isActive])

  if (state === 'hidden') return null

  return (
    <div className={`slide-wrapper ${state === 'active' ? 'active' : 'out'}`}>
      {children}
    </div>
  )
}
