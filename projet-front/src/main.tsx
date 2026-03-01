import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"

// Vérification de l'élément root pour éviter les erreurs
const rootElement = document.getElementById("root")

if (!rootElement)
{
    throw new Error("Failed to find the root element. Make sure you have a <div id=\"root\"></div> in your HTML.")
}

// Création du root et rendu de l'application
createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
