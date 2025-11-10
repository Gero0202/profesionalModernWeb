'use client'

import { motion } from "framer-motion";
import styles from "@/app/css/about.module.css";
import { ReactElement } from "react";

interface Highlight {
    icon: ReactElement;
    label: string;
}

interface AboutProps {
    title: string;
    description: string;
    highlights: Highlight[];
    image: string;
    ctaText?: string;
}

export const About: React.FC<AboutProps> = ({
    title,
    description,
    highlights,
    image,
    ctaText,
}) => {
    return (
        <section className={styles.about}>
            <motion.div
                className={styles.imageContainer}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
            >
                <img src={image} alt={title} className={styles.image} />
            </motion.div>

            <motion.div
                className={styles.textContainer}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false }}
            >
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>

                <ul className={styles.highlights}>
                    {highlights.map((item, index) => (
                        <motion.li
                            key={index}
                            className={styles.highlightItem}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: false }}
                        >
                             <span className={styles.icon}>{item.icon}</span>
                            <span>{item.label}</span>
                        </motion.li>
                    ))}
                </ul>

                {ctaText && (
                    <motion.a
                        href="#about"
                        className={styles.button}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {ctaText}
                    </motion.a>
                )}
            </motion.div>
        </section>
    );
};
