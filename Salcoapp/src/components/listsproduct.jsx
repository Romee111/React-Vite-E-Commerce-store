import React from 'react'
import '../styling/listsproduct.css'
import { useState,useEffect } from 'react'
import {useProducts} from "../hooks/producthooks";

function listsproduct() {
    const [product,setProduct]=useState([]);
    const { getProducts } = useProducts();

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProduct(data);
            console.log(data);
        };

        fetchProducts();
    }, []);

  return (
    <div>
        <div className="container-fluid">
            
          <div className="product-cards-pro">
                    
                    {product.map((data) => (
                                <div key={data.id} className="product-card d-flex"  >
                                    <div className="product-card-body">
                                        
                                        <img src={data.image} className="product-card-img-top" alt="Product" />
                                        <h5 className="product-card-title">
                                            {data.name.length > 20 ? data.name.slice(0, 20) + "..." : data.name}
                                        </h5>
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
