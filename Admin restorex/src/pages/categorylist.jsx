import React, { useState, useEffect } from 'react';
import {
  Box, Table, TableBody, TableCell, TableContainer, TableFooter, TablePagination, TableRow, TableHead, Paper,
  IconButton, Button, Collapse
} from '@mui/material';
import { ExpandMore, ExpandLess, Delete, Edit } from '@mui/icons-material';
// import EditCategoryModal from '../components/editcategorymodal'; // Assuming you have a modal for editing categories
import useCategories from '../hooks/categoryhooks';
import '../styling/categorylist.css'
function categorylist() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [categories, setCategories] = useState([]);
  const [editModalShow, setEditModalShow] = useState(false);
  const [categoryToEdit, setCategoryToEdit] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const { getCat, deleteCategory } = useCategories();

  useEffect(() => {
    const fetchData = async () => {
      const categoryData = await getCat();
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

  const handleDeleteCategory = async (id) => {
    await deleteCategory(id);
    const updatedCategories = categories.filter((cat) => cat._id !== id);
    setCategories(updatedCategories);
  };

  const handleEditCategory = (category) => {
    setCategoryToEdit(category);
    setEditModalShow(true);
  };

  const toggleExpandCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" className="cate-Table">
      {/* <EditCategoryModal
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        category={categoryToEdit}
      /> */}

      <Button
        variant="contained"
        style={{ backgroundColor: '#001F3F', color: 'white', marginBottom: '20px' }}
        onClick={() => handleEditCategory(null)}
      >
        Add Category
      </Button>

      <TableContainer component={Paper} sx={{ width: '90%' }} style={{ maxWidth: '100%', marginLeft: '10%' }}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow style={{ backgroundColor: '#001F3F', color: 'white' }}>
              <TableCell style={{ color: 'white' }}>#</TableCell>
              <TableCell style={{ color: 'white' }}>Category Name</TableCell>
              <TableCell style={{ color: 'white' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? categories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : categories
            ).map((category, index) => (
              <React.Fragment key={category._id}>
                <TableRow>
                  <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                  <TableCell>
                    <IconButton size="small" onClick={() => toggleExpandCategory(category._id)}>
                      {expandedCategory === category._id ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                    {category.name}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="edit"
                      onClick={() => handleEditCategory(category)}
                   
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDeleteCategory(category._id)}
                      color="error"
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
                    <Collapse in={expandedCategory === category._id} timeout="auto" unmountOnExit>
                      <Box margin={1}>
                        <Table size="small" aria-label="subcategories">
                          <TableHead>
                            <TableRow style={{ backgroundColor: '#3F3F3F', color: 'white' }}>
                              <TableCell style={{ color: 'white' }}>Subcategory Name</TableCell>
                              <TableCell style={{ color: 'white' }}>Actions</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {category.subcategories && category.subcategories.map((sub, subIndex) => (
                              <TableRow key={sub._id}>
                                <TableCell>{sub.name}</TableCell>
                                <TableCell>
                                  <IconButton
                                    aria-label="edit"
                                    onClick={() => handleEditCategory(sub)}
                             
                                  >
                                    <Edit />
                                  </IconButton>
                                  <IconButton
                                    aria-label="delete"
                                    onClick={() => handleDeleteCategory(sub._id)}
                                    color="error"
                                  >
                                    <Delete />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={categories.length}
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

export default categorylist;
