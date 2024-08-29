// import React, { useState, useEffect } from 'react';
// import { Box, Table, TableBody, TableCell, TableContainer, TableFooter, TablePagination, TableRow, TableHead, Paper, IconButton, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import TrackChangesIcon from '@mui/icons-material/TrackChanges';
// import '../styling/orderspage.css';
// import useOrder from '../hooks/orderhooks';
// // import useOrder from '../hooks/orderhook';  // Assuming you have a hook for orders

// function OrdersPage() {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [orders, setOrders] = useState([]);
//   const [filteredOrders, setFilteredOrders] = useState([]);
//   const [statuses, setStatuses] = useState(['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled']);
//   const [selectedStatus, setSelectedStatus] = useState('');

//   const { getOrdersarray, deleteOrder, updatedOrders, trackOrder } = useOrder();  // Added trackOrder hook

//   useEffect(() => {
//     const fetchData = async () => {
//       const orderData = await getOrders();

//       if (Array.isArray(orderData)) {
//         setOrders(orderData);
//         setFilteredOrders(orderData);
//       } else if (orderData && Array.isArray(orderData.orders)) {
//         setOrders(orderData.orders);
//         setFilteredOrders(orderData.orders);
//       } else {
//         console.error("Unexpected order data structure:", orderData);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleDeleteOrder = async (id) => {
//     await deleteOrder(id);
//     const updatedOrders = orders.filter((order) => order._id !== id);
//     setOrders(updatedOrders);
//     setFilteredOrders(updatedOrders);
//   };

//   const handleViewOrder = (order) => {
//     console.log("View Order:", order);
//     // Implement logic to view order details
//   };

//   const handleEditOrder = (order) => {
//     console.log("Edit Order:", order);
//     // Implement logic to edit order
//   };

//   const handleTrackOrder = async (order) => {
//     const trackingInfo = await trackOrder(order._id);
//     console.log("Tracking Info:", trackingInfo);
//     // Implement logic to display or update tracking information
//   };

//   const handleStatusChange = (event) => {
//     const selectedStatus = event.target.value;
//     setSelectedStatus(selectedStatus);

//     if (selectedStatus === '') {
//       setFilteredOrders(orders);
//     } else {
//       const filtered = orders.filter((order) => order.status === selectedStatus);
//       setFilteredOrders(filtered);
//     }
//   };

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" className="orders-page">
//       <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
//         <FormControl variant="outlined" sx={{ minWidth: 200 }}>
//           <InputLabel id="status-select-label" style={{ backgroundColor: '#001F3F', color: 'white' }}>Status</InputLabel>
//           <Select
//             labelId="status-select-label"
//             id="status-select"
//             value={selectedStatus}
//             onChange={handleStatusChange}
//             label="Status"
//             style={{ backgroundColor: '#001F3F', color: 'white' }}
//           >
//             <MenuItem value="">
//               <em>All</em>
//             </MenuItem>
//             {statuses.map((status, index) => (
//               <MenuItem key={index} value={status}>
//                 {status}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </Box>

//       <TableContainer component={Paper} sx={{ width: '90%' }} style={{ maxWidth: '100%', marginLeft: '40%' }}>
//         <Table sx={{ minWidth: 500 }} aria-label="orders table">
//           <TableHead>
//             <TableRow style={{ backgroundColor: '#001F3F', color: 'white' }}>
//               <TableCell style={{ color: 'white' }}>#</TableCell>
//               <TableCell style={{ color: 'white' }}>Order ID</TableCell>
//               <TableCell style={{ color: 'white' }}>Customer Name</TableCell>
//               <TableCell style={{ color: 'white' }} align="right">Date</TableCell>
//               <TableCell style={{ color: 'white' }} align="right">Total Amount</TableCell>
//               <TableCell style={{ color: 'white' }} align="right">Status</TableCell>
//               <TableCell style={{ color: 'white' }} align="center">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {(rowsPerPage > 0
//               ? filteredOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               : filteredOrders
//             ).map((order, index) => (
//               <TableRow key={order._id}>
//                 <TableCell component="th" scope="row">
//                   {page * rowsPerPage + index + 1}
//                 </TableCell>
//                 <TableCell>{order._id}</TableCell>
//                 <TableCell>{order.customerName}</TableCell>
//                 <TableCell align="right">{new Date(order.date).toLocaleDateString()}</TableCell>
//                 <TableCell align="right">{order.totalAmount}</TableCell>
//                 <TableCell align="right">{order.status}</TableCell>
//                 <TableCell align="center">
//                   <IconButton
//                     aria-label="view"
//                     onClick={() => handleViewOrder(order)}
//                     color="primary"
//                   >
//                     <VisibilityIcon />
//                   </IconButton>
//                   <IconButton
//                     aria-label="edit"
//                     onClick={() => handleEditOrder(order)}
//                     color="secondary"
//                   >
//                     <EditIcon />
//                   </IconButton>
//                   <IconButton
//                     aria-label="track"
//                     onClick={() => handleTrackOrder(order)}
//                     color="default"
//                   >
//                     <TrackChangesIcon />
//                   </IconButton>
//                   <IconButton
//                     aria-label="delete"
//                     onClick={() => handleDeleteOrder(order._id)}
//                     color="error"
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//           <TableFooter>
//             <TableRow>
//               <TablePagination
//                 rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//                 colSpan={7}
//                 count={filteredOrders.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 onPageChange={handleChangePage}
//                 onRowsPerPageChange={handleChangeRowsPerPage}
//               />
//             </TableRow>
//           </TableFooter>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// }

// export default OrdersPage;
