import { useFavorites } from "../../context/FavoritesContext";
import { useCart } from "../../context/CartContext";
import "./Favorites.css";

function Favorites() {
const {
favorites,
removeFromFavorites,
} = useFavorites();

const { addToCart } = useCart();

return (
<main className="favorites-page">

  <div className="favorites-container">

    <header className="favorites-header">

      <a
        href="/"
        className="favorites-back-button"
      >
        ← Volver a la tienda
      </a>

      <span>Autoex</span>

      <h1>Mis favoritos</h1>

      <p>
        Guarda los productos que más te interesan
        y encuéntralos fácilmente.
      </p>

    </header>

    {favorites.length === 0 ? (
      <section className="favorites-empty">

        <div className="favorites-empty-icon">
          ♡
        </div>

        <h2>
          No tienes favoritos todavía
        </h2>

        <p>
          Pulsa el corazón de cualquier producto
          para guardarlo aquí.
        </p>

        <button
          type="button"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Explorar productos
        </button>

      </section>
    ) : (
      <section className="favorites-grid">

        {favorites.map((product) => (

          <article
            className="favorite-card"
            key={product.id}
          >

            <div className="favorite-card-image">

              <img
                src={product.image}
                alt={product.name}
              />

              {product.discount && (
                <span className="favorite-discount">
                  -{product.discount}%
                </span>
              )}

              <button
                type="button"
                className="favorite-remove"
                aria-label={`Quitar ${product.name} de favoritos`}
                onClick={() =>
                  removeFromFavorites(product.id)
                }
              >
                ♥
              </button>

            </div>

            <div className="favorite-card-info">

              <span className="favorite-category">
                {product.category}
              </span>

              <h2>
                {product.name}
              </h2>

              <div className="favorite-rating">
                <span>★★★★★</span>

                <small>
                  ({product.reviews})
                </small>
              </div>

              <div className="favorite-card-bottom">

                <div className="favorite-prices">

                  {product.oldPrice && (
                    <span className="favorite-old-price">
                      ${product.oldPrice}
                    </span>
                  )}

                  <strong>
                    ${product.price}
                  </strong>

                </div>

                <button
                  type="button"
                  className="favorite-cart"
                  onClick={() =>
                    addToCart(product)
                  }
                  aria-label={`Agregar ${product.name} al carrito`}
                >
                  🛒
                </button>

              </div>

            </div>

          </article>

        ))}

      </section>
    )}

  </div>

</main>

);
}

export default Favorites;