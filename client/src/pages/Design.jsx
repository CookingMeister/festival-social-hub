function Design() {
  return (
    <div style={{ minHeight: '100vh', position:'relative' }}>
      <div
        style={{
          backgroundImage: 'url("/topbanner.png")',
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'contain',
          height: '20vh',
          marginTop: '-1%',
        }}
      />
      <h1 className="text-center text-white">Design Hello </h1>
      <div
        style={{
          backgroundImage: 'url("/bottombanner.png")',
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'contain',
          height: '20vh',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          marginBottom: '-2.5%',
        }}
      />
    </div>
  );
}

export default Design;
