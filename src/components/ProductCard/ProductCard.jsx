import "./ProductCard.css";

import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const {
    toggleFavorite,
    isFavorite,
  } = useFavorites();

  const favorite = isFavorite(product.id);

  const formatPrice = (price) =>
    Number(price).toLocaleString("es-CO");

  return (
    <article className="product-card">

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

        {product.discount && (
          <span className="product-discount">
            -{product.discount}%
          </span>
        )}

        <button
          className={`product-favorite ${
            favorite ? "active" : ""
          }`}
          type="button"
          aria-label={
            favorite
              ? `Quitar ${product.name} de favoritos`
              : `Agregar ${product.name} a favoritos`
          }
          onClick={() =>
            toggleFavorite(product)
          }
        >
          {favorite ? "♥" : "♡"}
        </button>

      </div>

      <div className="product-info">

        <span className="product-category">
          {product.category}
        </span>

        <h3>
          {product.name}
        </h3>

        <div className="product-rating">

          <span>
            ★★★★★
          </span>

          <small>
            ({product.reviews})
          </small>

        </div>

        <div className="product-bottom">

          <div className="product-prices">

            {product.oldPrice && (
              <span className="product-old-price">
                ${formatPrice(product.oldPrice)}
              </span>
            )}

            <strong>
              ${formatPrice(product.price)}
            </strong>

          </div>

          <button
            className="product-cart"
            type="button"
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
  );
}

export default ProductCard;