import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";

import {
    lazy,
    Suspense,
    useEffect,
} from "react";

import PageTransition from "./components/layout/PageTransition";

/* ========================================================= */
/* LAZY LOADED PAGES */
/* ========================================================= */

const Home = lazy(() => import("./pages/Home"));
const Work = lazy(() => import("./pages/Work"));
const About = lazy(() => import("./pages/About"));
const AI = lazy(() => import("./pages/AI"));
const Contact = lazy(() => import("./pages/Contact"));

/* Project pages */

const CodeSync = lazy(
    () => import("./pages/projects/CodeSync")
);

const WhizChat = lazy(
    () => import("./pages/projects/WhizChat")
);

const CropXpert = lazy(
    () => import("./pages/projects/CropXpert")
);


/* ========================================================= */
/* LOADING FALLBACK */
/* ========================================================= */

function PageLoader() {
    return (
        <div
            className="
                min-h-screen
                bg-[#f8f8f7]
            "
        />
    );
}


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
/* ROUTE WRAPPER */
/* ========================================================= */

function Page({ children }) {
    return (
        <PageTransition>
            <Suspense fallback={<PageLoader />}>
                {children}
            </Suspense>
        </PageTransition>
    );
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
                        <Page>
                            <Home />
                        </Page>
                    }
                />


                <Route
                    path="/work"
                    element={
                        <Page>
                            <Work />
                        </Page>
                    }
                />


                <Route
                    path="/about"
                    element={
                        <Page>
                            <About />
                        </Page>
                    }
                />


                <Route
                    path="/ai"
                    element={
                        <Page>
                            <AI />
                        </Page>
                    }
                />


                <Route
                    path="/contact"
                    element={
                        <Page>
                            <Contact />
                        </Page>
                    }
                />


                {/* ================================================= */}
                {/* Project pages */}
                {/* ================================================= */}

                <Route
                    path="/work/codesync"
                    element={
                        <Page>
                            <CodeSync />
                        </Page>
                    }
                />


                <Route
                    path="/work/whizchat"
                    element={
                        <Page>
                            <WhizChat />
                        </Page>
                    }
                />


                <Route
                    path="/work/cropxpert"
                    element={
                        <Page>
                            <CropXpert />
                        </Page>
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;