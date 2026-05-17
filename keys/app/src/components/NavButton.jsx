export default function NavButton({ direction, onClick }) {
  const isPrev = direction === 'prev'
  return (
    <button
      className={`nav-btn ${direction}`}
      onClick={onClick}
      aria-label={isPrev ? 'Previous slide' : 'Next slide'}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isPrev ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  )
}
