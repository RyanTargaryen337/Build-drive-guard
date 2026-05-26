import { useState, useEffect, useCallback, useRef } from 'react'

export function usePresentation(total) {
  const [current, setCurrent] = useState(0)
  const [overview, setOverview] = useState(false)
  const [help, setHelp] = useState(false)
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

  const closeOverlays = useCallback(() => {
    setOverview(false)
    setHelp(false)
  }, [])

  useEffect(() => {
    function onKey(e) {
      // Escape closes any open overlay
      if (e.key === 'Escape') {
        closeOverlays()
        return
      }
      // ? toggles help
      if (e.key === '?') {
        setHelp((h) => !h)
        setOverview(false)
        return
      }
      // G or Tab toggles overview
      if (e.key === 'g' || e.key === 'G' || e.key === 'Tab') {
        e.preventDefault()
        setOverview((o) => !o)
        setHelp(false)
        return
      }
      // Navigation only when no overlay is open
      if (overview || help) return
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
  }, [move, go, total, overview, help, closeOverlays])

  useEffect(() => {
    let tx = 0
    function onTouchStart(e) { tx = e.touches[0].clientX }
    function onTouchEnd(e) {
      if (overview || help) return
      const dx = e.changedTouches[0].clientX - tx
      if (Math.abs(dx) > 48) move(dx < 0 ? 1 : -1)
    }
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [move, overview, help])

  return { current, go, move, total, overview, setOverview, help, setHelp, closeOverlays }
}
