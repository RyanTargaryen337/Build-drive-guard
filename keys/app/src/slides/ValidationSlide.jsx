export default function ValidationSlide({ data }) {
  return (
    <>
      <div className="sec-label">{data.numeral} · {data.section}</div>
      <h2 className="hl">{data.headline}</h2>

      <div className="val-grid">
        <div className="val-archetype">
          <div className="val-arch-label">{data.archetype.label}</div>
          <div className="val-arch-profile">{data.archetype.profile}</div>
          <p className="val-arch-desc">{data.archetype.description}</p>
          <div className="val-arch-why">{data.archetype.why}</div>
        </div>

        <div className="val-observations">
          {data.observations.map((obs) => (
            <div key={obs.label} className="val-obs-item">
              <div className="val-obs-label">{obs.label}</div>
              <div className="val-obs-body">{obs.body}</div>
            </div>
          ))}
        </div>
      </div>

      {data.customer_voice && (
        <div className="val-customer-voice">
          <div className="val-cv-quote">"{data.customer_voice.quote}"</div>
          <div className="val-cv-meta">
            <span className="val-cv-name">{data.customer_voice.name}</span>
            <span className="val-cv-profile">{data.customer_voice.profile}</span>
          </div>
          <div className="val-cv-why">{data.customer_voice.why_it_matters}</div>
        </div>
      )}

      {data.placeholder_note && (
        <div className="val-placeholder">{data.placeholder_note}</div>
      )}
    </>
  )
}
