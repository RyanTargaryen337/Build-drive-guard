export default function TeamSlide({ data }) {
  const { founder, hires } = data
  return (
    <>
      <div className="sec-label">XI · Who&apos;s Building This</div>
      <h2 className="hl" style={{ marginBottom: '2vh' }}>
        {data.headline}
      </h2>
      <div className="team-layout">
        <div className="founder-block">
          <div>
            <div className="f-name">{founder.name}</div>
            <div className="f-title">{founder.title}</div>
          </div>
          <ul className="f-bio">
            {founder.bio.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
        <div className="hires-row">
          {hires.map((h) => (
            <div key={h.title} className="hire">
              <div className="hire-lbl">Day-one hire</div>
              <div className="hire-title">{h.title}</div>
              <div className="hire-desc">{h.description}</div>
              <span className="hire-badge">To be hired on signing</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
