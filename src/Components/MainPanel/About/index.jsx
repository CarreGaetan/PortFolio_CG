import './index.scss'
import { useState } from 'react';
import Avatar from './Avatar.jsx';
import AvatarDance from './AvatarDance.jsx';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import AccordionUsage from './Accordion.jsx'

function About() {

  const [selectedAvatar, setSelectedAvatar] = useState('cool')
  // const [isOpen, setIsOpen] = useState(false)
  // const [activeSection, setActiveSection] = useState(null)

  // const toggleSection = (section) => {
  //   setActiveSection(prev => (prev === section ? null : section))
  // }

  return (
    <div className='about'>
      <div className="avatar-section">
        {selectedAvatar === 'cool' && <Avatar />}
        {selectedAvatar === 'dance' && <AvatarDance />}
        <div className="poses-buttons">
          <button onClick={() => setSelectedAvatar('cool')}>Cool</button>
          <button onClick={() => setSelectedAvatar('dance')}>Danse</button>
        </div>
      </div>
      <div className='informations-section'>
        <AccordionUsage />
      </div>
    </div>
  );
}

export default About;
