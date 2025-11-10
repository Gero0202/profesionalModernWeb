import Image from "next/image";
import styles from "./page.module.css";
import { Footer } from "./component/Footer";
import { Landing } from "./component/Landing";
import { About } from "./component/About";
import { FaRegClock, FaTools, FaHeart } from 'react-icons/fa';
import Service from "./component/Service";
import ProjectsSection from "./component/Projects";
import Testimonials from "./component/Testimonial";
import { ContactSection } from "./component/Contact";




export default function Home() {
  return (
    <>
      <Landing
        name="Dr. Juan Pérez"
        roles={["Médico Clínico", "Especialista en Medicina General"]}
        description="Más de 15 años de experiencia ayudando a pacientes a mejorar su calidad de vida. Consultas presenciales y online."
        ctaPrimary="Ver Servicios"
        ctaSecondary="Contactar"
        image="https://i.pinimg.com/736x/0e/4a/11/0e4a111c994200dc7b68d4c210fd659b.jpg"
      />

      <About
        title="Sobre mí"
        description="Soy un profesional apasionado por ayudar a las personas a lograr sus objetivos. Me enfoco en brindar soluciones efectivas y personalizadas."
        image="https://i.pinimg.com/736x/e0/40/cf/e040cf82b889d095dde842da250b75d0.jpg"
        highlights={[
          { icon: <FaRegClock />, label: "10+ años de experiencia" },
          { icon: <FaTools />, label: "Especialista en proyectos personalizados" },
          { icon: <FaHeart />, label: "Compromiso y empatía" },
        ]}
        ctaText="Conocé más"
      />

      <Service />
      <ProjectsSection />
      <Testimonials />
      <ContactSection />


      <Footer />
    </>
  );
}
