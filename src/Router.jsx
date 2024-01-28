import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/service";
import Contact from "./pages/contact";

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