import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { AuthProvider } from "./context/AuthProvider";
import { CartProvider } from "./context/CartProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CategoryProvider } from "./context/CategoryProvider";
import { ProductProvider } from "./context/ProductProvider";

const queryClient = new QueryClient();

export default function app()
{
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <CartProvider>
                    <CategoryProvider>
                        <ProductProvider>
                            <RouterProvider router={router} />
                        </ProductProvider>
                    </CategoryProvider>
                </CartProvider>
            </AuthProvider>
        </QueryClientProvider>
    );
}
