import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Square, RotateCcw } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Navbar from "../components/layout/Navbar";
import { streamChat } from "../services/api";
import SEO from "../components/SEO";


const suggestedPrompts = [
    "Tell me about your experience",
    "What projects have you built?",
    "What are your strongest skills?",
    "Why should we hire you?",
];


function AI() {

    const [messages, setMessages] =
        useState([]);

    const [input, setInput] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const abortControllerRef =
        useRef(null);

    const messagesEndRef =
        useRef(null);


    /*
     * Scroll to the latest message
     */

    function scrollToBottom() {

        requestAnimationFrame(() => {

            messagesEndRef.current?.scrollIntoView({
                behavior: "smooth",
            });

        });
    }


    /*
     * Start a new conversation
     */

    function handleNewChat() {

        abortControllerRef.current?.abort();

        setMessages([]);

        setInput("");

        setLoading(false);

        abortControllerRef.current = null;
    }


    /*
     * Send message
     */

    async function handleSendMessage(text) {

        const question =
            text.trim();

        if (
            !question ||
            loading
        ) {
            return;
        }


        /*
         * Keep the history BEFORE adding
         * the current question.
         */

        const history =
            messages.map((message) => ({
                role: message.role,
                content: message.content,
            }));


        /*
         * Add user message
         */

        setMessages((previous) => [
            ...previous,
            {
                role: "user",
                content: question,
            },
            {
                role: "assistant",
                content: "",
            },
        ]);

        setInput("");

        setLoading(true);

        scrollToBottom();


        /*
         * Create abort controller
         */

        const controller =
            new AbortController();

        abortControllerRef.current =
            controller;


        try {

            await streamChat(
                question,
                history,
                (chunk) => {

                    setMessages((previous) => {

                        const updated =
                            [...previous];

                        const lastIndex =
                            updated.length - 1;

                        const lastMessage =
                            updated[lastIndex];


                        if (
                            lastMessage &&
                            lastMessage.role ===
                            "assistant"
                        ) {

                            updated[lastIndex] = {
                                ...lastMessage,
                                content:
                                    lastMessage.content +
                                    chunk,
                            };

                        }

                        return updated;

                    });


                    scrollToBottom();

                },
                controller.signal
            );

        } catch (error) {

            if (
                error.name ===
                "AbortError"
            ) {

                return;
            }


            console.error(
                "AI streaming error:",
                error
            );


            setMessages((previous) => {

                const updated =
                    [...previous];

                const lastIndex =
                    updated.length - 1;


                if (
                    updated[lastIndex]?.role ===
                    "assistant"
                ) {

                    updated[lastIndex] = {
                        ...updated[lastIndex],

                        content:
                            "I couldn't generate a response right now. Please try again.",
                    };

                }

                return updated;

            });

        } finally {

            setLoading(false);

            abortControllerRef.current =
                null;

            scrollToBottom();

        }
    }


    /*
     * Submit form
     */

    function handleSubmit(event) {

        event.preventDefault();

        handleSendMessage(input);

    }


    /*
     * Stop generation
     */

    function handleStop() {

        abortControllerRef.current?.abort();

        setLoading(false);

        abortControllerRef.current =
            null;
    }


    const hasMessages =
        messages.length > 0;


    return (
        <main
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[#111214]
                px-5
                pb-16
                pt-28
                text-white
                sm:px-10
                sm:pb-20
                lg:px-16
            "
        >

            <SEO
                title="Ask Piyush — AI Portfolio Assistant"
                description="Ask Piyush's AI assistant about his experience, projects, skills and technical background."
                path="/ai"
            />

            <Navbar />


            {/* ========================================================= */}
            {/* Ambient background */}
            {/* ========================================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -left-48
                    top-20
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#4f6fff]/[0.07]
                    blur-[150px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-48
                    bottom-10
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#7c5cff]/[0.05]
                    blur-[150px]
                "
            />


            <div className="relative mx-auto max-w-6xl">


                {/* ===================================================== */}
                {/* Header */}
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
                    className="max-w-4xl"
                >

                    <p
                        className="
        text-[10px]
        uppercase
        tracking-[0.3em]
        text-zinc-600
    "
                    >
                        Personal AI
                    </p>


                    <h1
                        className="
                            mt-6
                            text-[3.35rem]
                            font-medium
                            leading-[0.95]
                            tracking-[-0.055em]
                            sm:text-7xl
                            lg:text-[92px]
                        "
                    >
                        Meet my
                        <br />

                        <span className="text-zinc-600">
                            AI assistant.
                        </span>
                    </h1>


                    <p
                        className="
                            mt-6
                            max-w-xl
                            text-sm
                            leading-7
                            text-zinc-400
                            sm:mt-8
                            sm:text-lg
                        "
                    >
                        Ask anything about my experience,
                        projects, technical skills, education,
                        or background.
                    </p>

                </motion.div>


                {/* ===================================================== */}
                {/* Chat container */}
                {/* ===================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 35,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.15,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                        mt-12
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-white/[0.08]
                        bg-white/[0.025]
                        shadow-[0_30px_100px_rgba(0,0,0,0.25)]
                        backdrop-blur-2xl
                        sm:mt-16
                        lg:mt-20
                    "
                >


                    {/* ================================================= */}
                    {/* Chat header */}
                    {/* ================================================= */}

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            border-b
                            border-white/[0.07]
                            px-4
                            py-3.5
                            sm:px-7
                            sm:py-4
                        "
                    >

                        <div className="flex items-center gap-3">

                            <div
                                className="
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-[#7182ff]/20
                                    bg-[#4f6fff]/10
                                    text-xs
                                    text-[#aab4ff]
                                "
                            >
                                AI
                            </div>


                            <div>

                                <p className="text-sm text-zinc-200">
                                    Piyush&apos;s AI Assistant
                                </p>


                                <div className="mt-0.5 flex items-center gap-1.5">

                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                                    <span className="text-[10px] text-zinc-600">
                                        Online
                                    </span>

                                </div>

                            </div>

                        </div>


                        {hasMessages ? (
                            <button
                                onClick={handleNewChat}
                                className="
            flex
            items-center
            gap-2
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-zinc-600
            transition-colors
            duration-300
            hover:text-zinc-300
        "
                            >
                                <RotateCcw size={12} />
                                New chat
                            </button>
                        ) : (
                            <span
                                className="
            hidden
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-zinc-700
            sm:block
        "
                            >
                                AI / 01
                            </span>
                        )}

                    </div>


                    {/* ================================================= */}
                    {/* Messages */}
                    {/* ================================================= */}

                    <div
                        className="
                            min-h-[420px]
                            max-h-[650px]
                            overflow-y-auto
                            px-4
                            py-6
                            sm:min-h-[440px]
                            sm:px-8
                            sm:py-8
                        "
                    >

                        {!hasMessages ? (

                            /* Empty state */

                            <div
                                className="
                                    flex
                                    min-h-[390px]
                                    flex-col
                                    items-center
                                    justify-center
                                    text-center
                                "
                            >

                                <motion.div
                                    animate={{
                                        scale: [
                                            1,
                                            1.03,
                                            1,
                                        ],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="
                                        flex
                                        h-16
                                        w-16
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        border
                                        border-white/[0.08]
                                        bg-white/[0.035]
                                        text-sm
                                        text-[#9aa6ff]
                                        shadow-[0_0_50px_rgba(79,111,255,0.08)]
                                    "
                                >
                                    AI
                                </motion.div>


                                <h2
                                    className="
                                        mt-6
                                        text-xl
                                        sm:mt-7
                                        sm:text-2xl
                                        font-medium
                                        tracking-[-0.03em]
                                        text-zinc-200
                                    "
                                >
                                    Ask me anything.
                                </h2>


                                <p
                                    className="
                                        mt-3
                                        max-w-md
                                        text-sm
                                        leading-6
                                        text-zinc-600
                                    "
                                >
                                    Try asking about my projects,
                                    experience, technical skills,
                                    or why I would be a good fit
                                    for a software engineering role.
                                </p>


                                {/* Suggested prompts */}

                                <div
                                    className="
                                        mt-6
                                        flex
                                        max-w-2xl
                                        flex-wrap
                                        justify-center
                                        gap-2
                                    "
                                >

                                    {suggestedPrompts.map(
                                        (prompt) => (

                                            <button
                                                key={prompt}
                                                onClick={() =>
                                                    handleSendMessage(
                                                        prompt
                                                    )
                                                }
                                                className="
                                                    rounded-full
                                                    border
                                                    border-white/[0.07]
                                                    bg-white/[0.025]
                                                    px-3.5
                                                    py-2.5
                                                    text-[10px]
                                                    sm:px-4
                                                    sm:py-2
                                                    sm:text-[11px]
                                                    text-zinc-500
                                                    transition-all
                                                    duration-300
                                                    hover:-translate-y-0.5
                                                    hover:border-[#4f6fff]/25
                                                    hover:bg-[#4f6fff]/[0.06]
                                                    hover:text-zinc-300
                                                "
                                            >
                                                {prompt}
                                            </button>

                                        )
                                    )}

                                </div>

                            </div>

                        ) : (

                            /* Messages */

                            <div className="mx-auto flex max-w-4xl flex-col gap-6">

                                <AnimatePresence initial={false}>

                                    {messages.map(
                                        (message, index) => (

                                            <motion.div
                                                key={index}
                                                initial={{
                                                    opacity: 0,
                                                    y: 10,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                }}
                                                className={
                                                    message.role ===
                                                        "user"
                                                        ? "flex justify-end"
                                                        : "flex justify-start"
                                                }
                                            >

                                                {message.role ===
                                                    "user" ? (

                                                    <div
                                                        className="
                                                            max-w-[88%]
                                                            rounded-2xl
                                                            rounded-br-md
                                                            bg-[#4f6fff]/15
                                                            px-3.5
                                                            py-2.5
                                                            text-sm
                                                            sm:max-w-[85%]
                                                            sm:px-4
                                                            sm:py-3
                                                            leading-6
                                                            text-[#c4caff]
                                                        "
                                                    >
                                                        {message.content}
                                                    </div>

                                                ) : (

                                                    <div
                                                        className="
                                                            max-w-[94%]
                                                            text-sm
                                                            sm:max-w-[90%]
                                                            leading-7
                                                            text-zinc-300
                                                        "
                                                    >

                                                        {message.content ? (

                                                            <ReactMarkdown
                                                                remarkPlugins={[
                                                                    remarkGfm,
                                                                ]}
                                                                components={{
                                                                    p: ({
                                                                        children,
                                                                    }) => (
                                                                        <p className="mb-3 last:mb-0">
                                                                            {children}
                                                                        </p>
                                                                    ),

                                                                    strong: ({
                                                                        children,
                                                                    }) => (
                                                                        <strong className="font-medium text-zinc-100">
                                                                            {children}
                                                                        </strong>
                                                                    ),

                                                                    ul: ({
                                                                        children,
                                                                    }) => (
                                                                        <ul className="mb-3 ml-5 list-disc space-y-1">
                                                                            {children}
                                                                        </ul>
                                                                    ),

                                                                    ol: ({
                                                                        children,
                                                                    }) => (
                                                                        <ol className="mb-3 ml-5 list-decimal space-y-1">
                                                                            {children}
                                                                        </ol>
                                                                    ),

                                                                    code: ({
                                                                        children,
                                                                    }) => (
                                                                        <code className="rounded-md bg-white/[0.06] px-1.5 py-0.5 text-[12px] text-[#aab4ff]">
                                                                            {children}
                                                                        </code>
                                                                    ),
                                                                }}
                                                            >
                                                                {message.content}
                                                            </ReactMarkdown>

                                                        ) : (

                                                            <div className="flex items-center gap-1.5 py-2">

                                                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-600" />

                                                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-600 [animation-delay:150ms]" />

                                                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-600 [animation-delay:300ms]" />

                                                            </div>

                                                        )}


                                                        {loading &&
                                                            index ===
                                                            messages.length -
                                                            1 &&
                                                            message.content && (

                                                                <span className="streaming-cursor ml-1 inline-block h-4 w-px translate-y-1 bg-[#7f8fff]" />

                                                            )}

                                                    </div>

                                                )}

                                            </motion.div>

                                        )
                                    )}

                                </AnimatePresence>


                                <div
                                    ref={messagesEndRef}
                                    className="h-px"
                                />

                            </div>

                        )}

                    </div>


                    {/* ================================================= */}
                    {/* Input */}
                    {/* ================================================= */}

                    <div
                        className="
                            border-t
                            border-white/[0.07]
                            p-3
                            sm:p-5
                        "
                    >

                        <form
                            onSubmit={handleSubmit}
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-2xl
                                border
                                border-white/[0.07]
                                bg-black/[0.12]
                                px-3
                                py-2
                                transition-colors
                                sm:gap-3
                                sm:px-4
                                duration-300
                                focus-within:border-[#4f6fff]/25
                            "
                        >

                            <input
                                value={input}
                                onChange={(event) =>
                                    setInput(
                                        event.target.value
                                    )
                                }
                                disabled={loading}
                                placeholder="Ask something about Piyush..."
                                className="
                                    min-w-0
                                    flex-1
                                    bg-transparent
                                    py-2
                                    text-sm
                                    text-zinc-200
                                    outline-none
                                    placeholder:text-zinc-700
                                    disabled:cursor-not-allowed
                                "
                            />


                            {loading ? (

                                <button
                                    type="button"
                                    onClick={handleStop}
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-white/[0.07]
                                        text-zinc-400
                                        transition-all
                                        duration-300
                                        hover:bg-white/[0.12]
                                        hover:text-white
                                    "
                                    aria-label="Stop generation"
                                >
                                    <Square
                                        size={13}
                                        fill="currentColor"
                                    />
                                </button>

                            ) : (

                                <button
                                    type="submit"
                                    disabled={!input.trim()}
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#4f6fff]/15
                                        text-[#9aa6ff]
                                        transition-all
                                        duration-300
                                        hover:bg-[#4f6fff]/25
                                        hover:text-white
                                        disabled:cursor-not-allowed
                                        disabled:opacity-30
                                    "
                                    aria-label="Send message"
                                >
                                    <ArrowUp size={16} />
                                </button>

                            )}

                        </form>


                        <p
                            className="
                                mt-2
                                text-center
                                text-[8px]
                                sm:mt-3
                                sm:text-[9px]
                                tracking-wide
                                text-zinc-700
                            "
                        >
                            AI responses are based on Piyush&apos;s
                            professional profile.
                        </p>

                    </div>

                </motion.div>

            </div>

        </main>
    );
}

export default AI;