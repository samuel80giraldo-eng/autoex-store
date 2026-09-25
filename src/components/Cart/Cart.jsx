import {
  FiX,
  FiTrash2,
  FiMinus,
  FiPlus,
} from "react-icons/fi";

import { useCart } from "../../context/CartContext.jsx";

import "./Cart.css";

function Cart({ onClose }) {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (sum, item) =>
      sum + item.quantity,
    0
  );

  return (
    <div
      className="cart-overlay"
      onClick={onClose}
    >
      <aside
        className="cart-panel"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        <div className="cart-header">

          <div>

            <h2>
              Tu carrito
            </h2>

            <span>
              {totalItems === 1
                ? "1 producto"
                : `${totalItems} productos`}
            </span>

          </div>

          <button
            className="cart-close"
            onClick={onClose}
            aria-label="Cerrar carrito"
          >
            <FiX />
          </button>

        </div>

        {cart.length === 0 ? (

          <div className="cart-empty">

            <div className="cart-empty-icon">
              🛒
            </div>

            <h3>
              Tu carrito está vacío
            </h3>

            <p>
              Agrega productos y aparecerán aquí.
            </p>

            <button
              className="cart-continue"
              onClick={onClose}
            >
              Seguir comprando
            </button>

          </div>

        ) : (

          <>

            <div className="cart-items">

              {cart.map((item) => (

                <div
                  className="cart-item"
                  key={item.id}
                >

                  <div className="cart-item-image">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                  </div>

                  <div className="cart-item-info">

                    <span className="cart-item-category">
                      {item.category}
                    </span>

                    <h3>
                      {item.name}
                    </h3>

                    <strong className="cart-item-price">
                      $
                      {Number(
                        item.price
                      ).toLocaleString()}
                    </strong>

                    <span className="cart-item-subtotal">
                      Subtotal: $
                      {(
                        Number(item.price) *
                        item.quantity
                      ).toLocaleString()}
                    </span>

                    <div className="cart-item-actions">

                      <div className="cart-quantity">

                        <button
                          onClick={() =>
                            decreaseQuantity(
                              item.id
                            )
                          }
                          aria-label="Disminuir cantidad"
                        >
                          <FiMinus />
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(
                              item.id
                            )
                          }
                          aria-label="Aumentar cantidad"
                        >
                          <FiPlus />
                        </button>

                      </div>

                      <button
                        className="cart-remove"
                        onClick={() =>
                          removeFromCart(
                            item.id
                          )
                        }
                        aria-label={`Eliminar ${item.name}`}
                      >
                        <FiTrash2 />
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

            <div className="cart-footer">

              <div className="cart-total">

                <span>
                  Total
                </span>

                <strong>
                  ${total.toLocaleString()}
                </strong>

              </div>

              <button
                className="cart-checkout"
                onClick={() => {
                  window.location.href =
                    "/checkout";
                }}
              >
                Finalizar compra
              </button>

              <button
                className="cart-continue"
                onClick={onClose}
              >
                Seguir comprando
              </button>

            </div>

          </>

        )}

      </aside>
    </div>
  );
}

export default Cart;