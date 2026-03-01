import { useContext } from "react";
import { CATEGORYCONTEXT } from "../context/CategoryContext";

export function useCategories()
{
    const context = useContext(CATEGORYCONTEXT);
    if (!context) throw new Error("useCategories must be used within a CategoryProvider");
    return context;
}
