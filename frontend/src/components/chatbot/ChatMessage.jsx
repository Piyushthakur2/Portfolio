import { Bot, User, Copy, Check } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import { useState } from "react";

function ChatMessage({ message, isStreaming }) {
    const isUser = message.role === "user";
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(message.content);

            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 1500);
        } catch (error) {
            console.error("Copy failed:", error);
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`flex w-full gap-3 ${
                isUser ? "justify-end" : "justify-start"
            }`}
        >

            {/* AI avatar */}
            {!isUser && (
                <div className="
                    mt-1
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-blue-600
                    text-white
                ">
                    <Bot size={17} />
                </div>
            )}

            {/* Message area */}
            <div
                className={`group relative max-w-[85%] sm:max-w-[75%] ${
                    isUser
                        ? "flex flex-col items-end"
                        : ""
                }`}
            >

                {/* Bubble */}
                <div
                    className={
                        isUser
                            ? `
                                rounded-2xl
                                rounded-br-md
                                bg-blue-600
                                px-4
                                py-3
                                text-sm
                                leading-6
                                text-white
                                shadow-sm
                            `
                            : `
                                text-slate-800
                                text-sm
                                leading-7
                            `
                    }
                >

                    {isUser ? (
                        <p className="whitespace-pre-wrap">
                            {message.content}
                        </p>
                    ) : (
                        <div className="
                            prose
                            prose-slate
                            max-w-none
                            prose-headings:font-semibold
                            prose-headings:text-slate-900
                            prose-p:my-3
                            prose-p:first:mt-0
                            prose-p:last:mb-0
                            prose-ul:my-3
                            prose-ol:my-3
                            prose-li:my-1
                            prose-strong:text-slate-900
                            prose-a:text-blue-600
                            prose-a:no-underline
                            hover:prose-a:underline
                        ">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    h1: ({ children }) => (
                                        <h1 className="mb-4 mt-6 text-2xl font-semibold">
                                            {children}
                                        </h1>
                                    ),

                                    h2: ({ children }) => (
                                        <h2 className="mb-3 mt-5 text-xl font-semibold">
                                            {children}
                                        </h2>
                                    ),

                                    h3: ({ children }) => (
                                        <h3 className="mb-2 mt-4 text-lg font-semibold">
                                            {children}
                                        </h3>
                                    ),

                                    ul: ({ children }) => (
                                        <ul className="my-3 list-disc space-y-1 pl-5">
                                            {children}
                                        </ul>
                                    ),

                                    ol: ({ children }) => (
                                        <ol className="my-3 list-decimal space-y-1 pl-5">
                                            {children}
                                        </ol>
                                    ),

                                    li: ({ children }) => (
                                        <li className="pl-1">
                                            {children}
                                        </li>
                                    ),

                                    blockquote: ({ children }) => (
                                        <blockquote className="
                                            my-4
                                            border-l-4
                                            border-blue-200
                                            pl-4
                                            italic
                                            text-slate-500
                                        ">
                                            {children}
                                        </blockquote>
                                    ),

                                    code: ({ inline, children }) => {
                                        if (inline) {
                                            return (
                                                <code className="
                                                    rounded-md
                                                    bg-slate-100
                                                    px-1.5
                                                    py-0.5
                                                    font-mono
                                                    text-[13px]
                                                    text-slate-700
                                                ">
                                                    {children}
                                                </code>
                                            );
                                        }

                                        return (
                                            <code className="
                                                block
                                                overflow-x-auto
                                                font-mono
                                                text-[13px]
                                                leading-6
                                                text-slate-100
                                            ">
                                                {children}
                                            </code>
                                        );
                                    },

                                    pre: ({ children }) => (
                                        <pre className="
                                            my-4
                                            overflow-x-auto
                                            rounded-xl
                                            bg-slate-900
                                            p-4
                                            shadow-sm
                                        ">
                                            {children}
                                        </pre>
                                    ),

                                    table: ({ children }) => (
                                        <div className="my-4 overflow-x-auto">
                                            <table className="
                                                w-full
                                                border-collapse
                                                text-sm
                                            ">
                                                {children}
                                            </table>
                                        </div>
                                    ),

                                    th: ({ children }) => (
                                        <th className="
                                            border
                                            border-slate-200
                                            bg-slate-50
                                            px-3
                                            py-2
                                            text-left
                                            font-semibold
                                        ">
                                            {children}
                                        </th>
                                    ),

                                    td: ({ children }) => (
                                        <td className="
                                            border
                                            border-slate-200
                                            px-3
                                            py-2
                                        ">
                                            {children}
                                        </td>
                                    ),
                                }}
                            >
                                {message.content}
                            </ReactMarkdown>

                            {/* Streaming cursor */}
                            {isStreaming && (
                                <span className="
                                    streaming-cursor
                                    ml-1
                                    inline-block
                                    h-4
                                    w-[2px]
                                    translate-y-1
                                    bg-blue-500
                                " />
                            )}
                        </div>
                    )}
                </div>

                {/* Copy button for AI */}
                {!isUser && message.content && !isStreaming && (
                    <button
                        type="button"
                        onClick={handleCopy}
                        className="
                            mt-2
                            flex
                            items-center
                            gap-1.5
                            rounded-lg
                            px-2
                            py-1
                            text-xs
                            text-slate-400
                            opacity-0
                            transition-all
                            hover:bg-slate-100
                            hover:text-slate-600
                            group-hover:opacity-100
                        "
                    >
                        {copied ? (
                            <>
                                <Check size={14} />
                                Copied
                            </>
                        ) : (
                            <>
                                <Copy size={14} />
                                Copy
                            </>
                        )}
                    </button>
                )}
            </div>

            {/* User avatar */}
            {isUser && (
                <div className="
                    mt-1
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-slate-200
                    text-slate-600
                ">
                    <User size={16} />
                </div>
            )}

        </motion.div>
    );
}

export default ChatMessage;