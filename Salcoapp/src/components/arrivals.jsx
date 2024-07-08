import React, { useState, useEffect } from 'react';
import '../styling/arrivals.css';
import { useArrivals } from '../hooks/arrivals';
import { useNavigate } from 'react-router-dom';
const Arrivals = () => {
    const [newArrival, setArrival] = useState([]);
    const [filterProduct, setfilterProduct] = useState([])
    const { getArrivals } = useArrivals();
    const navigate = useNavigate();

    useEffect(() => {


        fetchProducts();
    }, []);
    const fetchProducts = async () => {
        const data = await getArrivals();
        setArrival(data);
        setfilterProduct(data);
    };

    const handleArrivalDetailClick = (id) => {
        console.log(id);
        navigate(`/productdetail/${id}`);
    };

    const handleFilter = (filter) => {
        if (filter === 'newArrivals') {
            fetchProducts();
            // setfilterProduct(products);
            // setArrival(filterProduct)// Show all products
        } else if (filter === 'Featured') {
            // Implement your logic to filter featured products
            setfilterProduct([]);
            setArrival([])
        } else if (filter === 'TopRated') {
            // Implement your logic to filter top-rated products
            setfilterProduct([]);
            setArrival([])
        }
    };

    return (



        <div className="container-fluid newArrivals">
            <div className="row">
                <div className="col-md-3">
                    <div className="card mx-auto col-10 mt-5">
                        <img
                            className="mx-auto img-thumbnail"
                            src="https://i.imgur.com/pjITBzX.jpg"
                            alt="Yail wrist watch"
                            width="auto"
                            height="auto"
                        />
                        <div className="card-body text-center mx-auto">
                            <div className="cvp">
                                <h5 className="card-title font-weight-bold">Yail wrist watch</h5>
                                <p className="card-text">$299</p>
                                <button className="btn details">View details</button><br />
                                <button className="btn cart">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <ul className='d-flex  justify-content-center  featuring'>
                        <li><p style={{ cursor: 'pointer' }} onClick={() => handleFilter('newArrivals')}>newArrivals</p></li>
                        <li><p style={{ cursor: 'pointer' }} onClick={() => handleFilter('Featured')}>Featured</p></li>
                        <li><p style={{ cursor: 'pointer' }} onClick={() => handleFilter('TopRated')}>Top Rated</p></li>

                    </ul>
                    <hr />
                    <div className="container ">
                        <div className="arrival-card-1">

                            {newArrival.map((data) => (
                                <div key={data._id} className="arrival-cards"  onClick={()=>handleArrivalDetailClick(data._id)}>
                                    <img
                                        src={data.image}
                                        alt={ data.name}
                                        className="arrival-cards-img"

                                    />

                                    <div className="arrival-cards-body">

                                        <h5>{data.name.length > 10 ? data.name.slice(0, 10) + "..." : data.name}</h5>
                                        <p>{data.description.length > 12 ? data.description.slice(0, 12) + "..." : data.description}</p>
                                        <div className="arrival-price-cost">
                                            <p>${data.price.toFixed(2)}</p>

                                        </div>

                                    </div>



                                </div>

                            ))}
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Arrivals;
