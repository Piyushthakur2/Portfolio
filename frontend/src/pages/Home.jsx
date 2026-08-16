import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";

function Home() {
    return (
        <div className="min-h-screen bg-[#f7f7f5] text-zinc-950">

            <Navbar />

            <main>

                {/* Hero */}

                <Hero />


                {/* Selected Work Preview */}

                <Projects />

            </main>

        </div>
    );
}

export default Home;