import React from 'react';

const ResumeSection = () => {
  return (
    <div className="d-flex justify-content-center py-5" id="resume">
      <div className="container border p-4 shadow" style={{ maxWidth: '800px', backgroundColor: '#fff' }}>
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="mb-0">R M Vinay</h2>
          <small>Bangalore, Karnataka, India | +91        | rmvinayvinay@gmail.com</small>
        </div>

        {/* Education */}
        <div className="mb-4">
          <h5 className="border-bottom pb-1">Education</h5>
          <div>
            <strong>B.Tech in Information Science and Engineering</strong><br />
            BMS College of Engineering, Bangalore<br />
            <small>2022 – 2026 | Aggregate: 8.4 CGPA</small>
          </div>
          <div className="mt-2">
            <strong>Second PUC (Pre-University)</strong><br />
            Alva’s PU College, Moodbidri, Mangalore<br />
            <small>Scored: 94%</small>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <h5 className="border-bottom pb-1">Skills</h5>
          <ul className="mb-0">
            <li><strong>Languages:</strong> Java, C++, Python (Intermediate)</li>
            <li><strong>Web Development:</strong> HTML, CSS, React, Django</li>
            <li><strong>Database:</strong> MySQL, DBMS Concepts</li>
            <li><strong>Tools & Frameworks:</strong> Django, React</li>
          </ul>
        </div>

        {/* Projects */}
        <div className="mb-4">
          <h5 className="border-bottom pb-1">Projects</h5>
          <div className="mb-3">
            <strong>Bus Reservation System</strong><br />
            <small>HTML, CSS, JavaScript, Django, MySQL</small><br />
            Developed an online bus booking platform with user authentication, schedule viewing, and booking features.
          </div>
          <div className="mb-3">
            <strong>PDF to MCQ Converter using OpenAI</strong><br />
            <small>Python, OpenAI API, PyMuPDF</small><br />
            Automated question generation from PDF content using GPT for quizzes and assessments.
          </div>
          <div>
            <strong>Personal Portfolio Website</strong><br />
            <small>React, Bootstrap</small><br />
            Built and deployed a responsive portfolio site to showcase resume, projects, and contact details.
          </div>
        </div>

        {/* Languages */}
        <div>
          <h5 className="border-bottom pb-1">Languages Known</h5>
          <p className="mb-0">English, Kannada, Hindi</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
