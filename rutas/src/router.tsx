import { createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter(
[
    {
        path: "", //Ruta que se carga por defecto
        element: <Register />
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    }
]);

export default router;