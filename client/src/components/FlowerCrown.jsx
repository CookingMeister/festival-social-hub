function FlowerCrown() {

    return (
      <div className="my-3" style={{ maxHeight: '380px', minHeight: '240px' }}>
        <img
          className="d-block"
          style={{
            borderRadius: '8px',
            objectFit: 'contain',
            width: '82%',
            margin: '0 auto'
          }}
          src="flowercrown.jpg"
          alt="Flower Crown"
        />
      </div>
    );
  }
  
  export default FlowerCrown;
  