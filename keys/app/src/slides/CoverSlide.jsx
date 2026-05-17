export default function CoverSlide({ data }) {
  return (
    <div className="s-cover">
      <div className="cover-eye">
        Strictly Confidential · For Bolt Review Only · V1.0 · Q2 2026
      </div>
      <h1 className="hero">KEYS</h1>
      <div className="cover-line" />
      <p className="cover-tag">{data.title}</p>
      <p className="cover-sub2">{data.subtitle}</p>
      <div className="cover-author">
        <div className="au-name">Precious-Ryan Ndubuisi</div>
        <div className="au-role">Independent Web3 &amp; Fintech BD Consultant</div>
      </div>
    </div>
  )
}
