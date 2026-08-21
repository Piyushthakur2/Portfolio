import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import SEO from "../components/SEO";

function Home() {
    return (
        <>
            <SEO
                title="Piyush Thakur — Software Engineer"
                description="Portfolio of Piyush Thakur, a software engineer building full-stack applications and AI-powered systems."
                path="/"
            />

            <Navbar />

            <main>
                <Hero />
                <Projects />
            </main>
        </>
    );
}

export default Home;