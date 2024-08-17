import React from 'react'
import '../styling/productinventory.css'
import ListsProduct from '../components/listsproduct'

import CategorySidebar from '../components/categorysidebar'
import {useParams} from 'react-router-dom'
function productinventory() {
  const {productId}=useParams();
  return (
    <div>
        <div className="container-fluid">
            <div className="row ">
               <div className="sidebar col-md-2">
              <CategorySidebar />
              </div> 
                <div className="col-md-10">
                  <ListsProduct productId={productId} />
                 
                    
                </div>
            </div>

    </div>
      
    </div>
  )
}

export default productinventory
