import { Mail, Phone } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import SEO from "../components/SEO";

function Contact() {
    return (
        <main className="min-h-screen bg-[#111214] text-white">

            <SEO
                title="Contact Piyush Thakur"
                description="Get in touch with Piyush Thakur about software engineering opportunities, projects and collaboration."
                path="/contact"
            />

            <Navbar />

            <div className="mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-40">

                {/* Heading */}

                <p className="text-sm text-zinc-500">
                    06 / Contact
                </p>

                <h1 className="mt-7 text-[3.35rem] font-medium leading-[0.95] tracking-[-0.05em] sm:mt-8 sm:text-7xl lg:text-8xl">
                    Let&apos;s build
                    <br />
                    <span className="text-zinc-500">
                        something good.
                    </span>
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-400 sm:mt-6 sm:text-base sm:leading-7">
                    Have an opportunity, project, or just want
                    to talk? I&apos;d be happy to hear from you.
                </p>


                {/* Contact cards */}

                <div className="mt-10 grid gap-3 sm:mt-14 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Email */}

                    <a
                        href="mailto:piyushh1915@gmail.com"
                        className="
                            group
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/5
                            p-5
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-white/20
                            hover:bg-white/[0.07]
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/5
                                    text-zinc-400
                                    transition-colors
                                    duration-300
                                    group-hover:text-white
                                "
                            >
                                <Mail size={17} />
                            </div>

                            <span className="text-zinc-700">
                                ↗
                            </span>

                        </div>

                        <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:mt-7">
                            Email
                        </p>

                        <p className="mt-2 truncate text-sm text-zinc-300 transition-colors duration-300 group-hover:text-white">
                            piyushh1915@gmail.com
                        </p>

                    </a>


                    {/* Phone */}

                    <a
                        href="tel:+919805751939"
                        className="
                            group
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/5
                            p-5
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-white/20
                            hover:bg-white/[0.07]
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/5
                                    text-zinc-400
                                    transition-colors
                                    duration-300
                                    group-hover:text-white
                                "
                            >
                                <Phone size={17} />
                            </div>

                            <span className="text-zinc-700">
                                ↗
                            </span>

                        </div>

                        <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:mt-7">
                            Phone
                        </p>

                        <p className="mt-2 text-sm text-zinc-300 transition-colors duration-300 group-hover:text-white">
                            +91 98057 51939
                        </p>

                    </a>


                    {/* LinkedIn */}

                    <a
                        href="https://www.linkedin.com/in/piyush1915/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/5
                            p-5
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-white/20
                            hover:bg-white/[0.07]
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/5
                                    text-sm
                                    font-semibold
                                    text-zinc-400
                                    transition-all
                                    duration-300
                                    group-hover:border-[#4f6fff]/30
                                    group-hover:bg-[#4f6fff]/10
                                    group-hover:text-[#9aa6ff]
                                "
                            >
                                in
                            </div>

                            <span className="text-zinc-700 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                ↗
                            </span>

                        </div>

                        <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:mt-7">
                            LinkedIn
                        </p>

                        <p className="mt-2 text-sm text-zinc-300 transition-colors duration-300 group-hover:text-white">
                            piyush1915
                        </p>

                    </a>


                    {/* GitHub */}

                    <a
                        href="https://github.com/Piyushthakur2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/5
                            p-5
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-white/20
                            hover:bg-white/[0.07]
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/5
                                    text-sm
                                    font-semibold
                                    text-zinc-400
                                    transition-all
                                    duration-300
                                    group-hover:border-[#4f6fff]/30
                                    group-hover:bg-[#4f6fff]/10
                                    group-hover:text-[#9aa6ff]
                                "
                            >
                                GH
                            </div>

                            <span className="text-zinc-700 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                ↗
                            </span>

                        </div>

                        <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:mt-7">
                            GitHub
                        </p>

                        <p className="mt-2 text-sm text-zinc-300 transition-colors duration-300 group-hover:text-white">
                            Piyushthakur2
                        </p>

                    </a>

                </div>


                {/* Bottom CTA */}

                <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.07] pt-6 sm:mt-12 sm:gap-5 sm:pt-7 sm:flex-row sm:items-center sm:justify-between">

                    <p className="max-w-lg text-xs leading-5 text-zinc-700">
                        Open to software engineering opportunities,
                        interesting projects and conversations.
                    </p>

                    <a
                        href="mailto:piyushh1915@gmail.com"
                        className="
                            inline-flex
                            w-fit
                            max-w-full
                            items-center
                            gap-3
                            rounded-full
                            border
                            border-white/[0.08]
                            bg-white/[0.035]
                            px-5
                            py-3
                            text-xs
                            text-zinc-300
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:border-[#4f6fff]/30
                            hover:bg-[#4f6fff]/[0.08]
                            hover:text-white
                        "
                    >
                        Start a conversation

                        <span className="text-sm">
                            ↗
                        </span>
                    </a>

                </div>

            </div>

        </main>
    );
}

export default Contact;