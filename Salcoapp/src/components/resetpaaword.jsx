import React from 'react';

const ResetPassword = () => {
  return (
    <div className="container">
      <h2>Reset Password</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">New Password</label>
          <input type="password" className="form-control" id="newPassword" placeholder="Enter new password" />
        </div>
        <button type="submit" className="btn-reset-password">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
