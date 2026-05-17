export default function EconomicsSlide({ data }) {
  return (
    <>
      <div className="sec-label">IX · Unit Economics</div>
      <h2 className="hl">
        {data.headline.split('(')[0]}
        <span className="muted-c" style={{ fontSize: '.72em', fontWeight: 400 }}>
          (Lagos baseline)
        </span>
      </h2>
      <table className="econ-table">
        <thead>
          <tr>
            <th>Line Item</th>
            <th>Value</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row) => (
            <tr key={row.item} className={row.highlight ? 'hi' : ''}>
              <td>{row.highlight ? <strong>{row.item}</strong> : row.item}</td>
              <td className="v">{row.value}</td>
              <td className="n">{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="econ-foot">{data.footnote}</div>
    </>
  )
}
