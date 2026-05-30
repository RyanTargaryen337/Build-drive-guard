export default function GTMSlide({ data }) {
  return (
    <>
      <div className="sec-label">{data.numeral} · {data.section}</div>
      <h2 className="hl">{data.headline}</h2>
      <div className="phases">
        {data.phases.map((p) => (
          <div key={p.numeral} className="phase">
            <div className="phase-num">{p.numeral}</div>
            <div className="phase-period">{p.period}</div>
            <div className="phase-title">{p.title}</div>
            <div className="phase-detail">{p.detail}</div>
          </div>
        ))}
      </div>
    </>
  )
}
