import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext.jsx";
import { useFavorites } from "../../context/FavoritesContext.jsx";

import {
  FiSearch,
  FiHeart,
  FiUser,
  FiShoppingBag,
  FiMenu,
  FiX,
} from "react-icons/fi";

import "./Navbar.css";
import Cart from "../Cart/Cart.jsx";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [profileName, setProfileName] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const { cartCount } = useCart();
  const { favoritesCount } = useFavorites();

  useEffect(() => {
    const savedProfile =
      JSON.parse(localStorage.getItem("autoex-profile")) || {};

    setProfileName(savedProfile.name || "");
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <a href="/" className="navbar-logo">
          <img
            src="/logo/autoex-logo-horizontal.png"
            alt="Autoex"
          />
        </a>

        {/* MENÚ PRINCIPAL */}
        <nav
          className={`navbar-menu ${
            menuOpen ? "active" : ""
          }`}
        >
          <a href="/">Inicio</a>

          <a href="#catalogo">
            Catálogo
          </a>

          <a href="/offers">Ofertas</a>

          <a href="#contacto">
            Contacto
          </a>

          <a href="/orders">
            Mis pedidos
          </a>
        </nav>

        {/* ACCIONES */}
        <div className="navbar-actions">

          {/* BUSCAR */}
          <button
            className="nav-icon search"
            type="button"
            aria-label="Buscar"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <FiSearch />
          </button>
          {searchOpen && (
            <div className="search-bar">
              <input
                type="text"
                placeholder="Buscar..."
                autoFocus
              />
            </div>
          )}

          {/* FAVORITOS */}
          <button
            className="nav-icon favorite"
            type="button"
            aria-label="Favoritos"
            onClick={() => {
              window.location.href = "/favorites";
            }}
          >
            <FiHeart />

            {favoritesCount > 0 && (
              <span className="favorite-count">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* MI CUENTA */}
          <div className="account-wrapper">

            <button
              className="nav-icon"
              type="button"
              aria-label="Mi cuenta"
              onClick={() =>
                setAccountOpen(!accountOpen)
              }
            >
              <FiUser />
            </button>

            {accountOpen && (
              <div className="account-menu">

                <div className="account-menu-title">
                  {profileName
                    ? `Hola, ${profileName}`
                    : "Mi cuenta"}
                </div>

                <a href="/orders">
                  Mis pedidos
                </a>

                <a href="/profile">
                  Mi perfil
                </a>

                <a href="/favorites">
                  Mis favoritos
                </a>

                <a href="/offers">
                  mis ofertas
                </a>

                <a href="#contacto">contacto</a>

                <button
                  type="button"
                  onClick={() =>
                    setAccountOpen(false)
                  }
                >
                  Cerrar menú
                </button>

              </div>
            )}

          </div>

          {/* CARRITO */}
          <button
            className="nav-icon cart"
            type="button"
            aria-label="Carrito"
            onClick={() => setCartOpen(true)}
          >
            <FiShoppingBag />

            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}
          </button>

          {/* MENÚ MÓVIL */}
          <button
            className="mobile-menu-button"
            type="button"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Menú"
          >
            {menuOpen ? (
              <FiX />
            ) : (
              <FiMenu />
            )}
          </button>

        </div>

        {/* CARRITO ABIERTO */}
        {cartOpen && (
          <Cart
            onClose={() =>
              setCartOpen(false)
            }
          />
        )}

      </div>
    </header>
  );
}

export default Navbar;