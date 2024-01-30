import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home"
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/en/about",
        element: <About />
    },
    {
        path: "/en/service",
        element: <Service />
    },
    {
        path: "/en/contact",
        element: <Contact />
    }
])
export default router;