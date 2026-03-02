// router.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
// import Cart from "../pages/Cart";
import Login from "../pages/Login";
import RoleRoute from "./RoleRoute";
// import Unauthorized from "../pages/Unauthorized";
import Lobby from "../pages/Lobby";
import Gallery from "../pages/Gallery";
import ProductPage from "../pages/Product";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/login", element: <Login /> },
            // { path: "/non-autorise", element: <Unauthorized /> },
            {
                // Routes seulement pour admin
                element: <RoleRoute allowedRoles={["admin"]} />,
                children: [
                ],
            },
            {
                //Routes seulement pour user authentifié et admin
                element: <RoleRoute allowedRoles={["user", "admin"]} />,
                children: [
                    { path: "/product/:id", element: <ProductPage/>},
                    { path: "/gallery", element: <Gallery /> },
                    { path: "/lobby", element: <Lobby /> },
                    // { path: "/cart", element: <Cart /> },
                ],
            },
        ],
    },
]);
