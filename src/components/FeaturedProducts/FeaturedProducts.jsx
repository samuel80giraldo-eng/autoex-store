import "./FeaturedProducts.css";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/products";


function FeaturedProducts() {
  return (
    <section className="featured-products" id="catalogo">
      <div className="container">

        <div className="section-header">
          <span>SELECCIÓN AUTOEX</span>

          <h2>
            Productos que mejoran
            <span> tu experiencia.</span>
          </h2>

          <p>
            Descubre algunos de nuestros productos más destacados
            para tu vehículo.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
  <ProductCard
    key={product.id}
    product={product}
  />
))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;