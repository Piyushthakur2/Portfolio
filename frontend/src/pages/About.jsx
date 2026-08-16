import Navbar from "../components/layout/Navbar";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import { motion } from "framer-motion";

function About() {
    return (
        <div className="min-h-screen bg-[#111214] text-white">

            <Navbar />

            <main>

                {/* ================================================= */}
                {/* About Introduction */}
                {/* ================================================= */}

                <section
                    className="
                        relative
                        min-h-[90vh]
                        overflow-hidden
                        px-5
                        pb-20
                        pt-32
                        sm:px-10
                        sm:pb-24
                        sm:pt-44
                        lg:px-16
                        lg:pb-32
                        lg:pt-48
                    "
                >

                    {/* ============================================= */}
                    {/* Ambient glow */}
                    {/* ============================================= */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-40
                            top-10
                            h-[450px]
                            w-[450px]
                            rounded-full
                            bg-[#7f8fff]/[0.045]
                            blur-[150px]
                        "
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -left-40
                            top-60
                            h-[400px]
                            w-[400px]
                            rounded-full
                            bg-white/[0.02]
                            blur-[130px]
                        "
                    />


                    {/* ============================================= */}
                    {/* Subtle grid */}
                    {/* ============================================= */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            opacity-[0.025]
                        "
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                            backgroundSize: "80px 80px",
                        }}
                    />


                    {/* ============================================= */}
                    {/* Content */}
                    {/* ============================================= */}

                    <div
                        className="
                            relative
                            mx-auto
                            flex
                            min-h-[65vh]
                            max-w-6xl
                            items-center
                        "
                    >

                        <div className="max-w-5xl">

                            {/* Label */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 15,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
                                    flex
                                    items-center
                                    gap-3
                                "
                            >

                                <span
                                    className="
                                        h-px
                                        w-8
                                        bg-[#7f8fff]/70
                                    "
                                />

                                <p
                                    className="
                                        text-[11px]
                                        uppercase
                                        tracking-[0.3em]
                                        text-[#7f8fff]
                                    "
                                >
                                    About me
                                </p>

                            </motion.div>


                            {/* Heading */}

                            <div className="overflow-hidden">

                                <motion.h1
                                    initial={{
                                        opacity: 0,
                                        y: "100%",
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.15,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="
                                        mt-7
                                        max-w-5xl
                                        text-[3.35rem]
                                        font-medium
                                        leading-[0.92]
                                        tracking-[-0.06em]
                                        sm:text-7xl
                                        lg:text-[100px]
                                    "
                                >
                                    Building software
                                    <br />
                                    with{" "}
                                    <span className="text-zinc-600">
                                        purpose.
                                    </span>
                                </motion.h1>

                            </div>


                            {/* Description */}

                            <motion.p
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.45,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
                                    mt-7
                                    max-w-2xl
                                    sm:mt-10
                                    text-base
                                    leading-7
                                    text-zinc-400
                                    sm:text-lg
                                    sm:leading-8
                                    lg:text-xl
                                "
                            >
                                I'm Piyush Thakur, a Computer Science
                                graduate interested in building
                                full-stack applications and working
                                with AI and machine learning.
                            </motion.p>


                            {/* Bottom metadata */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.7,
                                }}
                                className="
                                    mt-10
                                    flex
                                    flex-col
                                    items-start
                                    gap-5
                                    sm:mt-14
                                    sm:flex-row
                                    sm:flex-wrap
                                    sm:items-center
                                    sm:gap-x-10
                                    sm:gap-y-4
                                "
                            >

                                <div>

                                    <p
                                        className="
                                            text-[10px]
                                            uppercase
                                            tracking-[0.25em]
                                            text-zinc-600
                                        "
                                    >
                                        Focus
                                    </p>

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            text-zinc-400
                                        "
                                    >
                                        Full-stack · AI · ML
                                    </p>

                                </div>


                                <div>

                                    <p
                                        className="
                                            text-[10px]
                                            uppercase
                                            tracking-[0.25em]
                                            text-zinc-600
                                        "
                                    >
                                        Based in
                                    </p>

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            text-zinc-400
                                        "
                                    >
                                        India
                                    </p>

                                </div>

                            </motion.div>

                        </div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* Experience */}
                {/* ================================================= */}

                <div className="overflow-hidden">
                    <Experience />
                </div>


                {/* ================================================= */}
                {/* Skills */}
                {/* ================================================= */}

                <div className="overflow-hidden">
                    <Skills />
                </div>

            </main>

        </div>
    );
}

export default About;