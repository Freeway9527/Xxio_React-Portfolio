import React from "react";

const Projects = () => {
  return (
  <div className="w-full h-screen bg-slate-950 flex flex-wrap justify-center items-center">
         
         <h1 className="text-center text-white text-4xl sm:text-5xl font-bold mb-8 w-full projects-header">
         <span className="text-purple-600">My</span> Projects
        </h1>

        <div className="w-full h-screen bg-slate-950 flex flex-wrap justify-center items-center project-container">
          {/* Add Projects here*/}
          <div className="project-card">
            <a
              href="https://github.com/Freeway9527/Xxio-WeatherApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/images/weatherApp.png")}
                alt="Project 1"
                className="project-image"
              />
            </a>
            <div className="project-info">
              <p className="text-gray-300">Description of project</p>
            </div>
          </div>

          <div className="project-card">
            <a
              href="https://github.com/your-github-repo" // Change later
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/images/weatherApp.png")} // Change later
                alt="Project 2"
                className="project-image"
              />
            </a>
            <div className="project-info">
              <p className="text-gray-300">Description of your project 2</p>
            </div>
          </div>

          <div className="project-card">
            <a
              href="https://github.com/your-github-repo" // Change later
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/images/weatherApp.png")} // Change later
                alt="Project 2"
                className="project-image"
              />
            </a>
            <div className="project-info">
              <p className="text-gray-300">Description of your project 2</p>
            </div>
          </div>

          <div className="project-card">
            <a
              href="https://github.com/your-github-repo" // Change later
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/images/weatherApp.png")} // Change later
                alt="Project 2"
                className="project-image"
              />
            </a>
            <div className="project-info">
              <p className="text-gray-300">Description of your project 2</p>
            </div>
          </div>

          <div className="project-card">
            <a
              href="https://github.com/your-github-repo" // Change later
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/images/weatherApp.png")} // Change later
                alt="Project 2"
                className="project-image"
              />
            </a>
            <div className="project-info">
              <p className="text-gray-300">Description of your project 2</p>
            </div>
          </div>

          <div className="project-card">
            <a
              href="https://github.com/your-github-repo" // Change later
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/images/weatherApp.png")} // Change later
                alt="Project 2"
                className="project-image"
              />
            </a>
            <div className="project-info">
              <p className="text-gray-300">Description of your project 2</p>
            </div>
          </div>
        </div>
    
    </div>
  );
};

export default Projects;
