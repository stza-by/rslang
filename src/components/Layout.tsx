import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';

const Layout: React.FC = () => (
  <>
    <div className='container'>
      <Outlet />
    </div>
    <Footer />
  </>
);

export default Layout;
