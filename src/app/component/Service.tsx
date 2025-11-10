'use client'

import { motion } from "framer-motion";
import { FaStethoscope, FaClipboardList, FaUserMd } from "react-icons/fa"; // Ejemplo médico
import styles from "@/app/css/service.module.css";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <FaStethoscope />,
    title: "Consultas Médicas",
    description:
      "Atención personalizada con enfoque integral para cada paciente.",
  },
  {
    icon: <FaClipboardList />,
    title: "Estudios y Diagnóstico",
    description:
      "Evaluaciones detalladas para un tratamiento preciso y seguro.",
  },
  {
    icon: <FaUserMd />,
    title: "Seguimiento y Control",
    description:
      "Acompañamiento continuo para garantizar tu bienestar a largo plazo.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" },
};

export default function Service() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className={styles.title}
        >
          Mis Servicios
        </motion.h2>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.titleService}>{service.title}</h3>
              <p className={styles.pDescription}>{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.cta}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <a href="#proyectos" className={styles.button}>
            Ver más
          </a>
        </motion.div>
      </div>
    </section>
  );
}
