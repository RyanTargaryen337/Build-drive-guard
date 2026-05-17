export default function ProductSlide({ data }) {
  return (
    <>
      <div className="sec-label">VI · The Product</div>
      <h2 className="hl" style={{ marginBottom: '2vh' }}>
        {data.headline}
      </h2>
      <div className="steps-row">
        {data.steps.map((s) => (
          <div key={s.n} className="step">
            <div className="step-n">{s.n}</div>
            <div className="step-title">{s.title}</div>
            <div className="step-body">{s.body}</div>
          </div>
        ))}
      </div>
      <div className="layers-lbl">
        What Keys Owns — And Bolt Doesn&apos;t Have to Build
      </div>
      <div className="layers-row">
        {data.layers.map((l) => (
          <div key={l.name} className="layer">
            <div className="layer-lbl">{l.name}</div>
            <div className="layer-body">{l.body}</div>
          </div>
        ))}
      </div>
    </>
  )
}
