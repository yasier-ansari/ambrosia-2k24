import './App.css'
import layerBaseImage from './assets/images/layer-base.png'
import layerMiddleImage from './assets/images/layer-middle.png'
import layerFrontImage from './assets/images/layer-front.png'
import dungeonImage from './assets/images/dungeon.jpg'
import { useEffect } from "react"
function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scrollTop', `${scrollY}px`)
    })
  }, [])
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <div className="header-main" >
            <div className="layers">
              <div className="layer-head">
                <div className="caption text-8xl -mt-20 ">AMBROSIA</div>
                <div className=" forum text-4xl">The Magic Begins</div>
              </div>
              <div className="img-layer layer-base" style={{ backgroundImage: `url(${layerBaseImage})` }}></div>
              <div className="img-layer layer-mid" style={{ backgroundImage: `url(${layerMiddleImage})` }} ></div>
              <div className="img-layer layer-front" style={{ backgroundImage: `url(${layerFrontImage})` }} ></div>
            </div>
          </div>
          <article className="article-main" style={{ backgroundImage: `url(${dungeonImage})` }} ></article>
        </div>
      </div>
    </>
  )
}

export default App
