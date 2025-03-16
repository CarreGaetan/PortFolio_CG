import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage() {
  // État qui stocke le panneau actuellement ouvert.
  // Valeurs possibles : 'panel1', 'panel2', 'panel3' ou false (aucun ouvert)
  const [expanded, setExpanded] = useState('panel1');

  // Fonction qui renvoie une fonction de gestion d'événement pour chaque panneau
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{
        width: '100%',
        padding: '20px',
        margin: '20px',
        boxSizing: 'border-box'
    }}>
      <Accordion 
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={{
          boxShadow: '0px 4px 2px rgba(0,0,0,0.2)',
          color: 'white',
          backgroundColor: '#1F2428',
          boxSizing: 'border-box',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" sx={{ fontSize: '1.1rem', fontFamily: 'JetBrains Mono, monospace' }}>A propos de moi</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'left' }}>
          <ul className='about-me-list' style={{
            listStyleType: 'none',
            padding: '0 0 0 20px',
            fontFamily: 'JetBrains Mono, monospace'
          }}>
            <li>👨 Gaëtan Carré</li>
            <li>🎂 30 ans</li>
            <li>📍 Saint Jean de Védas</li>
            <li>💻 Absolument passionné par le développement web</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      
      <Accordion 
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        sx={{
          boxShadow: '0px 4px 2px rgba(0,0,0,0.2)',
          color: 'white',
          backgroundColor: '#1F2428',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" sx={{ fontSize: '1.1rem', fontFamily: 'JetBrains Mono, monospace' }}>Mon parcours</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'left' }}>
          <ul style={{
            listStyleType: 'none',
            padding: '0 0 0 20px'
          }}>
            <li>
              💻 2024 - Développeur web (OpenClassRooms)
              <p>Formation diplômante, spécialisation React & Node.js</p>
            </li>
            <li>
              🏊‍♂️ 2022 - Maître nageur (Aquasport)
              <p>Entraînement de groupes, planification de séances de perfectionnement</p>
            </li>
            <li>
              🎮 2020 - Streamer sur Twitch
              <p>Animation de lives gaming, création de contenus interactifs</p>
            </li>
            <li>
              🎬 2018 - Réalisateur, auteur (Vertical)
              <p>Production de courts-métrages et écriture de scénarios</p>
            </li>
            <li>
              📽️ 2017 - Technicien de l&apos;image (ACFA multimédia)
              <p>Prise de vue, montage vidéo, gestion de l’éclairage</p>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      
      <Accordion 
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        sx={{
          boxShadow: '0px 4px 2px rgba(0,0,0,0.2)',
          color: 'white',
          backgroundColor: '#1F2428'
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" sx={{ fontSize: '1.1rem', fontFamily: 'JetBrains Mono, monospace' }}>Compétences</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
          textAlign: 'left',
          display: 'flex',
          gap: '10px'
        }}>
          <div className='tag-skill' style={{ border: '2px solid #FF7140', background: 'none' }}><p>HTML</p></div>
          <div className='tag-skill' style={{ border: '2px solid #4185C9', background: 'none' }}><p>CSS</p></div>
          <div className='tag-skill' style={{ border: '2px solid #ECDA1D', background: 'none' }}><p>Javascript</p></div>
          <div className='tag-skill' style={{ border: '2px solid grey', background: 'none' }}><p>SEO</p></div>
          <div className='tag-skill' style={{ border: '2px solid #447E3C', background: 'none' }}><p>Node</p></div>
          <div className='tag-skill' style={{ border: '2px solid #12A54F', background: 'none' }}><p>MongoDB</p></div>
          <div className='tag-skill' style={{ border: '2px solid #0B95B0', background: 'none' }}><p>React</p></div>
        </AccordionDetails>
        <AccordionActions>
          <Button onClick={() => window.location.href = 'https://github.com/CarreGaetan'}>Github</Button>
          <a href="/carre_gaetan_cv.pdf" download={'Cv Gaëtan Carré'}>
            <Button>Mon CV</Button>
          </a>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
