import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faCode, faEnvelope, faUser, faGear} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function AsideBar({ selectedTab, setSelectedTab }) {
    return (
        <div className="aside-bar">
            <div className='logos-container'>
                <div onClick={() => setSelectedTab('home')} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={ faFile} size='lg' />
                </div>
                <div onClick={() => setSelectedTab('projects')} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={ faCode } size='lg' /> 
                </div>
                <div onClick={() => setSelectedTab('contact')} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={ faEnvelope } size='lg' /> 
                </div>
                <div onClick={() => window.open('https://github.com/CarreGaetan')} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={ faGithub } size='xl' /> 
                </div>
            </div>
            <div className='logos-container'>
                <div>
                    <FontAwesomeIcon icon={ faUser } size='lg' /> 
                </div>
                <div>
                    <FontAwesomeIcon icon={ faGear } size='lg' /> 
                </div>
            </div>
        </div>
    )
}

export default AsideBar