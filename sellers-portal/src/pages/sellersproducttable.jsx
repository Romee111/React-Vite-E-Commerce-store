import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableFooter, TablePagination, TableRow, TableHead, Paper, IconButton, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
 import AddProductModal from '../components/addingitem';
 import '../styling/sellersproducttable.css'
// import EditProductModal from '../components/editprodocutmodal'; // Import EditProductModal

import SaveProductModal from '../components/saveproduct';
 import { useCategories } from '../hooks/categoryhooks';
 import useProduct from '../hooks/producthook';

function SellersProductTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const { listProduct, deleteProduct, updateProduct } = useProduct();
  const { getCat } = useCategories();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false); // State for EditProductModal
  const [productToEdit, setProductToEdit] = useState(null); // State for selected product

  useEffect(() => {
    const fetchData = async () => {
      const productData = await listProduct();
      const categoryData = await getCat();

      if (Array.isArray(productData)) {
        setRows(productData);
        setFilteredRows(productData);
      } else if (productData && Array.isArray(productData.products)) {
        setRows(productData.products);
        setFilteredRows(productData.products);
      } else {
        console.error("Unexpected product data structure:", productData);
      }

      if (Array.isArray(categoryData)) {
        setCategories(categoryData);
      } else {
        console.error("Unexpected category data structure:", categoryData);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAddMoreProducts = () => {
    setModalShow(true);
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    const updatedRows = rows.filter((row) => row._id !== id);
    setRows(updatedRows);
    setFilteredRows(updatedRows);
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product);
    setEditModalShow(true); // Show the EditProductModal
  };

  const handleCategoryChange = (event) => {
    const selectedCat = event.target.value;
    setSelectedCategory(selectedCat);

    if (selectedCat === '') {
      setFilteredRows(rows);
    } else {
      const filtered = rows.filter((row) => row.category === selectedCat);
      setFilteredRows(filtered);
    }
  };

  return (
    
    <Box display="flex" flexDirection="column" alignItems="center"  className="sellersproduct-table"> 
     <AddProductModal show={modalShow} onHide={() => setModalShow(false)} />
      <SaveProductModal
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        product={productToEdit}
      /> 

      <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button
          variant="contained"
          style={{ backgroundColor: '#001F3F', color: 'white' }}
          onClick={handleAddMoreProducts}
        >
          Add Products
        </Button>
      

        <FormControl variant="outlined" sx={{ minWidth: 200 }}>
          <InputLabel id="category-select-label" style={{ backgroundColor: '#001F3F', color: 'white' }}>Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
            label="Category"
            style={{ backgroundColor: '#001F3F', color: 'white' }}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {categories.map((category) => (
              <MenuItem key={category._id} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <TableContainer component={Paper} sx={{ width: '90%' }} style={{ maxWidth: '100%', marginLeft: '40%' }}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow style={{ backgroundColor: '#001F3F', color: 'white' }}>
              <TableCell style={{ color: 'white' }}>#</TableCell>
              <TableCell style={{ color: 'white' }}>Image</TableCell>
              <TableCell style={{ color: 'white' }}>Name</TableCell>
              <TableCell style={{ color: 'white' }} align="right">Price</TableCell>
              <TableCell style={{ color: 'white' }} align="right">In Stock</TableCell>
              <TableCell style={{ color: 'white' }} align="right">Brand</TableCell>
              <TableCell style={{ color: 'white' }} align="right">Total Sale</TableCell>
              <TableCell style={{ color: 'white' }} align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : filteredRows
            ).map((row, index) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {page * rowsPerPage + index + 1}
                </TableCell>
                <TableCell>
                  <img src={row.image} alt={row.name} style={{ width: '50px', height: '50px' }} />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.instock}</TableCell>
                <TableCell align="right">{row.brand}</TableCell>
                <TableCell align="right">{row.totalSale}</TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="edit"
                    onClick={() => handleEditProduct(row)}
                    color="primary"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDeleteProduct(row._id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={8}
                count={filteredRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default SellersProductTable;
