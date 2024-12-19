import React, { useState } from 'react';

function FormControl() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Show an alert with the input data
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
        <h1>Form Control</h1>
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          style={inputStyle}
        />
      </div>
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          style={inputStyle}
        />
      </div>
      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </form>
  );
}

// Inline Styles
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  maxWidth: '400px',
  margin: 'auto',
  border: '1px solid #ccc',
  borderRadius: '10px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const inputGroupStyle = {
  marginBottom: '15px',
  width: '100%',
};

const labelStyle = {
  display: 'block',
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '5px',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  fontSize: '16px',
  border: '1px solid #ddd',
  borderRadius: '4px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  //backgroundColor: '#4CAF50',
  color: 'black',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '10px',
};

export default FormControl;
