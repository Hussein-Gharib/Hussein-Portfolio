import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="hero-badge">
          Available for Junior Developer Opportunities
        </p>

        <h1>
          Hi, I’m <span>Hussein Gharib</span>
        </h1>

        <h2>Junior Full Stack Web Developer</h2>

        <p className="hero-description">
          I build modern, responsive, and user-friendly web applications using
          React, Node.js, Express, and PostgreSQL.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-card"
        initial={{ opacity: 0, scale: 0.92, y: 45 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25 }}
      >
        <div className="card-line">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        <pre>
{`const developer = {
  name: "Hsein Gharib",
  role: "Full Stack Developer",
  location: "Germany",
  skills: ["React", "Node.js", "PostgreSQL"]
};`}
        </pre>
      </motion.div>
    </section>
  );
}

export default Hero;