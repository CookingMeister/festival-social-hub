function Placeholder() {
  return (
    <div className="my-3" style={{ width: '80%', marginLeft: '10%' }}>
      <img
        className="d-block w-100"
        style={{ borderRadius: '8px', objectFit: 'cover' }}
        src="/placeholder.jpeg"
        alt="Description of the image"
      />
    </div>
  );
}

export default Placeholder;
