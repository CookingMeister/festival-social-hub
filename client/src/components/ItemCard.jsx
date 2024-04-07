import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ItemCard(item) {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };
    
    return (
        <Card style={{ width: '15rem', height: '25%', backgroundColor: "#1B998B" }} className='m-2'>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
            <Card.Title style={{ color: '#5F6695' }}>{item.name}</Card.Title>
            <Card.Text style={{ color: '#fffB0a' }}>
                {item.description}
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush" >
            <ListGroup.Item style={{ backgroundColor: "#FFB899", color: "#5F6695" }}>{item.price}</ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "#FFB899", color: "#5F6695" }}>In Stock / Out of Stock</ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <div className='d-flex justify-content-center align-items-center'>
                <Dropdown className='mx-2' size="sm">
                    <Dropdown.Toggle size="sm" id="dropdown-basic" style={{ backgroundColor: "#5F6695", outline: '#5F6695', color: '#FFFB0A' }}>
                        {selectedSize ? selectedSize : 'Size'}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ backgroundColor: "#5F6695" }}>
                        {item.sizes.map((size, index) => (
                            <Dropdown.Item style={{ color: '#FFFB0A' }} key={index} onClick={() => handleSizeSelect(size)}>{size}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Button size="sm" className='m-1' style={{ backgroundColor: '#5F6695', color: '#fffB0A' }}>Add to Cart</Button>
            </div>
        </Card.Body>
    </Card>
    )
}

export default ItemCard;