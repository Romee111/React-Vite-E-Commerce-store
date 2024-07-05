import React from 'react'
import '../styling/productinventory.css'
import ListsProduct from '../components/listsproduct'
import Porductsidebar from '../components/productsidebar'
function productinventory() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Porductsidebar />
                </div>
                <div className="col-md-9">
                    <ListsProduct />
                </div>
            </div>

    </div>
      
    </div>
  )
}

export default productinventory
