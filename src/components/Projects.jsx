import { useState } from 'react';
import { projectsData } from '../data';
import Container from './common/Container';

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = "auto";
    };

    return (
        <section className="projects-section" id="projects" data-aos="fade-up" data-aos-duration="1500">
            <Container>
                <h1 className="projects-title">My Projects</h1>
                <p className="projects-subtitle">
                    A selection of my development projects.
                </p>

                <div className="project-cards">
                    {projectsData.map((project, index) => (
                        <div className="project-card" data-aos="zoom-in-up" key={index}>
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.title} className="project-image" />
                            </div>
                            <div className="project-details">
                                <h2 className="project-title">{project.title}</h2>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, idx) => <span key={idx}>{tag}</span>)}
                                </div>
                            </div>
                            <div className="project-links">
                                {project.links.site && (
                                    <a href={project.links.site} target="_blank" className="btn-link site">
                                        <i className="fas fa-external-link-alt"></i> Visit Site
                                    </a>
                                )}
                                {project.links.github && (
                                    <a href={project.links.github} target="_blank" className="btn-link github">
                                        <i className="fab fa-github"></i> GitHub
                                    </a>
                                )}
                                {project.links.details && (
                                    <button
                                        className="btn-link details"
                                        onClick={(e) => { e.preventDefault(); openModal(project); }}
                                    >
                                        See More
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            {selectedProject && (
                <div className="modal" style={{ display: 'flex' }} onClick={(e) => { if (e.target.className === 'modal') closeModal(); }}>
                    <div className="modal-content">
                        <span className="modal-close" onClick={closeModal}>&times;</span>
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>
                        <ul className="modal-project-list">
                            <li>
                                <p style={{ whiteSpace: 'pre-line' }}>
                                    {selectedProject.longDescription}
                                </p>
                            </li>
                            {selectedProject.detailsImage && (
                                <li>
                                    <img src={selectedProject.detailsImage} alt="Preview" />
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;
