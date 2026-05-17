function pad(n) {
  return String(n).padStart(2, '0')
}

export default function SlideCounter({ current, total }) {
  return (
    <div className="slide-counter">
      {pad(current + 1)} / {pad(total)}
    </div>
  )
}
