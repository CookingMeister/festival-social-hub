function JeanJacket() {
  
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
        src="jacket.jpg"
        alt="Jean Jacket"
      />
    </div>
  );
}

export default JeanJacket;
