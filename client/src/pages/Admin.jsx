import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState({
    _id: '',
    name: '',
    description: '',
    price: '',
    category: '',
    availability: true,
  });

  useEffect(() => {
    // Fetch products from MongoDB using Axios
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/products', {
          headers: {
            Authorization: token,
          },
        });
        setProducts(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [products]);

  const handleShowModal = (product) => {
    setEditProduct(product);
    setShowModal(true);
  };

  const update = (product) => {
    handleShowModal(product);
  };

  const updateProduct = async (productId, product) => {
    try {
      console.log("Updating product with:", product);
      const token = localStorage.getItem('token');
      await axios.put(`/api/products/${productId}`, product, {
        headers: {
          Authorization: token,
        },
      });
      setProducts(
        products.map((product) =>
          product._id === productId ? { ...product, ...product } : product
        )
      );
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <Container className="text-white">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Product Inventory</h1>
          <Button variant="warning">New</Button>
        </div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>{product.availability ? 'in stock' : 'out of stock'}</td>
                <td>
                  <Button variant="warning" onClick={() => update(product)}>
                    Update
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => deleteProduct(product._id)}
                  >
                    {' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 17"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>{' '}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Update Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="productName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter product name"
                  value={editProduct.name}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="productDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Product description"
                  value={editProduct.description}
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="productPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Price"
                  value={editProduct.price}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, price: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="productCategory">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  value={editProduct.category}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, category: e.target.value })
                  }
                >
                  <option value="">Select a category</option>
                  <option value="crowns">Crowns</option>
                  <option value="clothes">Clothes</option>
                  <option value="costumes">Costumes</option>
                  <option value="accessories">Accessories</option>
                </Form.Select>
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="productAvailability">
                <Form.Label>Availabilty</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Availability"
                  value={editProduct.availability}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, availability: e.target.value })
                  }
                /> */}
              <Form.Group className="mb-3" controlId="productAvailability">
                <Form.Label>Availability</Form.Label>
                <Form.Select
                  value={editProduct.availability ? 'true' : 'false'}
                  onChange={(e) => {
                    console.log('Before update:', editProduct.availability);
                    const updatedAvailability = e.target.value === 'true';
                    setEditProduct({
                      ...editProduct,
                      availability: updatedAvailability,
                    });
                    console.log('After update:', updatedAvailability);
                  }}
                >
                  <option value="true">In Stock</option>
                  <option value="false">Out of Stock</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                updateProduct(editProduct._id, editProduct);
                setShowModal(false);
              }}
            >
              Update Product
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Admin;
