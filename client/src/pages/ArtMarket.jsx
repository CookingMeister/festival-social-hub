import Dropdown from 'react-bootstrap/Dropdown';

function ArtMarket() {
    return (
        <div className='mx-3'>
            <h4 style={{ color: '#ED217C', marginLeft: '10%' }}>The Art Market</h4>
            <div className='d-flex justify-content-between'>
                <Dropdown className='mx-2'>
                    <Dropdown.Toggle id="dropdown-basic">
                        Size
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mx-2'>
                    <Dropdown.Toggle id="dropdown-basic">
                        Style
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mx-2'>
                    <Dropdown.Toggle id="dropdown-basic">
                        Best Seller
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default ArtMarket;