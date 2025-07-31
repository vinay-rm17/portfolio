// src/About.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ResumeSection from './ResumeSection';

function About() {
  const navigate = useNavigate();

  return (
    <div className="bg-warning-subtle" style={{
      minHeight: '100vh', 
      width: '100%',       
    }}>
         <div className="d-flex bg-warning text-white mb-3">
          <div className="me-auto p-2 fs-2 text-dark fw-bold">R M VINAY</div>
          <div className="p-2"> <Button variant="light" onClick={() => navigate('/')}  style={{ transition: 'transform 0.2s' }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.3)')}
  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
                  Home
                </Button></div>
          <div className="p-2">  <Button variant="light" onClick={() => navigate('/about')}  style={{ transition: 'transform 0.2s' }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.3)')}
  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
                  Resume
                </Button></div>
                <div className="p-2">  
                          <Button variant="light" onClick={() => navigate('/projects')}  style={{ transition: 'transform 0.2s' }}
                          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.3)')}
                          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
                            Projects
                          </Button>
                        </div>
                <div className="p-2">  <Button variant="light" onClick={()=> navigate('/contact')}  style={{ transition: 'transform 0.2s' }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.3)')}
  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')} >
                  Contact
                </Button></div>
        </div>
       
    <ResumeSection/>
    </div>
  );
}

export default About;
