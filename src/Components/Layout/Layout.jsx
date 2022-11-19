import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./Layout.scss";
const Layout = () => {
  return (
    <section className="layout">
      <Header />
      <section>
        <Outlet />
      </section>
    </section>
  );
};

export default Layout;
