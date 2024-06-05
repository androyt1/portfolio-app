import { Layout } from "./Layouts/Layout";
import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./Layouts/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className='max-w-7xl mx-auto bg-white  dark:bg-gradient-to-r dark:from-stone-700 dark:to-stone-950 font-inter '>
            <Layout>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
            </Layout>
        </div>
    );
}
