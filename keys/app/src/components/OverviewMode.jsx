import { useEffect } from 'react'

export default function OverviewMode({ slides, current, onSelect, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' || e.key === 'g' || e.key === 'G' || e.key === 'Tab') {
        e.preventDefault()
        onClose()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="overview-overlay" onClick={onClose}>
      <div className="overview-inner" onClick={(e) => e.stopPropagation()}>
        <div className="overview-header">
          <span className="overview-title">Overview</span>
          <button className="overview-close" onClick={onClose} aria-label="Close overview">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="overview-grid">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              className={`overview-card${i === current ? ' active' : ''}`}
              onClick={() => { onSelect(i); onClose() }}
            >
              <span className="ov-numeral">{slide.numeral}</span>
              <span className="ov-section">{slide.section}</span>
              <span className="ov-headline">
                {(slide.headline || slide.title || '').split('.')[0]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
