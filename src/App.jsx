import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Checkout from "./components/Checkout/Checkout";

import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";

import Orders from "./components/Orders/Orders";
import Profile from "./components/Profile/Profile";
import Favorites from "./components/Favorites/Favorites";
import Offers from "./components/Offers/Offers";
import Contact from "./components/Contact/Contact";

function App() {
  const isCheckout =
    window.location.pathname === "/checkout";

  const isOrders =
    window.location.pathname === "/orders";

  const isFavorites =
    window.location.pathname === "/favorites";

  const isProfile =
    window.location.pathname === "/profile";

  const isOffers =
    window.location.pathname === "/offers";

  return (
    <FavoritesProvider>
      <CartProvider>

        {isCheckout ? (
          <Checkout />

        ) : isOrders ? (
          <Orders />

        ) : isFavorites ? (
          <Favorites />

        ) : isOffers ? (
          <Offers />

        ) : isProfile ? (
          <Profile />

        ) : (
          <>
            <Navbar />
            <Hero />
            <FeaturedProducts />
            <Contact />
          </>
        )}

      </CartProvider>
    </FavoritesProvider>
  );
}

export default App;