export default function ModelSlide({ data }) {
  const { model } = data
  return (
    <>
      <div className="sec-label">{data.numeral} · {data.section}</div>
      <h2 className="hl">{data.headline}</h2>
      <div className="model-grid">
        <div>
          <span className="daijia-ch">{model.chinese}</span>
          <p className="sub" style={{ marginBottom: '2vh' }}>
            <strong style={{ color: 'var(--text)' }}>
              {model.name} — {model.tagline}
            </strong>{' '}
            {model.how_it_works}
          </p>
          <div className="why-box">
            <div className="why-lbl">Why it works</div>
            <div className="why-txt">{model.why_it_works}</div>
          </div>
        </div>
        <div>
          {model.stats.map((s) => (
            <div key={s.label} className="mstat">
              <span className="mstat-lbl">{s.label}</span>
              <span
                className="mstat-val"
                style={
                  s.label === 'Cities' || s.label === 'Global CAGR'
                    ? { color: 'var(--gold)' }
                    : {}
                }
              >
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
