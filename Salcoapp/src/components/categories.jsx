import React, { useEffect, useState } from 'react'
import '../styling/category.css'
import { useCategories } from '../hooks/categoryhooks';
import {useProducts } from '../hooks/producthooks';
function categories() {
const [categories,setCatgory] = useState([]);
const {getCat} = useCategories();

const [products,setProducts] = useState([]);
const {getProducts} = useProducts();

useEffect(() => {
    const fetchCatgory=async()=>{
        const data=await getCat();
        setCatgory(data);
        console.log(data);
    }
    fetchCatgory();
}    ,[])

useEffect(() => {
    const fetchdata=async()=>{
        const data=await getProducts();
        setProducts(data);
        console.log(data);
    }
    fetchdata();
}, [])


  return (
    <div>
         <div className="category">
        <ul >
            {categories.map((category, index) => (
          <li className="list-group " key={index}>{category.name}</li>
          
        ))}

      </ul>
        </div>
         <hr  className='w-100'/>
       <div className="grid-container">
        
        <div className="col-md-4">
     
          
        <div className="cat-products-1">
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
        <div className="col-md-4">
          <div className="add-card">
            <div className="add-card-img">
              <video autoPlay loop muted src='  '></video>
              
              
            </div>
          </div>

        </div>
       <div className="col-md-4">
         
                  

          <div className="cat-products">
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
       </div>
      
    </div>
  )
}

export default categories
