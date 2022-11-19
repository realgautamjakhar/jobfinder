import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  function toggletheme(event) {
    const root = document.querySelector("#root");
    if (event.target.checked) {
      root.style.setProperty("--primary-bg", "#121721");
      root.style.setProperty("--cardbg", "#19202d");
      root.style.setProperty("--text-primary", "#fff");
      root.style.setProperty("--text-secondary", "#6e8098");
    } else {
      root.style.setProperty("--primary-bg", "#f4f6f8");
      root.style.setProperty("--cardbg", "#fff");
      root.style.setProperty("--text-primary", "#19202d");
      root.style.setProperty("--text-secondary", "#6e8098");
    }
  }
  return (
    <>
      <header>
        <NavLink to={"/"}>
          <img src="assets/desktop/logo.svg" alt="devjobs logo" />
        </NavLink>

        <section className="togglebtn">
          <img src="assets/desktop/icon-sun.svg" alt="toggle ligth mode" />
          <label className="switch">
            <input
              type="checkbox"
              onClick={(event) => toggletheme(event)}
            ></input>
            <span className="slider"></span>
          </label>
          <img src="assets/desktop/icon-moon.svg" alt="toggle dark mode" />
        </section>
      </header>
    </>
  );
};

export default Header;
