import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Job from "./Components/Job/Job";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/:jobid" element={<Job />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
