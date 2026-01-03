import React from "react";
import "./CSS/About.css";
import man from "../assets/man.png";
import Navbar from "../components/Navbar/Navbar";
import SocialMedia from "../components/SocialMedia/SocialMedia";

const About = () => {
  return (
    <div className="about">
      <Navbar className="navbarAbout" />
      <SocialMedia className="socialmediaAbout" />

  <div className="about-content">
  <p>
    I’m a Computer Science graduate currently working as a Frontend Developer Intern, gaining hands-on experience in building real-world web applications.
  </p>

  <br />
  <br />

  <p>
    I am proficient in the MERN stack, with strong skills in HTML, CSS, JavaScript, React, Redux, Tailwind CSS, and Next.js. I focus on creating scalable, responsive, and user-friendly interfaces.
  </p>

  <br />
  <br />

  <p>
    During my internship, I have developed 4+ interactive dashboards, improving data visualization and overall usability. I also have a growing interest in Artificial Intelligence and enjoy exploring its integration with modern web technologies.
  </p>
</div>


      <div className="man-img">
        <img src={man} alt="" />
      </div>
    </div>
  );
};

export default About;
