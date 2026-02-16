import Container from './common/Container';

function Hero() {
    return (
        <section className="hero-section" id="home" data-aos="fade-up">
            <Container className="hero-container">
                <div className="hero-content">
                    <h1>Welcome to My Developer<br />Portfolio.</h1>
                    <p className="hero-description">
                        Passionate Frontend Developer with real-world experience.
                    </p>
                    <div className="hero-buttons">
                        <a href="#about" className="btn-getStart">Get Started</a>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Hero;
