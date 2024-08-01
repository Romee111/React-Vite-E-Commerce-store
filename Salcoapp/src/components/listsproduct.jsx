import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styling/listsproduct.css';
import { useProducts } from "../hooks/producthooks";

function ListsProduct() {
  const [products, setProducts] = useState([]);
  const { listProduct } = useProducts();
  const navigate = useNavigate();
  const location = useLocation();
  const searchResults = location.state?.searchResults;

  useEffect(() => {
    if (!searchResults) {
      const fetchProducts = async () => {
        const data = await listProduct();
        setProducts(data.data);
      };
      fetchProducts();
    } else {
      setProducts(searchResults);
    }
  }, []);

  const handleProductdetailClick = (id) => {
    navigate(`/productdetail/${id}`);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="product-cards-pro">
          {products?.map((data) => (
            <div key={data._id} className="product-card d-flex" onClick={() => handleProductdetailClick(data._id)}>
              <div className="product-card-body">
                <img src={data.image} className="product-card-img-top" alt="Product" />
                <h5 className="product-card-title">
                  {data.name.length > 20 ? data.name.slice(0, 20) + "..." : data.name}
                </h5>
                <p>{data.description.slice(0, 30)}{data.description.length > 30 ? "..." : ""}</p>
                <p className="product-card-text">
                  <p style={{ fontWeight: "bold", textAlign: 'left' }}>
                    {data.instock > 0 ? "In Stock" : "Out of Stock"}
                  </p>
                </p>
                <div className="product-detaprice d-flex">
                  <p className="product-card-price">${data.price.toFixed(2)}</p>
                  <p className="product-card-text">{data.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListsProduct;
