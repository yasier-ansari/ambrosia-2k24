import './App.css'
import layerBaseImage from './assets/images/layer-base.png'
import layerMiddleImage from './assets/images/layer-middle.png'
import layerFrontImage from './assets/images/layer-front.png'
import dungeonImage from './assets/images/dungeon.jpg'
import { useEffect } from "react"
import Header from "./components/header.jsx"
import AnimatedTooltip from "./components/member.jsx";
import SectionContainer from "./components/sectionContainer.jsx"


const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scrollTop', `${scrollY}px`)
    })
  }, [])
  return (
    <div className="flex flex-col w-full min-h-screen  scroll-smooth " >
      <div className="wrapper">
        <div className="content">
          <Header />
          <div className="header-main" >
            <div className="layers">
              <div className="layer-head">
                <div className="caption henny  text-8xl -mt-20 ">AMBROSIA</div>
                <div className=" forum text-4xl">The Magic Begins</div>
              </div>
              <div className="img-layer layer-base" style={{ backgroundImage: `url(${layerBaseImage})` }}></div>
              <div className="img-layer layer-mid" style={{ backgroundImage: `url(${layerMiddleImage})` }} ></div>
              <div className="img-layer layer-front" style={{ backgroundImage: `url(${layerFrontImage})` }} ></div>
            </div>
          </div>
          <article className="article-main" style={{ backgroundImage: `url(${dungeonImage})` }} >
            <SectionContainer title={'Members'} >
              <AnimatedTooltip items={people} />
            </SectionContainer>
          </article>
          {/* 
          repeat the first section and render the footer there
          <div className="header-main" >
            <div className="layers">
              <div className="layer-head">
                <div className="caption henny  text-8xl -mt-20 ">AMBROSIA</div>
                <div className=" forum text-4xl">The Magic Begins</div>
              </div>
              <div className="img-layer layer-base" style={{ backgroundImage: `url(${layerBaseImage})` }}></div>
              <div className="img-layer layer-mid" style={{ backgroundImage: `url(${layerMiddleImage})` }} ></div>
              <div className="img-layer layer-front" style={{ backgroundImage: `url(${layerFrontImage})` }} ></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default App
