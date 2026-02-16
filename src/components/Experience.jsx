import Container from './common/Container';

function Experience() {
    return (
        <section id="experience" className="experience-section" data-aos="fade-up" data-aos-duration="2000">
            <Container>
                <div className="experience-header">
                    <h1>Work Experience</h1>
                    <p>
                        I have worked on two real-world freelance projects that strengthened my frontend skills.
                    </p>
                </div>

                <div className="experience-list">
                    <div className="experience-card">
                        <img src="/image/slms-2024.png" alt="cover" />
                        <h3>Frontend Developer <span>(Freelance)</span></h3>
                        <span className="date">Mar 2024 - Present</span>
                        <p>
                            Collaborated on a client-focused system for managing educational workflows. Focused on crafting reusable
                            components, form systems, and interactive dashboards. Due to NDA, specific business logic cannot be disclosed.
                        </p>
                        <div className="tools">
                            <span>React</span><span>JavaScript</span><span>MUI</span><span>Chart.js</span>
                        </div>
                    </div>
                </div>

                <div className="experience-summary" data-aos="fade-up">
                    <h2>Growth Through Freelance Projects</h2>
                    <ul>
                        <li>Faced real-world challenges not covered in class.</li>
                        <li>Improved bug-solving and performance optimization.</li>
                        <li>Learned modern tools and better coding workflows.</li>
                        <li>Strengthened team communication and collaboration.</li>
                        <li>Contributed to project goals and delivery success.</li>
                    </ul>
                </div>
            </Container>
        </section>
    );
}

export default Experience;
