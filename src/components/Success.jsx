// src/Success.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const formData = location.state || {};

  return (
    <div>
      <h1>Submission Successful</h1>
      {Object.keys(formData).length === 0 ? (
        <p>No data to display.</p>
      ) : (
        <div>
          <p><strong>First Name:</strong> {formData.firstName}</p>
          <p><strong>Last Name:</strong> {formData.lastName}</p>
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone No:</strong> {formData.phoneNo}</p>
          <p><strong>Country:</strong> {formData.country}</p>
          <p><strong>City:</strong> {formData.city}</p>
          <p><strong>PAN No:</strong> {formData.panNo}</p>
          <p><strong>Aadhar No:</strong> {formData.aadharNo}</p>
        </div>
      )}
    </div>
  );
};

export default Success;
