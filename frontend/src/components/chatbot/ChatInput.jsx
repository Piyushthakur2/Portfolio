import { useState } from "react";
import { ArrowUp } from "lucide-react";

function ChatInput({ onSendMessage, onStop, loading }) {
    const [input, setInput] = useState("");

    function handleSubmit() {
        const text = input.trim();

        if (!text || loading) return;

        onSendMessage(text);

        setInput("");
    }

    function handleKeyDown(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    }

    return (
        <div className="bg-[#f7f8fc] px-4 pb-4 pt-2 sm:px-6">

            <div className="mx-auto w-full max-w-3xl">

                <div
                    className="
                        flex
                        items-end
                        gap-2
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-2
                        shadow-sm
                        transition-all
                        duration-200
                        focus-within:border-blue-400
                        focus-within:shadow-md
                        focus-within:ring-4
                        focus-within:ring-blue-50
                    "
                >

                    <textarea
                        value={input}
                        rows={1}
                        placeholder="Message Piyush AI..."
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={loading}
                        className="
                            max-h-32
                            min-h-[44px]
                            flex-1
                            resize-none
                            bg-transparent
                            px-3
                            py-3
                            text-sm
                            leading-5
                            text-slate-900
                            outline-none
                            placeholder:text-slate-400
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                        "
                    />

                    <button
                        type="button"
                        onClick={loading ? onStop : handleSubmit}
                        disabled={!loading && !input.trim()}
                        aria-label={
                            loading
                                ? "Stop generating"
                                : "Send message"
                        }
                        className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-slate-900
                            text-white
                            transition-all
                            duration-200
                            hover:bg-slate-800
                            disabled:cursor-not-allowed
                            disabled:opacity-30
                        "
                    >
                        {loading ? (
                            <span
                                className="
                                    h-3.5
                                    w-3.5
                                    rounded-[3px]
                                    bg-white
                                "
                            />
                        ) : (
                            <ArrowUp
                                size={18}
                                strokeWidth={2.5}
                            />
                        )}
                    </button>

                </div>

                <p className="mt-2 text-center text-[11px] text-slate-400">
                    Piyush AI can make mistakes. Verify important information.
                </p>

            </div>

        </div>
    );
}

export default ChatInput;