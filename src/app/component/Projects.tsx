'use client'

import { motion } from "framer-motion";
import styles from "@/app/css/projects.module.css";

interface Project {
  image: string;
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    image: "https://i.pinimg.com/736x/0a/24/a0/0a24a0beb7d5b93fea2e0f10b3da0e62.jpg",
    title: "Atención Cardiológica",
    description:
      "Diagnóstico y tratamiento de enfermedades cardiovasculares con tecnología avanzada.",
  },
  {
    image: "https://i.pinimg.com/736x/b0/f1/45/b0f14575e316106c642bfb0509101ed8.jpg",
    title: "Medicina Preventiva",
    description:
      "Controles integrales y asesoramiento personalizado para prevenir patologías.",
  },
  {
    image: "https://i.pinimg.com/1200x/92/c3/0a/92c30a079652e436e5571f901a2dec8a.jpg",
    title: "Chequeos Generales",
    description:
      "Evaluaciones médicas completas adaptadas a cada paciente.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProjectsSection() {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: false, amount: 0.3 }}
          className={styles.title}
        >
          Áreas de Especialización
        </motion.h2>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} />
                <div className={styles.overlay}>
                  <h3 className={styles.h3}>{project.title}</h3>
                  <p className={styles.p}>{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.cta}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <a href="/proyectos" className={styles.button}>
            Ver más información
          </a>
        </motion.div>
      </div>
    </section>
  );
}
