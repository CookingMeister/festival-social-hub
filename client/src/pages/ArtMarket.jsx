import Dropdown from 'react-bootstrap/Dropdown';
import products from '../utils/products.json'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function ArtMarket() {
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedStyle, setSelectedStyle] = useState(null);
    const [selectedBestSeller, setSelectedBestSeller] = useState(null);

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleStyleSelect = (style) => {
        setSelectedStyle(style);
    };

    const handleBestSellerSelect = (bestSeller) => {
        setSelectedBestSeller(bestSeller);
    };


    return (
        <div className='mx-3'>
            <h2 className='mt-2' style={{ color: '#ED217C', textAlign: 'center' }}>The Art Market</h2>
            <div className='d-flex justify-content-center'>
                <Dropdown className='mx-2'>
                    <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "#5F6695", outline: '#5F6695', color: '#FFFB0A' }}>
                    {selectedSize ? selectedSize : 'Size'}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ backgroundColor: "#5F6695" }}>
                        {products.sizes.map((size, index) => (
                            <Dropdown.Item style={{ color: '#FFFB0A' }} key={index} onClick={() => handleSizeSelect(size)}>{size}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mx-2'>
                    <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "#5F6695", outline: '#5F6695', color: '#FFFB0A' }}>
                    {selectedStyle ? selectedStyle : 'Style'}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ backgroundColor: "#5F6695" }}>
                        {products.styles.map((style, index) => (
                            <Dropdown.Item style={{ color: '#FFFB0A' }} key={index} onClick={() => handleStyleSelect(style)}>{style}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mx-2'>
                    <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "#5F6695", outline: '#5F6695', color: '#FFFB0A' }}>
                    {selectedBestSeller ? selectedBestSeller : 'Best Seller'}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ backgroundColor: "#5F6695" }}>
                        {products.BestSellers.map((bestSeller, index) => (
                            <Dropdown.Item style={{ color: '#FFFB0A' }} key={index} onClick={() => handleBestSellerSelect(bestSeller)}>{bestSeller}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className='mt-2 d-flex justify-content-center'>
                <Button className='m-1' style={{ backgroundColor: "#5F6695", outline: '#5F6695', color: '#FFFB0A'}}>
                    Add to Cart
                </Button>
                <Button className='m-1' style={{ backgroundColor: "#5F6695", outline: '#5F6695', color: '#FFFB0A'}}>
                    Go to Cart
                </Button>
            </div>
        </div>
    );
}

export default ArtMarket;