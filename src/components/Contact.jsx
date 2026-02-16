import { useState } from 'react';
import Container from './common/Container';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        if (!formData.name || !formData.email || !formData.message) {
            e.preventDefault();
            alert("⚠️ กรุณากรอกข้อมูลให้ครบก่อนส่ง");
            return;
        }
        // FormSpree handles the rest (redirect)
        // alert("✅ ส่งข้อความสำเร็จ!"); 
    };

    return (
        <section id="contact">
            <Container className="contact-container">
                <div className="content-contact">
                    <h1>Get In Touch</h1>
                    <p>Feel free to reach out for collaborations or inquiries.</p>
                </div>
                <div className="content-contact-form">
                    <form
                        id="contactForm"
                        action="https://formspree.io/f/xrblbnpa"
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <br />

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <br />

                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Type your message here..."
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <br />

                        <div className="form-buttons">
                            <button type="reset" onClick={() => setFormData({ name: '', email: '', message: '' })}>Reset</button>
                            <button type="submit" id="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    );
}

export default Contact;
