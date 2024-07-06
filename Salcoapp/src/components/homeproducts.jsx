import React, { useEffect, useState } from "react";
import useProducts from "../hooks/producthooks";
import { useNavigate } from "react-router-dom";
import '../styling/homeproducts.css';
const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    const { getProducts } = useProducts();
     const navigate=useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
            console.log(data);
        };

        fetchProducts();
    }, []);

    const handleProductClick = () => {
        navigate(`/productinventory`);
    };

    return (
        <div>
            <p className="d-flex homepro-heading">
            <h2 >Just For You</h2>
            <button className="seemore" onClick={() => handleProductClick()}>See More</button>
            </p>
          
            <div className="homepro d-flex">
                <div className="home-cards-pro">
                    
            {products.map((data) => (
                        <div key={data.id} className="home-card d-flex"   >
                            <div className="home-card-body">
                                
                                <img src={data.image} className="home-card-img-top" alt="Product" />
                                <h5 className="card-title">
                                    {data.name.length > 20 ? data.name.slice(0, 20) + "..." : data.name}
                                </h5>
                                <p className="card-text">
                                 
                                </p>
                                <div className="detaprice d-flex">
                                    <p className="card-price">${data.price.toFixed(2)}</p>
                                    <p className="card-text">{data.rating}</p>
                                </div>
                                

                            </div>
                            
                        </div>
                        
                        
                        
                    ))}
                </div>
                
            </div>
        </div>
    );
};



export default HomeProducts


