import "./Offers.css";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/products";

function Offers() {
const offerProducts = products.filter(
(product) => product.discount
);

return (
<main className="offers-page">

  <section className="offers-section" id="ofertas">

    <div className="offers-container">

      <div className="offers-header">

        <a
          href="/"
          className="offers-back-button"
        >
          ← Volver a la tienda
        </a>

        <span>OFERTAS AUTOEX</span>

        <h1>
          Productos en
          <strong> oferta.</strong>
        </h1>

        <p>
          Aprovecha nuestros descuentos y
          equipa tu vehículo por menos.
        </p>

      </div>

      {offerProducts.length === 0 ? (

        <div className="offers-empty">

          <h2>
            No hay ofertas disponibles
          </h2>

          <p>
            Pronto tendremos nuevos descuentos
            para ti.
          </p>

        </div>

      ) : (

        <div className="offers-grid">

          {offerProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      )}

    </div>

  </section>

</main>

);
}

export default Offers;