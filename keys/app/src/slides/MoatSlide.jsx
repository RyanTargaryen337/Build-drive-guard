export default function MoatSlide({ data }) {
  return (
    <>
      <div className="sec-label">{data.numeral} · {data.section}</div>
      <h2 className="hl">{data.headline}</h2>
      <p className="sub" style={{ marginBottom: '2.5vh' }}>{data.intro}</p>

      <div className="moat3-grid">
        {data.moat_layers.map((layer) => (
          <div key={layer.numeral} className="moat3-card">
            <div className="moat3-num">{layer.numeral}</div>
            <div className="moat3-title">{layer.title}</div>
            <div className="moat3-body">{layer.body}</div>
            <div className="moat3-cannot">
              <span className="moat3-cannot-label">Bolt cannot: </span>
              {layer.bolt_cannot}
            </div>
          </div>
        ))}
      </div>

      <div className="moat-flywheel">{data.flywheel}</div>
      <div className="moat-cta">{data.moat_statement}</div>
    </>
  )
}
