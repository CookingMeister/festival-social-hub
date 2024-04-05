import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function GoogleSearch() {
    return(
        <>
        <Row>
            <h4 style={{ textAlign: 'center', color: '#ED217C'  }}>Festival Search</h4>
        </Row>
        <Row>
        <Breadcrumb className='d-flex justify-content-center mt-3'>
          <Breadcrumb.Item href="#">
            Tips & Tricks
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">
            Event News
          </Breadcrumb.Item>
          <Breadcrumb.Item>Must Haves</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row className='d-flex justify-content-center'>
        <InputGroup className="mb-3" style={{ width: '75%' }}>
          <Form.Control
            placeholder="Search for Festival"
            aria-label="search for Festival"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Button
          </Button>
        </InputGroup>
      </Row>
      </>
    )
}
export default GoogleSearch;