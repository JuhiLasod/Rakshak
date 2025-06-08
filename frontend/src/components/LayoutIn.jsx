import React from 'react';
import NavbarIn from './NavbarIn';
import Footer from './Footer';
function LayoutIn({ children }) {
  return (
    <>
      <NavbarIn />
      <main>{children}</main>
      <Footer/>
    </>
  );
}

export default LayoutIn;