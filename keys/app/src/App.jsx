import { usePresentation } from './hooks/usePresentation'
import { slides } from './data/pitch'
import ProgressBar from './components/ProgressBar'
import SlideCounter from './components/SlideCounter'
import NavButton from './components/NavButton'
import SlideWrapper from './components/SlideWrapper'

import CoverSlide from './slides/CoverSlide'
import ProblemSlide from './slides/ProblemSlide'
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
  CoverSlide,
  ProblemSlide,
  ModelSlide,
  GraveyardSlide,
  WedgeSlide,
  ProductSlide,
  MoatSlide,
  WhyBoltSlide,
  EconomicsSlide,
  GTMSlide,
  TeamSlide,
  AskSlide,
]

export default function App() {
  const { current, go, move, total } = usePresentation(slides.length)

  function handleClick(e) {
    if (e.target.closest('.nav-btn')) return
    move(e.clientX > window.innerWidth / 2 ? 1 : -1)
  }

  return (
    <div className="presentation" onClick={handleClick}>
      <ProgressBar current={current} total={total} />
      <SlideCounter current={current} total={total} />
      <NavButton direction="prev" onClick={() => move(-1)} />
      <NavButton direction="next" onClick={() => move(1)} />

      {slides.map((slideData, i) => {
        const SlideComponent = SLIDE_COMPONENTS[i]
        return (
          <SlideWrapper key={slideData.id} isActive={i === current}>
            <SlideComponent data={slideData} />
          </SlideWrapper>
        )
      })}
    </div>
  )
}
