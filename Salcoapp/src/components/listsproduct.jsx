// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import '../styling/listsproduct.css';
// import Typography from '@mui/material/Typography';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import { useProducts } from "../hooks/producthooks";

// function ListsProduct() {
//   const [products, setProducts] = useState([]);
//   const { listProduct } = useProducts();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [page, setPage] = React.useState(1);
//   const [filter, setFilter] = useState({ category: '', subcategory: '' });
//   const handleChange = (event, value) => {
//     setPage(value);
//   };

//   const searchResults = location.state?.searchResults;
//   const filterParams = location.state?.filter;

//   useEffect(() => {
//     if (filterParams) {
//       setFilter(filterParams);
//     }
//   }, [filterParams]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const data = await listProduct();
//       let filteredProducts = data.data;
//       if (filter.category && filter.subcategory) {
//         filteredProducts = filteredProducts.filter(product =>
//           product.category === filter.category && product.subcategory === filter.subcategory
//         );
//       }
//       setProducts(filteredProducts);
//     };
//     fetchProducts();
//   }, [filter]);

//   const handleProductdetailClick = (id) => {
//     navigate(`/productdetail/${id}`);
//   };

//   return (
//     <div>
//       <div className="container-fluid">
//         <div className="product-cards-pro">
//           {products?.map((data) => (
//             <div key={data._id} className="product-card d-flex" onClick={() => handleProductdetailClick(data._id)}>
//               <div className="product-card-body">
//                 <img src={data.image} className="product-card-img-top" alt="Product" />
//                 <h5 className="product-card-title">
//                   {data.name.length > 20 ? data.name.slice(0, 20) + "..." : data.name}
//                 </h5>
//                 <p>{data.description.slice(0, 30)}{data.description.length > 30 ? "..." : ""}</p>
//                 <p className="product-card-text">
//                   <p style={{ fontWeight: "bold", textAlign: 'left' }}>
//                     {data.instock > 0 ? "In Stock" : "Out of Stock"}
//                   </p>
//                 </p>
//                 <div className="product-detaprice d-flex">
//                   <p className="product-card-price">${data.price.toFixed(2)}</p>
//                   <p className="product-card-text">{data.rating}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Stack spacing={2}>
//         <Pagination
//           count={10}
//           page={page}
//           onChange={handleChange}
//           sx={{
//             '& .MuiPaginationItem-root': {
//               color: '#001B2E',
//               borderRadius: 5,
//               border: '2px solid #001B2E',
//             },
//             '& .Mui-selected': {
//               backgroundColor: '#001B2E !important',
//               color: 'white',
//             }
//           }}
//         />
//       </Stack>
//     </div>
//   );
// }

// export default ListsProduct;
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styling/listsproduct.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useProducts } from "../hooks/producthooks";

function ListsProduct() {
  const [products, setProducts] = useState([]);
  const [fullProducts, setFullProducts] = useState([]);
  const { listProduct } = useProducts();
  const navigate = useNavigate();
  const location = useLocation();
  const [page, setPage] = React.useState(1);
  const [filter, setFilter] = useState({ category: '', subcategory: '' });
  const itemsPerPage = 30;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const searchResults = location.state?.searchResults;
  const filterParams = location.state?.filter;

  useEffect(() => {
    if (filterParams) {
      setFilter(filterParams);
    }
  }, [filterParams]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await listProduct();
      const allProducts = data.data;

      // Apply filter
      let filteredProducts = allProducts;
      if (filter.category && filter.subcategory) {
        filteredProducts = filteredProducts.filter(product =>
          product.category === filter.category && product.subcategory === filter.subcategory
        );
      }

      // Set full products and calculate pagination
      setFullProducts(filteredProducts);

      // Calculate pagination
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setProducts(filteredProducts.slice(startIndex, endIndex));
    };

    fetchProducts();
  }, [filter, page]);

  useEffect(() => {
    // Update products when the page changes
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setProducts(fullProducts.slice(startIndex, endIndex));
  }, [page, fullProducts]);

  const handleProductdetailClick = (id) => {
    navigate(`/productdetail/${id}`);
  };

  // Calculate total pages
  const totalPages = Math.ceil(fullProducts.length / itemsPerPage);

  return (
    <div>
      <div className="container-fluid">
        <div className="product-cards-pro">
          {products.map((data) => (
            <div key={data._id} className="product-card d-flex" onClick={() => handleProductdetailClick(data._id)}>
              <div className="product-card-body">
                <img src={data.image} className="product-card-img-top" alt="Product" />
                <h5 className="product-card-title">
                  {data.name.length > 20 ? data.name.slice(0, 20) + "..." : data.name}
                </h5>
                <p>{data.description.slice(0, 30)}{data.description.length > 30 ? "..." : ""}</p>
                <p className="product-card-text">
                  <p style={{ fontWeight: "bold", textAlign: 'left' }}>
                    {data.instock > 0 ? "In Stock" : "Out of Stock"}
                  </p>
                </p>
                <div className="product-detaprice d-flex">
                  <p className="product-card-price">${data.price.toFixed(2)}</p>
                  <p className="product-card-text">{data.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          sx={{
            '& .MuiPaginationItem-root': {
              color: '#001B2E',
              borderRadius: 5,
              border: '2px solid #001B2E',
            },
            '& .Mui-selected': {
              backgroundColor: '#001B2E !important',
              color: 'white',
            }
          }}
        />
      </Stack>
    </div>
  );
}

export default ListsProduct;
