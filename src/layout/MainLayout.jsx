import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className="containers project">
      <header className="header">
        <Header />
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
