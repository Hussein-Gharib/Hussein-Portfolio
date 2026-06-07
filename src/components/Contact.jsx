import { motion } from "framer-motion";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { HiOutlineFolderOpen } from "react-icons/hi2";

function Contact() {
  return (
    <motion.section
      className="section contact"
      id="contact"
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75 }}
    >
      <div className="contact-card">
        <p className="section-label">Contact</p>

        <h2>Let’s build something great together</h2>

        <p>
          I am currently open to opportunities as a Junior Full Stack Web
          Developer. Feel free to contact me if you would like to work together
          or learn more about my projects.
        </p>

        <div className="contact-links">
          <a href="mailto:YOUR_EMAIL_HERE">
            <FaEnvelope />
            Email Me
          </a>

          <a
            href="https://github.com/Hussein-Gharib"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a href="#projects">
            <HiOutlineFolderOpen />
            View Projects
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;