import Container from "react-bootstrap/esm/Container";

function Error() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center">404</h1>
      <h2 className="text-center">Page Not Found</h2>
    </Container>
  );
}

export default Error;
