import React from 'react';
// import ResumePDF from 

const Resume = () => {
  return (
    <div className="w-full h-screen bg-slate-950">
      <div className="max-w-300 mx-auto px-10 flex flex-col justify-center h-full">
        <iframe
          title="My Resume"
          src={ResumePDF}
          width="100%"
          height="800px" 
        ></iframe>
        <a href={ResumePDF} download className="text-purple-600">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
