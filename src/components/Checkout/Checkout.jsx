import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext.jsx";
import "./Checkout.css";

function Checkout() {
  const { cart, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  });

  useEffect(() => {
    const savedProfile =
      JSON.parse(
        localStorage.getItem("autoex-profile")
      ) || {};

    setFormData((currentData) => ({
      ...currentData,
      name: savedProfile.name || "",
      email: savedProfile.email || "",
      phone: savedProfile.phone || "",
      address: savedProfile.address || "",
      city: savedProfile.city || "",
      postalCode: savedProfile.postalCode || "",
    }));
  }, []);

  const [formError, setFormError] = useState("");
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * item.quantity,
    0
  );

  const handleChange = (field, value) => {
    setFormData((currentData) => ({
      ...currentData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.address.trim() ||
      !formData.city.trim() ||
      !formData.postalCode.trim()
    ) {
      setFormError(
        "Por favor completa todos los campos obligatorios."
      );

      return;
    }

   const newOrder = {
  id: "AE-" + Date.now().toString().slice(-6),
  date: new Date().toLocaleString(),
  customer: {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    address: formData.address,
    city: formData.city,
    postalCode: formData.postalCode,
    notes: formData.notes,
  },
  products: cart,
  total: total,
};

const savedOrders =
  JSON.parse(localStorage.getItem("autoex-orders")) || [];

localStorage.setItem(
  "autoex-orders",
  JSON.stringify([
    ...savedOrders,
    newOrder,
  ])
);

setFormError("");
setConfirmedOrder(newOrder);

clearCart();

setOrderConfirmed(true);
  };

  if (cart.length === 0 && !orderConfirmed) {
  return (
    <main className="checkout-page">
      <div className="checkout-confirmation">

        <div className="confirmation-icon">
          🛒
        </div>

        <span className="confirmation-label">
          Autoex
        </span>

        <h1>Tu carrito está vacío</h1>

        <p>
          Agrega productos a tu carrito antes de
          finalizar la compra.
        </p>

        <button
          className="checkout-submit"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Volver a la tienda
        </button>

      </div>
    </main>
  );
}

  return (
    <main className="checkout-page">

      {orderConfirmed ? (
        <div className="checkout-confirmation">

          <div className="confirmation-icon">
            ✓
          </div>

          <span className="confirmation-label">
            Autoex
          </span>

          <h1>¡Pedido confirmado!</h1>

          <p>
            Gracias por tu compra, {formData.name}.
            Hemos recibido correctamente tu pedido.
          </p>

          <div className="confirmation-order">
            <span>Número de pedido</span>

            <strong>
              {confirmedOrder?.id}
            </strong>
          </div>

          <div className="confirmation-total">
            <span>Total</span>

            <strong>
              ${confirmedOrder?.total?.toLocaleString() || 0}
            </strong>
          </div>

          <button
            className="checkout-submit"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Volver a la tienda
          </button>

        </div>
      ) : (

        <div className="checkout-container">

          <div className="checkout-header">

            <span>Autoex</span>

            <h1>
              Finalizar compra
            </h1>

            <p>
              Completa tus datos para realizar tu pedido.
            </p>

          </div>

          <div className="checkout-grid">

            <section className="checkout-form-card">

              <h2>
                Datos de entrega
              </h2>

              <div className="checkout-form">

                <div className="checkout-field">

                  <label>
                    Nombre completo
                  </label>

                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) =>
                      handleChange(
                        "name",
                        e.target.value
                      )
                    }
                  />

                </div>

                <div className="checkout-row">

                  <div className="checkout-field">

                    <label>
                      Correo electrónico
                    </label>

                    <input
                      type="email"
                      placeholder="correo@ejemplo.com"
                      value={formData.email}
                      onChange={(e) =>
                        handleChange(
                          "email",
                          e.target.value
                        )
                      }
                    />

                  </div>

                  <div className="checkout-field">

                    <label>
                      Teléfono
                    </label>

                    <input
                      type="tel"
                      placeholder="300 000 0000"
                      value={formData.phone}
                      onChange={(e) =>
                        handleChange(
                          "phone",
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>

                <div className="checkout-field">

                  <label>
                    Dirección
                  </label>

                  <input
                    type="text"
                    placeholder="Dirección de entrega"
                    value={formData.address}
                    onChange={(e) =>
                      handleChange(
                        "address",
                        e.target.value
                      )
                    }
                  />

                </div>

                <div className="checkout-row">

                  <div className="checkout-field">

                    <label>
                      Ciudad
                    </label>

                    <input
                      type="text"
                      placeholder="Ciudad"
                      value={formData.city}
                      onChange={(e) =>
                        handleChange(
                          "city",
                          e.target.value
                        )
                      }
                    />

                  </div>

                  <div className="checkout-field">

                    <label>
                      Código postal
                    </label>

                    <input
                      type="text"
                      placeholder="Código postal"
                      value={formData.postalCode}
                      onChange={(e) =>
                        handleChange(
                          "postalCode",
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>

                <div className="checkout-field">

                  <label>
                    Notas del pedido
                  </label>

                  <textarea
                    placeholder="Indicaciones para la entrega..."
                    rows="4"
                    value={formData.notes}
                    onChange={(e) =>
                      handleChange(
                        "notes",
                        e.target.value
                      )
                    }
                  />

                </div>

              </div>

            </section>

            <aside className="checkout-summary">

              <h2>
                Resumen del pedido
              </h2>

              <div className="checkout-products">

                {cart.map((item) => (

                  <div
                    className="checkout-product"
                    key={item.id}
                  >

                    <div className="checkout-product-image">

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                    </div>

                    <div className="checkout-product-info">

                      <h3>
                        {item.name}
                      </h3>

                      <span>
                        Cantidad: {item.quantity}
                      </span>

                      <strong>
                        $
                        {(
                          Number(item.price) *
                          item.quantity
                        ).toLocaleString()}
                      </strong>

                    </div>

                  </div>

                ))}

              </div>

              <div className="checkout-total">

                <span>
                  Total
                </span>

                <strong>
                  ${total.toLocaleString()}
                </strong>

              </div>

              {formError && (

                <p className="checkout-error">
                  {formError}
                </p>

              )}

              <button
                className="checkout-submit"
                onClick={handleSubmit}
              >
                Confirmar pedido
              </button>

              <p className="checkout-security">
                 Tus datos están protegidos.
              </p>

            </aside>

          </div>

        </div>

      )}

    </main>
  );
}

export default Checkout;