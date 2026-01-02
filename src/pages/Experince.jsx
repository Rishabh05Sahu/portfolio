import React from 'react';
import "../pages/CSS/Experince.css";
import Navbar from "../components/Navbar/Navbar";


const Experience = () => {
  return (
    <div className='experience-page'>
      <Navbar className="navbarAbout" />
      
      <div className="experience-container">
        <div className="experience-header">
          <h1 className="experience-title">EXPERIENCE</h1>
        </div>
        
        <div className="experience-content">
          <div className="experience-card">
            <div className="experience-company">
              <h2>greatkapital</h2>
              <span className="experience-duration">10 Months</span>
            </div>
            
            <div className="experience-role">
              <h3>Frontend Developer Intern</h3>
            </div>
            
            <div className="experience-description">
              <p>
                Completed a 10-month internship as a Frontend Developer, working on 
                building and maintaining modern web applications with a focus on 
                creating efficient and user-friendly interfaces.
              </p>
            </div>
            
            <div className="experience-tech">
              <h4>Technologies Used:</h4>
              <div className="tech-tags">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Shadcn</span>
                <span className="tech-tag">Tailwind CSS</span>
              </div>
            </div>
            
            <div className="experience-achievements">
              <h4>Key Achievements:</h4>
              <ul>
                <li>Created 4+ comprehensive dashboards for data management</li>
                <li>Developed invoice management systems with intuitive UI</li>
                <li>Built interfaces to display and manage scraped data from Amazon</li>
                <li>Implemented responsive designs ensuring optimal user experience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;