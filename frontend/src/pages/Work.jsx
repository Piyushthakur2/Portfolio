import Navbar from "../components/layout/Navbar";
import Projects from "../components/sections/Projects";
import SEO from "../components/SEO";

function Work() {
    return (
        <div className="min-h-screen bg-[#f7f7f5]">

            <SEO
                title="Projects — Piyush Thakur"
                description="Explore software projects built by Piyush Thakur across full-stack development, AI, real-time systems and machine learning."
                path="/work"
            />

            <Navbar />

            <main>
                <Projects />
            </main>

        </div>
    );
}

export default Work;