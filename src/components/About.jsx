import Container from './common/Container';

function About() {
    return (
        <section id="about" className="section-about" data-aos="fade-up">
            <Container>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="section-title">About Me</h2>
                        <div className="about-divider"></div>
                        <p className="lead">
                            I'm a passionate graduate in <strong>Electrical & Electronics Engineering</strong> with a
                            strong foundation in <span className="highlight">problem-solving</span> and <span className="highlight">system analysis</span>.
                        </p>

                        <p className="lead">
                            Motivated by digital innovation, I transitioned into <span className="highlight-block">Frontend Development</span>
                            through self-driven projects, mastering tools like <span className="highlight">React.js</span> and <span className="highlight">JavaScript</span>.
                        </p>

                        <p className="lead">
                            I'm eager to apply my engineering mindset, attention to detail, and adaptability in a
                            <strong>Junior Frontend Developer</strong> role — contributing to impactful, user-focused digital solutions.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default About;
