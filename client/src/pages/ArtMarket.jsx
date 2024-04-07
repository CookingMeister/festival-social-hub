import Dropdown from 'react-bootstrap/Dropdown';
import productDetails from '../utils/productDetails.json'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import items from '../utils/items.json'
import ItemCard from '../components/ItemCard';


function ArtMarket() {
    const [selectedStyle, setSelectedStyle] = useState(null);
    const [selectedBestSeller, setSelectedBestSeller] = useState(null);

    const handleStyleSelect = (style) => {
        setSelectedStyle(style);
    };

    const handleBestSellerSelect = (bestSeller) => {
        setSelectedBestSeller(bestSeller);
    };

    return (
        <div className='mx-3' style={{ height: '100vh' }}>
            <Row>
                <Row className="d-flex justify-content-center">
                    <Image
                        src="/artMarketLogo.png"
                        style={{ backgroundImage: 'contain', width: '300px', height: '200px' }}
                    />
                </Row>
                <Row>
                    <div className='d-flex justify-content-end'>
                        <Dropdown className='mx-2'>
                            <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "#5F6695", outline: '#5F6695', color: '#FFFB0A' }}>
                                {selectedStyle ? selectedStyle : 'Style'}
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ backgroundColor: "#5F6695" }}>
                                {productDetails.styles.map((style, index) => (
                                    <Dropdown.Item style={{ color: '#FFFB0A' }} key={index} onClick={() => handleStyleSelect(style)}>{style}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className='mx-2'>
                            <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "#5F6695", outline: '#5F6695', color: '#FFFB0A' }}>
                                {selectedBestSeller ? selectedBestSeller : 'Best Seller'}
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ backgroundColor: "#5F6695" }}>
                                {productDetails.BestSellers.map((bestSeller, index) => (
                                    <Dropdown.Item style={{ color: '#FFFB0A' }} key={index} onClick={() => handleBestSellerSelect(bestSeller)}>{bestSeller}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button style={{ backgroundColor: "#5F6695", outline: '#5F6695', color: '#FFFB0A' }}>
                            Go to Cart
                        </Button>
                    </div>
                </Row>
                <Row className='d-flex justify-content-around my-5'>
                    {items.map((item, index) => (
                        <ItemCard key={index} {...item}/>
                    ))}
                </Row>
            </Row>
        </div>
    );
}

export default ArtMarket;