// src/Home.js
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Contact() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    // let browser do the POST; after that, we set submitted
    setTimeout(() => setSubmitted(true), 100); 
  };

  if (submitted) {
    return (
      <div className="contact-success">
        <h2>Thank you!</h2>
        <p>Your message has been sent. I’ll get back to you soon.</p>
      </div>
    );
  }
  return (
    
      <div className="bg-warning-subtle" style={{
        minHeight: '100vh', 
        width: '100%',       
      }}>
        <div className="d-flex bg-warning text-white mb-3">
  <div className="me-auto p-2 fs-2 fw-bold text-dark">R M VINAY</div>
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
<div class="d-grid gap-0 row-gap-3">
<section id="contact" className="p-4 container-sm bg-dark text-white "  style={{
    width: '30%',
    height: '600px',
  
  }}>
      <h2 className='text-center'>Contact Me</h2>
      <form
        action="https://formspree.io/f/manoezaq"
        method="POST"
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-3"
       
      >
        <label className="form-label">
          Name
          <input
            className="form-control"
            type="text"
            name="name"
            required
            placeholder='Enter your name'
          />
        </label>

        <label className="form-label">
          Email
          <input
            className="form-control"
            type="email"
            name="email"
            required
            placeholder='Enter your email'
          />
        </label>

        <label className="form-label">
          Message
          <textarea
            className="form-control"
            name="message"
            rows="5"
            required
            placeholder='Enter your message....'
          ></textarea>
        </label>

        <button className="btn bg-white text-dark rounded-pill" type="submit">
          Send Message
        </button>
      </form>
    </section>
    </div>
  </div>
  
  );
}

export default Contact;
