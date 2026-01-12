import React from 'react';
import Card from '../../../components/common/Card';
import './ProjectsSection.css';

const PROJECTS = [
    {
        id: 1,
        title: "Kinkaku-ji Tea House Restoration",
        year: "2019-2021",
        description: "Led the restoration of the historic tea house at Rokuon-ji Temple, using traditional joinery techniques without nails.",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=300&fit=crop",
        tags: ["Restoration", "UNESCO Site", "Traditional Joinery"]
    },
    {
        id: 2,
        title: "Nanzen-ji Sanmon Gate Repair",
        year: "2022",
        description: "Structural repair work on the iconic three-story gate, preserving 400-year old cypress wood elements.",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop",
        tags: ["Gate Structure", "Cypress Wood", "Conservation"]
    },
    {
        id: 3,
        title: "Private Sukiya Residence",
        year: "2023",
        description: "Complete construction of a modern sukiya-style residence incorporating traditional techniques with contemporary comfort.",
        image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400&h=300&fit=crop",
        tags: ["New Build", "Sukiya Style", "Residential"]
    }
];

const ProjectsSection = () => {
    return (
        <div className="projects-section">
            <div className="section-header">
                <h2 className="section-title">PREVIOUS PROJECTS</h2>
                <span className="project-count">{PROJECTS.length} completed works</span>
            </div>

            <div className="projects-grid">
                {PROJECTS.map(project => (
                    <Card key={project.id} className="project-card">
                        <div className="project-image-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />
                            <span className="project-year">{project.year}</span>
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="project-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;
