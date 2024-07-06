import React, { useState, useEffect } from 'react';
import '../styling/arrivals.css';
import { useArrivals } from '../hooks/arrivals';

const Arrivals = () => {
    const [newArrival, setArrival] = useState([]);
    const { getArrivals } = useArrivals();

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getArrivals();
            setArrival(data);
        };

        fetchProducts();
    }, []);

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
              <li><a href="">newArrivals</a></li>  
                <li><a href="">Featured</a></li>
               <li><a href="">Top Rated</a></li> 
             
               </ul>
               <hr />
                    <div className="container ">
                        <div className="arrival-card-1">
                            
                        {newArrival.map((product) => (
                            <div key={product.id} className="arrival-cards">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="arrival-cards-img"
                                    
                                />
                                
                                <div className="arrival-cards-body">
                                    
                                    <h5>{product.name.length > 10 ? product.name.slice(0, 10) + "..." : product.name}</h5>
                                    <p>{product.description.length > 12 ? product.description.slice(0, 12) + "..." : product.description}</p>
                                        <div className="arrival-price-cost">
                                        <p>${product.price.toFixed(2)}</p>
                                  
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
