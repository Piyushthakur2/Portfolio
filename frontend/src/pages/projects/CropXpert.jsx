import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowUpRight,
    BarChart3,
    Leaf,
    Brain,
} from "lucide-react";
import { Link } from "react-router-dom";

const technologies = [
    "Python",
    "Streamlit",
    "XGBoost",
    "HTML",
    "CSS",
];

function CropXpert() {
    return (
        <div className="min-h-screen bg-[#f5f5f1] text-zinc-950">

            {/* Navigation */}

            <header className="fixed left-1/2 top-3 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 sm:top-4 sm:w-[calc(100%-2rem)]">

                <div className="flex h-13 items-center justify-between rounded-[18px] border border-black/[0.07] bg-[#f5f5f1]/70 px-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:h-14 sm:px-5">

                    <Link
                        to="/work"
                        className="group flex items-center gap-1.5 text-xs text-zinc-500 transition-colors hover:text-zinc-950 sm:gap-2 sm:text-sm"
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

                        <Leaf
                            size={15}
                            className="text-emerald-700"
                        />

                        <span className="text-xs font-medium text-zinc-500">
                            CropXpert
                        </span>

                    </div>

                </div>

            </header>


            <main>

                {/* ================================================= */}
                {/* HERO */}
                {/* ================================================= */}

                <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-10 sm:pt-40 lg:px-16 lg:pb-32 lg:pt-48">

                    {/* Ambient background */}

                    <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-emerald-300/[0.12] blur-[150px]" />

                    <div className="pointer-events-none absolute -left-40 top-60 h-[450px] w-[450px] rounded-full bg-lime-300/[0.08] blur-[150px]" />


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

                            <span className="text-[11px] uppercase tracking-[0.3em] text-emerald-700">
                                03 / Machine learning
                            </span>


                            <h1 className="mt-7 max-w-5xl text-[3.5rem] font-medium leading-[0.9] tracking-[-0.06em] sm:mt-8 sm:text-7xl lg:text-[112px]">

                                CropXpert
                                <span className="text-emerald-700">
                                    .
                                </span>

                            </h1>


                            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">

                                <p className="max-w-2xl text-lg leading-8 text-zinc-500 sm:text-xl">
                                    A crop-prediction tool I built
                                    for Indian agriculture using
                                    machine learning.
                                </p>


                                <div className="lg:text-right">

                                    <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                                        Technology
                                    </p>

                                    <p className="mt-3 text-sm leading-6 text-zinc-500">
                                        Python · Streamlit · XGBoost
                                        <br />
                                        HTML · CSS
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
                            <CropDashboard />
                        </motion.div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* KEY NUMBERS */}
                {/* ================================================= */}

                <section className="border-y border-black/[0.07] bg-white/40 px-5 py-16 sm:px-10 sm:py-20 lg:px-16">

                    <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-[28px] border border-black/[0.07] bg-black/[0.07] sm:grid-cols-3">

                        <Metric
                            value="22+"
                            label="Crops"
                        />

                        <Metric
                            value="99.32%"
                            label="Accuracy"
                        />

                        <Metric
                            value="XGBoost"
                            label="Model"
                        />

                    </div>

                </section>


                {/* ================================================= */}
                {/* OVERVIEW */}
                {/* ================================================= */}

                <section className="px-5 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">

                    <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.65fr_1.35fr]">

                        <div>

                            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                                Overview
                            </p>

                        </div>


                        <div>

                            <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">

                                Machine learning
                                presented through
                                a simple interface.

                            </h2>


                            <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">

                                CropXpert is a crop-prediction
                                tool built for Indian agriculture.
                                The project uses an XGBoost model
                                and presents its results through
                                a Streamlit web application.

                            </p>


                            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">

                                I also added data visualizations
                                so the results can be explored
                                through the application.

                            </p>

                        </div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* ML WORKFLOW */}
                {/* ================================================= */}

                <section className="border-y border-black/[0.07] bg-white/30 px-5 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">

                    <div className="mx-auto max-w-6xl">

                        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">

                            <div>
                                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                                    ML workflow
                                </p>

                                <p className="mt-5 max-w-xs text-sm leading-6 text-zinc-500">
                                    From agricultural inputs to a crop prediction, the project keeps the machine-learning workflow behind a simple web interface.
                                </p>
                            </div>


                            <div>

                                <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
                                    Turning data into
                                    <span className="text-zinc-400"> a prediction.</span>
                                </h2>

                                <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                                    CropXpert combines an XGBoost prediction model with a Streamlit interface, allowing users to interact with the model through a straightforward web application.
                                </p>


                                {/* Workflow */}

                                <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-4">

                                    {[
                                        {
                                            number: "01",
                                            title: "Agricultural data",
                                            text: "The application works with agricultural inputs used for crop prediction.",
                                        },
                                        {
                                            number: "02",
                                            title: "XGBoost",
                                            text: "The trained machine-learning model produces the crop prediction.",
                                        },
                                        {
                                            number: "03",
                                            title: "Prediction",
                                            text: "The model returns a crop recommendation from the provided inputs.",
                                        },
                                        {
                                            number: "04",
                                            title: "Streamlit",
                                            text: "The result is presented through an accessible web interface.",
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
                                            className="group rounded-2xl border border-black/[0.07] bg-white/60 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-700/20 hover:shadow-md"
                                        >

                                            <div className="flex items-center justify-between">

                                                <span className="text-[9px] tracking-[0.2em] text-zinc-400">
                                                    {item.number}
                                                </span>

                                                {index < 3 && (
                                                    <ArrowUpRight
                                                        size={13}
                                                        className="text-zinc-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                    />
                                                )}

                                            </div>


                                            <h3 className="mt-8 text-sm font-medium text-zinc-800">
                                                {item.title}
                                            </h3>

                                            <p className="mt-3 text-xs leading-6 text-zinc-500">
                                                {item.text}
                                            </p>

                                        </motion.div>

                                    ))}

                                </div>


                                {/* Key concepts */}

                                <div className="mt-10 border-t border-black/[0.07] pt-7">

                                    <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                                        Project focus
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">

                                        {[
                                            "Machine learning",
                                            "XGBoost",
                                            "Crop prediction",
                                            "Streamlit",
                                            "Data visualization",
                                        ].map((item) => (

                                            <span
                                                key={item}
                                                className="rounded-full border border-black/[0.07] bg-white/60 px-3 py-1.5 text-xs text-zinc-500 shadow-sm"
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
                {/* MODEL */}
                {/* ================================================= */}

                <section className="px-5 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36">

                    <div className="mx-auto max-w-6xl">

                        <div className="relative overflow-hidden rounded-[28px] border border-black/[0.07] bg-white/60 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.05)] backdrop-blur-xl sm:rounded-[32px] sm:p-12 lg:p-16">

                            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-300/[0.12] blur-[100px]" />

                            <div className="relative grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

                                <div>

                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/[0.06] bg-white shadow-sm">

                                        <Brain
                                            size={20}
                                            strokeWidth={1.5}
                                            className="text-emerald-700"
                                        />

                                    </div>


                                    <p className="mt-7 text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                                        Prediction model
                                    </p>


                                    <h2 className="mt-4 text-4xl font-medium tracking-[-0.055em] sm:text-6xl">
                                        XGBoost
                                        <span className="text-emerald-700">
                                            .
                                        </span>
                                    </h2>

                                </div>


                                <div>

                                    <p className="text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">

                                        99.32
                                        <span className="text-emerald-700">
                                            %
                                        </span>

                                    </p>


                                    <p className="mt-4 max-w-md text-sm leading-7 text-zinc-500">
                                        Accuracy achieved on the
                                        test data.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* VISUALIZATION */}
                {/* ================================================= */}

                <section className="border-y border-black/[0.07] bg-[#ecefe7] px-5 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">

                    <div className="mx-auto max-w-6xl">

                        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

                            <div>

                                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                                    Visualization
                                </p>


                                <h2 className="mt-5 text-4xl font-medium tracking-[-0.045em] sm:text-5xl">

                                    Explore the
                                    <br />
                                    results.

                                </h2>


                                <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-500">

                                    Data visualizations are included
                                    in the application to make the
                                    results easier to explore.

                                </p>

                            </div>


                            <Visualization />

                        </div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* TECHNOLOGIES */}
                {/* ================================================= */}

                <section className="px-5 py-20 sm:px-10 sm:py-24 lg:px-16">

                    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">

                        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                            Technology
                        </p>


                        <div className="flex flex-wrap gap-2">

                            {technologies.map(
                                (technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-full border border-black/[0.07] bg-white/60 px-4 py-2 text-xs text-zinc-500 shadow-sm"
                                    >
                                        {technology}
                                    </span>
                                )
                            )}

                        </div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* BACK TO WORK */}
                {/* ================================================= */}

                <section className="border-t border-black/[0.07] px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">

                    <div className="mx-auto max-w-6xl">

                        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                            End of project
                        </p>


                        <Link
                            to="/work"
                            className="group mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end sm:gap-8"
                        >

                            <div>

                                <p className="text-sm text-zinc-400">
                                    03
                                </p>

                                <h2 className="mt-3 text-4xl font-medium tracking-[-0.05em] sm:text-7xl">

                                    Back to
                                    <span className="text-zinc-400">
                                        {" "}work.
                                    </span>

                                </h2>

                            </div>


                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/[0.08] transition-all duration-300 group-hover:bg-zinc-950 group-hover:text-white">

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
/* METRIC */
/* ========================================================= */

function Metric({ value, label }) {
    return (
        <div className="bg-[#f5f5f1] p-7 sm:p-9">

            <p className="text-3xl font-medium tracking-[-0.04em] text-zinc-900 sm:text-4xl">
                {value}
            </p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                {label}
            </p>

        </div>
    );
}


/* ========================================================= */
/* DASHBOARD */
/* ========================================================= */

function CropDashboard() {
    return (
        <div className="relative aspect-auto overflow-hidden rounded-[24px] border border-black/[0.07] bg-[#edf0e8] p-3 shadow-[0_40px_100px_rgba(0,0,0,0.08)] sm:aspect-[16/8] sm:rounded-[28px] sm:p-7">

            <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">

                <div className="flex items-center gap-2">

                    <span className="h-2.5 w-2.5 rounded-full bg-red-300/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

                </div>


                <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-400">
                    CropXpert
                </span>

            </div>


            <div className="mt-4 grid gap-3 sm:mt-5 sm:h-[calc(100%-55px)] sm:grid-cols-[0.8fr_1.2fr]">

                {/* Prediction card */}

                <div className="rounded-2xl border border-black/[0.06] bg-white/60 p-4 backdrop-blur-xl sm:p-5">

                    <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-400">
                        Prediction accuracy
                    </p>


                    <p className="mt-4 text-4xl font-medium tracking-[-0.06em] text-zinc-900 sm:text-6xl">

                        99.32
                        <span className="text-emerald-700">
                            %
                        </span>

                    </p>


                    <div className="mt-8 flex items-center gap-2">

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700/10">

                            <Leaf
                                size={14}
                                className="text-emerald-700"
                            />

                        </span>

                        <div>

                            <p className="text-[9px] text-zinc-500">
                                Model
                            </p>

                            <p className="text-[10px] font-medium text-zinc-800">
                                XGBoost
                            </p>

                        </div>

                    </div>

                </div>


                {/* Chart */}

                <div className="rounded-2xl border border-black/[0.06] bg-white/50 p-4 sm:p-5">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-400">
                                Crop coverage
                            </p>

                            <p className="mt-1 text-xs font-medium text-zinc-800">
                                22+ crops
                            </p>

                        </div>

                        <BarChart3
                            size={17}
                            strokeWidth={1.5}
                            className="text-zinc-400"
                        />

                    </div>


                    <div className="mt-8 flex h-[55%] items-end gap-2">

                        {[35, 52, 44, 67, 58, 79, 65, 91, 73].map(
                            (height, index) => (
                                <motion.div
                                    key={index}
                                    initial={{
                                        height: 0,
                                    }}
                                    whileInView={{
                                        height: `${height}%`,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        delay:
                                            index * 0.05,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1,
                                        ],
                                    }}
                                    className="flex-1 rounded-t-md bg-emerald-700/15"
                                />
                            )
                        )}

                    </div>

                </div>

            </div>

        </div>
    );
}


/* ========================================================= */
/* VISUALIZATION */
/* ========================================================= */

function Visualization() {
    return (
        <div className="rounded-[24px] border border-black/[0.07] bg-white/60 p-4 shadow-[0_25px_70px_rgba(0,0,0,0.05)] backdrop-blur-xl sm:rounded-[28px] sm:p-8">

            <div className="flex items-end justify-between gap-3">

                {[48, 65, 54, 78, 62, 88, 71, 95].map(
                    (height, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                height: 0,
                            }}
                            whileInView={{
                                height: `${height * 2}px`,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.06,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1,
                                ],
                            }}
                            className="w-full rounded-t-xl bg-emerald-700/15"
                        />
                    )
                )}

            </div>


            <div className="mt-4 flex justify-between border-t border-black/[0.06] pt-4">

                <span className="text-[9px] uppercase tracking-[0.18em] text-zinc-400">
                    Data visualization
                </span>

                <span className="text-[9px] uppercase tracking-[0.18em] text-zinc-400">
                    CropXpert
                </span>

            </div>

        </div>
    );
}

export default CropXpert;