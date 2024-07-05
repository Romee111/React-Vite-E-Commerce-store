import React, { useEffect, useState } from 'react'
import '../styling/category.css'
import { useCategories,  } from '../hooks/categoryhooks';
import { useSubCategories } from '../hooks/subcategoryhooks';
import {useProducts } from '../hooks/producthooks';
function categories() {
const [categories,setCatgory] = useState([]);
const {getCat} = useCategories();

const [subCategories,setSubCatgory] = useState([]);
const {getsubCat} = useSubCategories();

const [products,setProducts] = useState([]);
const {getProducts} = useProducts();

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
        
        <div className="col-md-12">
     
          
        <div className="cat-card-1 ">
       <div className="cat-cards ">
       {subCategories.map((data) => (
                        <div key={data.id} className="cat-card" >
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
