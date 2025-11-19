"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "@/app/css/contactPage.module.css";
import { FaChevronLeft, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export default function Contacto() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("doctor@mail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <>
            <Link href="/" className={styles.backButton}><FaChevronLeft/></Link>
            <section className={styles.container}>

                {/* Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className={styles.title}>Contacto</h1>
                    <p className={styles.subtitle}>
                        Ponete en comunicación para consultas, turnos o información.
                    </p>
                </motion.div>

                {/* Tarjetas de contacto */}
                <motion.div
                    className={styles.cards}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >

                    {/* WhatsApp */}
                    <a href="#" className={styles.card}>
                        <div className={styles.iconCircle}>
                            <FaWhatsapp className={styles.iconWhatsapp} />
                        </div>
                        <div>
                            <h3 className={styles.cardTitle}>WhatsApp</h3>
                            <p className={styles.cardText}>Enviar mensaje directo</p>
                        </div>
                    </a>

                    {/* Email - Copiar */}
                    <button className={styles.card} onClick={handleCopy}>
                        <div className={styles.iconCircle}>
                             <MdEmail className={styles.iconMail} />
                        </div>
                        <div>
                            <h3 className={styles.cardTitle}>Correo</h3>
                            <p className={styles.cardText}>
                                {copied ? "¡Copiado!" : "doctor@mail.com"}
                            </p>
                        </div>
                    </button>

                    {/* Telefono */}
                    <a href="#" className={styles.card}>
                        <div className={styles.iconCircle}>
                            <FiPhone className={styles.iconPhone} />
                        </div>
                        <div>
                            <h3 className={styles.cardTitle}>Teléfono</h3>
                            <p className={styles.cardText}>+54 9 11 2233 4455</p>
                        </div>
                    </a>

                </motion.div>

                {/* Formulario */}
                <motion.form
                    className={styles.form}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <h2 className={styles.formTitle}>Enviar mensaje</h2>

                    <input className={styles.input} placeholder="Nombre completo" />
                    <input className={styles.input} placeholder="Correo electrónico" />
                    <textarea
                        className={styles.textarea}
                        placeholder="Escribí tu mensaje..."
                    />

                    <button className={styles.submitButton}>Enviar</button>
                </motion.form>
            </section>
        </>
    );
}
