import React from 'react';
import Navbar from './Navbar';

const layout = ({ children }) => {
  console.log('page->>>>', children);
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
