// banner above footer
const FlowerBottom = () => {
  return (
    <>
      <div
        className="static-bottom"
        style={{
          backgroundImage: 'url("/bottombanner.png")',
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'contain',
          height: '25vh',
          marginBottom: '-3%',
        }}
      ></div>
    </>
  );
};

// exports
export default FlowerBottom;
