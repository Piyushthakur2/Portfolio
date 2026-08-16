import { Bot, Plus } from "lucide-react";

function Header({onNewChat}) {
    return (
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">

                {/* Brand */}
                <div className="flex items-center gap-3">

                    {/* Logo */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                        <Bot size={20} strokeWidth={2} />
                    </div>

                    {/* Name */}
                    <div className="leading-tight">
                        <h1 className="text-sm font-semibold tracking-tight text-slate-900">
                            Piyush AI
                        </h1>

                        <p className="text-xs text-slate-500">
                            AI Assistant
                        </p>
                    </div>

                </div>

                {/* New Chat */}
                <button
                    type="button"
                    onClick={onNewChat}
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-lg
                        border
                        border-slate-200
                        bg-white
                        px-3
                        py-2
                        text-sm
                        font-medium
                        text-slate-600
                        shadow-sm
                        transition
                        hover:border-slate-300
                        hover:bg-slate-50
                        hover:text-slate-900
                    "
                >
                    <Plus size={16} />

                    <span className="hidden sm:inline">
                        New chat
                    </span>
                </button>

            </div>
        </header>
    );
}

export default Header;