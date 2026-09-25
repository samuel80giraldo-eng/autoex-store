import "./Hero.css";
import heroCar from "../../assets/hero-car.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        "--hero-image": `url(${heroCar})`,
      }}
    >
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-label">
            ACCESORIOS PARA TU VEHÍCULO
          </span>

          <h1>
            Todo para tu vehículo,
            <span> en un solo lugar.</span>
          </h1>

          <p>
            Descubre accesorios seleccionados para mejorar
            el estilo, la comodidad y la seguridad de cada viaje.
          </p>

          <div className="hero-actions">

            <a
              href="#catalogo"
              className="hero-button primary"
            >
              Comprar ahora →
            </a>

            <a
              href="#catalogo"
              className="hero-button secondary"
            >
              Explorar catálogo
            </a>

          </div>

          <div className="hero-trust">

            <div>
              <strong>✓</strong>
              Productos seleccionados
            </div>

            <div>
              <strong>✓</strong>
              Compra segura
            </div>

            <div>
              <strong>✓</strong>
              Atención al cliente
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;