// src/components/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/producthooks';
import '../styling/productdetail.css';
import axios from 'axios';

const ProductDetail = () => {
  const {Id } = useParams();
  console.log(Id);
  const [product, setProduct] = useState(null);
  const {getDetailProduct} = useProducts();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data=await getDetailProduct(Id);
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [Id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="prd-container py-4 my-4   " > 
      <div className="prd-row d-flex justify-content-center ">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid"
          />
        
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-center">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
           <p>Rating: {product.rating}</p>
           <p>Brand: {product.brand}</p>      
           <hr />        
          <h5 className='prd-price'>${product.price.toFixed(2)}</h5>
         <div className="pprd-btn d-flex mt-2">
         <button className="btn btn-primary ">Add to Cart</button>
         <button className="btn btn-success">Buy Now</button>
         </div>
        </div>
        <div className="col-md-4 prd-similar">
          <h3>Similar Products</h3>
          <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
