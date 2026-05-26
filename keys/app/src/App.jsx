import { useEffect, useState } from 'react'
import { usePresentation } from './hooks/usePresentation'
import { slides } from './data/pitch'
import ProgressBar from './components/ProgressBar'
import SlideCounter from './components/SlideCounter'
import NavButton from './components/NavButton'
import SlideWrapper from './components/SlideWrapper'
import OverviewMode from './components/OverviewMode'
import HelpOverlay from './components/HelpOverlay'

import CoverSlide from './slides/CoverSlide'
import ProblemSlide from './slides/ProblemSlide'
import ValidationSlide from './slides/ValidationSlide'
import ModelSlide from './slides/ModelSlide'
import GraveyardSlide from './slides/GraveyardSlide'
import WedgeSlide from './slides/WedgeSlide'
import ProductSlide from './slides/ProductSlide'
import MoatSlide from './slides/MoatSlide'
import WhyBoltSlide from './slides/WhyBoltSlide'
import EconomicsSlide from './slides/EconomicsSlide'
import GTMSlide from './slides/GTMSlide'
import TeamSlide from './slides/TeamSlide'
import AskSlide from './slides/AskSlide'

const SLIDE_COMPONENTS = [
  CoverSlide, ProblemSlide, ValidationSlide, ModelSlide, GraveyardSlide,
  WedgeSlide, ProductSlide, MoatSlide, WhyBoltSlide,
  EconomicsSlide, GTMSlide, TeamSlide, AskSlide,
]

export default function App() {
  const { current, go, move, total, overview, setOverview, help, setHelp, closeOverlays } =
    usePresentation(slides.length)
  const [printing, setPrinting] = useState(false)

  useEffect(() => {
    const before = () => setPrinting(true)
    const after = () => setPrinting(false)
    window.addEventListener('beforeprint', before)
    window.addEventListener('afterprint', after)
    return () => {
      window.removeEventListener('beforeprint', before)
      window.removeEventListener('afterprint', after)
    }
  }, [])

  function handleClick(e) {
    if (e.target.closest('.nav-btn') || overview || help) return
    move(e.clientX > window.innerWidth / 2 ? 1 : -1)
  }

  return (
    <div className="presentation" onClick={handleClick}>
      <ProgressBar current={current} total={total} />
      <SlideCounter current={current} total={total} />
      <NavButton direction="prev" onClick={() => move(-1)} />
      <NavButton direction="next" onClick={() => move(1)} />

      {/* Help hint */}
      <button
        className="help-hint"
        onClick={(e) => { e.stopPropagation(); setHelp(true) }}
        aria-label="Keyboard shortcuts"
      >
        ?
      </button>

      {slides.map((slideData, i) => {
        const SlideComponent = SLIDE_COMPONENTS[i]
        return (
          <SlideWrapper key={slideData.id} isActive={i === current} printing={printing}>
            <SlideComponent data={slideData} />
          </SlideWrapper>
        )
      })}

      {overview && (
        <OverviewMode
          slides={slides}
          current={current}
          onSelect={go}
          onClose={() => setOverview(false)}
        />
      )}

      {help && <HelpOverlay onClose={() => setHelp(false)} />}
    </div>
  )
}
