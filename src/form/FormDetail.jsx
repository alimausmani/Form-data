import React from 'react';
import { useLocation } from 'react-router-dom';
import './FormDetail.css';

const FormDetail = () => {
  const location = useLocation();
  const { name, email } = location.state || {};

  return (
    <div className="form-details-container">
      <h1>Form Details</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default FormDetail;