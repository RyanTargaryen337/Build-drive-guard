const SHORTCUTS = [
  { keys: ['→', '↓', 'Space'], desc: 'Next slide' },
  { keys: ['←', '↑'], desc: 'Previous slide' },
  { keys: ['Home'], desc: 'First slide' },
  { keys: ['End'], desc: 'Last slide' },
  { keys: ['G', 'Tab'], desc: 'Toggle overview' },
  { keys: ['?'], desc: 'Toggle this help' },
  { keys: ['Esc'], desc: 'Close overlay' },
  { keys: ['Cmd+P'], desc: 'Print / export PDF' },
]

export default function HelpOverlay({ onClose }) {
  return (
    <div className="help-overlay" onClick={onClose}>
      <div className="help-panel" onClick={(e) => e.stopPropagation()}>
        <div className="help-header">
          <span className="help-title">Keyboard Shortcuts</span>
          <button className="overview-close" onClick={onClose} aria-label="Close help">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="shortcut-list">
          {SHORTCUTS.map((s) => (
            <div key={s.desc} className="shortcut-row">
              <span className="shortcut-keys">
                {s.keys.map((k) => (
                  <kbd key={k} className="key-chip">{k}</kbd>
                ))}
              </span>
              <span className="shortcut-desc">{s.desc}</span>
            </div>
          ))}
        </div>
        <div className="help-footer">Click anywhere outside to close</div>
      </div>
    </div>
  )
}
