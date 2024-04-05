import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useEffect } from 'react';

function GoogleSearch() {
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://cse.google.com/cse.js?cx=f0f2ea6bccd2c41f7";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <Row>
        <h4 style={{ textAlign: 'center', color: '#ED217C' }}>Festival Search</h4>
      </Row>
      <Row>
        <Breadcrumb className='d-flex justify-content-center mt-3'>
          <Breadcrumb.Item>
            Tips & Tricks
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Event News
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Must Haves
          </Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row style={{ width: '75%', marginLeft: '10%' }}>
        <div className="gcse-search"></div>
      </Row>
    </>
  )
}
export default GoogleSearch;