import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "../themes/Layout.css";

export default function Layout()
{
    const { user, logout } = useAuth();

    return (
        <div className="layout-container">
            {/* Barre de navigation */}
            <nav className="custom-navbar">
                <div className="nav-left">
                    <Link to="/lobby" className="nav-link">
                        Profile
                    </Link>
                    <Link to="/gallery" className="nav-link">
                        Gallery
                    </Link>
                    <Link to="/cart" className="nav-link">
                        Cart
                    </Link>
                </div>
                <div className="nav-right">
                    <div className="highlight-bar"></div>
                    <div className="nav-actions">
                        {!user ? (
                            <Link to="/login" className="login-link">
                                👤
                            </Link>
                        ) : (
                            <button onClick={logout} className="logout-button">
                                🔚
                            </button>
                        )}
                    </div>
                </div>
            </nav>

            {/* Contenu principal */}
            <main className="main-content">
                <Outlet />
            </main>

            {/* Barre de réseaux sociaux en bas */}
            <div className="social-bar">
                <a href="https://instagram.com" className="social-icon-bottom">
                    📷
                </a>
                <a href="https://facebook.com" className="social-icon-bottom">
                    📘
                </a>
                <a href="https://x.com" className="social-icon-bottom">
                    🐦
                </a>
            </div>
        </div>
    );
}
