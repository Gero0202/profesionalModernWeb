'use client'

import { motion } from "framer-motion";
import styles from "@/app/css/footer.module.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.container}>
        {/* Nombre / Logo */}
        <div className={styles.brand}>
          <h2>Dr. Juan Pérez</h2>
          <p>Medicina Integral y Bienestar</p>
        </div>

        {/* Redes */}
        <div className={styles.socials}>
          <a href="#" aria-label="LinkedIn" className={styles.icon}>
            <FaLinkedin />
          </a>
          <a href="#" aria-label="Instagram" className={styles.icon}>
            <FaInstagram />
          </a>
        </div>

        {/* Info de contacto */}
        <div className={styles.contact}>
          <p>📧 contacto@drjuanperez.com</p>
          <p>📞 +54 9 11 1234 5678</p>
        </div>
      </div>

      <div className={styles.copy}>
        © {new Date().getFullYear()} Dr. Juan Pérez — Todos los derechos reservados.
      </div>
    </motion.footer>
  );
};
