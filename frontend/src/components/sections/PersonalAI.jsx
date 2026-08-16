import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Bot,
    Sparkles,
    RotateCcw,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { streamChat } from "../../services/api";

const suggestions = [
    "Tell me about your projects",
    "What did you work on at Gemini Solutions?",
    "What are your strongest skills?",
];

function PersonalAI() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const abortControllerRef = useRef(null);

    async function handleSend(text) {
        const question = text.trim();

        if (!question || loading) {
            return;
        }

        setInput("");

        const history = messages.map((message) => ({
            role: message.role,
            content: message.content,
        }));

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                content: question,
            },
            {
                role: "assistant",
                content: "",
            },
        ]);

        setLoading(true);

        const controller = new AbortController();

        abortControllerRef.current = controller;

        try {
            await streamChat(
                question,
                history,
                (chunk) => {
                    setMessages((prev) => {
                        const updated = [...prev];

                        const lastIndex =
                            updated.length - 1;

                        if (
                            updated[lastIndex]?.role ===
                            "assistant"
                        ) {
                            updated[lastIndex] = {
                                ...updated[lastIndex],
                                content:
                                    updated[lastIndex]
                                        .content + chunk,
                            };
                        }

                        return updated;
                    });
                },
                controller.signal
            );
        } catch (error) {
            if (error.name === "AbortError") {
                return;
            }

            console.error(
                "AI streaming error:",
                error
            );

            setMessages((prev) => {
                const updated = [...prev];

                const lastIndex =
                    updated.length - 1;

                if (
                    updated[lastIndex]?.role ===
                    "assistant"
                ) {
                    updated[lastIndex] = {
                        ...updated[lastIndex],
                        content:
                            "Something went wrong. Please try again.",
                    };
                }

                return updated;
            });
        } finally {
            setLoading(false);
            abortControllerRef.current = null;
        }
    }

    function handleNewChat() {
        abortControllerRef.current?.abort();

        setMessages([]);
        setInput("");
        setLoading(false);

        abortControllerRef.current = null;
    }

    function handleSubmit(event) {
        event.preventDefault();

        handleSend(input);
    }

    return (
        <section
            id="ai"
            className="relative overflow-hidden bg-[#111214] px-6 py-32 text-white sm:px-10 lg:px-16 lg:py-40"
        >
            {/* Ambient glow */}

            <motion.div
                animate={{
                    x: [0, 25, 0],
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#4f6fff]/[0.07] blur-[150px]"
            />

            <motion.div
                animate={{
                    x: [0, -20, 0],
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#647cff]/[0.05] blur-[150px]"
            />


            <div className="relative mx-auto max-w-6xl">

                {/* Header */}

                <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">

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
                            amount: 0.4,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                    >
                        <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                            05 / Personal AI
                        </p>
                    </motion.div>


                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.4,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                        }}
                    >
                        <h2 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                            You can ask me
                            <span className="text-zinc-500">
                                {" "}anything.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                            I've built a small AI assistant around
                            my profile so you can explore my
                            experience, projects and skills through
                            a conversation.
                        </p>
                    </motion.div>

                </div>


                {/* Chat area */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
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
                        duration: 0.9,
                        delay: 0.15,
                    }}
                    className="mx-auto mt-20 max-w-4xl lg:mt-24"
                >

                    <div className="overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.035] shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-2xl">

                        {/* Chat header */}

                        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-6">

                            <div className="flex items-center gap-3">

                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08]">
                                    <Sparkles
                                        size={16}
                                        className="text-[#8f9aff]"
                                    />
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-zinc-200">
                                        Piyush AI
                                    </p>

                                    <div className="mt-0.5 flex items-center gap-2">

                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                                        <span className="text-[10px] text-zinc-500">
                                            Online
                                        </span>

                                    </div>
                                </div>

                            </div>


                            <button
                                onClick={handleNewChat}
                                disabled={
                                    loading ||
                                    messages.length === 0
                                }
                                className="flex items-center gap-2 rounded-full border border-white/[0.07] px-3 py-2 text-xs text-zinc-500 transition-colors hover:border-white/[0.12] hover:text-zinc-300 disabled:cursor-not-allowed disabled:opacity-30"
                            >
                                <RotateCcw size={13} />

                                New chat
                            </button>

                        </div>


                        {/* Messages */}

                        <div className="min-h-[360px] max-h-[560px] overflow-y-auto px-5 py-7 sm:px-8 sm:py-8">

                            {messages.length === 0 ? (
                                <EmptyState
                                    onSelect={handleSend}
                                />
                            ) : (
                                <div className="space-y-7">

                                    {messages.map(
                                        (message, index) => (
                                            <Message
                                                key={`${message.role}-${index}`}
                                                message={message}
                                                loading={
                                                    loading &&
                                                    index ===
                                                        messages.length -
                                                            1
                                                }
                                            />
                                        )
                                    )}

                                </div>
                            )}

                        </div>


                        {/* Input */}

                        <div className="border-t border-white/[0.07] p-4 sm:p-5">

                            <form
                                onSubmit={handleSubmit}
                                className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-black/[0.15] px-4 py-2"
                            >

                                <input
                                    value={input}
                                    onChange={(event) =>
                                        setInput(
                                            event.target.value
                                        )
                                    }
                                    disabled={loading}
                                    placeholder="Ask me about my work..."
                                    className="min-w-0 flex-1 bg-transparent py-2 text-sm text-zinc-200 outline-none placeholder:text-zinc-600"
                                />


                                {loading ? (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            abortControllerRef.current?.abort()
                                        }
                                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-zinc-900 transition-transform hover:scale-105"
                                    >
                                        <span className="h-2.5 w-2.5 rounded-sm bg-zinc-900" />
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={!input.trim()}
                                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-zinc-900 transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30"
                                    >
                                        <ArrowUpRight
                                            size={16}
                                        />
                                    </button>
                                )}

                            </form>

                            <p className="mt-3 text-center text-[10px] text-zinc-700">
                                Ask about projects, experience,
                                skills or background.
                            </p>

                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}


function EmptyState({ onSelect }) {
    return (
        <div className="flex min-h-[310px] flex-col items-center justify-center text-center">

            <motion.div
                initial={{
                    scale: 0.8,
                    opacity: 0,
                }}
                animate={{
                    scale: 1,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.05]"
            >
                <Bot
                    size={22}
                    className="text-zinc-400"
                />
            </motion.div>


            <h3 className="mt-6 text-lg font-medium text-zinc-200">
                Ask me anything.
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">
                Curious about something on my portfolio?
                Start a conversation.
            </p>


            <div className="mt-7 flex max-w-xl flex-wrap justify-center gap-2">

                {suggestions.map((suggestion) => (
                    <button
                        key={suggestion}
                        onClick={() =>
                            onSelect(suggestion)
                        }
                        className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3.5 py-2 text-xs text-zinc-500 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.05] hover:text-zinc-300"
                    >
                        {suggestion}
                    </button>
                ))}

            </div>

        </div>
    );
}


function Message({ message, loading }) {
    const isUser = message.role === "user";

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 8,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.3,
            }}
            className={`flex ${
                isUser
                    ? "justify-end"
                    : "justify-start"
            }`}
        >

            <div
                className={`
                    max-w-[85%]
                    ${
                        isUser
                            ? "rounded-2xl rounded-br-md bg-white/[0.09] px-4 py-3 text-zinc-200"
                            : "max-w-2xl text-zinc-400"
                    }
                `}
            >

                {isUser ? (
                    <p className="text-sm leading-6">
                        {message.content}
                    </p>
                ) : (
                    <div className="prose prose-invert prose-sm max-w-none leading-7 prose-p:text-zinc-400 prose-headings:text-zinc-200 prose-strong:text-zinc-200 prose-code:text-[#9ba5ff] prose-li:text-zinc-400">
                        {message.content ? (
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                            >
                                {message.content}
                            </ReactMarkdown>
                        ) : (
                            loading && (
                                <div className="flex items-center gap-1.5 py-2">
                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-500" />
                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-500 [animation-delay:150ms]" />
                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-500 [animation-delay:300ms]" />
                                </div>
                            )
                        )}
                    </div>
                )}

            </div>

        </motion.div>
    );
}

export default PersonalAI;