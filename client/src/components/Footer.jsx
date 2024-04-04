import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <div className='footer'>
            <Navbar expand="lg" fixed="bottom" className='navBar'>
                <Container style={{ display: 'flex', justifyContent: 'center'  }}>
                    <Navbar.Brand style={{ color: '#FFFB0A' }}> Made by Sam, Sam and Shawn </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}

export default Footer;