import React from 'react';
import Sidebar from '../sidebar';
import TopNav from '../topnav';

const MainLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="main">
        <div className="main__content">
          <TopNav />
          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
