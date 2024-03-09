import React from 'react';

const Button = ({ text, onClick }) => {
  const buttonStyle = {
    backgroundColor: '#fff', // replace with the actual color code from the design
    border: 'none',
    borderRadius: '20px', // adjust the border-radius according to the design
    padding: '10px 20px', // adjust the padding according to the design
    margin: '10px',
    cursor: 'pointer',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', // adjust the shadow to match your design
    fontSize: '16px', // adjust the font size according to the design
    color: '#000', // replace with the actual color code from the design
  };

  const iconStyle = {
    marginRight: '5px',
    // You'll need to add your icon here. For example, you could use an svg or an icon library.
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      <span style={iconStyle}>📥</span> {/* Replace with your icon */}
      {text}
    </button>
  );
};

export default Button;
