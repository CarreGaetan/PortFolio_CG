import './index.scss'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import css from '../../assets/iconCss.png'
import html from '../../assets/iconHtml.png'
import react from '../../assets/iconReact.png'
import sass from '../../assets/iconSass.png'
// import node from '../../assets/iconNode.png'

function MainPanel({ selectedTab, setSelectedTab }) {
  const handleTab = (tab) => {
    setSelectedTab(tab)
  }

  return (
    <div className="main-panel">
      <div className="tabs-bar">
        <div
          onClick={() => handleTab('home')}
          className={`tab ${selectedTab === 'home' ? 'active' : ''}`}
        >
          <img src={react} alt="" width={15} height={15} />
          <p>Home.jsx</p>
        </div>
        <div
          onClick={() => handleTab('about')}
          className={`tab ${selectedTab === 'about' ? 'active' : ''}`}
        >
          <img src={html} alt="" width={15} height={15} />
          <p>About.html</p>
        </div>
        <div
          onClick={() => handleTab('projects')}
          className={`tab ${selectedTab === 'projects' ? 'active' : ''}`}
        >
          <img src={sass} alt="" width={15} height={15} />
          <p>Projects.js</p>
        </div>
        <div
          onClick={() => handleTab('contact')}
          className={`tab ${selectedTab === 'contact' ? 'active' : ''}`}
        >
          <img src={css} alt="" width={15} height={15} />
          <p>Contact.css</p>
        </div>
      </div>
      <div className="content">
        {selectedTab === 'home' && <Home selectedTab={selectedTab} setSelectedTab={setSelectedTab} />}
        {selectedTab === 'about' && <About />}
        {selectedTab === 'contact' && <Contact />}
        {selectedTab === 'projects' && <Projects />}
      </div>
    </div>
  )
}

export default MainPanel;
