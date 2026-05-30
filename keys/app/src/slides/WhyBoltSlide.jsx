export default function WhyBoltSlide({ data }) {
  return (
    <>
      <div className="sec-label">{data.numeral} · {data.section}</div>
      <h2 className="hl" style={{ marginBottom: '2vh' }}>
        {data.headline}
      </h2>
      <div className="bolt-stats">
        {data.bolt_stats.map((s) => (
          <div key={s.value} className="bolt-stat">
            <div className="bolt-val">{s.value}</div>
            <div className="bolt-lbl">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="fit-grid">
        {data.strategic_fit.map((f) => (
          <div key={f.title} className="fit-cell">
            <div className="fit-title">→ {f.title}</div>
            <div className="fit-body">{f.body}</div>
          </div>
        ))}
      </div>

      {data.inversion_block && (
        <div className="inversion-block">
          <div className="inversion-label">{data.inversion_block.label}</div>
          <div className="inversion-items">
            {data.inversion_block.reasons.map((r, i) => (
              <div key={i} className="inversion-item">{r}</div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
