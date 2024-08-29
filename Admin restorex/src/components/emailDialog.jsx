
import React, { useState } from 'react';
import { Modal, Box, Button, TextField } from '@mui/material';
import { Send } from '@mui/icons-material';

function EmailDialog({ open, onClose, email }) {
  const [replyMessage, setReplyMessage] = useState('');

  const handleReplyChange = (e) => {
    setReplyMessage(e.target.value);
  };

  const handleSendReply = () => {
    alert(`Reply sent to ${email.email}: ${replyMessage}`);
    setReplyMessage('');
    onClose(); // Close the modal after sending the reply
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="email-dialog-title" aria-describedby="email-dialog-description">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2 id="email-dialog-title">{email.subject}</h2>
        <p><strong>From:</strong> {email.name} ({email.email})</p>
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
          sx={{ mt: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          endIcon={<Send />}
          onClick={handleSendReply}
          sx={{ mt: 2 }}
        >
          Send Reply
        </Button>
      </Box>
    </Modal>
  );
}

export default EmailDialog;
