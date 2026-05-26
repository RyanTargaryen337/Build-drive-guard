export default function AskSlide({ data }) {
  return (
    <>
      <div className="sec-label">{data.numeral} · {data.section}</div>
      <div className="ask-hl">
        90 days.
        <br />
        One city.
        <br />
        One signed pilot.
      </div>
      <div className="ask-cols">
        {data.columns.map((col, i) => (
          <div key={col.title} className="ask-col">
            <div className="ask-col-title">{col.title}</div>
            <ul className={`ask-items${i === 2 ? ' tl' : ''}`}>
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {i === 2 && (
              <div className="ask-contact">
                Precious-Ryan Ndubuisi · [email] · [phone] · [linkedin]
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
