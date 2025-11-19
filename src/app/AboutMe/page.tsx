"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "@/app/css/AboutPage.module.css";

import {
    FaUserMd,
    FaHeartbeat,
    FaHandHoldingMedical,
    FaBookMedical,
    FaStethoscope,
    FaChevronRight,
    FaChevronLeft,
} from "react-icons/fa";
import Link from "next/link";

export default function SobreMiPage() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const inView1 = useInView(ref1, { once: false, margin: "-50px" });
    const inView2 = useInView(ref2, { once: false, margin: "-50px" });
    const inView3 = useInView(ref3, { once: false, margin: "-50px" });
    const inView4 = useInView(ref4, { once: false, margin: "-50px" });

    return (
        <>
            <Link href="/" className={styles.backButton}>
                <FaChevronLeft />
            </Link>
            <section className={styles.container}>

                {/* HERO INTRO */}
                <motion.div
                    className={styles.hero}
                    ref={ref1}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.heroText}>
                        <h1 className={styles.title}>Sobre el Dr. Juan Pérez</h1>
                        <p className={styles.subtitle}>
                            Médico clínico con más de 10 años de experiencia
                            brindando atención integral, humana y basada en evidencia.
                        </p>
                    </div>

                    <div className={styles.heroImgWrapper}>
                        <motion.img
                            src="https://i.pinimg.com/736x/f0/3f/be/f03fbe3f11e73afee540301ad0de3bfc.jpg"
                            alt="Doctor"
                            className={styles.heroImg}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </motion.div>


                {/* FORMACION ACADEMICA */}
                <motion.div
                    className={styles.block}
                    ref={ref2}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.sectionTitle}>Formación Académica</h2>

                    <div className={styles.timeline}>
                        <div className={styles.item}>
                            <FaBookMedical className={styles.icon} />
                            <div>
                                <h4>Médico - Universidad Nacional</h4>
                                <p>Promoción 2012</p>
                            </div>
                        </div>

                        <div className={styles.item}>
                            <FaStethoscope className={styles.icon} />
                            <div>
                                <h4>Especialización en Clínica Médica</h4>
                                <p>Hospital General - 2013 a 2016</p>
                            </div>
                        </div>

                        <div className={styles.item}>
                            <FaUserMd className={styles.icon} />
                            <div>
                                <h4>Residencia clínica completa</h4>
                                <p>4 años de formación intensiva</p>
                            </div>
                        </div>
                    </div>
                </motion.div>


                {/* ENFOQUE Y VALORES */}
                <motion.div
                    className={styles.block}
                    ref={ref3}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.sectionTitle}>Mi Enfoque Profesional</h2>

                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <FaHeartbeat className={styles.valueIcon} />
                            <h4>Medicina humana</h4>
                            <p>Escucho, acompaño y priorizo el bienestar integral.</p>
                        </div>

                        <div className={styles.valueCard}>
                            <FaHandHoldingMedical className={styles.valueIcon} />
                            <h4>Diagnóstico preciso</h4>
                            <p>Basado en evidencia y actualizado científicamente.</p>
                        </div>

                        <div className={styles.valueCard}>
                            <FaBookMedical className={styles.valueIcon} />
                            <h4>Actualización constante</h4>
                            <p>Participación en congresos y formación continua.</p>
                        </div>
                    </div>
                </motion.div>


                {/* TRAYECTORIA */}
                <motion.div
                    className={styles.block}
                    ref={ref4}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.sectionTitle}>Experiencia y Trayectoria</h2>

                    <ul className={styles.trayectoriaList}>
                        <li>Más de 10 años de experiencia en consultorio médico.</li>
                        <li>Atención en hospitales y clínicas de alta complejidad.</li>
                        <li>Diagnóstico y seguimiento de enfermedades crónicas.</li>
                        <li>Participación en congresos nacionales e internacionales.</li>
                    </ul>
                </motion.div>


                {/* CTA FINAL */}
                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <a href="/contacto" className={styles.ctaButton}>
                        Contactar al Doctor <FaChevronRight />
                    </a>
                </motion.div>
            </section>
        </>
    );
}
