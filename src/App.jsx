import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <h2>KIRUTHIK.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-text">
          <p className="small-title">HELLO, I'M</p>

          <h1>
            Kiruthik <span>Roshan</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly web applications
            using React, Python and Django.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-circle">
          <img src="/profile.jpg" alt="Kiruthik Roshan" />
          </div>

          <h3>Full Stack Developer</h3>
          <p>React • Django • MySQL • MongoDB</p>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <p className="section-label">ABOUT ME</p>

        <h2>Building ideas into <span>web experiences.</span></h2>

        <p className="about-text">
          I'm a passionate developer interested in creating clean,
          modern and functional websites. I enjoy working with both
          frontend and backend technologies and continuously improving
          my development skills.
        </p>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <p className="section-label">MY SKILLS</p>

        <h2>Technologies I <span>work with.</span></h2>

        <div className="skills-grid">
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Python</div>
          <div className="skill-card">Django</div>
          <div className="skill-card">MySQL</div>
          <div className="skill-card">MongoDB</div>
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <p className="section-label">MY WORK</p>

        <h2>Featured <span>Projects.</span></h2>

        <div className="projects-grid">

          <div className="project-card">
            <div className="project-number">01</div>

            <h3>Dripa — Fashion Store</h3>

            <p>
              A modern streetwear fashion website built with React,
              featuring product search, category filters, shopping cart,
              quantity controls and checkout interaction.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
             <a
             href="http://localhost:5173"
             target="_blank"
             rel="noreferrer"
                >
  View Project →
</a>
          </div>

          <div className="project-card">
            <div className="project-number">02</div>

            <h3>Student Management System</h3>

            <p>
              A Django-based student management application for managing
              student information, records and database operations.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>Django</span>
              <span>MySQL</span>
            </div>
            <a
  href="#"
  onClick={(e) => e.preventDefault()}
>
  Coming Soon →
</a>
          </div>

          <div className="project-card">
            <div className="project-number">03</div>

            <h3>Personal Portfolio</h3>

            <p>
              A responsive personal portfolio website showcasing my
              skills, projects and experience as a full stack developer.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>CSS</span>
            </div>
            <a
  href="#home"
>
  View Portfolio →
</a>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <p className="section-label">CONTACT</p>

        <h2>Let's build something <span>great.</span></h2>

        <p>
          Have a project idea or opportunity? Feel free to get in touch.
        </p>

        <a
          href="mailto:krithik2005@gmail.com"
          className="btn primary"
        >
          Get In Touch
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Kiruthik Roshan. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;