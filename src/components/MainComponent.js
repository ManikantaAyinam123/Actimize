import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Navbar from './Navbar';
import HomePage from './pages/HomePage';


const MainComponent = () => {
  const [selectedItem, setSelectedItem] = useState('Home'); // State to manage selected navbar item

  const handleNavItemClick = (item) => {
    setSelectedItem(item); // Update selected item when a navbar item is clicked
  };

  const renderContent = () => {
    switch (selectedItem) {
      case 'Home':
        return <HomePage/>;
      case 'About':
        return <Typography variant="h6">This is the About content.</Typography>;
      case 'Contact':
        return <Typography variant="h6">This is the Contact content.</Typography>;
      default:
        return <Typography variant="h6">Welcome to the homepage!</Typography>;
    }
  };

  return (
    <>
      <Navbar onNavItemClick={handleNavItemClick} selectedItem={selectedItem} />
      {renderContent()} {/* Dynamically renders content based on selected item */}
    </>
  );
};

export default MainComponent;
