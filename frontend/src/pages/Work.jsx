import Navbar from "../components/layout/Navbar";
import Projects from "../components/sections/Projects";

function Work() {
    return (
        <div className="min-h-screen bg-[#f7f7f5]">

            <Navbar />

            <main>
                <Projects />
            </main>

        </div>
    );
}

export default Work;