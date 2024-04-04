import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg">
      <Container className='navBar'>
        <Navbar.Brand href="home">Custom Festival Wear</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="home" className='navLink'>Home</Nav.Link>
            <Nav.Link href="portfolio" className='navLink'>Profile</Nav.Link>
            <Nav.Link href="design" className='navLink'>Design</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;