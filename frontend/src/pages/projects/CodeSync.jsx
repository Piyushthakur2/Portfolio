import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowUpRight,
    Code2,
    Users,
    Play,
    Folder,
    MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
    {
        number: "01",
        title: "Real-time collaboration",
        description:
            "Multiple users can work together in the same room in real time.",
        icon: Users,
    },
    {
        number: "02",
        title: "Live code execution",
        description:
            "Participants can execute code and see the results within the collaborative environment.",
        icon: Play,
    },
    {
        number: "03",
        title: "File management",
        description:
            "The editor includes file management for working with files inside a session.",
        icon: Folder,
    },
    {
        number: "04",
        title: "Group chat",
        description:
            "A group chat is included alongside the collaborative coding experience.",
        icon: MessageCircle,
    },
];

const technologies = [
    "React",
    "Node.js",
    "Express",
    "Tailwind CSS",
    "Socket.IO",
];

function CodeSync() {
    return (
        <div className="min-h-screen bg-[#111214] text-white">

            {/* Navigation */}

            <header className="fixed left-1/2 top-3 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 sm:top-4 sm:w-[calc(100%-2rem)]">
                <div className="flex h-13 items-center justify-between rounded-[18px] border border-white/[0.07] bg-[#111214]/65 px-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-xl sm:h-14 sm:px-5">

                    <Link
                        to="/work"
                        className="group flex items-center gap-1.5 text-xs text-zinc-400 transition-colors hover:text-white sm:gap-2 sm:text-sm"
                    >
                        <ArrowLeft
                            size={15}
                            className="transition-transform duration-300 group-hover:-translate-x-1"
                        />

                        <span>
                            Back to work
                        </span>
                    </Link>


                    <div className="flex items-center gap-2">

                        <Code2
                            size={15}
                            className="text-[#7f8fff]"
                        />

                        <span className="text-xs font-medium text-zinc-400">
                            CodeSync
                        </span>

                    </div>

                </div>
            </header>


            <main>

                {/* ================================================= */}
                {/* HERO */}
                {/* ================================================= */}

                <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-10 sm:pt-40 lg:px-16 lg:pb-32 lg:pt-48">

                    {/* Ambient glow */}

                    <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#4f6fff]/[0.08] blur-[150px]" />

                    <div className="pointer-events-none absolute -right-40 top-40 h-[450px] w-[450px] rounded-full bg-[#7f8fff]/[0.04] blur-[150px]" />


                    <div className="relative mx-auto max-w-6xl">

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
                                duration: 0.65,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >

                            <div className="flex items-center gap-3">

                                <span className="text-[11px] uppercase tracking-[0.3em] text-[#7f8fff]">
                                    01 / Real-time collaboration
                                </span>

                            </div>


                            <h1 className="mt-7 max-w-5xl text-[3.5rem] font-medium leading-[0.9] tracking-[-0.06em] sm:mt-8 sm:text-7xl lg:text-[112px]">
                                CodeSync
                                <span className="text-[#7f8fff]">
                                    .
                                </span>
                            </h1>


                            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">

                                <p className="max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
                                    A real-time collaborative code editor
                                    I built to let multiple users work
                                    together in the same room.
                                </p>


                                <div className="lg:text-right">

                                    <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                                        Technology
                                    </p>

                                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                                        React · Node.js · Express
                                        <br />
                                        Tailwind CSS · Socket.IO
                                    </p>

                                </div>

                            </div>

                        </motion.div>


                        {/* Hero visual */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 35,
                                scale: 0.98,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.15,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mt-12 sm:mt-20"
                        >
                            <CodeSyncVisual large />
                        </motion.div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* OVERVIEW */}
                {/* ================================================= */}

                <section className="border-y border-white/[0.07] px-5 py-20 sm:px-10 sm:py-24 lg:px-16">

                    <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.65fr_1.35fr]">

                        <div>

                            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                                Overview
                            </p>

                        </div>


                        <div>

                            <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
                                A shared space for
                                collaborative coding.
                            </h2>

                            <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                                CodeSync is a real-time collaborative
                                code editor where multiple users can
                                work together in the same room. The
                                application combines collaborative
                                editing, code execution, file
                                management and group chat in one
                                interface.
                            </p>

                        </div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* ENGINEERING / ARCHITECTURE */}
                {/* ================================================= */}

                <section className="border-b border-white/[0.07] px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">

                    <div className="mx-auto max-w-6xl">

                        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

                            <div>
                                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                                    Engineering
                                </p>

                                <p className="mt-5 max-w-xs text-sm leading-6 text-zinc-500">
                                    How the main pieces of CodeSync work together to create a shared real-time coding environment.
                                </p>
                            </div>


                            <div>

                                <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
                                    Built around
                                    <span className="text-zinc-600"> real-time communication.</span>
                                </h2>

                                <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                                    The application connects the React client with a Node.js and Express backend through Socket.IO. Users join a shared room, exchange real-time events and see collaborative changes reflected across connected clients.
                                </p>


                                {/* Architecture flow */}

                                <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-3">

                                    {[
                                        {
                                            number: "01",
                                            title: "React client",
                                            text: "Editor and interface where users interact with the shared workspace.",
                                        },
                                        {
                                            number: "02",
                                            title: "Socket.IO",
                                            text: "Real-time event layer connecting participants inside a room.",
                                        },
                                        {
                                            number: "03",
                                            title: "Node + Express",
                                            text: "Backend responsible for application logic and communication.",
                                        },
                                    ].map((item, index) => (

                                        <motion.div
                                            key={item.number}
                                            initial={{
                                                opacity: 0,
                                                y: 15,
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
                                                delay: index * 0.06,
                                            }}
                                            className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-all duration-300 hover:border-[#7f8fff]/20 hover:bg-white/[0.04]"
                                        >

                                            <div className="flex items-center justify-between">
                                                <span className="text-[9px] tracking-[0.2em] text-zinc-700">
                                                    {item.number}
                                                </span>

                                                {index < 2 && (
                                                    <ArrowUpRight
                                                        size={13}
                                                        className="text-zinc-700"
                                                    />
                                                )}
                                            </div>

                                            <h3 className="mt-8 text-sm font-medium text-zinc-200">
                                                {item.title}
                                            </h3>

                                            <p className="mt-3 text-xs leading-6 text-zinc-600">
                                                {item.text}
                                            </p>

                                        </motion.div>

                                    ))}

                                </div>


                                {/* Engineering concepts */}

                                <div className="mt-10 border-t border-white/[0.07] pt-7">

                                    <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                                        Engineering concepts
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">

                                        {[
                                            "Real-time events",
                                            "Room-based collaboration",
                                            "Client-server communication",
                                            "Live updates",
                                            "Component-based UI",
                                        ].map((item) => (

                                            <span
                                                key={item}
                                                className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-zinc-500"
                                            >
                                                {item}
                                            </span>

                                        ))}

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* FEATURES */}
                {/* ================================================= */}

                <section className="px-5 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">

                    <div className="mx-auto max-w-6xl">

                        <div className="mb-16">

                            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                                What I built
                            </p>

                            <h2 className="mt-5 text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
                                Core features
                                <span className="text-zinc-600">
                                    .
                                </span>
                            </h2>

                        </div>


                        <div className="grid gap-px overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2">

                            {features.map(
                                (feature, index) => {
                                    const Icon =
                                        feature.icon;

                                    return (
                                        <motion.div
                                            key={
                                                feature.number
                                            }
                                            initial={{
                                                opacity: 0,
                                                y: 15,
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
                                                delay:
                                                    index *
                                                    0.05,
                                            }}
                                            className="group bg-[#111214] p-6 transition-colors duration-500 hover:bg-white/[0.025] sm:p-9"
                                        >

                                            <div className="flex items-start justify-between">

                                                <span className="text-[10px] tracking-[0.2em] text-zinc-600">
                                                    {
                                                        feature.number
                                                    }
                                                </span>

                                                <Icon
                                                    size={
                                                        17
                                                    }
                                                    strokeWidth={
                                                        1.5
                                                    }
                                                    className="text-zinc-600 transition-colors duration-300 group-hover:text-[#7f8fff]"
                                                />

                                            </div>


                                            <h3 className="mt-12 text-xl font-medium tracking-[-0.025em] text-zinc-200">
                                                {
                                                    feature.title
                                                }
                                            </h3>

                                            <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">
                                                {
                                                    feature.description
                                                }
                                            </p>

                                        </motion.div>
                                    );
                                }
                            )}

                        </div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* SCALE */}
                {/* ================================================= */}

                <section className="px-6 pb-28 sm:px-10 lg:px-16 lg:pb-36">

                    <div className="mx-auto max-w-6xl">

                        <div className="relative overflow-hidden rounded-[32px] border border-white/[0.07] bg-white/[0.025] p-8 sm:p-12 lg:p-16">

                            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#4f6fff]/[0.07] blur-[100px]" />

                            <div className="relative grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">

                                <div>

                                    <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                                        Concurrent collaboration
                                    </p>

                                    <p className="mt-5 text-5xl font-medium tracking-[-0.06em] sm:text-7xl">
                                        50
                                        <span className="text-[#7f8fff]">
                                            +
                                        </span>
                                    </p>

                                    <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">
                                        users supported editing in
                                        the same CodeSync room.
                                    </p>

                                </div>


                                <div className="lg:text-right">

                                    <p className="text-sm leading-7 text-zinc-500">
                                        CodeSync combines a
                                        collaborative editor with
                                        real-time communication,
                                        execution and file
                                        management.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* TECHNOLOGIES */}
                {/* ================================================= */}

                <section className="border-t border-white/[0.07] px-6 py-24 sm:px-10 lg:px-16">

                    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">

                        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                            Technology
                        </p>


                        <div className="flex flex-wrap gap-2">

                            {technologies.map(
                                (technology) => (
                                    <span
                                        key={
                                            technology
                                        }
                                        className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-xs text-zinc-400"
                                    >
                                        {technology}
                                    </span>
                                )
                            )}

                        </div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* NEXT PROJECT */}
                {/* ================================================= */}

                <section className="border-t border-white/[0.07] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

                    <div className="mx-auto max-w-6xl">

                        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                            Next project
                        </p>


                        <Link
                            to="/work/whizchat"
                            className="group mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end sm:gap-8"
                        >

                            <div>

                                <p className="text-sm text-zinc-600">
                                    02
                                </p>

                                <h2 className="mt-3 text-4xl font-medium tracking-[-0.05em] transition-colors duration-300 group-hover:text-zinc-300 sm:text-7xl">
                                    WhizChat
                                    <span className="text-[#7f8fff]">
                                        .
                                    </span>
                                </h2>

                            </div>


                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/[0.08] transition-all duration-300 group-hover:bg-white group-hover:text-zinc-950">
                                <ArrowUpRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </div>

                        </Link>

                    </div>

                </section>

            </main>

        </div>
    );
}


/* ========================================================= */
/* CodeSync visual */
/* ========================================================= */

function CodeSyncVisual({ large = false }) {
    return (
        <div
            className={`
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/[0.08]
                bg-[#0c0d0f]
                shadow-[0_40px_120px_rgba(0,0,0,0.35)]
                ${
                    large
                        ? "aspect-[16/8] p-5 sm:p-7"
                        : "aspect-[16/10] p-4"
                }
            `}
        >

            {/* Window header */}

            <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">

                <div className="flex items-center gap-2">

                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />

                </div>

                <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-700">
                    CodeSync
                </span>

            </div>


            {/* Editor */}

            <div className="mt-4 grid h-[calc(100%-55px)] grid-cols-[64px_1fr] gap-2 sm:mt-5 sm:grid-cols-[100px_1fr_130px] sm:gap-3">

                {/* Files */}

                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2 sm:p-3">

                    <p className="text-[7px] uppercase tracking-[0.15em] text-zinc-700 sm:text-[8px]">
                        Files
                    </p>

                    <div className="mt-5 space-y-4">

                        <div className="h-2 w-12 rounded bg-white/10" />
                        <div className="h-2 w-16 rounded bg-[#7f8fff]/20" />
                        <div className="h-2 w-10 rounded bg-white/5" />
                        <div className="h-2 w-14 rounded bg-white/5" />

                    </div>

                </div>


                {/* Code */}

                <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-3 sm:p-5">

                    <div className="space-y-2.5 font-mono text-[8px] sm:space-y-3 sm:text-xs">

                        <p>
                            <span className="text-[#7f8fff]">
                                const
                            </span>{" "}
                            socket
                            <span className="text-zinc-600">
                                {" = "}
                            </span>
                            connect()
                        </p>

                        <p className="text-zinc-600">
                            {"// real-time collaboration"}
                        </p>

                        <p>
                            socket
                            <span className="text-zinc-600">
                                .on
                            </span>
                            (
                            <span className="text-emerald-400/70">
                                "code:update"
                            </span>
                            )
                        </p>

                        <p className="text-zinc-600">
                            {"// users connected"}
                        </p>

                        <p>
                            <span className="text-[#7f8fff]">
                                room
                            </span>
                            .
                            <span className="text-zinc-400">
                                users
                            </span>
                            <span className="text-zinc-600">
                                {" = "}
                            </span>
                            <span className="text-emerald-400/70">
                                50+
                            </span>
                        </p>

                    </div>


                    <div className="mt-10 h-px bg-white/[0.05]" />

                    <div className="mt-5 flex items-center gap-2">

                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                        <span className="text-[9px] text-zinc-600">
                            Connected
                        </span>

                    </div>

                </div>


                {/* Participants */}

                <div className="hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 sm:block">

                    <p className="text-[8px] uppercase tracking-[0.15em] text-zinc-700">
                        Room
                    </p>

                    <div className="mt-5 space-y-3">

                        {[1, 2, 3, 4, 5].map(
                            (item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-2"
                                >
                                    <span className="h-5 w-5 rounded-full bg-white/[0.08]" />

                                    <span className="h-1.5 w-10 rounded bg-white/[0.07]" />
                                </div>
                            )
                        )}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default CodeSync;