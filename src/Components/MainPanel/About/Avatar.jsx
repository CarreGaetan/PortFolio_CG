export default function Avatar() {
  return (
    <model-viewer
      src={`${import.meta.env.BASE_URL}model.glb`}
      alt="Mon avatar 3D"
      auto-rotate
      camera-controls
      autoplay
      style={{ width: '500px', height: '600px' }}
    ></model-viewer>
  );
}
