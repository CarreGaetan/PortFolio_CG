import { useState } from 'react';
import './index.scss';
import css from '../../../assets/iconCss.png';
import html from '../../../assets/iconHtml.png';
import react from '../../../assets/iconReact.png';
import sass from '../../../assets/iconSass.png';

function TabsBar({ selectedTab, setSelectedTab }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTab = (tab) => {
    setSelectedTab(tab);
    setIsMenuOpen(false);
  };

  return (
    <div className="tabs-container">
      {/* Menu Burger */}
      <div 
        className={`burger-menu ${isMenuOpen ? 'open' : ''}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      {/* Barre d'onglets */}
      <div className={`tabs-bar ${isMenuOpen ? 'open' : ''}`}>
        <div
          onClick={() => handleTab('home')}
          className={`tab ${selectedTab === 'home' ? 'active' : ''}`}
        >
          <img src={react} alt="React" width={15} height={15} />
          <p>Home.jsx</p>
        </div>
        <div
          onClick={() => handleTab('about')}
          className={`tab ${selectedTab === 'about' ? 'active' : ''}`}
        >
          <img src={html} alt="HTML" width={15} height={15} />
          <p>About.html</p>
        </div>
        <div
          onClick={() => handleTab('projects')}
          className={`tab ${selectedTab === 'projects' ? 'active' : ''}`}
        >
          <img src={sass} alt="Sass" width={15} height={15} />
          <p>Projects.js</p>
        </div>
        <div
          onClick={() => handleTab('contact')}
          className={`tab ${selectedTab === 'contact' ? 'active' : ''}`}
        >
          <img src={css} alt="CSS" width={15} height={15} />
          <p>Contact.css</p>
        </div>
      </div>

      {/* Overlay pour mobile */}
      {isMenuOpen && (
        <div 
          className="menu-overlay" 
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default TabsBar;