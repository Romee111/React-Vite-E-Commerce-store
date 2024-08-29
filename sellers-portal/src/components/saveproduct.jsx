import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap-icons';
import '../styling/addingitem.css';
import useProduct from '../hooks/producthook';
import { useCategories } from '../hooks/categoryhooks';

function SaveProductModal( props ) {
  const { product, onHide } = props; 
  const [imageError, setImageError] = useState('');
  const [imageFiles, setImageFiles] = useState([]);
  const [formData, setFormData] = useState({
    brand: '',
    name: '',
    description: '',
    price: '',
    quantity: '',
    category: '',
  });
  const [categories, setCategories] = useState([]);

  const { getCat } = useCategories(); // Use the categories hook
  const { updateProduct } = useProduct(); // Assuming you have an updateProduct hook

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const catList = await getCat();
        setCategories(catList);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [getCat]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 3) {
      alert('You can only upload up to 3 images.');
      return;
    }
    setImageFiles(files);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { brand, name, description, price, quantity, category } = formData;
    const updatedProduct = {
      brand,
      name,
      description,
      price,
      quantity,
      category,
      images: imageFiles.length > 0 ? imageFiles : product.images, // Use new images if provided, otherwise keep existing ones
    };

    try {
      await updateProduct(product._id, updatedProduct);
      alert('Product updated successfully!');
      onHide(); // Close modal
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ backgroundColor: '#001F3F' }}>
        <Modal.Title id="contained-modal-title-vcenter" style={{ color: '#FFFFFF', textAlign: 'center' }}>
          Edit Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Product Images */}
          <Form.Group controlId="formProductImages" style={{ textAlign: 'left', marginBottom: '20px' }}>
            <Form.Label style={{ color: '#001F3F', fontWeight: 'bold', marginLeft: '30%' }}>Images</Form.Label>
            <div className="image-upload-container" style={{ textAlign: 'center', marginBottom: '20px' }}>
              <label htmlFor="file-upload" className="image-upload-label" style={{ cursor: 'pointer', display: 'inline-block', border: '2px dashed #001F3F', borderRadius: '8px', padding: '20px', width: '100%', maxWidth: '300px', margin: '0 auto' }}>
                <Image size={48} style={{ color: '#001F3F' }} />
                <p style={{ color: '#001F3F', marginTop: '10px' }}>Click or Drag to upload up to 3 images</p>
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
              </label>
            </div>
            {imageFiles.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                {Array.from(imageFiles).map((file, index) => (
                  <div key={index} style={{ margin: '10px' }}>
                    <img src={URL.createObjectURL(file)} alt={file.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px' }} />
                    <p style={{ textAlign: 'center', color: '#001F3F' }}>{file.name}</p>
                  </div>
                ))}
              </div>
            )}
          </Form.Group>

          {/* Product Brand */}
          <Form.Group controlId="formProductBrand" style={{ marginBottom: '20px' }}>
            <Form.Label style={{ color: '#001F3F', fontWeight: 'bold', marginLeft: '30%' }}>Brand</Form.Label>
            <Form.Control
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Enter brand name"
              style={{ borderColor: '#001F3F', maxWidth: '50%', margin: '0 auto' }}
            />
          </Form.Group>

          {/* Product Name */}
          <Form.Group controlId="formProductName" style={{ marginBottom: '20px' }}>
            <Form.Label style={{ color: '#001F3F', fontWeight: 'bold', marginLeft: '30%' }}>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              style={{ borderColor: '#001F3F', maxWidth: '50%', margin: '0 auto' }}
            />
          </Form.Group>

          {/* Product Description */}
          <Form.Group controlId="formProductDescription" style={{ marginBottom: '20px' }}>
            <Form.Label style={{ color: '#001F3F', fontWeight: 'bold', marginLeft: '30%' }}>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter product description"
              style={{ borderColor: '#001F3F', maxWidth: '50%', margin: '0 auto' }}
            />
          </Form.Group>

          {/* Flex Container for Price and Quantity */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            {/* Product Price */}
            <Form.Group controlId="formProductPrice" style={{ width: '20%' }}>
              <Form.Label style={{ color: '#001F3F', fontWeight: 'bold', width: '30%' }}>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                style={{ borderColor: '#001F3F', width: '70%' }}
              />
            </Form.Group>

            {/* Product Quantity */}
            <Form.Group controlId="formProductQuantity" style={{ width: '20%' }}>
              <Form.Label style={{ color: '#001F3F', fontWeight: 'bold' }}>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Enter quantity"
                style={{ borderColor: '#001F3F', width: '70%' }}
              />
            </Form.Group>
          </div>

          {/* Category Dropdown */}
          <Form.Group controlId="formProductCategory" style={{ marginBottom: '20px' }}>
            <Form.Label style={{ color: '#001F3F', fontWeight: 'bold', marginLeft: '30%' }}>Category</Form.Label>
            <Form.Control
              as="select"
              name="category"
              value={formData.category}
              onChange={handleChange}
              style={{ borderColor: '#001F3F', maxWidth: '50%', margin: '0 auto' }}
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          {/* Save Button */}
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <Button type="submit" variant="primary" style={{ backgroundColor: '#001F3F', borderColor: '#001F3F' }}>
              Save Changes
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default SaveProductModal
