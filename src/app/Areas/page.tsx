"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaStethoscope,
    FaHeartbeat,
    FaNotesMedical,
    FaHandsHelping,
    FaChevronLeft,
} from "react-icons/fa";
import styles from "@/app/css/areasPage.module.css";

interface Area {
    id: string;
    icon: React.ReactNode;
    title: string;
    intro: string;
    bullets: string[];
    approach: string;
}

const AREAS: Area[] = [
    {
        id: "medicina-general",
        icon: <FaStethoscope />,
        title: "Medicina General",
        intro:
            "Atención integral para toda la familia: consultas, diagnósticos iniciales y seguimiento.",
        bullets: [
            "Consultas para síntomas agudos y crónicos",
            "Evaluación general y derivaciones cuando son necesarias",
            "Vacunación y controles preventivos",
        ],
        approach:
            "En medicina general priorizamos la escucha activa, el abordaje global y la coordinación con especialistas según cada caso.",
    },
    {
        id: "diagnostico-prevencion",
        icon: <FaNotesMedical />,
        title: "Diagnóstico y Prevención",
        intro:
            "Chequeos periódicos y estudio de factores de riesgo para detectar problemas tempranamente.",
        bullets: [
            "Controles de rutina y screening (laboratorio, ECG si aplica)",
            "Planes de prevención personalizados",
            "Asesoramiento sobre estilos de vida saludables",
        ],
        approach:
            "Nuestro foco es anticiparnos a las enfermedades con estrategias preventivas basadas en evidencia y adaptadas al paciente.",
    },
    {
        id: "cardiologia",
        icon: <FaHeartbeat />,
        title: "Atención Cardiovascular",
        intro:
            "Evaluación y manejo de factores de riesgo y enfermedades cardiovasculares.",
        bullets: [
            "Detección y control de hipertensión y dislipemias",
            "Interpretación básica de electrocardiogramas",
            "Plan de seguimiento para pacientes con enfermedad cardiovascular",
        ],
        approach:
            "Tratamiento integral y seguimiento continuo, combinando intervenciones médicas y cambios en el estilo de vida.",
    },
    {
        id: "salud-integral",
        icon: <FaHandsHelping />,
        title: "Planes de Bienestar y Salud Integral",
        intro:
            "Programas que combinan nutrición, actividad física y seguimiento médico para mejorar la calidad de vida.",
        bullets: [
            "Planes personalizados de salud y bienestar",
            "Acompañamiento en adherencia a tratamientos",
            "Monitoreo y ajustes periódicos",
        ],
        approach:
            "Trabajamos de forma multidisciplinaria para diseñar planes sostenibles y centrados en la persona.",
    },
];

export default function AreasPage() {
    return (
        <>
            <Link href="/" className={styles.backButton} aria-label="Volver al inicio">
                <FaChevronLeft />
            </Link>
            <main className={styles.page}>

                <motion.header
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className={styles.title}>Áreas de Especialización</h1>
                    <p className={styles.lead}>
                        Conocé en profundidad cada área de atención y el enfoque profesional aplicado en la consulta.
                    </p>
                </motion.header>

                <section className={styles.gridSection}>
                    <div className={styles.grid}>
                        {AREAS.map((area, idx) => (
                            <motion.article
                                key={area.id}
                                className={styles.card}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.25 }}
                                transition={{ duration: 0.6, delay: idx * 0.08 }}
                            >
                                <div className={styles.cardHead}>
                                    <div className={styles.iconWrap}>{area.icon}</div>
                                    <h3 className={styles.cardTitle}>{area.title}</h3>
                                </div>

                                <p className={styles.cardIntro}>{area.intro}</p>

                                <ul className={styles.cardList}>
                                    {area.bullets.map((b, i) => (
                                        <li key={i} className={styles.cardListItem}>
                                            • {b}
                                        </li>
                                    ))}
                                </ul>

                                <div className={styles.cardApproach}>
                                    <strong>Enfoque:</strong> <span>{area.approach}</span>
                                </div>

                                <div className={styles.cardActions}>
                                    <Link href="/Contact" className={styles.primaryBtn}>
                                        Solicitar turno
                                    </Link>

                                    <a href="#" className={styles.secondaryBtn} aria-label={`Consultar por WhatsApp - ${area.title}`}>
                                        Consultar por WhatsApp
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
