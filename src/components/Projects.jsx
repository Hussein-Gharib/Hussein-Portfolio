import { motion } from "framer-motion";

const projects = [
  {
    title: "ScoreTicket",
    description:
      "A full-stack football ticket booking platform where users can browse upcoming matches, view ticket categories, book tickets, and manage their purchased tickets. The application also includes an admin panel for managing teams, stadiums, matches, and ticket categories.",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
      "CSS",
    ],
    github: "https://github.com/Hussein-Gharib/ScoreTicket",
  },
  {
    title: "FinTrack",
    description:
      "A full-stack personal finance tracker that helps users manage income, expenses, categories, and monthly financial insights through a clean dashboard interface. It includes authentication, protected routes, charts, transaction management, filtering, and sorting.",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
      "Recharts",
    ],
    github: "https://github.com/Hussein-Gharib/Fintrack-App",
  },
  {
    title: "Ecommerce Full Stack API",
    description:
      "A full-stack e-commerce project focused on building a backend API with Node.js, Express, and PostgreSQL. The project includes separated frontend and backend structure and demonstrates API development for an online store.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JavaScript",
      "CSS",
    ],
    github: "https://github.com/Hussein-Gharib/ecommerce-Full-Stack-",
  },
];

function Projects() {
  return (
    <motion.section
      className="section projects"
      id="projects"
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75 }}
    >
      <div className="section-header">
        <p className="section-label">Projects</p>
        <h2>Featured projects that show my full stack development skills</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.12 }}
          >
            <div className="project-number">0{index + 1}</div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-tags">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <a href={project.github} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;