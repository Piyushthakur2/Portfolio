import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowUpRight,
    MessageCircle,
    Users,
    Paperclip,
    Circle,
    UserRound,
    CheckCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
    {
        number: "01",
        title: "1:1 messaging",
        description:
            "Real-time communication between individual users.",
        icon: MessageCircle,
    },
    {
        number: "02",
        title: "Group messaging",
        description:
            "Users can communicate together through group conversations.",
        icon: Users,
    },
    {
        number: "03",
        title: "File sharing",
        description:
            "The application supports sharing files through conversations.",
        icon: Paperclip,
    },
    {
        number: "04",
        title: "Online status",
        description:
            "Users can see the active status of other users in real time.",
        icon: Circle,
    },
];

const technologies = [
    "React",
    "MUI",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.IO",
];

function WhizChat() {
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
                        <MessageCircle
                            size={15}
                            className="text-[#7f8fff]"
                        />

                        <span className="text-xs font-medium text-zinc-400">
                            WhizChat
                        </span>
                    </div>

                </div>
            </header>


            <main>

                {/* ================================================= */}
                {/* HERO */}
                {/* ================================================= */}

                <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-10 sm:pt-40 lg:px-16 lg:pb-32 lg:pt-48">

                    <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#7f8fff]/[0.07] blur-[150px]" />

                    <div className="pointer-events-none absolute -left-40 top-60 h-[400px] w-[400px] rounded-full bg-[#4f6fff]/[0.05] blur-[140px]" />

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

                            <span className="text-[11px] uppercase tracking-[0.3em] text-[#7f8fff]">
                                02 / Real-time messaging
                            </span>


                            <h1 className="mt-7 max-w-5xl text-[3.5rem] font-medium leading-[0.9] tracking-[-0.06em] sm:mt-8 sm:text-7xl lg:text-[112px]">
                                WhizChat
                                <span className="text-[#7f8fff]">
                                    .
                                </span>
                            </h1>


                            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">

                                <p className="max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
                                    A real-time messaging application
                                    I built for one-to-one and group
                                    communication.
                                </p>


                                <div className="lg:text-right">

                                    <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                                        Technology
                                    </p>

                                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                                        React · MUI · Tailwind CSS
                                        <br />
                                        Node.js · Express · MongoDB · Socket.IO
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
                            <WhizChatVisual />
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
                                Real-time communication
                                in one focused interface.
                            </h2>

                            <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                                WhizChat is a real-time messaging
                                application supporting one-to-one
                                and group communication. It combines
                                messaging, file sharing and online
                                status within the same application.
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
                                    The application combines a React interface, Node.js APIs, real-time events and persistent chat data into one full-stack system.
                                </p>
                            </div>

                            <div>

                                <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
                                    Designed for
                                    <span className="text-zinc-600"> real-time communication.</span>
                                </h2>

                                <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                                    The frontend communicates with a Node.js and Express backend, while Socket.IO handles live communication between connected users. MongoDB provides persistent storage for application and messaging data.
                                </p>

                                <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-4">

                                    {[
                                        {
                                            number: "01",
                                            title: "React",
                                            text: "Interface for conversations, groups and user interactions.",
                                        },
                                        {
                                            number: "02",
                                            title: "Node + Express",
                                            text: "Backend APIs and application logic.",
                                        },
                                        {
                                            number: "03",
                                            title: "Socket.IO",
                                            text: "Real-time messaging and online presence.",
                                        },
                                        {
                                            number: "04",
                                            title: "MongoDB",
                                            text: "Persistent application and chat data.",
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

                                                {index < 3 && (
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

                                <div className="mt-10 border-t border-white/[0.07] pt-7">

                                    <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                                        Engineering concepts
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">

                                        {[
                                            "Real-time messaging",
                                            "1:1 communication",
                                            "Group conversations",
                                            "Online presence",
                                            "Persistent data",
                                            "REST APIs",
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
                                                    size={17}
                                                    strokeWidth={1.5}
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
                {/* CHAT EXPERIENCE */}
                {/* ================================================= */}

                <section className="px-5 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36">

                    <div className="mx-auto max-w-6xl">

                        <div className="relative overflow-hidden rounded-[32px] border border-white/[0.07] bg-white/[0.025] p-5 sm:p-10 lg:p-14">

                            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#7f8fff]/[0.05] blur-[120px]" />

                            <div className="relative grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">

                                <div>

                                    <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                                        Communication
                                    </p>

                                    <h2 className="mt-5 text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
                                        Built around
                                        <br />
                                        conversation.
                                    </h2>

                                    <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-500">
                                        WhizChat brings individual
                                        and group communication
                                        together with file sharing
                                        and online presence.
                                    </p>

                                </div>


                                <ChatPreview />

                            </div>

                        </div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* TECHNOLOGIES */}
                {/* ================================================= */}

                <section className="border-t border-white/[0.07] px-5 py-20 sm:px-10 sm:py-24 lg:px-16">

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
                            to="/work/cropxpert"
                            className="group mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end sm:gap-8"
                        >

                            <div>

                                <p className="text-sm text-zinc-600">
                                    03
                                </p>

                                <h2 className="mt-3 text-4xl font-medium tracking-[-0.05em] transition-colors duration-300 group-hover:text-zinc-300 sm:text-7xl">
                                    CropXpert
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
/* HERO VISUAL */
/* ========================================================= */

function WhizChatVisual() {
    return (
        <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0c0d0f] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.35)] sm:aspect-[16/8] sm:p-6">

            {/* Window header */}

            <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">

                <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                </div>

                <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-700">
                    WhizChat · 1:1
                </span>

            </div>


            <div className="mt-4 grid h-[calc(100%-55px)] grid-cols-[92px_1fr] gap-2 sm:mt-5 sm:grid-cols-[200px_1fr] sm:gap-3">

                {/* Conversations */}

                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2 sm:p-3">

                    <div className="flex items-center justify-between">
                        <p className="text-[8px] uppercase tracking-[0.15em] text-zinc-700">
                            Conversations
                        </p>
                        <span className="h-5 w-5 rounded-full bg-white/[0.06]" />
                    </div>


                    <div className="mt-5 space-y-3">

                        {[
                            ["Alex", "Online", true],
                            ["Priya", "How are you?", false],
                            ["Rahul", "Nice work!", false],
                            ["Ananya", "See you soon", false],
                        ].map(([name, status, active], index) => (

                            <motion.div
                                key={name}
                                animate={
                                    active
                                        ? {
                                              opacity: [0.75, 1, 0.75],
                                          }
                                        : {}
                                }
                                transition={{
                                    duration: 2.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.2,
                                }}
                                className={`flex items-center gap-3 rounded-lg p-2 ${
                                    active ? "bg-white/[0.05]" : ""
                                }`}
                            >

                                <div className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6f7fff]/30 to-white/[0.08]">

                                    <UserRound
                                        size={13}
                                        className="text-zinc-400"
                                        strokeWidth={1.6}
                                    />

                                    {active && (
                                        <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-[#0c0d0f] bg-emerald-400" />
                                    )}

                                </div>

                                <div className="min-w-0">
                                    <p className="truncate text-[8px] text-zinc-500">
                                        {name}
                                    </p>
                                    <p className="mt-1 truncate text-[7px] text-zinc-700">
                                        {status}
                                    </p>
                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>


                {/* 1:1 chat */}

                <div className="flex min-w-0 flex-col rounded-xl border border-white/[0.06] bg-white/[0.015] p-2.5 sm:p-4">

                    {/* Person header */}

                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">

                        <div className="flex items-center gap-3">

                            <motion.div
                                animate={{
                                    y: [0, -1, 0],
                                }}
                                transition={{
                                    duration: 2.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#7f8fff]/35 to-white/[0.08]"
                            >
                                <UserRound
                                    size={15}
                                    className="text-zinc-300"
                                    strokeWidth={1.5}
                                />

                                <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-[#0c0d0f] bg-emerald-400" />
                            </motion.div>

                            <div>
                                <p className="text-[9px] font-medium text-zinc-300">
                                    Alex
                                </p>

                                <div className="mt-1 flex items-center gap-1.5">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                    <span className="text-[8px] text-zinc-600">
                                        Online
                                    </span>
                                </div>
                            </div>

                        </div>

                        <MessageCircle
                            size={14}
                            className="text-[#7f8fff]"
                        />

                    </div>


                    {/* Animated conversation */}

                    <div className="flex flex-1 flex-col justify-end gap-3 py-4">

                        <motion.div
                            initial={{ opacity: 0, x: -12 }}
                            animate={{
                                opacity: [0.65, 1, 1, 0.65],
                                x: 0,
                            }}
                            transition={{
                                duration: 4.5,
                                repeat: Infinity,
                                repeatDelay: 1,
                            }}
                            className="flex items-end gap-2"
                        >

                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[0.08]">
                                <UserRound
                                    size={11}
                                    className="text-zinc-500"
                                />
                            </div>

                            <div className="max-w-[78%] rounded-2xl rounded-bl-sm bg-white/[0.06] px-2.5 py-2 sm:max-w-[68%] sm:px-4 sm:py-3">

                                <p className="text-[8px] text-zinc-400">
                                    Hey Piyush 👋
                                </p>

                                <p className="mt-1 text-[7px] text-zinc-600">
                                    How's the project going?
                                </p>

                            </div>

                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, x: 12 }}
                            animate={{
                                opacity: [0.65, 1, 1, 0.65],
                                x: 0,
                            }}
                            transition={{
                                duration: 4.5,
                                delay: 1.2,
                                repeat: Infinity,
                                repeatDelay: 1,
                            }}
                            className="ml-auto flex max-w-[82%] items-end gap-2 sm:max-w-[70%]"
                        >

                            <div className="rounded-2xl rounded-br-sm bg-[#7f8fff]/15 px-2.5 py-2 sm:px-4 sm:py-3">

                                <p className="text-[8px] text-[#aab4ff]">
                                    Going well 🙂
                                </p>

                                <div className="mt-1 flex items-center justify-end gap-1">
                                    <span className="text-[7px] text-[#8995ff]/70">
                                        Just finishing the UI
                                    </span>
                                    <CheckCheck
                                        size={9}
                                        className="text-[#8995ff]"
                                    />
                                </div>

                            </div>

                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7f8fff]/20">
                                <UserRound
                                    size={11}
                                    className="text-[#aab4ff]"
                                />
                            </div>

                        </motion.div>


                        {/* Typing indicator */}

                        <motion.div
                            animate={{
                                opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                                duration: 3.2,
                                repeat: Infinity,
                                repeatDelay: 0.5,
                            }}
                            className="flex items-center gap-2"
                        >

                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.06]">
                                <UserRound
                                    size={11}
                                    className="text-zinc-600"
                                />
                            </div>

                            <div className="flex items-center gap-1 rounded-full bg-white/[0.05] px-3 py-2">
                                <span className="h-1 w-1 rounded-full bg-zinc-500 animate-pulse" />
                                <span className="h-1 w-1 rounded-full bg-zinc-500 animate-pulse [animation-delay:150ms]" />
                                <span className="h-1 w-1 rounded-full bg-zinc-500 animate-pulse [animation-delay:300ms]" />
                            </div>

                        </motion.div>

                    </div>


                    {/* Input */}

                    <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">

                        <Paperclip
                            size={13}
                            className="text-zinc-700"
                        />

                        <div className="h-1.5 flex-1 rounded bg-white/[0.05]" />

                        <motion.span
                            animate={{
                                scale: [1, 1.08, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                            className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#7f8fff]/15"
                        >
                            <ArrowUpRight
                                size={12}
                                className="text-[#8f9aff]"
                            />
                        </motion.span>

                    </div>

                </div>

            </div>

        </div>
    );
}

/* ========================================================= */
/* SMALL CHAT PREVIEW */
/* ========================================================= */

function ChatPreview() {
    return (
        <div className="rounded-[24px] border border-white/[0.07] bg-[#0c0d0f] p-3 sm:p-4">

            {/* Group header */}

            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">

                <div className="flex items-center gap-3">

                    {/* Group avatar stack */}

                    <div className="relative flex h-9 w-11 items-center">

                        <motion.div
                            animate={{ y: [0, -1, 0] }}
                            transition={{
                                duration: 2.4,
                                repeat: Infinity,
                            }}
                            className="absolute left-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#0c0d0f] bg-[#7f8fff]/25"
                        >
                            <UserRound size={11} className="text-[#aab4ff]" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 1, 0] }}
                            transition={{
                                duration: 2.4,
                                repeat: Infinity,
                                delay: 0.2,
                            }}
                            className="absolute left-4 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#0c0d0f] bg-white/[0.09]"
                        >
                            <UserRound size={11} className="text-zinc-400" />
                        </motion.div>

                        <span className="absolute -bottom-0.5 left-1 h-2 w-2 rounded-full border border-[#0c0d0f] bg-emerald-400" />

                    </div>

                    <div>
                        <p className="text-[9px] font-medium text-zinc-300">
                            Project Team
                        </p>

                        <div className="mt-1 flex items-center gap-1.5">
                            <Users
                                size={9}
                                className="text-zinc-600"
                            />

                            <span className="text-[8px] text-zinc-600">
                                6 members · 3 online
                            </span>
                        </div>
                    </div>

                </div>

                <MessageCircle
                    size={14}
                    className="text-[#7f8fff]"
                />

            </div>


            {/* Group messages */}

            <div className="space-y-3 py-5 sm:py-6">

                <motion.div
                    animate={{
                        opacity: [0.7, 1, 0.7],
                        x: [0, 2, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                    }}
                    className="flex items-end gap-2"
                >

                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[0.08]">
                        <UserRound
                            size={11}
                            className="text-zinc-500"
                        />
                    </div>

                    <div className="max-w-[72%] rounded-2xl rounded-bl-sm bg-white/[0.06] px-4 py-3">
                        <p className="text-[7px] text-zinc-600">
                            Alex
                        </p>

                        <p className="mt-1 text-[8px] text-zinc-400">
                            Hey team! 👋
                        </p>

                    </div>

                </motion.div>


                <motion.div
                    animate={{
                        opacity: [0.7, 1, 0.7],
                        x: [0, -2, 0],
                    }}
                    transition={{
                        duration: 4,
                        delay: 1,
                        repeat: Infinity,
                    }}
                    className="flex items-end gap-2"
                >

                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7f8fff]/20">
                        <UserRound
                            size={11}
                            className="text-[#aab4ff]"
                        />
                    </div>

                    <div className="max-w-[72%] rounded-2xl rounded-bl-sm bg-white/[0.06] px-4 py-3">

                        <p className="text-[7px] text-zinc-600">
                            Priya
                        </p>

                        <p className="mt-1 text-[8px] text-zinc-400">
                            I'll review the latest UI.
                        </p>

                    </div>

                </motion.div>


                <motion.div
                    animate={{
                        opacity: [0.65, 1, 0.65],
                        x: [0, 2, 0],
                    }}
                    transition={{
                        duration: 4,
                        delay: 2,
                        repeat: Infinity,
                    }}
                    className="ml-auto flex max-w-[72%] items-end justify-end gap-2"
                >

                    <div className="rounded-2xl rounded-br-sm bg-[#7f8fff]/15 px-4 py-3">

                        <p className="text-[8px] text-[#aab4ff]">
                            Looks good! 🎉
                        </p>

                        <div className="mt-1 flex items-center justify-end gap-1">
                            <span className="text-[7px] text-[#8995ff]/70">
                                I'll start implementing.
                            </span>

                            <CheckCheck
                                size={9}
                                className="text-[#8995ff]"
                            />
                        </div>

                    </div>

                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7f8fff]/20">
                        <UserRound
                            size={11}
                            className="text-[#aab4ff]"
                        />
                    </div>

                </motion.div>


                {/* Group typing */}

                <motion.div
                    animate={{
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 0.7,
                    }}
                    className="flex items-center gap-2"
                >

                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.06]">
                        <UserRound
                            size={11}
                            className="text-zinc-600"
                        />
                    </div>

                    <div>
                        <p className="mb-1 text-[6px] text-zinc-700">
                            Rahul is typing...
                        </p>

                        <div className="flex items-center gap-1 rounded-full bg-white/[0.05] px-3 py-2">
                            <span className="h-1 w-1 rounded-full bg-[#7f8fff] animate-bounce" />
                            <span className="h-1 w-1 rounded-full bg-[#7f8fff] animate-bounce [animation-delay:120ms]" />
                            <span className="h-1 w-1 rounded-full bg-[#7f8fff] animate-bounce [animation-delay:240ms]" />
                        </div>
                    </div>

                </motion.div>

            </div>

        </div>
    );
}

export default WhizChat;