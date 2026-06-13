import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

function Certificates() {
  const certificates = [
    {
      title: "Web Development – Full Stack Developer",
      issuer: "IRAD Academy GmbH",
      description:
        "Successfully completed a Full Stack Web Development program covering frontend development, backend development, databases, DevOps tools, and agile methodologies.",
    },
  ];

  return (
    <motion.section
      className="section certificates"
      id="certificates"
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75 }}
    >
      <div className="section-header">
        <p className="section-label"><b>Certificates</b></p>
        <h2>Professional certificates and completed programs</h2>
      </div>

      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <motion.article
            className="certificate-card"
            key={certificate.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="certificate-icon">
              <FaCertificate />
            </div>

            <div>
              <h3>{certificate.title}</h3>
              <p className="certificate-issuer">{certificate.issuer}</p>
              <p className="certificate-description">
                {certificate.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default Certificates;