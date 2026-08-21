import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Brain,
    Code2,
    Leaf,
    MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
    {
        number: "01",
        title: "CodeSync",
        category: "Real-time collaborative code editor",
        description:
            "A collaborative coding environment where multiple users can work together in real time.",
        technologies: [
            "React",
            "Node.js",
            "Express",
            "Tailwind CSS",
            "Socket.IO",
        ],
        icon: Code2,
        type: "codesync",
        path: "/work/codesync",
    },
    {
        number: "02",
        title: "WhizChat",
        category: "Real-time messaging",
        description:
            "A real-time messaging application supporting one-to-one and group communication.",
        technologies: [
            "React",
            "MUI",
            "Tailwind CSS",
            "Node.js",
            "MongoDB",
            "Socket.IO",
        ],
        icon: MessageCircle,
        type: "whizchat",
        path: "/work/whizchat",
    },
    {
        number: "03",
        title: "Personal AI",
        category: "AI-powered portfolio assistant",
        description:
            "An AI-powered assistant that uses my professional background, projects and skills to provide context-aware responses.",
        technologies: [
            "React",
            "FastAPI",
            "Python",
            "LLM",
            "Streaming",
        ],
        icon: Brain,
        type: "personalai",
        path: "/ai",
    },
    {
        number: "04",
        title: "CropXpert",
        category: "Machine learning",
        description:
            "A crop-prediction application built around an XGBoost model for agricultural recommendations.",
        technologies: [
            "Python",
            "Streamlit",
            "XGBoost",
            "HTML",
            "CSS",
        ],
        icon: Leaf,
        type: "cropxpert",
        path: "/work/cropxpert",
    },
];

function Projects() {
    return (
        <section
            className="
                relative
                overflow-hidden
                bg-[#f7f7f5]
                px-5
                pb-24
                pt-28
                sm:px-10
                sm:pt-40
                lg:px-16
                lg:pb-44
                lg:pt-48
            "
        >

            {/* ========================================================= */}
            {/* Ambient background */}
            {/* ========================================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-48
                    top-24
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#4f6fff]/[0.035]
                    blur-[150px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -left-48
                    top-[45%]
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-white/80
                    blur-[140px]
                "
            />


            <div className="relative mx-auto max-w-6xl">

                {/* ===================================================== */}
                {/* Work introduction */}
                {/* ===================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="max-w-5xl"
                >

                    <div className="flex items-center justify-between">

                        <p
                            className="
                                text-[10px]
                                font-medium
                                uppercase
                                tracking-[0.3em]
                                text-zinc-500
                            "
                        >
                            Selected work
                        </p>

                        <span
                            className="
                                text-[10px]
                                uppercase
                                tracking-[0.2em]
                                text-zinc-500
                            "
                        >
                            04 projects
                        </span>

                    </div>


                    <div className="mt-10 border-t border-black/[0.07] pt-10">

                        <h1
                            className="
                                max-w-4xl
                                text-[3.35rem]
                                font-medium
                                leading-[0.92]
                                tracking-[-0.06em]
                                text-zinc-950
                                sm:text-7xl
                                lg:text-[100px]
                            "
                        >
                            Things I&apos;ve
                            <br />
                            <span className="text-zinc-400">
                                built.
                            </span>
                        </h1>


                        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

                            <p
                                className="
                                    max-w-xl
                                    text-base
                                    leading-7
                                    text-zinc-500
                                    sm:text-lg
                                "
                            >
                                A selection of projects spanning
                                full-stack development, real-time
                                systems, AI and machine learning.
                            </p>


                        

                        </div>

                    </div>

                </motion.div>


                {/* ===================================================== */}
                {/* Projects */}
                {/* ===================================================== */}

                <div className="mt-20 space-y-24 sm:mt-32 sm:space-y-28 lg:mt-40 lg:space-y-40">

                    {projects.map((project, index) => (

                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                        />

                    ))}

                </div>

            </div>

        </section>
    );
}


function ProjectCard({ project, index }) {

    const Icon = project.icon;

    return (
        <motion.article
            initial={{
                opacity: 0,
                y: 28,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: 0.7,
                delay: index * 0.035,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="group"
        >

            {/* Project metadata */}

            <div className="mb-6 flex items-center justify-between">

                <div className="flex items-center gap-4">

                    <span className="text-xs font-medium tracking-[0.2em] text-zinc-400">
                        {project.number}
                    </span>

                    <span className="h-px w-8 bg-zinc-300" />

                    <span className="min-w-0 truncate text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                        {project.category}
                    </span>

                </div>


                <motion.div
                    whileHover={{
                        rotate: 8,
                        scale: 1.08,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.06] bg-white/60 text-zinc-500 shadow-sm backdrop-blur-xl"
                >
                    <Icon size={16} strokeWidth={1.7} />
                </motion.div>

            </div>


            {/* Project surface */}

            <Link
                to={project.path}
                className="block"
            >

                <motion.div
                    whileHover={{
                        y: -3,
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                        relative
                        overflow-hidden
                        rounded-[32px]
                        border
                        border-black/[0.06]
                        bg-white/60
                        p-4
                        shadow-[0_20px_80px_rgba(0,0,0,0.04)]
                        backdrop-blur-xl
                        transition-all
                        duration-500
                        group-hover:border-black/[0.11]
                        group-hover:shadow-[0_35px_110px_rgba(0,0,0,0.09)]
                        sm:p-7
                        lg:p-9
                    "
                >

                    {/* Soft ambient glow */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-32
                            -top-32
                            h-72
                            w-72
                            rounded-full
                            bg-[#4f6fff]/[0.035]
                            blur-3xl
                            transition-all
                            duration-700
                            group-hover:bg-[#4f6fff]/[0.07]
                        "
                    />


                    <div className="relative grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">

                        {/* Information */}

                        <div className="max-w-md">

                            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-400 lg:hidden">
                                <span>{project.number}</span>
                                <span>—</span>
                                <span>{project.category}</span>
                            </div>


                            <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] text-zinc-950 transition-transform duration-500 ease-out group-hover:translate-x-0.5 sm:text-5xl lg:mt-0 lg:text-6xl">
                                {project.title}
                                <span className="text-[#4f6fff]">
                                    .
                                </span>
                            </h2>


                            <p className="mt-5 text-sm leading-7 text-zinc-500 sm:text-base">
                                {project.description}
                            </p>


                            {/* Technologies */}

                            <div className="mt-7 flex flex-wrap gap-2">

                                {project.technologies.map(
                                    (technology) => (
                                        <span
                                            key={technology}
                                            className="
                                                rounded-full
                                                border
                                                border-black/[0.06]
                                                bg-black/[0.02]
                                                px-3
                                                py-1.5
                                                text-[11px]
                                                text-zinc-500
                                                transition-all
                                                duration-300
                                                group-hover:-translate-y-0.5
                                                group-hover:bg-black/[0.035]
                                            "
                                        >
                                            {technology}
                                        </span>
                                    )
                                )}

                            </div>


                            {/* CTA */}

                            <div className="mt-9 flex items-center gap-3 text-sm font-medium text-zinc-900">

                                <span>
                                    View project
                                </span>

                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.07] transition-all duration-300 group-hover:bg-zinc-950 group-hover:text-white">
                                    <ArrowUpRight
                                        size={15}
                                        className="transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </span>

                            </div>

                        </div>


                        {/* Visual */}

                        <motion.div
                            className="relative"
                            whileHover={{
                                scale: 1.008,
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <ProjectVisual
                                type={project.type}
                            />
                        </motion.div>

                    </div>

                </motion.div>

            </Link>

        </motion.article>
    );
}


function ProjectVisual({ type }) {

    /* =========================
       CODESYNC
    ========================= */

    if (type === "codesync") {
        return (
            <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-white/10 bg-[#111214] p-4 shadow-2xl sm:p-5">

                {/* Editor header */}

                <div className="flex items-center justify-between border-b border-white/10 pb-3">

                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-red-400/70" />
                        <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                        <span className="h-2 w-2 rounded-full bg-green-400/70" />
                    </div>

                    <div className="flex items-center gap-3">

                        <span className="hidden text-[8px] text-zinc-600 sm:block">
                            3 collaborators
                        </span>

                        <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">
                            CodeSync
                        </span>

                    </div>

                </div>


                {/* Editor body */}

                <div className="mt-4 grid h-[calc(100%-48px)] grid-cols-[68px_1fr] gap-2 sm:grid-cols-[90px_1fr] sm:gap-3">

                    {/* Files sidebar */}

                    <div className="rounded-lg border border-white/5 bg-white/[0.025] p-3">

                        <p className="text-[8px] uppercase tracking-wider text-zinc-600">
                            Files
                        </p>

                        <div className="mt-4 space-y-2.5">

                            <div className="rounded-md bg-white/[0.06] px-2 py-1.5">
                                <p className="text-[8px] text-zinc-400">
                                    App.jsx
                                </p>
                            </div>

                            <div className="px-2 py-1.5">
                                <p className="text-[8px] text-zinc-600">
                                    server.js
                                </p>
                            </div>

                            <div className="px-2 py-1.5">
                                <p className="text-[8px] text-zinc-600">
                                    index.css
                                </p>
                            </div>

                            <div className="px-2 py-1.5">
                                <p className="text-[8px] text-zinc-600">
                                    socket.js
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* Code editor */}

                    <div className="relative overflow-hidden rounded-lg border border-white/5 bg-white/[0.02] p-4">

                        <div className="space-y-2 font-mono text-[9px] leading-relaxed sm:text-[10px]">

                            <p>
                                <span className="text-zinc-600">01</span>
                                <span className="ml-4 text-[#8b98ff]">
                                    const
                                </span>{" "}
                                <span className="text-zinc-300">
                                    socket
                                </span>
                                <span className="text-zinc-600">
                                    {" = "}
                                </span>
                                <span className="text-[#aab4ff]">
                                    connect()
                                </span>
                            </p>


                            <p>
                                <span className="text-zinc-600">02</span>
                            </p>


                            <p>
                                <span className="text-zinc-600">03</span>
                                <span className="ml-4 text-zinc-500">
                                    {"// real-time collaboration"}
                                </span>
                            </p>


                            <p>
                                <span className="text-zinc-600">04</span>
                            </p>


                            <p>
                                <span className="text-zinc-600">05</span>
                                <span className="ml-4 text-zinc-300">
                                    socket
                                </span>
                                <span className="text-zinc-500">
                                    .on
                                </span>
                                <span className="text-emerald-400/80">
                                    (
                                </span>
                                <span className="text-emerald-400/80">
                                    "code:update"
                                </span>
                                <span className="text-emerald-400/80">
                                    )
                                </span>
                            </p>


                            <p>
                                <span className="text-zinc-600">06</span>
                            </p>


                            <p>
                                <span className="text-zinc-600">07</span>
                                <span className="ml-4 text-zinc-500">
                                    {"// sync changes with room"}
                                </span>
                            </p>


                            <p>
                                <span className="text-zinc-600">08</span>
                                <span className="ml-4 text-[#8b98ff]">
                                    broadcast
                                </span>
                                <span className="text-zinc-500">
                                    (changes)
                                </span>
                            </p>

                        </div>


                        {/* Cursor */}

                        <motion.span
                            animate={{
                                opacity: [1, 0, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
                                absolute
                                left-[34%]
                                top-[118px]
                                h-3
                                w-px
                                bg-[#7f8fff]
                            "
                        />


                        {/* Connected status */}

                        <div className="absolute bottom-4 left-4 flex items-center gap-2">

                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                            <span className="text-[8px] text-zinc-500">
                                3 users connected
                            </span>

                        </div>


                        {/* Collaborator indicators */}

                        <div className="absolute bottom-3 right-3 flex -space-x-1">

                            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#111214] bg-zinc-700 text-[7px] text-zinc-300">
                                P
                            </span>

                            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#111214] bg-zinc-600 text-[7px] text-zinc-300">
                                A
                            </span>

                            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#111214] bg-zinc-500 text-[7px] text-zinc-200">
                                +
                            </span>

                        </div>

                    </div>

                </div>

            </div>
        );
    }

    /* =========================
       PERSONAL AI
    ========================= */

    if (type === "personalai") {
        return (
            <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-white/10 bg-[#111214] p-4 shadow-2xl sm:p-5">
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#7f8fff]/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-[#4f6fff]/[0.07] blur-3xl" />

                <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-3">
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7f8fff]/15 text-[#aab4ff]">
                            <Brain size={14} strokeWidth={1.6} />
                        </div>
                        <div>
                            <p className="text-[9px] font-medium text-zinc-300">Personal AI</p>
                            <p className="mt-0.5 text-[7px] text-zinc-600">Portfolio knowledge assistant</p>
                        </div>
                    </div>
                    <span className="flex items-center gap-1.5 text-[8px] uppercase tracking-[0.15em] text-zinc-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Online
                    </span>
                </div>

                <div className="relative mt-4 flex h-[calc(100%-52px)] flex-col justify-end gap-3">
                    <motion.div initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="max-w-[72%] rounded-2xl rounded-bl-sm border border-white/[0.05] bg-white/[0.045] px-3 py-2.5">
                        <p className="text-[8px] leading-relaxed text-zinc-500">What projects have you built?</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }} className="ml-auto max-w-[78%] rounded-2xl rounded-br-sm bg-[#7f8fff]/15 px-3 py-2.5">
                        <p className="text-[8px] leading-relaxed text-[#b5bdff]">Piyush has built full-stack, real-time and machine learning applications.</p>
                        <span className="mt-1 block text-right text-[6px] text-[#7f8fff]/50">AI response · streaming</span>
                    </motion.div>

                    <div className="mt-2 flex items-center justify-center gap-2">
                        <span className="rounded-full border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 text-[7px] text-zinc-600">Profile</span>
                        <span className="text-[8px] text-zinc-700">→</span>
                        <span className="rounded-full border border-[#7f8fff]/15 bg-[#7f8fff]/[0.05] px-2.5 py-1.5 text-[7px] text-[#8f9aff]">LLM</span>
                        <span className="text-[8px] text-zinc-700">→</span>
                        <span className="rounded-full border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 text-[7px] text-zinc-600">Response</span>
                    </div>

                    <div className="mt-1 flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.025] px-3 py-2">
                        <span className="flex-1 text-[7px] text-zinc-700">Ask about my skills, projects...</span>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#7f8fff]/15 text-[8px] text-[#9ca8ff]">↑</span>
                    </div>
                </div>
            </div>
        );
    }

    /* =========================
       CROPXPERT
    ========================= */

    if (type === "cropxpert") {
        return (
            <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-[#d9dfd0] bg-[#edf1e8] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">

                {/* Dashboard header */}

                <div className="flex items-center justify-between border-b border-black/[0.06] pb-3">

                    <div className="flex items-center gap-2.5">

                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#182019] text-[#dfe8d8]">
                            <Leaf size={14} strokeWidth={1.7} />
                        </div>

                        <div>
                            <p className="text-[9px] font-medium tracking-wide text-zinc-800">
                                CropXpert
                            </p>
                            <p className="text-[7px] text-zinc-500">
                                Crop recommendation engine
                            </p>
                        </div>

                    </div>

                    <span className="rounded-full border border-black/[0.06] bg-white/60 px-2.5 py-1 text-[7px] uppercase tracking-[0.16em] text-zinc-500">
                        XGBoost
                    </span>

                </div>


                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[1.15fr_0.85fr]">

                    {/* Prediction panel */}

                    <div className="rounded-xl border border-black/[0.05] bg-white/65 p-4 shadow-sm">

                        <div className="flex items-start justify-between">

                            <div>
                                <p className="text-[7px] uppercase tracking-[0.18em] text-zinc-400">
                                    Model accuracy
                                </p>

                                <p className="mt-1 text-3xl font-medium tracking-[-0.06em] text-zinc-900 sm:text-4xl">
                                    99.32
                                    <span className="text-[#5c7a55]">%</span>
                                </p>
                            </div>

                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#dfe8d8] text-[#5c7a55]">
                                <ArrowUpRight size={12} />
                            </div>

                        </div>

                        <div className="mt-5 flex items-end gap-1.5">

                            {[34, 48, 42, 62, 55, 74, 67, 88, 76, 94].map(
                                (height, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${height}%` }}
                                        viewport={{ once: true, amount: 0.4 }}
                                        transition={{
                                            duration: 0.65,
                                            delay: index * 0.045,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="flex-1 rounded-t-sm bg-[#5c7a55]/20"
                                    />
                                )
                            )}

                        </div>

                        <div className="mt-2 flex justify-between text-[7px] text-zinc-400">
                            <span>Model performance</span>
                            <span>Test data</span>
                        </div>

                    </div>


                    {/* Input / output panel */}

                    <div className="flex flex-col gap-3">

                        <div className="rounded-xl border border-black/[0.05] bg-white/55 p-3">

                            <div className="flex items-center justify-between">
                                <p className="text-[7px] uppercase tracking-[0.16em] text-zinc-400">
                                    Inputs
                                </p>

                                <span className="text-[7px] text-zinc-400">
                                    7 parameters
                                </span>
                            </div>

                            <div className="mt-3 grid grid-cols-2 gap-1.5">
                                {[
                                    "N  ·  90",
                                    "P  ·  42",
                                    "K  ·  43",
                                    "pH ·  6.5",
                                    "Temp · 24°",
                                    "Rain · 180",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-md border border-black/[0.05] bg-black/[0.018] px-2 py-1.5 text-[7px] text-zinc-500"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                        </div>


                        <div className="flex flex-1 flex-col justify-between rounded-xl bg-[#182019] p-3 text-white shadow-lg">

                            <div className="flex items-center justify-between">
                                <p className="text-[7px] uppercase tracking-[0.16em] text-white/40">
                                    Prediction
                                </p>

                                <motion.span
                                    animate={{ opacity: [0.45, 1, 0.45] }}
                                    transition={{ duration: 2.2, repeat: Infinity }}
                                    className="h-1.5 w-1.5 rounded-full bg-emerald-300"
                                />
                            </div>

                            <div className="mt-4">
                                <p className="text-[8px] text-white/40">
                                    22+ supported crops
                                </p>
                                <p className="mt-1 text-lg font-medium tracking-[-0.04em] text-white">
                                    Crop recommendation
                                </p>
                            </div>

                            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-2">
                                <span className="text-[7px] text-white/40">
                                    Streamlit app
                                </span>
                                <ArrowUpRight size={11} className="text-white/50" />
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        );
    }

    /* =========================
       WHIZCHAT
    ========================= */

    return (
        <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-white/10 bg-[#101114] p-4 shadow-2xl sm:p-5">

            {/* Ambient glow */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#4f6fff]/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -left-16 h-44 w-44 rounded-full bg-emerald-400/[0.05] blur-3xl" />


            <div className="relative flex h-full gap-3">

                {/* Conversation list */}

                <div className="w-[25%] rounded-xl border border-white/[0.06] bg-white/[0.025] p-2 sm:w-[28%] sm:p-3">

                    <div className="flex items-center justify-between">

                        <p className="text-[8px] uppercase tracking-[0.18em] text-zinc-500">
                            Messages
                        </p>

                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                    </div>


                    <div className="mt-5 space-y-2">

                        {/* Active conversation */}

                        <motion.div
                            animate={{
                                backgroundColor: [
                                    "rgba(255,255,255,0.06)",
                                    "rgba(255,255,255,0.09)",
                                    "rgba(255,255,255,0.06)",
                                ],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="rounded-lg p-2"
                        >
                            <div className="flex items-center gap-2">

                                <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[#4f6fff]/20 text-[7px] text-[#aab4ff]">
                                    A

                                    <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full border border-[#151619] bg-emerald-400" />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-[8px] text-zinc-300">
                                        Alex
                                    </p>

                                    <p className="mt-0.5 truncate text-[7px] text-zinc-600">
                                        Sounds good!
                                    </p>
                                </div>

                            </div>
                        </motion.div>


                        {/* Other conversations */}

                        {[
                            ["M", "Maya", "See you soon"],
                            ["R", "Rahul", "Sent the files"],
                            ["D", "Dev Team", "3 new messages"],
                        ].map(([initial, name, preview]) => (

                            <div
                                key={name}
                                className="flex items-center gap-2 rounded-lg p-2"
                            >

                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[7px] text-zinc-500">
                                    {initial}
                                </span>

                                <div className="min-w-0">
                                    <p className="truncate text-[8px] text-zinc-500">
                                        {name}
                                    </p>

                                    <p className="mt-0.5 truncate text-[7px] text-zinc-700">
                                        {preview}
                                    </p>
                                </div>

                            </div>

                        ))}

                    </div>

                </div>


                {/* Chat window */}

                <div className="relative flex flex-1 flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.018]">

                    {/* Chat header */}

                    <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">

                        <div className="flex items-center gap-2.5">

                            <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#4f6fff]/15 text-[8px] text-[#aab4ff]">
                                A

                                <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border-2 border-[#17181b] bg-emerald-400" />
                            </div>

                            <div>
                                <p className="text-[9px] font-medium text-zinc-300">
                                    Alex
                                </p>

                                <p className="mt-0.5 flex items-center gap-1 text-[7px] text-zinc-600">
                                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                                    Online
                                </p>
                            </div>

                        </div>

                        <span className="text-[8px] uppercase tracking-[0.15em] text-zinc-700">
                            WhizChat
                        </span>

                    </div>


                    {/* Messages */}

                    <div className="flex flex-1 flex-col justify-end gap-2.5 p-3 sm:p-4">

                        <motion.div
                            initial={{ opacity: 0, x: -8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="max-w-[68%] rounded-2xl rounded-bl-sm bg-white/[0.06] px-3 py-2.5"
                        >
                            <p className="text-[8px] leading-relaxed text-zinc-500">
                                Hey, how&apos;s the project going?
                            </p>

                            <span className="mt-1 block text-[6px] text-zinc-700">
                                10:42 PM
                            </span>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, x: 8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="ml-auto max-w-[72%] rounded-2xl rounded-br-sm bg-[#4f6fff]/20 px-3 py-2.5"
                        >
                            <p className="text-[8px] leading-relaxed text-[#b5bdff]">
                                Going well. Just finished the real-time messaging flow.
                            </p>

                            <span className="mt-1 block text-right text-[6px] text-[#7f8fff]/60">
                                10:43 PM · ✓✓
                            </span>
                        </motion.div>


                        {/* Typing indicator */}

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{
                                duration: 1.6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="flex items-center gap-1"
                        >
                            <span className="h-1 w-1 rounded-full bg-zinc-600" />
                            <span className="h-1 w-1 rounded-full bg-zinc-600" />
                            <span className="h-1 w-1 rounded-full bg-zinc-600" />
                            <span className="ml-1 text-[7px] text-zinc-700">
                                typing...
                            </span>
                        </motion.div>

                    </div>


                    {/* Input */}

                    <div className="mx-3 mb-3 flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.025] px-3 py-2">

                        <span className="flex-1 text-[7px] text-zinc-700">
                            Write a message...
                        </span>

                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4f6fff]/20 text-[8px] text-[#9ca8ff]">
                            ↑
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Projects;