import Dropdown from 'react-bootstrap/Dropdown';
import products from '../utils/products.json'

function ArtMarket() {

    return (
        <div className='mx-3'>
            <h2 className='mt-3' style={{ color: '#ED217C', textAlign: 'center' }}>The Art Market</h2>
            <div className='d-flex justify-content-center'>
                <Dropdown className='mx-2'>
                    <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "#5F6695", outline: '#5F6695', color: '#FFFB0A' }}>
                        Size
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ backgroundColor: "#5F6695" }}>
                        {products.sizes.map((size, index) => (
                                <Dropdown.Item style={{ color: '#FFFB0A' }}  key={index}>{size}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mx-2'>
                    <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "#5F6695", outline: '#5F6695', color: '#FFFB0A' }}>
                        Style
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ backgroundColor: "#5F6695" }}>
                        {products.styles.map((style, index) => (
                            <Dropdown.Item style={{ color: '#FFFB0A' }} key={index}>{style}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mx-2'>
                    <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "#5F6695", outline: '#5F6695', color: '#FFFB0A' }}>
                        Best Seller
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ backgroundColor: "#5F6695" }}>
                        {products.BestSellers.map((bestSeller, index) => (
                            <Dropdown.Item style={{ color: '#FFFB0A' }}  key={index}>{bestSeller}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default ArtMarket;