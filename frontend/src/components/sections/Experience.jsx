import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

function Experience() {
    const sectionRef = useRef(null);

    /*
     * Track scroll progress through the experience section.
     */

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 75%", "end 70%"],
    });

    /*
     * Smooth the scroll value so the timeline
     * feels fluid instead of reacting directly
     * to every scroll event.
     */

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 24,
        mass: 0.45,
    });

    const lineHeight = useTransform(
        smoothProgress,
        [0, 1],
        ["0%", "100%"]
    );

    return (
        <section
            ref={sectionRef}
            id="experience"
            className="
                relative
                overflow-hidden
                bg-[#111214]
                px-6
                pb-28
                pt-28
                text-white
                sm:px-10
                lg:px-16
                lg:pb-36
                lg:pt-36
            "
        >

            {/* ========================================================= */}
            {/* Ambient background */}
            {/* ========================================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -left-48
                    top-20
                    h-[520px]
                    w-[520px]
                    rounded-full
                    bg-[#4f6fff]/[0.055]
                    blur-[150px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-48
                    bottom-0
                    h-[520px]
                    w-[520px]
                    rounded-full
                    bg-[#647cff]/[0.045]
                    blur-[150px]
                "
            />

            {/* Subtle grid texture */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.025]
                    [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
                    [background-size:80px_80px]
                "
            />


            <div className="relative mx-auto max-w-6xl">

                {/* ===================================================== */}
                {/* Section header */}
                {/* ===================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 18,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                        mb-16
                        flex
                        items-end
                        justify-between
                        border-b
                        border-white/[0.07]
                        pb-6
                    "
                >

                    <div>

                        <p
                            className="
                                text-[10px]
                                uppercase
                                tracking-[0.3em]
                                text-zinc-600
                            "
                        >
                            Experience
                        </p>

                        <h2
                            className="
                                mt-4
                                text-3xl
                                font-medium
                                tracking-[-0.04em]
                                text-white
                                sm:text-4xl
                            "
                        >
                            Where I&apos;ve worked.
                        </h2>

                    </div>

                    <span
                        className="
                            hidden
                            text-xs
                            tracking-[0.2em]
                            text-zinc-700
                            sm:block
                        "
                    >
                        01
                    </span>

                </motion.div>


                {/* ===================================================== */}
                {/* Main grid */}
                {/* ===================================================== */}

                <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

                    {/* ================================================= */}
                    {/* LEFT — DEVELOPMENT FOCUS */}
                    {/* ================================================= */}

                    <div>

                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 12,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.25,
                            }}
                            transition={{
                                duration: 0.55,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                text-[11px]
                                uppercase
                                tracking-[0.3em]
                                text-[#7f8fff]
                            "
                        >
                            01 / Professional experience
                        </motion.p>


                        <motion.h3
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.25,
                            }}
                            transition={{
                                duration: 0.65,
                                delay: 0.05,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                mt-7
                                max-w-xl
                                text-4xl
                                font-medium
                                leading-[1.03]
                                tracking-[-0.045em]
                                sm:text-5xl
                                lg:text-6xl
                            "
                        >
                            Building software
                            <span className="text-zinc-600">
                                {" "}with an engineering mindset.
                            </span>
                        </motion.h3>


                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 14,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.25,
                            }}
                            transition={{
                                duration: 0.55,
                                delay: 0.15,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                mt-8
                                max-w-md
                                text-sm
                                leading-7
                                text-zinc-400
                                sm:text-base
                            "
                        >
                            My professional experience has given me
                            exposure to real software systems, data
                            workflows, automation and engineering
                            practices while strengthening my foundation
                            in Python, SQL and problem solving.
                        </motion.p>


                        {/* Small visual detail */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                width: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                                width: 64,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.25,
                            }}
                            className="
                                mt-10
                                h-px
                                bg-[#4f6fff]/50
                            "
                        />

                    </div>


                    {/* ================================================= */}
                    {/* RIGHT — EXPERIENCE TIMELINE */}
                    {/* ================================================= */}

                    <div className="relative">

                        {/* Timeline background */}

                        <div
                            className="
                                absolute
                                left-[7px]
                                top-2
                                h-[calc(100%-8px)]
                                w-px
                                bg-white/[0.08]
                            "
                        />


                        {/* Animated timeline */}

                        <motion.div
                            style={{
                                height: lineHeight,
                            }}
                            className="
                                absolute
                                left-[7px]
                                top-2
                                w-px
                                origin-top
                                bg-gradient-to-b
                                from-[#4f6fff]
                                via-[#7182ff]
                                to-transparent
                                will-change-[height]
                            "
                        />


                        {/* Experience content */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                relative
                                pl-12
                            "
                        >

                            {/* Timeline dot */}

                            <motion.div
                                initial={{
                                    scale: 0.7,
                                    opacity: 0,
                                }}
                                whileInView={{
                                    scale: 1,
                                    opacity: 1,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.15,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
                                    absolute
                                    left-0
                                    top-1.5
                                    flex
                                    h-[15px]
                                    w-[15px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-[#4f6fff]/50
                                    bg-[#111214]
                                "
                            >

                                <motion.span
                                    animate={{
                                        opacity: [0.5, 1, 0.5],
                                        scale: [0.85, 1, 0.85],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="
                                        h-1.5
                                        w-1.5
                                        rounded-full
                                        bg-[#6d7dff]
                                    "
                                />

                            </motion.div>


                            {/* Date / type */}

                            <div
                                className="
                                    flex
                                    flex-wrap
                                    items-center
                                    gap-x-4
                                    gap-y-2
                                "
                            >

                                <span
                                    className="
                                        text-xs
                                        font-medium
                                        uppercase
                                        tracking-[0.2em]
                                        text-[#7f8fff]
                                    "
                                >
                                    2026
                                </span>

                                <span className="text-xs text-zinc-700">
                                    —
                                </span>

                                <span
                                    className="
                                        text-xs
                                        uppercase
                                        tracking-[0.18em]
                                        text-zinc-500
                                    "
                                >
                                    Software Development
                                </span>

                            </div>


                            {/* Company */}

                            <motion.h3
                                initial={{
                                    opacity: 0,
                                    y: 12,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.55,
                                    delay: 0.08,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
                                    mt-5
                                    text-3xl
                                    font-medium
                                    tracking-[-0.04em]
                                    sm:text-4xl
                                "
                            >
                                Gemini Solutions
                            </motion.h3>


                            {/* Role */}

                            <p
                                className="
                                    mt-2
                                    text-sm
                                    text-zinc-500
                                "
                            >
                                Software Developer Intern
                            </p>


                            {/* Description */}

                            <p
                                className="
                                    mt-7
                                    max-w-xl
                                    text-sm
                                    leading-7
                                    text-zinc-400
                                    sm:text-base
                                "
                            >
                                Working in a professional software
                                environment with Python, SQL and
                                data-driven workflows, while developing
                                a stronger foundation in engineering,
                                debugging and problem solving.
                            </p>


                            {/* ================================================= */}
                            {/* Development-oriented cards */}
                            {/* ================================================= */}

                            <div
                                className="
                                    mt-10
                                    grid
                                    gap-3
                                    sm:grid-cols-2
                                "
                            >

                                {[
                                    "Python",
                                    "SQL & Databases",
                                    "Automation",
                                    "Software Engineering",
                                ].map((item, index) => (

                                    <motion.div
                                        key={item}
                                        initial={{
                                            opacity: 0,
                                            y: 12,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.2,
                                        }}
                                        transition={{
                                            duration: 0.45,
                                            delay:
                                                0.12 +
                                                index * 0.06,
                                            ease: [
                                                0.22,
                                                1,
                                                0.36,
                                                1,
                                            ],
                                        }}
                                        whileHover={{
                                            y: -3,
                                            transition: {
                                                duration: 0.2,
                                            },
                                        }}
                                        className="
                                            group
                                            rounded-2xl
                                            border
                                            border-white/[0.07]
                                            bg-white/[0.025]
                                            px-4
                                            py-4
                                            backdrop-blur-md
                                            transition-all
                                            duration-300
                                            hover:border-[#4f6fff]/25
                                            hover:bg-white/[0.045]
                                        "
                                    >

                                        <div
                                            className="
                                                flex
                                                items-center
                                                justify-between
                                            "
                                        >

                                            <span
                                                className="
                                                    text-sm
                                                    text-zinc-300
                                                    transition-colors
                                                    duration-300
                                                    group-hover:text-white
                                                "
                                            >
                                                {item}
                                            </span>

                                            {/* <ArrowUpRight
                                                size={14}
                                                className="
                                                    text-zinc-700
                                                    transition-all
                                                    duration-300
                                                    group-hover:-translate-y-0.5
                                                    group-hover:translate-x-0.5
                                                    group-hover:text-[#7f8fff]
                                                "
                                            /> */}

                                        </div>

                                    </motion.div>

                                ))}

                            </div>


                            {/* ================================================= */}
                            {/* Tools */}
                            {/* ================================================= */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3,
                                }}
                                className="
                                    mt-12
                                    border-t
                                    border-white/[0.07]
                                    pt-7
                                "
                            >

                                <p
                                    className="
                                        text-[10px]
                                        uppercase
                                        tracking-[0.25em]
                                        text-zinc-600
                                    "
                                >
                                    Technologies
                                </p>


                                <div
                                    className="
                                        mt-4
                                        flex
                                        flex-wrap
                                        gap-2
                                    "
                                >

                                    {[
                                        "Python",
                                        "SQL",
                                        "Linux",
                                        "Oracle",
                                        "Datadog",
                                        "Autosys",
                                    ].map((tool) => (

                                        <motion.span
                                            key={tool}
                                            whileHover={{
                                                y: -2,
                                            }}
                                            transition={{
                                                duration: 0.2,
                                            }}
                                            className="
                                                rounded-full
                                                border
                                                border-white/[0.08]
                                                bg-white/[0.025]
                                                px-3
                                                py-1.5
                                                text-xs
                                                text-zinc-400
                                                transition-colors
                                                duration-300
                                                hover:border-[#4f6fff]/25
                                                hover:text-zinc-200
                                            "
                                        >
                                            {tool}
                                        </motion.span>

                                    ))}

                                </div>

                            </motion.div>

                        </motion.div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Experience;