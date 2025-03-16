import './index.scss'
import photo from '../../../assets/profilePicture.png'

function Home( {selectedTab, setSelectedTab} ) {

    return (
        <div className="home">
            <div className='presentation'>
                <div>
                    <h1>Gaëtan Carré</h1>
                    <h2>Développeur web</h2>
                </div>
                <p>Bienvenue sur mon portfolio ! Ici, découvrez mon parcours, mes projets et ma passion pour le développement web.</p>
                <div className='buttons'>
                    <button onClick={() => setSelectedTab('projects')}>Mes projets</button>
                    <button onClick={() => setSelectedTab('contact')}>Me contacter</button>
                </div>
            </div>
            <div>
                <img src={photo} alt="photo de moi" width={400} height={400} />
            </div>
        </div>
    )
}

export default Home