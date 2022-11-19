import { useState } from "react";
import { createContext } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Job from "./Components/Job/Job";
import Layout from "./Components/Layout/Layout";
export const ThemeContext = createContext(null);
function App() {
  const [theme, settheme] = useState("light");
  const toggletheme = () => {
    console.log("funciton asf");
    settheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggletheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/:jobid" element={<Job />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
export default App;
