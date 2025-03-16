import './Avatar.scss'; // Créer ce fichier SCSS

export default function Avatar() {
  return (
    <div className="avatar-container">
      <model-viewer
        src={`${import.meta.env.BASE_URL}model.glb`}
        alt="Mon avatar 3D"
        auto-rotate
        camera-controls
        autoplay
      ></model-viewer>
    </div>
  );
}