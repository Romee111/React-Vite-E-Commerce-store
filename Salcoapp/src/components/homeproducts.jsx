import React, { useEffect, useState } from "react";
import useProducts from "../hooks/producthooks";
import { useNavigate } from "react-router-dom";
import '../styling/homeproducts.css';
import { useParams } from "react-router-dom";

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(10); // State for number of visible products
    const { getProducts } = useProducts();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
            console.log(data);
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const updateVisibleProducts = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setVisibleProducts(4); // Mobile view: show 4 products
            } else {
                setVisibleProducts(20); // Laptop view: show 10 products
            }
        };

        updateVisibleProducts();
        window.addEventListener('resize', updateVisibleProducts);
        return () => window.removeEventListener('resize', updateVisibleProducts);
    }, []);

    const handleProductClick = () => {
        navigate(`/productinventory`);
    };

    const handleHomedetailClick = (id) => {
        console.log(id);
        navigate(`/productdetail/${id}`);
    };

    return (
        <div>
            <div className="d-flex homepro-heading">
                <h2>Just For You</h2>
                <button className="seemore" onClick={handleProductClick}>See More</button>
            </div>
            <div className="homepro d-flex">
                <div className="home-cards-pro">
                    {products.slice(0, visibleProducts).map((data) => (
                        <div key={data._id} className="home-card d-flex" onClick={() => handleHomedetailClick(data._id)}>
                            <div className="home-card-body">
                                <img src={data.image} className="home-card-img-top" alt="Product" />
                                <h5 className="card-title">
                                    {data.name.length > 10 ? data.name.slice(0, 10) + "..." : data.name}
                                    
                                </h5>
                                <p className="card-text">
                                {data.description.length > 50 ? data.description.slice(0, 50) + "..." : data.description}
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

export default HomeProducts;
