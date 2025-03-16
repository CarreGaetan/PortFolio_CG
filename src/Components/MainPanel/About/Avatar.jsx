// Avatar.jsx

export default function Avatar() {
  return (
    <model-viewer
      src="/model.glb"
      alt="Mon avatar 3D"
      auto-rotate
      camera-controls
      autoplay
      style={{ width: '500px', height: '600px' }}
    ></model-viewer>
  );
}
