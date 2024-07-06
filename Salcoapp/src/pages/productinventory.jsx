import React from 'react'
import '../styling/productinventory.css'
import ListsProduct from '../components/listsproduct'
import Porductsidebar from '../components/productsidebar'
import {useParams} from 'react-router-dom'
function productinventory() {
  const {productId}=useParams();
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Porductsidebar />
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
