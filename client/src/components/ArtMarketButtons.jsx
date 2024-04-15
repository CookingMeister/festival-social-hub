//import dependancies
import Dropdown from 'react-bootstrap/Dropdown';
import productDetails from '../utils/productDetails.json';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import CartModal from '../components/CartModal';

// component for art market buttons with props 
function ArtMarketButtons({
    selectedStyle,
    handleStyleSelect,
    selectedBestSeller,
    handleBestSellerSelect,
    handleReset
  }) {

    return (
    <div className="d-flex justify-content-center justify-content-md-end mt-3">
            <Dropdown className="mx-1">
                <Dropdown.Toggle
                    id="dropdown-basic"
                    style={{
                        backgroundColor: '#5F6695',
                        border: 'none',
                        color: '#FFFB0A',
                        textShadow: '1px 1px 3px #000000',
                    }}
                >
                    {/** sets button text to style selection */}
                    {selectedStyle ? selectedStyle : 'Style'}
                </Dropdown.Toggle>

                    {/** maps through style options to sort products by style */}
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
                        border: 'none',
                        color: '#FFFB0A',
                        textShadow: '1px 1px 3px #000000',
                    }}
                >
                    {/** sets button text to bestSeller selection */}
                    {selectedBestSeller ? selectedBestSeller : 'Best Seller'}
                </Dropdown.Toggle>

                    {/** maps through style options to sort products by best seller */}
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
            {/** resets style & bestseller btn */}
            <Button
                style={{
                    backgroundColor: '#5F6695',
                    border: 'none',
                    color: '#FFFB0A',
                    textShadow: '1px 1px 3px #000000',
                }}
                className='mx-1'
                onClick={handleReset}
            >
                Reset
            </Button>
            <div>
                {/** imports cart modal*/}
                <CartModal />
            </div>
        </div>
    )
}

// proptype validation
ArtMarketButtons.propTypes = {
    selectedStyle: PropTypes.string,
    selectedBestSeller: PropTypes.string, 
    handleStyleSelect: PropTypes.func.isRequired,
    handleBestSellerSelect: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired
};

//export component
export default ArtMarketButtons;