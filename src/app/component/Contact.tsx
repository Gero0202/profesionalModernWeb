'use client'

import { motion } from "framer-motion";
import styles from "@/app/css/contact.module.css";
import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export const ContactSection: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const email = "doctor@example.com"; // reemplazá con el real

    const handleCopy = async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.section
            className={styles.contactSection}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className={styles.content}>
                <h2 className={styles.title}>¿Querés solicitar un turno?</h2>
                <p className={styles.subtitle}>
                    Comunicate por WhatsApp o escribinos por email.
                </p>

                <div className={styles.buttons}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className={styles.whatsappBtn}
                    >
                        <FaWhatsapp className={styles.icon} />
                        WhatsApp
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className={styles.emailBtn}
                        onClick={handleCopy}
                    >
                        <FaEnvelope className={styles.icon} />
                        {copied ? "¡Copiado!" : "doctor@example.com"}
                    </motion.button>
                </div>
            </div>
        </motion.section>
    );
};
