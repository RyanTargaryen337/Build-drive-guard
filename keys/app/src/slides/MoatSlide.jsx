export default function MoatSlide({ data }) {
  return (
    <>
      <div className="sec-label">VII · The Moat</div>
      <h2 className="hl">{data.headline}</h2>
      <p className="sub" style={{ marginBottom: '3vh' }}>
        {data.intro}
      </p>
      <div className="moat-grid">
        <div className="moat-col">
          <div className="moat-col-lbl">The Problem</div>
          <ul className="moat-list">
            {data.problem_items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="moat-col">
          <div className="moat-col-lbl">Our Wedge</div>
          <ul className="moat-list ok">
            {data.wedge_items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="moat-cta">{data.moat_statement}</div>
    </>
  )
}
