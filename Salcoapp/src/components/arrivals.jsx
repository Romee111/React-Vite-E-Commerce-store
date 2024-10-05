import React, { useState, useEffect } from 'react';
import '../styling/arrivals.css';
import { useArrivals } from '../hooks/arrivals';
import { useNavigate } from 'react-router-dom';

const Arrivals = () => {
    const [newArrival, setArrival] = useState([]);
    const [filterProduct, setfilterProduct] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(10);
    const { getArrivals } = useArrivals();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getArrivals();
            setArrival(data);
            setfilterProduct(data);
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const updateVisibleProducts = () => {
            if (window.innerWidth <= 768) {
                setVisibleProducts(6);
            } else {
                setVisibleProducts(16);
            }
        };

        updateVisibleProducts();
        window.addEventListener('resize', updateVisibleProducts);
        return () => window.removeEventListener('resize', updateVisibleProducts);
    }, []);

    const handleArrivalDetailClick = (id) => {
        navigate(`/productdetail/${id}`);
    };

    const handleFilter = (filter) => {
        if (filter === 'newArrivals') {
            setArrival(filterProduct);
        } else if (filter === 'Featured') {
            // Implement your logic to filter featured products
            setfilterProduct([]);
            setArrival([]);
        } else if (filter === 'TopRated') {
            // Implement your logic to filter top-rated products
            setfilterProduct([]);
            setArrival([]);
        }
    };

    return (
        <div className="container-fluid newArrivals">
            <div className="row">
                <ul className='d-flex justify-content-center featuring'>
                    <li><p style={{ cursor: 'pointer' }} onClick={() => handleFilter('newArrivals')}>newArrivals</p></li>
                    <li><p style={{ cursor: 'pointer' }} onClick={() => handleFilter('Featured')}>Featured</p></li>
                    <li><p style={{ cursor: 'pointer' }} onClick={() => handleFilter('TopRated')}>Top Rated</p></li>
                </ul>
                <hr />
                <div className="container">
                    <div className="arrival-card-1">
                        {newArrival.slice(0, visibleProducts).map((data) => (
                            <div key={data._id} className="arrival-cards" onClick={() => handleArrivalDetailClick(data._id)}>
                                <img
                                    src={data.images[0]}
                                    alt={data.name}
                                    className="arrival-cards-img"
                                />
                                <div className="arrival-cards-body">
                                    <h5>{data.name.length > 10 ? data.name.slice(0, 10) + "..." : data.name}</h5>
                                    <p>{data.description.length > 12 ? data.description.slice(0, 12) + "..." : data.description}</p>
                                    <h6 className="arrival-cards-price">${data.price.toFixed(2)}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Arrivals;
