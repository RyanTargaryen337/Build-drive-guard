export default function ProblemSlide({ data }) {
  return (
    <>
      <div className="sec-label">II · The Problem</div>
      <h2 className="hl">{data.headline}</h2>
      <div className="stats-grid">
        {data.regions.map((region) => (
          <div key={region.name} className="stat-block">
            <div className="stat-region">{region.name}</div>
            {region.stats.map((s) => (
              <div key={s.value} className="stat-row">
                <span className="stat-num">{s.value}</span>
                <span className="stat-desc">{s.label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="insight">{data.insight}</div>
    </>
  )
}
