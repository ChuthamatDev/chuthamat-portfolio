import Container from './common/Container';

function Footer() {
    return (
        <footer>
            <Container>
                <p>© 2024 Chuthamat Buaban - All Rights Reserved</p>
                <p>Follow me on social media!</p>
                <div className="social-links">
                    <a href="https://github.com/phraewchuthamat" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/chuthamatdev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
