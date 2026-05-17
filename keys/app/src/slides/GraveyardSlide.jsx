export default function GraveyardSlide({ data }) {
  return (
    <>
      <div className="sec-label">IV · The Graveyard</div>
      <h2 className="hl" style={{ maxWidth: '580px' }}>
        {data.headline}
      </h2>
      <ul className="grave-list">
        {data.failures.map((f) => (
          <li key={f.name} className="grave-item">
            <span className="dagger">†</span>
            <div>
              <div className="grave-name">{f.name}</div>
              <div className="grave-note">{f.note}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="pattern-box">
        <strong>The pattern:</strong> {data.pattern}
      </div>
    </>
  )
}
