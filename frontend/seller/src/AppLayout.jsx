import React from 'react';
import Header from './assets/Components/Header';

const AppLayout = ({ children }) => {
  return (
    <>
    <Header />
    <main>{children}</main>
    </>
  );
};

export default AppLayout;
