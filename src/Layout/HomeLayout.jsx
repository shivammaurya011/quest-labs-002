import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function HomeLayout({ children }) {
  return (
    <>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default HomeLayout;
