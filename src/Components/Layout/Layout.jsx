import React from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../../App";
import Header from "../Header/Header";
import "./Layout.scss";
const Layout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Header />
      <section id={theme}>
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
