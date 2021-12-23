import React from "react";
import { Header } from '../Header';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
