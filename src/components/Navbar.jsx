import { useEffect, useState } from 'react';
import Container from './common/Container';

function Navbar() {
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            let current = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (
                    window.scrollY >= sectionTop - 100 &&
                    window.scrollY < sectionTop + sectionHeight - 100
                ) {
                    current = section.getAttribute("id");
                }
            });

            if (current) {
                setActiveLink(current);
            } else if (window.scrollY < 100) {
                setActiveLink('home');
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="navbar">
            <Container className="flex items-center justify-between h-full">
                <div className="navbar__brand">
                    <span>My Portfolio</span>
                </div>

                <input type="checkbox" name="" id="check" />
                <label htmlFor="check" className="icons">
                    <i className="bx bx-menu" id="menu-icon"></i>
                    <i className="bx bx-x" id="close-icon"></i>
                </label>

                <nav className="navbar__menu">
                    <ul className="navbar__list">
                        {['home', 'about', 'projects', 'experience', 'skills'].map((id, index) => (
                            <li key={id}>
                                <a
                                    style={{ "--i": index }}
                                    href={`#${id}`}
                                    className={`navbar__link ${activeLink === id ? 'active' : ''}`}
                                    onClick={() => {
                                        // Uncheck the checkbox when a link is clicked (for mobile menu)
                                        document.getElementById('check').checked = false;
                                        setActiveLink(id);
                                    }}
                                >
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </div>
    );
}

export default Navbar;
