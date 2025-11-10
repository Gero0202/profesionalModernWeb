'use client'

import { motion } from "framer-motion";
import styles from "@/app/css/landing.module.css";

interface LandingProps {
    name: string;
    roles: string[];
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    image: string;
}

export const Landing: React.FC<LandingProps> = ({
    name,
    roles,
    description,
    ctaPrimary,
    ctaSecondary,
    image,
}) => {
    return (
        <section className={styles.hero}>
            {/* TEXT */}
            <motion.div
                className={styles.textContainer}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <h1 className={styles.title}>
                    Hola, soy <span className={styles.highlight}>{name}</span>
                </h1>

                {/* ROLES */}
                <motion.div
                    className={styles.roles}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {roles.map((role, i) => (
                        <motion.span
                            key={i}
                            className={styles.role}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.3 }}
                            viewport={{ once: false, amount: 0.4 }}

                        >
                            {role}
                        </motion.span>
                    ))}
                </motion.div>

                <p className={styles.description}>{description}</p>

                {/* BUTTONS */}
                <div className={styles.buttons}>
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        className={styles.primaryBtn}
                    >
                        {ctaPrimary}
                    </motion.a>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        className={styles.secondaryBtn}
                    >
                        {ctaSecondary}
                    </motion.a>
                </div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
                className={styles.imageContainer}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className={styles.imageWrapper}>
                    <motion.img
                        src={image}
                        alt={name}
                        className={styles.image}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    />

                    {/* Floating decorative shape */}
                    <motion.div
                        className={styles.floatingShape}
                        animate={{ y: [0, -25, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
};
