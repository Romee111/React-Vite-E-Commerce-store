// src/components/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/producthooks';
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
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img className="h-full w-full object-cover lg:w-96" src={product.image} alt={product.name} />
        </div>
        <div className="p-8 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
            <p className="mt-4 text-gray-700">{product.description}</p>
            <div className="mt-4 flex items-center">
              <span className="text-yellow-400">&#9733;</span>
              <span className="ml-2 text-gray-600">{product.rating} / 5</span>
            </div>
          </div>
          <div className="mt-6">
            <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          </div>
        </div>
        <div className="p-8 flex-shrink-0 bg-gray-50">
          <div className="text-center">
            <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Add to Cart
            </button>
            <button className="w-full mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
