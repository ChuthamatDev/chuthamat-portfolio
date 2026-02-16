import { skillsData } from '../data';

function Skills() {
    return (
        <section id="skills" className="skills-section" data-aos="fade-left" data-aos-duration="2000">
            <div className="skills-header">
                <h1>My Skills</h1>
                <p>A summary of my technical toolbox and experience.</p>
            </div>

            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        {skill.image ? (
                            <img src={skill.image} alt={skill.name} className="icon-img" />
                        ) : (
                            <i className={skill.icon} style={skill.color ? { color: skill.color } : {}}></i>
                        )}
                        <h3>{skill.name}</h3>
                        <p>{skill.exp}</p>
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
        </section>
    );
}

export default Skills;
