import './index.scss'
import booki from '../../../assets/imagesProjets/bookiDetailsScreen.png'
import kasa from '../../../assets/imagesProjets/kasa.png'
import monVieuxGrimoire from '../../../assets/imagesProjets/monVieuxGrimoire.png'
import ninaCarducci from '../../../assets/imagesProjets/image3.png'
import sophieBluel from '../../../assets/imagesProjets/sophieBluel.png'

function Projects() {
  // Objet associant chaque tag à une couleur
  const tagColors = {
    HTML: '#e34c26',
    CSS: '#264de4',
    Javascript: '#f0db4f',
    SEO: '#28a745',
    React: '#61dafb',
    'Node.js': '#68a063',
    MongoDB: '#4db33d',
  };

  const projectsData = [
    {
      id: 1,
      name: 'Booki',
      tags: ['HTML', 'CSS'],
      image: booki,
      url: 'https://carregaetan.github.io/OpenClassRooms_P2_booki/'
    },
    {
      id: 2,
      name: 'Sophie Bluel',
      tags: ['Javascript'],
      image: sophieBluel,
      url: 'https://github.com/CarreGaetan/P3_Sophie_Bluel'
    },
    {
      id: 3,
      name: 'Nina Carducci',
      tags: ['SEO'],
      image: ninaCarducci,
      url: 'https://carregaetan.github.io/OpenClassRooms_P4_ninaCarducci/'
    },
    {
      id: 4,
      name: 'Kasa',
      tags: ['HTML', 'CSS', 'React'],
      image: kasa,
      url: 'https://github.com/CarreGaetan/P5_kasa'
    },
    {
      id: 5,
      name: 'Mon vieux grimoire',
      tags: ['Node.js', 'MongoDB'],
      image: monVieuxGrimoire,
      url: 'https://github.com/CarreGaetan/P6_monVieuxGrimoire'
    },
  ];

  return (
    <div>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div onClick={() => window.open(project.url)} style={{cursor: 'pointer'}} key={project.id} className="project-item">
              <p>{project.name}</p>
              <img width="250px" src={project.image} alt="project image" />
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="tags"
                  style={{
                    backgroundColor: 'transparent',
                    border: `2px solid ${tagColors[tag] || '#ccc'}`
                  }}
                >{tag}</span>
              ))}
            </div>
          </div> 
        ))}
      </div>
    </div>
  );
}

export default Projects;
