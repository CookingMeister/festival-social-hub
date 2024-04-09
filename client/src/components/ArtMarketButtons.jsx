import Dropdown from 'react-bootstrap/Dropdown';
import productDetails from '../utils/productDetails.json';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function ArtMarketButtons({
    selectedStyle,
    handleStyleSelect,
    selectedBestSeller,
    handleBestSellerSelect,
    handleReset
  }) {

    return (
        <div className="d-flex justify-content-end mt-3">
            <Dropdown className="mx-1">
                <Dropdown.Toggle
                    id="dropdown-basic"
                    style={{
                        backgroundColor: '#5F6695',
                        outline: '#5F6695',
                        color: '#FFFB0A',
                        textShadow: '1px 1px 3px #000000',
                    }}
                >
                    {selectedStyle ? selectedStyle : 'Style'}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ backgroundColor: '#5F6695' }}>
                    {productDetails.styles.map((style, index) => (
                        <Dropdown.Item
                            style={{ color: '#FFFB0A', textShadow: '1px 1px 3px #000000' }}
                            key={index}
                            onClick={() => handleStyleSelect(style)}
                        >
                            {style}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mx-1">
                <Dropdown.Toggle
                    id="dropdown-basic"
                    style={{
                        backgroundColor: '#5F6695',
                        outline: '#5F6695',
                        color: '#FFFB0A',
                        textShadow: '1px 1px 3px #000000',
                    }}
                >
                    {selectedBestSeller ? selectedBestSeller : 'Best Seller'}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ backgroundColor: '#5F6695' }}>
                    {productDetails.BestSellers.map((bestSeller, index) => (
                        <Dropdown.Item
                            style={{ color: '#FFFB0A', textShadow: '1px 1px 3px #000000' }}
                            key={index}
                            onClick={() => handleBestSellerSelect(bestSeller)}
                        >
                            {bestSeller}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            <Button
                style={{
                    backgroundColor: '#5F6695',
                    outline: '#5F6695',
                    color: '#FFFB0A',
                    textShadow: '1px 1px 3px #000000',
                }}
                className='mx-1'
                onClick={handleReset}
            >
                Reset
            </Button>
            <Button
                style={{
                    backgroundColor: '#5F6695',
                    outline: '#5F6695',
                    color: '#FFFB0A',
                    textShadow: '1px 1px 3px #000000',
                }}
                className='mx-1'
            >
                Go to Cart
            </Button>
        </div>
    )
}

ArtMarketButtons.propTypes = {
    selectedStyle: PropTypes.string,
    selectedBestSeller: PropTypes.string, 
    handleStyleSelect: PropTypes.func.isRequired,
    handleBestSellerSelect: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired
};

export default ArtMarketButtons;