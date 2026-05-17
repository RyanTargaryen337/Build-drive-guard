import { useState, useEffect, useCallback, useRef } from 'react'

export function usePresentation(total) {
  const [current, setCurrent] = useState(0)
  const busy = useRef(false)

  const go = useCallback(
    (n) => {
      if (busy.current) return
      const next = Math.max(0, Math.min(n, total - 1))
      if (next === current) return
      busy.current = true
      setCurrent(next)
      setTimeout(() => { busy.current = false }, 380)
    },
    [current, total],
  )

  const move = useCallback((delta) => go(current + delta), [current, go])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        move(1)
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        move(-1)
      } else if (e.key === 'Home') {
        e.preventDefault()
        go(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        go(total - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [move, go, total])

  useEffect(() => {
    let tx = 0
    function onTouchStart(e) { tx = e.touches[0].clientX }
    function onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - tx
      if (Math.abs(dx) > 48) move(dx < 0 ? 1 : -1)
    }
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [move])

  return { current, go, move, total }
}
