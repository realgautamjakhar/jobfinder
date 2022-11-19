import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../../public/data.json";
import "./Job.scss";
import { motion } from "framer-motion";
const Job = () => {
  const [listCount, setlistCount] = useState(0);
  const { jobid } = useParams();
  const {
    company,
    contract,
    postedAt,
    description,
    location,
    logo,
    position,
    website,
    logoBackground,
    requirements: { content: requirementsContent, items: requirementsItems },
    role: { content: roleContent, items: roleItems },
  } = data.find((job) => job.id.toString() === jobid.toString());

  return (
    <>
      <section className="job-content">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className="companyinfo"
        >
          <img
            src={logo}
            style={{ backgroundColor: `${logoBackground}` }}
            alt={company}
          />
          <div>
            <h2>{company}</h2>
            <p>{website}</p>
          </div>
          <button>
            <a href={website}>company website</a>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="job-description"
        >
          <div className="apply-section">
            <div>
              <span className="postedAt">
                {postedAt} • {contract}
              </span>
              <h2>{position}</h2>
              <p className="accent-color location">{location}</p>
            </div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="btn1"
            >
              Apply Now
            </motion.button>
          </div>

          <p>{description}</p>

          <div>
            <h3>Requirments</h3>
            <p>{requirementsContent}</p>
            <div className="list">
              <ul>
                {requirementsItems.map((item, index) => {
                  return (
                    <motion.li
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      key={index}
                    >
                      <span className="accent-color">•</span>
                      <p>{item}</p>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div>
            <h3>What You Will Do</h3>
            <p>{roleContent}</p>
            <div className="list">
              <ul>
                {roleItems.map((item, index) => {
                  return (
                    <motion.li
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      key={index}
                    >
                      <span className="accent-color">{index + 1}</span>
                      <p>{item}</p>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
      <footer>
        <div>
          <div className="footer-content">
            <h2>{position}</h2>
            <h5>{company}</h5>
          </div>
          <button className="btn1">Apply</button>
        </div>
      </footer>
    </>
  );
};

export default Job;
