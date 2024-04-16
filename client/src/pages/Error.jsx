import Container from 'react-bootstrap/esm/Container';

//error page if URL is incorrect
function Error() {
  return (
    <Container
      style={{ height: '50vh' }}
      className="d-flex flex-column justify-content-center align-items-center text-white"
    >
      <h1 className="text-center">404</h1>
      <h2 className="text-center">Oops... Page Not Found</h2>
    </Container>
  );
}

export default Error;
