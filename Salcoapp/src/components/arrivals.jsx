import React, { useState, useEffect } from 'react';
import '../styling/arrivals.css';
import { useArrivals } from '../hooks/arrivals';
import { useNavigate } from 'react-router-dom';

const Arrivals = () => {
    const [newArrival, setArrival] = useState([]); // This applies to both filtered and full product lists
    const [filterProduct, setfilterProduct] = useState([]); // Holds all products
    const [visibleProducts, setVisibleProducts] = useState(10); // Controls the number of visible products
    const { getArrivals } = useArrivals();
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch products and apply to both states
        const fetchProducts = async () => {
            const data = await getArrivals();
            setArrival(data);  // Initially show all products
            setfilterProduct(data); // Keep all products here for filtering
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const updateVisibleProducts = () => {
            if (window.innerWidth <= 768) {
                setVisibleProducts(6); // Fewer products for smaller screens
            } else {
                setVisibleProducts(16); // More products for larger screens
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
            setArrival(filterProduct); // Reset to show all new arrivals
        } else if (filter === 'Featured') {
            const featuredProducts = filterProduct.filter(product => product.isFeatured);
            setArrival(featuredProducts); // Apply filtering for featured products
        } else if (filter === 'TopRated') {
            const topRatedProducts = filterProduct.filter(product => product.rating >= 4.5);
            setArrival(topRatedProducts); // Apply filtering for top-rated products
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
