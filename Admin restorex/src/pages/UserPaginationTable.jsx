import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableFooter, TablePagination, TableRow, TableHead, Paper, IconButton, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddUserModal from '../components/addUser'; // Import AddUserModal
import EditUserModal from '../components/editusermodal'; // Import EditUserModal
import { useUser } from '../hooks/userhooks'; // Import useUser

function UserPaginationTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const { getUser } = useUser(); // Use the user hook
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false); // State for EditUserModal
  const [userToEdit, setUserToEdit] = useState(null); // State for selected user

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUser();

      if (Array.isArray(userData)) {
        setRows(userData);
        setFilteredRows(userData);
      } else {
        console.error("Unexpected user data structure:", userData);
      }
    };

    fetchData();
  }, [getUser]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAddUser = () => {
    setModalShow(true);
  };

  const handleDeleteUser = async (id) => {
    // Implement delete user functionality here
    // await deleteUser(id);
    const updatedRows = rows.filter((row) => row._id !== id);
    setRows(updatedRows);
    setFilteredRows(updatedRows);
  };

  const handleEditUser = (user) => {
    setUserToEdit(user);
    setEditModalShow(true); // Show the EditUserModal
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" style={{ marginTop: '-50%' }}>
      <AddUserModal show={modalShow} onHide={() => setModalShow(false)} />
      <EditUserModal
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        user={userToEdit}
      />

      <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button
          variant="contained"
          style={{ backgroundColor: '#001F3F', color: 'white' }}
          onClick={handleAddUser}
        >
          Add User
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ width: '90%' }} style={{ maxWidth: '100%', marginLeft: '40%' }}>
        <Table sx={{ minWidth: 500 }} aria-label="user pagination table">
          <TableHead>
            <TableRow style={{ backgroundColor: '#001F3F', color: 'white' }}>
              <TableCell style={{ color: 'white' }}>#</TableCell>
              <TableCell style={{ color: 'white' }}>Name</TableCell>
              <TableCell style={{ color: 'white' }} align="right">Email</TableCell>
              <TableCell style={{ color: 'white' }} align="right">Phone</TableCell>
              <TableCell style={{ color: 'white' }} align="right">Address</TableCell>
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
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="edit"
                    onClick={() => handleEditUser(row)}
                    color="primary"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDeleteUser(row._id)}
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
                colSpan={6}
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

export default UserPaginationTable;
