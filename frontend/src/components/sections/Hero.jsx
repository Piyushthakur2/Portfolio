import { useEffect, useState } from "react";
import {
    ArrowDown,
    ArrowUpRight,
    Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();

    const [mouse, setMouse] = useState({
        x: 50,
        y: 50,
    });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMouse({
                x: (event.clientX / window.innerWidth) * 100,
                y: (event.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );
        };
    }, []);

    /*
     * Navigate to Work page
     */

    const goToWork = () => {
        navigate("/work");

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    /*
     * Navigate to AI page
     */

    const goToAI = () => {
        navigate("/ai");

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section
            className="
                relative
                flex
                min-h-screen
                items-center
                overflow-hidden
                px-5
                pb-10
                pt-28
                sm:px-10
                lg:px-16
            "
            style={{
                background: `
                    radial-gradient(
                        circle at ${mouse.x}% ${mouse.y}%,
                        rgba(79, 111, 255, 0.10),
                        transparent 24%
                    )
                `,
            }}
        >

            {/* ===================================================== */}
            {/* Ambient background lights */}
            {/* ===================================================== */}

            <motion.div
                animate={{
                    x: [0, 20, 0],
                    y: [0, -15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    -left-40
                    top-1/4
                    h-96
                    w-96
                    rounded-full
                    blur-3xl
                "
                style={{
                    background:
                        "rgba(105, 125, 255, 0.055)",
                }}
            />

            <motion.div
                animate={{
                    x: [0, -20, 0],
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    bottom-10
                    h-96
                    w-96
                    rounded-full
                    blur-3xl
                "
                style={{
                    background:
                        "rgba(120, 170, 255, 0.045)",
                }}
            />

            {/* ===================================================== */}
            {/* Small ambient details */}
            {/* ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-[42%]
                    top-[24%]
                    hidden
                    h-1
                    w-1
                    rounded-full
                    bg-[#4f6fff]/40
                    lg:block
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    right-[34%]
                    top-[38%]
                    hidden
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-zinc-400/30
                    lg:block
                "
            />

            {/* ===================================================== */}
            {/* Main content */}
            {/* ===================================================== */}

            <div className="relative mx-auto w-full max-w-6xl">

                <div
                    className="
                        grid
                        items-center
                        gap-10
                        sm:gap-14
                        lg:grid-cols-[1fr_320px]
                        lg:gap-20
                    "
                >

                    {/* ================================================= */}
                    {/* Main content */}
                    {/* ================================================= */}

                    <div>

                        {/* Eyebrow */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 16,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                mb-7
                                flex
                                items-center
                                gap-3
                            "
                        >

                            <span className="h-px w-8 bg-zinc-400" />

                            <span
                                className="
                                    text-xs
                                    font-medium
                                    uppercase
                                    tracking-[0.28em]
                                    text-zinc-500
                                "
                            >
                                Software Developer
                            </span>

                        </motion.div>


                        {/* Name */}

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
                                    delay: 0.2,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
                                    max-w-5xl
                                    text-[clamp(3.35rem,15vw,9rem)]
                                    font-semibold
                                    leading-[0.86]
                                    tracking-[-0.075em]
                                    text-zinc-950
                                "
                            >
                                Piyush
                                <br />
                                Thakur

                                <span className="text-[#4f6fff]">
                                    .
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
                                delay: 0.55,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                mt-7
                                max-w-lg
                                text-base
                                leading-7
                                text-zinc-500
                                sm:text-lg
                            "
                        >
                            I build full-stack applications,
                            experiment with AI, and care about
                            how software feels to use.
                        </motion.p>


                        {/* ================================================= */}
                        {/* Actions */}
                        {/* ================================================= */}

                        <motion.div
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
                                delay: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                mt-8
                                flex
                                flex-col
                                items-stretch
                                gap-3
                                sm:flex-row
                                sm:flex-wrap
                                sm:items-center
                            "
                        >

                            {/* Work */}

                            <motion.button
                                whileHover={{
                                    y: -2,
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                onClick={goToWork}
                                className="
                                    group
                                    flex
                                    items-center
                                    gap-3
                                    w-full
                                    justify-center
                                    rounded-full
                                    bg-zinc-950
                                    px-6
                                    py-3.5
                                    text-sm
                                    font-medium
                                    text-white
                                    shadow-[0_10px_30px_rgba(0,0,0,0.10)]
                                    transition-shadow
                                    duration-300
                                    sm:w-auto
                                    hover:shadow-[0_16px_40px_rgba(0,0,0,0.16)]
                                "
                            >
                                Explore my work

                                <ArrowUpRight
                                    size={16}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-0.5
                                        group-hover:-translate-y-0.5
                                    "
                                />

                            </motion.button>


                            {/* AI */}

                            <motion.button
                                whileHover={{
                                    y: -2,
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                onClick={goToAI}
                                className="
                                    group
                                    flex
                                    items-center
                                    gap-3
                                    w-full
                                    justify-center
                                    rounded-full
                                    border
                                    border-black/8
                                    bg-white/45
                                    px-6
                                    py-3.5
                                    text-sm
                                    font-medium
                                    text-zinc-800
                                    shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]
                                    backdrop-blur-xl
                                    transition-all
                                    duration-300
                                    sm:w-auto
                                    hover:bg-white/70
                                    hover:shadow-[0_14px_35px_rgba(0,0,0,0.07)]
                                "
                            >

                                <Sparkles
                                    size={15}
                                    className="
                                        text-[#4f6fff]
                                        transition-transform
                                        duration-300
                                        group-hover:rotate-12
                                    "
                                />

                                Ask my AI

                            </motion.button>

                        </motion.div>


                    </div>


                    {/* ================================================= */}
                    {/* AI Card */}
                    {/* ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.92,
                            y: 25,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="hidden lg:block"
                    >

                        <motion.button
                            onClick={goToAI}
                            animate={{
                                y: [0, -7, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
                                glass
                                glass-hover
                                group
                                relative
                                w-full
                                overflow-hidden
                                rounded-[28px]
                                p-6
                                text-left
                            "
                        >

                            {/* Card ambient glow */}

                            <motion.div
                                animate={{
                                    scale: [1, 1.12, 1],
                                    opacity: [0.35, 0.5, 0.35],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                                    absolute
                                    -right-20
                                    -top-20
                                    h-48
                                    w-48
                                    rounded-full
                                    bg-[#4f6fff]/10
                                    blur-3xl
                                "
                            />


                            <div className="relative">

                                <div className="mb-12 flex items-center justify-between">

                                    <motion.div
                                        whileHover={{
                                            rotate: 8,
                                            scale: 1.05,
                                        }}
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-zinc-950
                                            text-white
                                            shadow-lg
                                        "
                                    >
                                        <Sparkles size={17} />
                                    </motion.div>


                                    <ArrowUpRight
                                        size={18}
                                        className="
                                            text-zinc-400
                                            transition-all
                                            duration-300
                                            group-hover:-translate-y-1
                                            group-hover:translate-x-1
                                            group-hover:text-zinc-800
                                        "
                                    />

                                </div>


                                <p
                                    className="
                                        text-[11px]
                                        font-medium
                                        uppercase
                                        tracking-[0.22em]
                                        text-zinc-400
                                    "
                                >
                                    Personal AI
                                </p>


                                <h2
                                    className="
                                        mt-2
                                        text-xl
                                        font-medium
                                        tracking-tight
                                        text-zinc-900
                                    "
                                >
                                    Ask me anything.
                                </h2>


                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        leading-6
                                        text-zinc-500
                                    "
                                >
                                    Explore my experience, projects,
                                    skills and background through my
                                    personal AI assistant.
                                </p>


                                <div
                                    className="
                                        mt-7
                                        flex
                                        items-center
                                        gap-2
                                        text-xs
                                        font-medium
                                        text-zinc-700
                                    "
                                >

                                    <motion.span
                                        animate={{
                                            opacity: [1, 0.4, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                        className="
                                            h-1.5
                                            w-1.5
                                            rounded-full
                                            bg-emerald-500
                                        "
                                    />

                                    Available to chat

                                </div>

                            </div>

                        </motion.button>

                    </motion.div>

                </div>


                {/* ===================================================== */}
                {/* Bottom metadata */}
                {/* ===================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 1.15,
                    }}
                    className="
                        mt-20
                        hidden
                        w-full
                        items-center
                        justify-between
                        lg:flex
                    "
                >

                    <span
                        className="
                            text-[10px]
                            uppercase
                            tracking-[0.25em]
                            text-zinc-400
                        "
                    >
                        Based in India
                    </span>


                    <button
                        onClick={goToWork}
                        className="
                            group
                            flex
                            items-center
                            gap-3
                            text-[10px]
                            uppercase
                            tracking-[0.25em]
                            text-zinc-400
                        "
                    >

                        <span>
                            Scroll to explore
                        </span>


                        <span
                            className="
                                flex
                                h-7
                                w-7
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-black/8
                                bg-white/40
                                transition-transform
                                duration-300
                                group-hover:translate-y-1
                            "
                        >
                            <ArrowDown size={12} />
                        </span>

                    </button>

                </motion.div>

            </div>

        </section>
    );
}

export default Hero;