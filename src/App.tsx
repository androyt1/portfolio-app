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
            duration: 1000, // animation duration
            once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <div className='max-w-6xl mx-auto '>
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
