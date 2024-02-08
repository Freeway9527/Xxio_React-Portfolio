import React from "react";

const Projects = () => {
  return (
  <div className="w-full h-screen bg-slate-950 flex flex-wrap justify-center items-center ">
         
         <h1 className="text-center text-white text-4xl sm:text-5xl font-bold mb-8 w-full projects-header">
         <span className="text-purple-600">My</span> Projects
        </h1>

        <div className="w-full h-screen bg-slate-950 flex flex-wrap justify-center items-center project-container">
          {/* Add Projects here*/}
          <div className="project-card">
            <h2 className="project-name text-center ">Horiseon Refactor</h2>
            <a
              href="https://github.com/Freeway9527/Xxio-Horizon-Refactor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/images/Horiseon .jpg")}
                alt="Project 1"
                className="project-image"
              />
            </a>
            <div className="project-info">
              <p className="text-gray-300"> The goal is to enhance the codebase of the Horiseon website by 
              implementing best practices, optimizing performance, and organizing the code in a more systematic 
              and understandable way. </p>
            </div>
          </div>

          <div className="project-card">
          <h2 className="project-name text-center ">First Portfolio HTML/CSS</h2>
            <a
              href="https://github.com/Freeway9527/Xxio-Portfolio" // Change later
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/images/portfolioHTML.jpg")} // Change later
                alt="Project 2"
                className="project-image"
              />
            </a>
            <div className="project-info">
              <p className="text-gray-300">Create first portfolio using HTML and Advanced CSS</p>
            </div>
          </div>

          <div className="project-card">
          <h2 className="project-name text-center ">Password Generate</h2>
            <a
              href="https://github.com/Freeway9527/Xxio_PasswordGenerate" // Change later
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/images/passwordGenerateSS.jpg")} // Change later
                alt="Project 2"
                className="project-image"
              />
            </a>
            <div className="project-info">
              <p className="text-gray-300"> A password generator that allows the user 
               to specify parameters such as password length, character, numbers, and special 
               characters 
               </p>
            </div>
          </div>

          <div className="project-card">
          <h2 className="project-name text-center ">Web APIs Challenge: Code Quiz</h2>
            <a
              href="https://github.com/Freeway9527/Xxio-JS_Quiz" // Change later
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/images/Quiz.png")} // Change later
                alt="Project 2"
                className="project-image"
              />
            </a>
            <div className="project-info">
              <p className="text-gray-300">Develop a Javascript timed mutiple choice question
              test where each answer correct will score 1 point and each one wrong will deduct 10 seconds from the timer.
              </p>
            </div>
          </div>

          <div className="project-card">
          <h2 className="project-name text-center ">Work Day Scheduler</h2>
            <a
              href="https://github.com/your-github-repo" // Change later
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/images/schedularSS.png")} // Change later
                alt="Project 2"
                className="project-image"
              />
            </a>
            <div className="project-info">
              <p className="text-gray-300">This Application will allow the user to orgranize 
              everything that they have to do from the hours of 9AM to 5PM daily.</p>
            </div>
          </div>

          <div className="project-card">
          <h2 className="project-name text-center ">Weather Dashboard App</h2>
            <a
              href="https://github.com/Freeway9527/Xxio-WeatherApp" // Change later
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
              <p className="text-gray-300">Allow the user to enter any city and get the next five 
              day forecast for that location.
              </p>
            </div>
          </div>
        </div>
    
    </div>
  );
};

export default Projects;
