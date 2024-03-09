import React from 'react';
import Button from './Button';

const Home = () => {
  const gradientStyle = {
    position: 'absolute',
    width: '100%', // Set to 100% to cover the entire viewport
    height: '100%', // Set to 100% to cover the entire viewport
    background: 'linear-gradient(180deg, #89F6BB 0%, rgba(24, 180, 124, 0.37) 50.5%, #6B996A 100%)',
    display: 'flex',
    flexDirection: 'column', // This should be column if you want the items stacked vertically
    justifyContent: 'center',
    alignItems: 'center'
  };

  const tvScreenStyle = {
    background: 'grey',
    width: '50%',
    height: '50%',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: 'inset 0px 0px 20px rgba(255, 255, 255, 0.5)',
    display: 'flex', // Added flex here to center the text
    justifyContent: 'center',
    alignItems: 'center',
  };

  const buttonsContainerStyle = {
    marginTop: '20px', // Add some space between the screen and buttons
    display: 'flex',
    justifyContent: 'center', // Center the buttons horizontally
    width: '100%', // You might want to set a specific width or use 'maxWidth'
  };
  

  return (
    <div style={gradientStyle}>
      <div style={tvScreenStyle}>
        Processed text will be displayed here
      </div>
      <div style={buttonsContainerStyle}>
        <Button text="Download" />
        <Button text="Share" />
      </div>
    </div>
  );
}

export default Home;
