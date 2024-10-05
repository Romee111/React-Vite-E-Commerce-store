import React, { useState, useEffect } from 'react';
import {
  Box, Table, TableBody, TableCell, TableContainer, TableFooter, TablePagination, TableRow, TableHead, Paper,
  IconButton, Button, Collapse, TextField
} from '@mui/material';
import { ExpandMore, ExpandLess, Archive, CheckCircle, Delete, Send } from '@mui/icons-material';

function Inbox() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [emails, setEmails] = useState([]);
  const [expandedEmail, setExpandedEmail] = useState(null);
  const [replyMessage, setReplyMessage] = useState('');

  // Static data for the inbox
  useEffect(() => {
    const fetchEmails = async () => {
      const emailData = [
        { id: 1, name: 'Customer A', email: 'customerA@example.com', subject: 'Order Inquiry', message: 'I would like to know the status of my order.', isRead: false },
        { id: 2, name: 'Customer B', email: 'customerB@example.com', subject: 'Product Feedback', message: 'The product I received was excellent!', isRead: false },
        { id: 3, name: 'Customer C', email: 'customerC@example.com', subject: 'Return Request', message: 'I would like to return my recent purchase.', isRead: false },
        // Add more email objects here
      ];
      setEmails(emailData);
    };

    fetchEmails();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const toggleExpandEmail = (emailId) => {
    setExpandedEmail(expandedEmail === emailId ? null : emailId);
  };

  const handleReplyChange = (e) => {
    setReplyMessage(e.target.value);
  };

  const handleSendReply = () => {
    alert(`Reply sent: ${replyMessage}`);
    setReplyMessage('');
  };

  const handleArchiveEmail = (emailId) => {
    alert(`Email with ID ${emailId} has been archived.`);
    setEmails(emails.filter(email => email.id !== emailId)); // Removes the archived email
  };

  const handleMarkAsRead = (emailId) => {
    setEmails(emails.map(email => (
      email.id === emailId ? { ...email, isRead: true } : email
    )));
  };

  const handleDeleteEmail = (emailId) => {
    alert(`Email with ID ${emailId} has been deleted.`);
    setEmails(emails.filter(email => email.id !== emailId)); // Removes the deleted email
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <TableContainer component={Paper} sx={{ width: '90%' }} style={{ maxWidth: '100%', marginLeft: '10%' }}>
        <Table sx={{ minWidth: 500 }} aria-label="inbox table">
          <TableHead>
            <TableRow style={{ backgroundColor: '#001F3F', color: 'white' }}>
              <TableCell style={{ color: 'white' }}>#</TableCell>
              <TableCell style={{ color: 'white' }}>Name</TableCell>
              <TableCell style={{ color: 'white' }}>Subject</TableCell>
              <TableCell style={{ color: 'white' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? emails.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : emails
            ).map((email, index) => (
              <React.Fragment key={email.id}>
                <TableRow>
                  <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                  <TableCell>{email.name}</TableCell>
                  <TableCell>
                    <IconButton size="small" onClick={() => toggleExpandEmail(email.id)}>
                      {expandedEmail === email.id ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                    {email.subject}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="archive"
                   
                      onClick={() => handleArchiveEmail(email.id)}
                    >
                      <Archive />
                    </IconButton>
                    <IconButton
                      aria-label="mark as read"
                      color={email.isRead ? "default" : "secondary"}
                      onClick={() => handleMarkAsRead(email.id)}
                    >
                      <CheckCircle />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={() => handleDeleteEmail(email.id)}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                    <Collapse in={expandedEmail === email.id} timeout="auto" unmountOnExit>
                      <Box margin={1}>
                        <p><strong>Message:</strong> {email.message}</p>
                        <TextField
                          label="Reply"
                          multiline
                          rows={4}
                          fullWidth
                          variant="outlined"
                          value={replyMessage}
                          onChange={handleReplyChange}
                          placeholder="Type your reply here..."
                        />
                        <Button
                          variant="contained"
                      
                          endIcon={<Send />}
                          onClick={handleSendReply}
                          style={{ marginTop: '10px' }}
                        >
                          Send Reply
                        </Button>
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
                colSpan={4}
                count={emails.length}
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

export default Inbox;
