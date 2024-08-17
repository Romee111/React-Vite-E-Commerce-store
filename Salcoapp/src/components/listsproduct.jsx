import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styling/listsproduct.css';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useProducts } from "../hooks/producthooks";

function ListsProduct() {
  const [products, setProducts] = useState([]);
  const { listProduct } = useProducts();
  const navigate = useNavigate();
  const location = useLocation();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const searchResults = location.state?.searchResults;

  useEffect(() => {
    if (!searchResults) {
      const fetchProducts = async () => {
        const data = await listProduct();
        setProducts(data.data);
      };
      fetchProducts();
    } else {
      setProducts(searchResults);
    }
  }, []);

  const handleProductdetailClick = (id) => {
    navigate(`/productdetail/${id}`);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="product-cards-pro">
          {products?.map((data) => (
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
      <Stack spacing={2} >
      {/* <Typography>Page: {page}</Typography> */}
      <Pagination count={10} page={page} onChange={handleChange} 
       sx={{
        '& .MuiPaginationItem-root': {
          color: '#001f3f', // Number color white
          backgroundColor: '#ffffff', // Circle background color
          '&:hover': {
            backgroundColor: '#001f3f',
            color: '#ffffff', // Darker shade on hover
          },
        },
        '& .Mui-selected': {
          backgroundColor: '#001f3f', // Selected item background color
          color: '#ffffff', // Selected item number color white
          '&:hover': {
            backgroundColor: '#004080', // Darker shade on hover for selected item
          },
          },
          '@media (max-width: 400px)': {
            '& .MuiPaginationItem-root': {
              fontSize: '12px', // Smaller font size for pagination numbers
              padding: '6px', // Smaller padding to reduce circle size
              margin: '2px', // Reduce margin to fit the circles better
              marginTop: '500%',
            },
            '& .MuiPagination-ul': {
              justifyContent: 'center', // Center pagination items
            },
          },
        
      }} />
    </Stack>
    </div>
  );
}

export default ListsProduct;
