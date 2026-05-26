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

      {data.status_quo && (
        <div className="status-quo-block">
          <div className="sq-label">{data.status_quo.label}</div>
          <div className="sq-row">
            <span className="sq-text">{data.status_quo.workaround}</span>
            <span className="sq-cost">{data.status_quo.cost_range}</span>
          </div>
          <div className="sq-note">{data.status_quo.note}</div>
        </div>
      )}

      {data.compound_insights && (
        <ul className="compound-insights">
          {data.compound_insights.map((insight, i) => (
            <li key={i}>{insight}</li>
          ))}
        </ul>
      )}

      <div className="insight">{data.insight}</div>
    </>
  )
}
