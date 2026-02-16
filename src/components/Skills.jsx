import { skillsData } from '../data';
import Container from './common/Container';

function Skills() {
    return (
        <section id="skills" className="skills-section" data-aos="fade-left" data-aos-duration="2000">
            <Container>
                <div className="skills-header">
                    <h1>My Skills</h1>
                    <p>A summary of my technical toolbox and experience.</p>
                </div>

                <div className="skills-content">
                    {skillsData.map((categoryGroup, index) => (
                        <div key={index} className="skills-category mb-8">
                            <h3 className="text-xl font-bold mb-4 text-center text-gray-800">{categoryGroup.category}</h3>
                            <div className="skills-grid">
                                {categoryGroup.items.map((skill, idx) => (
                                    <div className="skill-card" key={idx}>
                                        <img src={skill.image} alt={skill.name} className="icon-img" style={{ height: '40px', width: 'auto' }} />
                                        <h3>{skill.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="soft-skills-section">
                    <h1>Soft Skills</h1>
                    <ul>
                        <li>Strong problem-solving & analytical thinking</li>
                        <li>Teamwork in technical environments</li>
                        <li>Self-learning and adaptability</li>
                        <li>Technical documentation and reporting</li>
                        <li>Good interpersonal communication</li>
                    </ul>
                </div>
            </Container>
        </section>
    );
}

export default Skills;
