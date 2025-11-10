'use client'

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import styles from "@/app/css/testimonial.module.css";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María López",
    role: "Paciente",
    text: "El Dr. Pérez me acompañó durante mi tratamiento con empatía y profesionalismo. Siempre se tomó el tiempo para explicar cada paso con claridad.",
  },
  {
    id: 2,
    name: "Carlos Gómez",
    role: "Paciente",
    text: "Excelente atención. Me sentí escuchado y comprendido en todo momento. Muy recomendable.",
  },
  {
    id: 3,
    name: "Clínica Central",
    role: "Colaboración médica",
    text: "Trabajamos junto al Dr. Pérez en programas de salud preventiva. Su compromiso y dedicación son ejemplares.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonialsSection}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Testimonios y colaboraciones
      </motion.h2>

      <div className={styles.grid}>
        {testimonials.map((t) => (
          <motion.div
            key={t.id}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: t.id * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <FaQuoteLeft className={styles.quoteIcon} />
            <p className={styles.text}>"{t.text}"</p>
            <div className={styles.info}>
              <h4>{t.name}</h4>
              <span>{t.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
