import React from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../../App";
import Header from "../Header/Header";
import "./Layout.scss";
const Layout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section id={theme}>
      <Header />
      <section id={theme}>
        <Outlet />
      </section>
    </section>
  );
};

export default Layout;
