import React from 'react';

const ResumeSection = () => {
  return (
    <div className="d-flex justify-content-center py-5" id="resume">
      <div
        className="container border p-4 shadow"
        style={{ maxWidth: '800px', backgroundColor: '#fff' }}
      >
        <h2 className="text-center mb-4">My Resume</h2>

        {/* Embedded PDF from public folder */}
        <iframe
          src="/R M Vinay Resume2.pdf"
          title="Resume PDF"
          width="100%"
          height="800px"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
};

export default ResumeSection;
