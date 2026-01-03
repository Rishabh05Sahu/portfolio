import React from "react";
import "../pages/CSS/Experince.css";
import Navbar from "../components/Navbar/Navbar";

const Experience = () => {
  return (
    <div className="experience-page">
      <Navbar className="navbarAbout" />

      <div className="experience-container">
        <div className="experience-header">
          <h1 className="experience-title">EXPERIENCE</h1>
        </div>

        <div className="experience-content">
          <div className="experience-card">
            <div className="experience-company">
              <h2>greatkapital</h2>
              <span className="experience-duration">April 2025 - Present</span>
            </div>

            <div className="experience-role">
              <h3>Frontend Developer Intern</h3>
            </div>

            <div className="experience-description">
              <p>
                Currently working as a Frontend Developer Intern, building and
                maintaining modern web applications while focusing on
                performance, usability, and clean user interface design.
              </p>
            </div>
            <div className="experience-achievements">
              <ul>
                <li>
                  Developed 5+ modular dashboards using Next.js and Shadcn with
                  scalable, component-driven architecture.
                </li>
                <li>
                  Built AG Grid tables supporting sorting, filtering,
                  pagination, row selection, and bulk actions for large datasets
                </li>
                <li>
                  Implemented Recoil state management across 6+ modules,
                  improving UI consistency and reducing cross-component state
                  issues.
                </li>
                <li>
                  Standardized reusable components, reducing duplicated UI logic
                  and improving frontend maintainability across dashboards.
                </li>
              </ul>
            </div>

            <div className="experience-tech">
              <h4>Technologies Used:</h4>
              <div className="tech-tags">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Shadcn</span>
                <span className="tech-tag">Tailwind CSS</span>
                <span className="tech-tag">Zustand</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
