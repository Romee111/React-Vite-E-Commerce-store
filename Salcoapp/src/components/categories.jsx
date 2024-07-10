import React, { useEffect, useState } from 'react'
import '../styling/category.css'
import { NavLink } from 'react-bootstrap';
import { useCategories,  } from '../hooks/categoryhooks';
import { useSubCategories } from '../hooks/subcategoryhooks';
import {useProducts } from '../hooks/producthooks';
import { useNavigate } from 'react-router-dom';
function categories() {
const [categories,setCatgory] = useState([]);
const {getCat} = useCategories();
const navigate = useNavigate();
const [subCategories,setSubCatgory] = useState([]);
const {getsubCat} = useSubCategories();


useEffect(() => {
    const fetchCatgory=async()=>{
        const data=await getCat();
        setCatgory(data);
        console.log(data);
    }

    const fetchsubCatgory=async()=>{
        const data=await getsubCat();
        setSubCatgory(data);
        console.log(data);
    }
    fetchCatgory();
    fetchsubCatgory();
}    ,[])


const handlecategoryClick = () => {
    console.log();
    navigate(`/productinventory`);
};

  return (
    <div>
         <div className="category">
        <ul >
            {categories.map((category, index) => (
          <li className="list-group "  key={index}  >{category.name}</li>
          ))}
          <li className="list-group" onClick={() => handlecategoryClick()}>view all</li>

      </ul>
        </div>
         <hr  className='w-100'/>
       <div className="grid-container">
        
        <div className="col-md-12">
     
          
        <div className="cat-card-1 ">
       <div className="cat-cards ">
       {subCategories.map((data) => (
                        <div key={data.id} className="cat-card"  onClick={() => handlecategoryClick()} >
                            <div className="cat-card-body">
                            
                                <img src={data.image} className="cat-card-img-top" alt="Product" />
                                <h5 className="cat-card-title">
                                    { data.name}
                                </h5>
                               

                            </div>
                            <div className="vertical-line"></div>
                            
                        </div>
                        
                        
                    ))}
       </div>
      
            
          </div>
        </div>
        
       </div>
      
    </div>
  )
}

export default categories
