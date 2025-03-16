import { useState } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import css from '../../assets/iconCss.png'
import html from '../../assets/iconHtml.png'
import react from '../../assets/iconReact.png'
import sass from '../../assets/iconSass.png'
// import node from '../../assets/iconNode.png'

function Explorer({ selectedTab ,setSelectedTab}) {

    const [show, setShow] = useState(true)

    return (
        <div className="explorer">
            <p>Explorer</p>
            <p onClick={() => setShow(!show)} style={{ cursor: 'pointer'}}> <FontAwesomeIcon icon={ faChevronDown} size='sm'/> Portfolio</p>
            {show ? (
            <ul>
                <li onClick={() => setSelectedTab('home')} style={{ cursor: 'pointer' }}>
                    <img src={react} alt="" width={15} height={15} />
                    <p>Home.jsx</p>
                </li>
                <li onClick={() => setSelectedTab('about')} style={{ cursor: 'pointer' }}>
                    <img src={html} alt="" width={15} height={15} />
                    <p>About.html</p>
                </li>
                <li onClick={() => setSelectedTab('projects')} style={{ cursor: 'pointer' }}>
                    <img src={sass} alt="" width={15} height={15} />
                    <p>Projects.js</p>
                </li>
                <li onClick={() => setSelectedTab('contact')} style={{ cursor: 'pointer' }}>
                    <img src={css} alt="" width={15} height={15} />
                    <p>Contact.css</p>
                </li>
            </ul>
            ) : null
            }
        </div>
    )
}

export default Explorer