import { useEffect } from 'react';
import './index.scss';
import photo from '../../../assets/profilePicture.png';

function Home({ selectedTab, setSelectedTab }) {
  // Ajout d'un effet pour réinitialiser le scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="home">
      <div className="content-wrapper">
        <div className="presentation">
          <header>
            <h1>Gaëtan Carré</h1>
            <h2>Développeur web</h2>
          </header>
          
          <p className="intro-text">
            Bienvenue sur mon portfolio ! Ici, découvrez mon parcours, 
            mes projets et ma passion pour le développement web.
          </p>

          <div className="action-buttons">
            <button 
              onClick={() => setSelectedTab('projects')}
              aria-label="Voir les projets"
            >
              Mes projets
            </button>
            <button 
              onClick={() => setSelectedTab('contact')}
              aria-label="Me contacter"
            >
              Me contacter
            </button>
          </div>
        </div>

        <div className="photo-container">
          <img 
            src={photo} 
            alt="Gaëtan Carré - Développeur web" 
            className="profile-photo"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;