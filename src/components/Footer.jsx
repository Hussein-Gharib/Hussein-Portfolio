import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Hussein Gharib. All rights reserved.</p>

      <div className="footer-links">
        <a
          href="https://github.com/Hussein-Gharib"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="YOUR_LINKEDIN_HERE"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>

      <p>Built with React, Vite, and CSS.</p>
    </footer>
  );
}

export default Footer;