import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
    {
        label: "Work",
        path: "/work",
    },
    {
        label: "About",
        path: "/about",
    },
    {
        label: "Ask About Me",
        path: "/ai",
    },
    {
        label: "Contact",
        path: "/contact",
    },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const mobileMenuRef = useRef(null);
    const mobileMenuButtonRef = useRef(null);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        function handleClickOutside(event) {
            if (!menuOpen) {
                return;
            }

            const clickedInsideMenu =
                mobileMenuRef.current?.contains(event.target);

            const clickedMenuButton =
                mobileMenuButtonRef.current?.contains(event.target);

            if (!clickedInsideMenu && !clickedMenuButton) {
                setMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, [menuOpen]);

    /*
     * Pages with dark backgrounds
     */

    const darkPage =
        location.pathname === "/about" ||
        location.pathname === "/ai" ||
        location.pathname === "/contact";

    /*
     * Navigation
     */

    function handleNavigation(path) {
        setMenuOpen(false);

        if (location.pathname === path) {
            return;
        }

        navigate(path);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    /*
     * Active route
     */

    function isActive(path) {
        if (path === "/work") {
            return (
                location.pathname === "/work" ||
                location.pathname.startsWith("/work/")
            );
        }

        return location.pathname === path;
    }

    /*
     * Theme colors
     */

    const textMain = darkPage
        ? "text-white"
        : "text-zinc-900";

    const textMuted = darkPage
        ? "text-zinc-400"
        : "text-zinc-500";

    const textHover = darkPage
        ? "hover:text-white"
        : "hover:text-zinc-950";

    /*
     * Glassmorphism
     */

    const glassBackground = darkPage
        ? "bg-[#111214]/60"
        : "bg-white/70";

    const glassBorder = darkPage
        ? "border-white/[0.10]"
        : "border-white/80";

    const glassShadow = darkPage
        ? "shadow-[0_12px_45px_rgba(0,0,0,0.28)]"
        : "shadow-[0_12px_45px_rgba(0,0,0,0.08)]";

    return (
        <motion.header
            initial={{
                opacity: 0,
                y: -8,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={`
                fixed
                left-1/2
                top-4
                z-50
                w-[calc(100%-2rem)]
                max-w-6xl
                -translate-x-1/2
                overflow-hidden
                rounded-[20px]
                border
                ${glassBorder}
                ${glassBackground}
                ${glassShadow}
                backdrop-blur-2xl
                backdrop-saturate-150
                transition-all
                duration-500
            `}
        >

            {/* ================================================= */}
            {/* Glass highlight */}
            {/* ================================================= */}

            <div
                className={`
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0
                    h-px
                    ${
                        darkPage
                            ? "bg-white/[0.16]"
                            : "bg-white"
                    }
                `}
            />


            {/* ================================================= */}
            {/* Main navbar */}
            {/* ================================================= */}

            <div
                className="
                    relative
                    flex
                    h-16
                    items-center
                    justify-between
                    px-5
                    sm:px-7
                "
            >

                {/* ================================================= */}
                {/* Logo */}
                {/* ================================================= */}

                <button
                    onClick={() =>
                        handleNavigation("/")
                    }
                    className="
                        group
                        flex
                        items-center
                        gap-3
                    "
                >

                    <span
                        className={`
                            text-sm
                            font-semibold
                            tracking-[-0.02em]
                            ${textMain}
                        `}
                    >
                        PT
                    </span>


                    <span
                        className={`
                            hidden
                            text-sm
                            transition-colors
                            duration-300
                            ${textMuted}
                            ${textHover}
                            sm:block
                        `}
                    >
                        Piyush Thakur
                    </span>

                </button>


                {/* ================================================= */}
                {/* Desktop navigation */}
                {/* ================================================= */}

                <nav
                    className="
                        hidden
                        items-center
                        gap-1
                        md:flex
                    "
                >

                    {navItems.map((item) => {

                        const active =
                            isActive(item.path);

                        return (
                            <button
                                key={item.path}
                                onClick={() =>
                                    handleNavigation(
                                        item.path
                                    )
                                }
                                className={`
                                    relative
                                    rounded-full
                                    px-4
                                    py-2
                                    text-sm
                                    transition-colors
                                    duration-300
                                    ${
                                        active
                                            ? textMain
                                            : `${textMuted} ${textHover}`
                                    }
                                `}
                            >

                                {item.label}


                                {/* Active underline */}

                                <motion.span
                                    initial={false}
                                    animate={{
                                        width: active
                                            ? 16
                                            : 0,
                                        opacity: active
                                            ? 1
                                            : 0,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1,
                                        ],
                                    }}
                                    className={`
                                        absolute
                                        bottom-1
                                        left-1/2
                                        h-px
                                        -translate-x-1/2
                                        ${
                                            darkPage
                                                ? "bg-white"
                                                : "bg-zinc-900"
                                        }
                                    `}
                                />

                            </button>
                        );
                    })}

                </nav>


                {/* ================================================= */}
                {/* Mobile menu button */}
                {/* ================================================= */}

                <button
                    ref={mobileMenuButtonRef}
                    onClick={() =>
                        setMenuOpen(
                            (previous) =>
                                !previous
                        )
                    }
                    className={`
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        ${glassBorder}
                        ${
                            darkPage
                                ? "bg-white/[0.06]"
                                : "bg-white/[0.45]"
                        }
                        ${textMain}
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        ${
                            darkPage
                                ? "hover:bg-white/[0.10]"
                                : "hover:bg-white/[0.80]"
                        }
                        md:hidden
                    `}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >

                    <AnimatePresence
                        mode="wait"
                        initial={false}
                    >

                        {menuOpen ? (

                            <motion.span
                                key="close"
                                initial={{
                                    opacity: 0,
                                    rotate: -45,
                                }}
                                animate={{
                                    opacity: 1,
                                    rotate: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    rotate: 45,
                                }}
                            >
                                <X size={18} />
                            </motion.span>

                        ) : (

                            <motion.span
                                key="menu"
                                initial={{
                                    opacity: 0,
                                    rotate: 45,
                                }}
                                animate={{
                                    opacity: 1,
                                    rotate: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    rotate: -45,
                                }}
                            >
                                <Menu size={18} />
                            </motion.span>

                        )}

                    </AnimatePresence>

                </button>

            </div>


            {/* ================================================= */}
            {/* Mobile navigation */}
            {/* ================================================= */}

            <AnimatePresence>

                {menuOpen && (

                    <motion.div
                        ref={mobileMenuRef}
                        initial={{
                            opacity: 0,
                            height: 0,
                        }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`
                            relative
                            overflow-hidden
                            border-t
                            ${glassBorder}
                            ${
                                darkPage
                                    ? "bg-[#111214]/70"
                                    : "bg-white/75"
                            }
                            backdrop-blur-2xl
                            md:hidden
                        `}
                    >

                        <nav
                            className="
                                flex
                                max-h-[calc(100vh-7rem)]
                                flex-col
                                gap-1
                                overflow-y-auto
                                p-3
                            "
                        >

                            {navItems.map((item) => {

                                const active =
                                    isActive(item.path);

                                return (
                                    <button
                                        key={item.path}
                                        onClick={() =>
                                            handleNavigation(
                                                item.path
                                            )
                                        }
                                        className={`
                                            flex
                                            items-center
                                            justify-between
                                            rounded-xl
                                            px-4
                                            py-3.5
                                            text-left
                                            min-h-12
                                            text-sm
                                            transition-all
                                            duration-300
                                            ${
                                                active
                                                    ? darkPage
                                                        ? "bg-white/[0.07] text-white"
                                                        : "bg-black/[0.045] text-zinc-950"
                                                    : darkPage
                                                        ? "text-zinc-400 hover:bg-white/[0.05] hover:text-white"
                                                        : "text-zinc-600 hover:bg-black/[0.035] hover:text-zinc-950"
                                            }
                                        `}
                                    >

                                        <span>
                                            {item.label}
                                        </span>


                                        {active && (

                                            <span
                                                className={`
                                                    h-1.5
                                                    w-1.5
                                                    rounded-full
                                                    ${
                                                        darkPage
                                                            ? "bg-white"
                                                            : "bg-zinc-900"
                                                    }
                                                `}
                                            />

                                        )}

                                    </button>
                                );
                            })}

                        </nav>

                    </motion.div>
                )}

            </AnimatePresence>

        </motion.header>
    );
}

export default Navbar;