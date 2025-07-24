import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Services from "@/components/Services";
import Vision from "@/components/Vision";
import Partners from "@/components/Partners";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
   <>
   <Banner />
   <About />
   <Projects />
   <Services />
   <Vision />
   <Partners />
   <Contact />
   <Footer />
   </>
  );
}
