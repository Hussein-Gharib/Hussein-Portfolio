import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="section about"
      id="about"
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75 }}
    >
      <div className="section-header">
        <p className="section-label"><b>About Me</b></p>
        <h2>From passion for IT to Full Stack Development</h2>
      </div>

      <div className="about-card">
        <div className="about-text">
          <p>
            Hi, my name is <strong>Hussein Gharib</strong>, and I am a{" "}
            <strong>Junior Full Stack Web Developer</strong> based in Germany.
            I was born in Germany in 2005, spent my first year here, and then
            grew up in Lebanon from 2006 until 2020. In 2020, I moved back to
            Germany, where I completed my web development studies at an academy.
          </p>

          <p>
            Since I was young, I have always been interested in IT, computers,
            and technology. Over time, this interest became a real passion and
            the career path I wanted to follow.
          </p>

          <p>
            I enjoy creating clean, responsive, and user-friendly websites,
            solving problems, and continuously improving my skills.
          </p>
        </div>

        <div className="about-stats">
          <div>
            <span>2020</span>
            <p>Moved back to Germany</p>
          </div>
          <div>
            <span>Full Stack</span>
            <p>Frontend & Backend development</p>
          </div>
          <div>
            <span>Junior</span>
            <p>Open to developer opportunities</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;