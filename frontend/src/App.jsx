import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import AI from "./pages/AI";
import Contact from "./pages/Contact";

import CodeSync from "./pages/projects/CodeSync";
import WhizChat from "./pages/projects/WhizChat";
import CropXpert from "./pages/projects/CropXpert";

import PageTransition from "./components/layout/PageTransition";


/* ========================================================= */
/* SCROLL TO TOP */
/* ========================================================= */

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [pathname]);

    return null;
}


/* ========================================================= */
/* APP */
/* ========================================================= */

function App() {
    return (
        <BrowserRouter>

            {/* Reset scroll position whenever route changes */}

            <ScrollToTop />

            <Routes>

                {/* ================================================= */}
                {/* Main pages */}
                {/* ================================================= */}

                <Route
                    path="/"
                    element={
                        <PageTransition>
                            <Home />
                        </PageTransition>
                    }
                />


                <Route
                    path="/work"
                    element={
                        <PageTransition>
                            <Work />
                        </PageTransition>
                    }
                />


                <Route
                    path="/about"
                    element={
                        <PageTransition>
                            <About />
                        </PageTransition>
                    }
                />


                <Route
                    path="/ai"
                    element={
                        <PageTransition>
                            <AI />
                        </PageTransition>
                    }
                />


                <Route
                    path="/contact"
                    element={
                        <PageTransition>
                            <Contact />
                        </PageTransition>
                    }
                />


                {/* ================================================= */}
                {/* Project pages */}
                {/* ================================================= */}

                <Route
                    path="/work/codesync"
                    element={
                        <PageTransition>
                            <CodeSync />
                        </PageTransition>
                    }
                />


                <Route
                    path="/work/whizchat"
                    element={
                        <PageTransition>
                            <WhizChat />
                        </PageTransition>
                    }
                />


                <Route
                    path="/work/cropxpert"
                    element={
                        <PageTransition>
                            <CropXpert />
                        </PageTransition>
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;