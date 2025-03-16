import './index.scss'
// import { useState } from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
// import css from '../../assets/iconCss.png'
// import html from '../../assets/iconHtml.png'
// import react from '../../assets/iconReact.png'
// import sass from '../../assets/iconSass.png'
import TabsBar from './TabsBar'

function MainPanel({ selectedTab, setSelectedTab, handleTab }) {
  

  return (
    <div className="main-panel">
      < TabsBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="content">
        {selectedTab === 'home' && <Home selectedTab={selectedTab} setSelectedTab={setSelectedTab} handleTab={handleTab} />}
        {selectedTab === 'about' && <About />}
        {selectedTab === 'contact' && <Contact />}
        {selectedTab === 'projects' && <Projects />}
      </div>
    </div>
  )
}

export default MainPanel;
