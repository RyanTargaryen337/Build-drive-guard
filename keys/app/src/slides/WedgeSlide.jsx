export default function WedgeSlide({ data }) {
  return (
    <>
      <div className="sec-label">V · The Wedge</div>
      <h2 className="hl" style={{ marginBottom: '2vh' }}>
        {data.headline}
      </h2>
      <div className="wedge-grid">
        {data.reasons.map((r) => (
          <div key={r.numeral} className="wedge-cell">
            <div className="wedge-num">{r.numeral}</div>
            <div className="wedge-title">{r.title}</div>
            <div className="wedge-body">{r.body}</div>
          </div>
        ))}
      </div>
      <div className="market-strip">
        Africa's ride-hailing market:{' '}
        <strong>USD 2.85B (2024) → USD 4.28B by 2032.</strong>{' '}
        Designated driving is the missing premium category in that growth.
      </div>
    </>
  )
}
