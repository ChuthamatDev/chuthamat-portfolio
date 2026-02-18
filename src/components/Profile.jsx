import Container from "./common/Container";

function Profile() {
  return (
    <section className="section-profile" data-aos="fade-right">
      <Container>
        <div className="profile-wrapper">
          <div className="intro">
            <div className="info">
              <h1>Chuthamat Buaban</h1>
              <h3 className="job-title">Frontend Developer</h3>
              <p className="profile-description">
                A fresh graduate with experience in building responsive web
                applications.
              </p>
            </div>
          </div>
          <div className="action-buttons">
            <a
              href="https://drive.google.com/drive/folders/1umQPwMVB-7alSbpGctTjwim7lKygrdIx?usp=sharing"
              className="btn-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Awards / Activities
            </a>
            <a
              href="/resume/resume_chuthamat.pdf"
              download="resume_chuthamat.pdf"
              target="_blank"
              type="application/pdf"
              className="btn-resume"
            >
              Download Resume
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Profile;
