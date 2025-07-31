// src/ProjectCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const projectData = [
  {
    title: 'Bike Rental System',
    description: 'A React-based application to rent bikes in tourist locations. Allows users to filter by price and search by bike type.',
    technologies: 'React, Node.js, Express, MongoDB',
   
  },
  {
    title: 'To-Do Android App',
    description: 'Android mobile app to manage daily tasks with Firebase backend and date picker integration.',
    technologies: 'Kotlin, Firebase, Android Studio',
  
  },
  {
    title: 'Bus Booking Website',
    description: 'Frontend web application for booking buses, showcasing available seats, operator info, and journey routes.',
    technologies: 'HTML, CSS, JavaScript, Bootstrap',
    
  },
  {
    title: 'Personal Portfolio',
    description: 'A personal portfolio website showcasing skills, projects, resume, and contact form.',
    technologies: 'React, Bootstrap, Cloudflare Pages',
    
  },
];

function ProjectCard() {
  return (
    <div className="container">
      <div className="row">
        {projectData.map((project, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <Card className="h-100 shadow">
              <Card.Body>
                <Card.Title className="text-primary">{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text>
                  <strong>Tech Stack:</strong> {project.technologies}
                </Card.Text>
                <Button variant="primary" href={project.link} target="_blank">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
