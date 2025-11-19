'use client';

import React from "react";
import { motion } from "framer-motion";
import {
    FaStethoscope,
    FaHeartbeat,
    FaNotesMedical,
    FaPrescriptionBottleAlt,
    FaHandsHelping,
    FaUserMd,
    FaChevronLeft,
} from "react-icons/fa";
import styles from "@/app/css/pageService.module.css";
import Link from "next/link"; 

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const services: Service[] = [
    {
        icon: <FaStethoscope />,
        title: "Evaluación clínica integral",
        description:
            "Consulta inicial completa para diagnóstico preciso y plan de atención personalizado.",
    },
    {
        icon: <FaHeartbeat />,
        title: "Atención cardiovascular",
        description:
            "Estudios y tratamiento de patologías cardiovasculares con seguimiento personalizado.",
    },
    {
        icon: <FaNotesMedical />,
        title: "Chequeos preventivos",
        description:
            "Controles periódicos y screening para prevención temprana de enfermedades.",
    },
    {
        icon: <FaPrescriptionBottleAlt />,
        title: "Manejo de crónicos",
        description:
            "Planes de tratamiento y seguimiento para enfermedades crónicas y control a largo plazo.",
    },
    {
        icon: <FaHandsHelping />,
        title: "Planes de bienestar",
        description:
            "Asesoramiento nutricional, actividad física y estrategias integrales para mejorar calidad de vida.",
    },
    {
        icon: <FaUserMd />, 
        title: "Consulta médica general",
        description:
            "Atención integral para diagnóstico y tratamiento de diversas patologías comunes.",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12 },
    }),
    hover: { y: -8, boxShadow: "0 12px 30px rgba(0,0,0,0.12)" },
};

export const PageServices: React.FC = () => {
    return (
        <main className={styles.page}>
            <Link href="/" className={styles.backButton}>
                <FaChevronLeft/>
            </Link>
            <motion.header
                className={styles.header}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.3 }}
            >

                <div className={styles.headerInner}>

                    <h1 className={styles.title}>Servicios Médicos</h1>
                    <p className={styles.lead}>
                        Atención cercana y profesional. A continuación encontrarás las áreas
                        donde brindo atención y el enfoque que aplico en cada una.
                    </p>
                </div>
            </motion.header>

            <section className={styles.gridSection}>
                <div className={styles.grid}>
                    {services.map((s, idx) => (
                        <motion.article
                            key={s.title}
                            className={styles.card}
                            custom={idx}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: false, amount: 0.25 }}
                        >
                            <div className={styles.cardIcon}>{s.icon}</div>
                            <h3 className={styles.cardTitle}>{s.title}</h3>
                            <p className={styles.cardText}>{s.description}</p>
                            <div className={styles.cardActions}>
                                <Link href="/Contact" className={styles.cardButton}>
                                    Solicitar consulta
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            <motion.section
                className={styles.benefits}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1 }}
            >
                <h2 className={styles.benefitsTitle}>Por qué elegir esta atención</h2>
                <div className={styles.benefitsList}>
                    <div className={styles.benefitItem}>
                        <strong>Experiencia comprobada</strong>
                        <span>Atención basada en años de práctica y evidencia clínica.</span>
                    </div>
                    <div className={styles.benefitItem}>
                        <strong>Enfoque humano</strong>
                        <span>Escucha activa y explicaciones claras para cada paciente.</span>
                    </div>
                    <div className={styles.benefitItem}>
                        <strong>Seguimiento continuo</strong>
                        <span>Planes de control diseñados para acompañarte en el tiempo.</span>
                    </div>
                </div>

                <div className={styles.ctaWrap}>

                    <Link href="/Contact" className={styles.ctaSecondary}>
                        Contacto rápido
                    </Link>
                </div>
            </motion.section>
        </main>
    );
};

export default PageServices;
