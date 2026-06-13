import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiSass,
  SiDocker,
  SiJira,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    {
      name: "CSS/SCSS",
      subtitle: "BEM",
      icon: (
        <div className="skill-icon-group">
          <FaCss3Alt />
          <SiSass />
        </div>
      ),
    },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Python", icon: <FaPython /> },
    { name: "DevOps Tools", icon: <SiDocker /> },
    { name: "Agile Methods", icon: <SiJira /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <motion.section
      className="section skills"
      id="skills"
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75 }}
    >
      <div className="section-header">
        <p className="section-label"><b>Skills</b></p>
        <h2>Technologies I use to build full stack web applications</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={skill.name}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <span>{skill.name}</span>
            {skill.subtitle && <p className="skill-subtitle">{skill.subtitle}</p>}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;