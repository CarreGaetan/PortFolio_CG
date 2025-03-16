import { useState } from 'react';
import './index.scss';
import Avatar from './Avatar.jsx';
import AvatarDance from './AvatarDance.jsx';
import AccordionUsage from './Accordion.jsx';

function About() {
  const [selectedAvatar, setSelectedAvatar] = useState('cool');

  return (
    <div className='about'>
      <div className="avatar-section">
        <div className="avatar-wrapper">
          {selectedAvatar === 'cool' && <Avatar />}
          {selectedAvatar === 'dance' && <AvatarDance />}
        </div>
        <div className="poses-buttons">
          <button 
            onClick={() => setSelectedAvatar('cool')}
            className={selectedAvatar === 'cool' ? 'active' : ''}
          >
            Cool
          </button>
          <button 
            onClick={() => setSelectedAvatar('dance')}
            className={selectedAvatar === 'dance' ? 'active' : ''}
          >
            Danse
          </button>
        </div>
      </div>
      
      <div className='informations-section'>
        <AccordionUsage />
      </div>
    </div>
  );
}

export default About;