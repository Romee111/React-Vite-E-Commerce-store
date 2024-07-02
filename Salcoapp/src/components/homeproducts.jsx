

import React, { useEffect, useState } from "react";
import useProducts from "../hooks/producthooks";
import '../styling/homeproducts.css';
const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    const { getProducts } = useProducts();

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
            console.log(data);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Our Products</h2>
            <div className="homepro">
            {products.map((data) => (
                        <div key={data.id} className="card d-flex" >
                            <div className="card-body">
                                <i className="bi bi-heart"></i>
                                <img src={data.image} className="card-img-top" alt="Product" />
                                <h5 className="card-title">
                                    {data.name.length > 20 ? data.name.slice(0, 20) + "..." : data.name}
                                </h5>
                                <p className="card-text">
                                    {data.description.length > 20 ? data.description.slice(0, 20) + "..." : data.description}
                                </p>
                                <div className="detaprice d-flex">
                                    <p className="card-text">${data.price.toFixed(2)}</p>
                                    <p className="card-text">{data.rating}</p>
                                    <p
                                        className="stock"
                                        style={{ color: data.instock ? "green" : "red" }}
                                    >
                                        {data.instock ? "In stock" : "Out of stock"}
                                    </p>
                                </div>
                                <div className="btn d-flex ml-2">
                                    <button className="btn-card">Add to cart</button>
                                    <button className="btn-card">Buy Now</button>
                                </div>

                            </div>
                            
                        </div>
                        
                        
                    ))}
            </div>
        </div>
    );
};



export default HomeProducts


