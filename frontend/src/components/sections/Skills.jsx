import { motion } from "framer-motion";
import {
    Braces,
    Database,
    GitBranch,
    Brain,
} from "lucide-react";


const skillGroups = [
    {
        number: "01",
        title: "Development",
        icon: Braces,
        description:
            "Building responsive interfaces, APIs and full-stack applications.",
        skills: [
            "JavaScript",
            "React",
            "Node.js",
            "Express",
            "REST APIs",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "MUI",
            "Socket.IO",
        ],
    },

    {
        number: "02",
        title: "AI & Machine Learning",
        icon: Brain,
        description:
            "Working with Python, machine learning models and AI-powered applications.",
        skills: [
            "Python",
            "Machine Learning",
            "Scikit-learn",
            "XGBoost",
            "Streamlit",
            "AI / LLMs",
        ],
    },

    {
        number: "03",
        title: "Databases",
        icon: Database,
        description:
            "Designing and working with application data and relational and NoSQL databases.",
        skills: [
            "MongoDB",
            "MySQL",
            "SQL",
            "Oracle",
        ],
    },

    {
        number: "04",
        title: "Tools & Engineering",
        icon: GitBranch,
        description:
            "Using modern development tools and engineering workflows to build and ship software.",
        skills: [
            "Git",
            "GitHub",
            "Linux",
            "VS Code",
            "Postman",
            "Vercel",
            "Render",
        ],
    },
];


function Skills() {
    return (
        <section
            id="skills"
            className="
                relative
                overflow-hidden
                bg-[#111214]
                px-6
                pb-28
                pt-8
                text-white
                sm:px-10
                lg:px-16
                lg:pb-36
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
                    top-20
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#4f6fff]/[0.045]
                    blur-[150px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -left-48
                    bottom-40
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-white/[0.015]
                    blur-[140px]
                "
            />


            {/* ========================================================= */}
            {/* Content */}
            {/* ========================================================= */}

            <div className="relative mx-auto max-w-6xl">

                {/* ===================================================== */}
                {/* Section heading */}
                {/* ===================================================== */}

                <div
                    className="
                        grid
                        gap-10
                        border-t
                        border-white/[0.07]
                        pt-16
                        lg:grid-cols-[0.75fr_1.25fr]
                    "
                >

                    {/* Label */}

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
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >

                        <p
                            className="
                                text-[10px]
                                uppercase
                                tracking-[0.3em]
                                text-zinc-600
                            "
                        >
                            02 / Capabilities
                        </p>

                    </motion.div>


                    {/* Heading */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 24,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.05,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >

                        <h2
                            className="
                                max-w-3xl
                                text-4xl
                                font-medium
                                leading-[1.02]
                                tracking-[-0.045em]
                                sm:text-5xl
                                lg:text-6xl
                            "
                        >
                            What I build
                            <span className="text-zinc-600">
                                {" "}with.
                            </span>
                        </h2>


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
                            A development-focused stack spanning
                            full-stack applications, AI and machine
                            learning, databases and modern engineering
                            tools.
                        </p>

                    </motion.div>

                </div>


                {/* ===================================================== */}
                {/* Skill groups */}
                {/* ===================================================== */}

                <div className="mt-16">

                    {skillGroups.map((group, index) => (

                        <SkillGroup
                            key={group.title}
                            group={group}
                            index={index}
                        />

                    ))}

                </div>


                {/* ===================================================== */}
                {/* Education */}
                {/* ===================================================== */}

                <Education />

            </div>

        </section>
    );
}


/* ========================================================= */
/* SKILL GROUP */
/* ========================================================= */

function SkillGroup({ group, index }) {

    const Icon = group.icon;

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 25,
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
                duration: 0.6,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="
                group
                relative
                border-b
                border-white/[0.07]
                py-9
                transition-colors
                duration-500
                lg:py-11
            "
        >

            {/* Hover glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -left-20
                    top-1/2
                    h-40
                    w-40
                    -translate-y-1/2
                    rounded-full
                    bg-[#4f6fff]/[0.06]
                    opacity-0
                    blur-[80px]
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                "
            />


            <div
                className="
                    relative
                    grid
                    gap-8
                    lg:grid-cols-[0.75fr_1.25fr]
                    lg:items-start
                "
            >

                {/* ================================================= */}
                {/* Left */}
                {/* ================================================= */}

                <div className="flex items-start gap-5">

                    <span
                        className="
                            pt-1
                            text-[10px]
                            tracking-[0.2em]
                            text-zinc-700
                            transition-colors
                            duration-300
                            group-hover:text-[#7f8fff]
                        "
                    >
                        {group.number}
                    </span>


                    <div>

                        <div className="flex items-center gap-4">

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/[0.07]
                                    bg-white/[0.025]
                                    text-zinc-500
                                    transition-all
                                    duration-300
                                    group-hover:border-[#4f6fff]/25
                                    group-hover:bg-[#4f6fff]/[0.08]
                                    group-hover:text-[#9aa6ff]
                                "
                            >
                                <Icon
                                    size={17}
                                    strokeWidth={1.6}
                                />
                            </div>


                            <h3
                                className="
                                    text-xl
                                    font-medium
                                    tracking-[-0.03em]
                                    text-zinc-200
                                    transition-colors
                                    duration-300
                                    group-hover:text-white
                                    sm:text-2xl
                                "
                            >
                                {group.title}
                            </h3>

                        </div>


                        <p
                            className="
                                mt-4
                                max-w-sm
                                text-xs
                                leading-6
                                text-zinc-600
                                transition-colors
                                duration-300
                                group-hover:text-zinc-500
                            "
                        >
                            {group.description}
                        </p>

                    </div>

                </div>


                {/* ================================================= */}
                {/* Right — Skills */}
                {/* ================================================= */}

                <div>

                    <div className="flex flex-wrap gap-2">

                        {group.skills.map(
                            (skill, skillIndex) => (

                                <motion.span
                                    key={skill}
                                    initial={{
                                        opacity: 0,
                                        y: 5,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        delay:
                                            index * 0.07 +
                                            skillIndex * 0.025,
                                    }}
                                    whileHover={{
                                        y: -2,
                                    }}
                                    className="
                                        cursor-default
                                        rounded-full
                                        border
                                        border-white/[0.08]
                                        bg-white/[0.025]
                                        px-3
                                        py-1.5
                                        text-[11px]
                                        text-zinc-500
                                        transition-all
                                        duration-300
                                        hover:border-[#4f6fff]/30
                                        hover:bg-[#4f6fff]/[0.06]
                                        hover:text-zinc-200
                                    "
                                >
                                    {skill}
                                </motion.span>

                            )
                        )}

                    </div>

                </div>

            </div>

        </motion.div>
    );
}


/* ========================================================= */
/* EDUCATION */
/* ========================================================= */

function Education() {

    return (
        <div
            id="education"
            className="
                mt-28
                border-t
                border-white/[0.07]
                pt-16
                lg:mt-36
            "
        >

            <div
                className="
                    grid
                    gap-12
                    lg:grid-cols-[0.75fr_1.25fr]
                "
            >

                {/* ================================================= */}
                {/* Label */}
                {/* ================================================= */}

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
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >

                    <p
                        className="
                            text-[10px]
                            uppercase
                            tracking-[0.3em]
                            text-zinc-600
                        "
                    >
                        03 / Education
                    </p>

                </motion.div>


                {/* ================================================= */}
                {/* Education content */}
                {/* ================================================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 24,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.05,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >

                    <div
                        className="
                            rounded-[28px]
                            border
                            border-white/[0.07]
                            bg-white/[0.025]
                            p-7
                            backdrop-blur-xl
                            transition-all
                            duration-500
                            hover:border-white/[0.11]
                            hover:bg-white/[0.035]
                            sm:p-9
                        "
                    >

                        <div
                            className="
                                flex
                                flex-col
                                gap-8
                                sm:flex-row
                                sm:items-end
                                sm:justify-between
                            "
                        >

                            <div>

                                <p
                                    className="
                                        text-[10px]
                                        uppercase
                                        tracking-[0.2em]
                                        text-zinc-600
                                    "
                                >
                                    2022 — 2026
                                </p>


                                <h3
                                    className="
                                        mt-4
                                        text-3xl
                                        font-medium
                                        leading-tight
                                        tracking-[-0.04em]
                                        text-zinc-100
                                        sm:text-4xl
                                    "
                                >
                                    B.E. Computer Science
                                    <br className="hidden sm:block" />
                                    {" "} & Engineering
                                </h3>


                                <p
                                    className="
                                        mt-4
                                        text-sm
                                        leading-6
                                        text-zinc-500
                                        sm:text-base
                                    "
                                >
                                    Chandigarh College of Engineering
                                    and Technology
                                </p>

                            </div>


                            {/* CGPA */}

                            <div
                                className="
                                    shrink-0
                                    rounded-[20px]
                                    border
                                    border-white/[0.07]
                                    bg-white/[0.035]
                                    px-6
                                    py-5
                                    text-center
                                    backdrop-blur-xl
                                "
                            >

                                <p
                                    className="
                                        text-[9px]
                                        uppercase
                                        tracking-[0.2em]
                                        text-zinc-600
                                    "
                                >
                                    CGPA
                                </p>


                                <p
                                    className="
                                        mt-1
                                        text-3xl
                                        font-medium
                                        tracking-[-0.04em]
                                        text-zinc-100
                                    "
                                >
                                    7.97
                                </p>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

        </div>
    );
}


export default Skills;