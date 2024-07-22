import React from 'react'
import '../styling/listsproduct.css'
import { useState,useEffect } from 'react'
import {useProducts} from "../hooks/producthooks";
import { useNavigate } from 'react-router-dom';

function listsproduct() {
    const [products,setProducts]=useState([]);
    const { listProduct } = useProducts();
     const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await listProduct();
            setProducts(data.data);
            console.log(data.data);
        };

        fetchProducts();
    }, []);

   const handleProductdetailClick = (id) => {
       navigate(`/productdetail/${id}`);
   } 
 console.log(products);
  return (
    <div>
        <div className="container-fluid">
            
          <div className="product-cards-pro">
                    
                    {products?.map((data) => (
                
                                <div key={data._id} className="product-card d-flex"  onClick={() => handleProductdetailClick(data._id)} >
                                    <div className="product-card-body">
                                        
                                        <img src={data.image} className="product-card-img-top" alt="Product" />
                                        <h5 className="product-card-title">
                                            {data.name.length > 20 ? data.name.slice(0, 20) + "..." : data.name}
                                            
                                        </h5>
                                        <p>{data.description.slice(0, 30)}{data.description.length > 30 ? "..." : ""}</p>
                                        <p className="product-card-text">
                                         
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
  )
}

export default listsproduct
