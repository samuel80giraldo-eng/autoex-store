import { useEffect, useState } from "react";
import "./Orders.css";

function Orders() {
const [orders, setOrders] = useState([]);

useEffect(() => {
try {
const savedOrders = JSON.parse(
localStorage.getItem("autoex-orders")
);

  if (Array.isArray(savedOrders)) {
    setOrders([...savedOrders].reverse());
  } else {
    setOrders([]);
  }
} catch (error) {
  console.error(
    "Error leyendo los pedidos:",
    error
  );

  setOrders([]);
}

}, []);

return (
<main className="orders-page">
<div className="orders-container">

    <div className="orders-header">

      <a
        href="/"
        className="orders-back-button"
      >
        ← Volver a la tienda
      </a>

      <span>Autoex</span>

      <h1>Mis pedidos</h1>

      <p>
        Consulta el historial de tus compras.
      </p>

    </div>

    {orders.length === 0 ? (
      <div className="orders-empty">

        <div className="orders-empty-icon">
          📦
        </div>

        <h2>
          No tienes pedidos todavía
        </h2>

        <p>
          Cuando realices una compra,
          aparecerá aquí.
        </p>

        <button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Ir a la tienda
        </button>

      </div>
    ) : (
      <div className="orders-list">

        {orders.map((order) => (

          <article
            className="order-card"
            key={order.id}
          >

            <div className="order-header">

              <div>
                <span>
                  Número de pedido
                </span>

                <strong>
                  {order.id}
                </strong>
              </div>

              <div>
                <span>
                  Fecha
                </span>

                <strong>
                  {order.date}
                </strong>
              </div>

            </div>

            {order.customer && (
              <div className="order-customer">

                <h3>Datos de entrega</h3>

                <p>
                  <strong>Nombre:</strong>{" "}
                  {order.customer.name}
                </p>

                <p>
                  <strong>Correo:</strong>{" "}
                  {order.customer.email}
                </p>

                <p>
                  <strong>Teléfono:</strong>{" "}
                  {order.customer.phone}
                </p>

                <p>
                  <strong>Dirección:</strong>{" "}
                  {order.customer.address}
                </p>

                <p>
                  <strong>Ciudad:</strong>{" "}
                  {order.customer.city}
                </p>

                {order.customer.postalCode && (
                  <p>
                    <strong>Código postal:</strong>{" "}
                    {order.customer.postalCode}
                  </p>
                )}

                {order.customer.notes && (
                  <p>
                    <strong>Notas:</strong>{" "}
                    {order.customer.notes}
                  </p>
                )}

              </div>
            )}

            <div className="order-products">

              {Array.isArray(order.products) &&
                order.products.map((product) => (

                  <div
                    className="order-product"
                    key={product.id}
                  >

                    <div className="order-product-image">

                      {product.image && (
                        <img
                          src={product.image}
                          alt={product.name}
                        />
                      )}

                    </div>

                    <div className="order-product-info">

                      <h3>
                        {product.name}
                      </h3>

                      <span>
                        Cantidad:{" "}
                        {product.quantity}
                      </span>

                      <strong>
                        $
                        {(
                          Number(product.price) *
                          Number(product.quantity)
                        ).toLocaleString()}
                      </strong>

                    </div>

                  </div>

                ))}

            </div>

            <div className="order-footer">

              <div>

                <span>
                  Total
                </span>

                <strong>
                  $
                  {Number(order.total).toLocaleString()}
                </strong>

              </div>

              <span className="order-status">
                Pedido confirmado
              </span>

            </div>

          </article>

        ))}

      </div>
    )}

  </div>
</main>

);
}

export default Orders;