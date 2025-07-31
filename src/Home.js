// src/Home.js
import React from 'react';
import Typing from './Typing';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className='bg-warning-subtle'>
      <div className="d-flex bg-warning text-white mb-3 p-0 m-0">
        <div className="me-auto p-2 fs-2 text-dark fw-bold">R M VINAY</div>
        <div className="p-2"> 
          <Button variant="light" data-bs-toggle="tooltip" data-bs-placement="top" onClick={() => navigate('/')}  style={{ transition: 'transform 0.2s' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.3)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
            Home
          </Button>
        </div>
        <div className="p-2">  
          <Button variant="light" onClick={() => navigate('/about')}  style={{ transition: 'transform 0.2s' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.3)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
            Resume
          </Button>
        </div>
        <div className="p-2">  
          <Button variant="light" onClick={() => navigate('/projects')}  style={{ transition: 'transform 0.2s' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.3)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
            Projects
          </Button>
        </div>
        <div className="p-2">  
          <Button variant="light" onClick={() => navigate('/contact')}  style={{ transition: 'transform 0.2s' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.3)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')} >
            Contact
          </Button>
        </div>
      </div>

      <div className='container text-center mb-4 p-0  ' style={{
        backgroundImage: "url('/portfol_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: '100vh',
        width: '100%',
      }}>
        <img src="\my_img-photoaidcom-cropped (1)-Photoroom.png" className="rounded-circle border border-secondary align-middle mx-auto p-2 mt-2" width="20%" height="20%" alt="image_dev" />

        <Typing
          phrases={[
            "Hi, I’m Vinay",
            "ISE Student, Pre-final Year.",
            "Code. Create. Deliver."
          ]}
          typingSpeed={100}
          pause={2000}
        />

        <div className='mt-5'>
          <a href="\R M Vinay Resume2.pdf" target="_blank" rel="noopener noreferrer">
            <button className='bg-dark text-warning px-4 rounded-pill btn-lg' style={{  transition: 'transform 0.2s',transform: 'scale(1.5)', }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(2)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.5)')}>View Resume</button>
          </a>
          <div className="text-center mt-4">
            <a href="https://github.com/vinay-rm17" target="_blank" rel="noopener noreferrer" className="mx-3 fs-2 text-dark">
              <i className="fab fa-github"></i>
            </a>
            <a href="www.linkedin.com/in/rmvinay" target="_blank" rel="noopener noreferrer" className="mx-3 fs-2 text-primary">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:rmvinayvinay@gmail.com" className="mx-3 fs-2 text-dark">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div> 
      
      
    </div>
    </div>
  );
}

export default Home;
