import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import data from "../../../public/data.json";
import "./Home.scss";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
const jobCardContainerAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const jobcardAnimation = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
  },
};

const Home = () => {
  const [jobs, setjobs] = useState(data);
  const [query, setquery] = useState("");
  const [isModelOpen, setisModelOpen] = useState(false);
  function handleModel() {
    setisModelOpen(!isModelOpen);
  }

  function handleSearch(event) {
    event.preventDefault();
    const { locationsearch, fulltimeonly } = event.target;
    let filteredJobs = data;
    {
      locationsearch.value
        ? (filteredJobs = jobs.filter((job) =>
            job.location
              .toLowerCase()
              .includes(locationsearch?.value.toLowerCase())
          ))
        : data;
    }

    {
      fulltimeonly.checked
        ? (filteredJobs = jobs.filter((job) =>
            job.contract.toLowerCase().includes("full time")
          ))
        : data;
    }

    setjobs(filteredJobs);
    setisModelOpen(isModelOpen ? false : "");
  }

  const Model = () => {
    if (isModelOpen) {
      return (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="modal"
        >
          <div className="modal-content">
            <form
              onSubmit={(event) => handleSearch(event)}
              className="mobile-form"
            >
              <button onClick={handleModel} className="closebtn">
                <AiOutlineClose />
              </button>
              <div className="input-div">
                <img src="assets/desktop/icon-location.svg" alt="" />
                <input
                  type="search"
                  placeholder="Filter by location"
                  name="locationsearch"
                />
              </div>
              <div className="checkbox">
                <input type="checkbox" id="fulltimeonly" name="fulltimeonly" />
                <label htmlFor="fulltimeonly"> Full time only</label>
              </div>
              <button type="submit" className="btn1">
                Search
              </button>
            </form>
          </div>
        </motion.section>
      );
    } else {
      return null;
    }
  };
  return (
    <>
      <Model />
      <section className="search-bar">
        <div className="flex">
          <img src="assets/desktop/icon-search.svg" alt="" />
          <input
            type="search"
            placeholder="Search Position"
            onChange={(event) => setquery(event.target.value)}
          />
        </div>

        <form
          onSubmit={(event) => handleSearch(event)}
          className="desktop-form"
        >
          <div className="flex">
            <img src="assets/desktop/icon-location.svg" alt="" />
            <input
              type="search"
              placeholder="Filter by location"
              name="locationsearch"
            />
          </div>
          <div>
            <input type="checkbox" id="fulltimeonly" name="fulltimeonly" />
            <label htmlFor="fulltimeonly"> Full time only</label>
          </div>
          <button type="submit" className="btn1">
            Search
          </button>
        </form>
        <button onClick={handleModel} className="filter-btn">
          <img src="assets/mobile/icon-filter.svg" alt="" />
        </button>
      </section>

      <motion.ul
        variants={jobCardContainerAnimation}
        initial="hidden"
        animate="show"
        className="joblist-container"
      >
        {jobs
          .filter(
            (job) =>
              job.position.toLowerCase().includes(query?.toLowerCase()) ||
              job.company.toLowerCase().includes(query?.toLowerCase())
          )
          .map((job) => {
            const {
              id,
              company,
              postedAt,
              location,
              logo,
              contract,
              logoBackground,
              position,
            } = job;
            return (
              <motion.li
                variants={jobcardAnimation}
                whileHover={{ scale: 1.1 }}
                key={id}
              >
                <NavLink to={`/${id}`}>
                  <img
                    src={logo}
                    style={{ backgroundColor: `${logoBackground}` }}
                    alt=""
                  />
                  <div className="postedAt">
                    {postedAt} • {contract}
                  </div>
                  <h3 className="job-position">{position}</h3>
                  <h2 className="company-Name">{company}</h2>
                  <p className="accent-color location">{location}</p>
                </NavLink>
              </motion.li>
            );
          })}
      </motion.ul>
    </>
  );
};

export default Home;
