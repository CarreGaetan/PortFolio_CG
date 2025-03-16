import './index.scss'
import profilePicture from '../../../src/assets/profilePicture.png'

function Header () {
    return (
        <div className="header">
            <img src={profilePicture} alt="logo vite" width={30} height={30} style={{borderRadius: 50, border: '2px solid green'}}/>
            <p>Gaëtan Carré - Porfolio</p>
            <p></p>
        </div>
    )
}

export default Header