import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contacto">

      <div className="contact-container">

        <div className="contact-header">

          <div className="contact-label">
            CONTACTO AUTOEX
          </div>

          <h2>
            ¿Necesitas ayuda con
            <span> tu vehículo?</span>
          </h2>

          <p>
            Estamos disponibles para resolver tus dudas,
            ayudarte a elegir el producto adecuado y
            acompañarte durante tu compra.
          </p>

        </div>

        <div className="contact-content">

          <div className="contact-info">

            <div className="contact-card">

              <div className="contact-card-icon">
                📍
              </div>

              <div>
                <span>Visítanos</span>

                <h3>
                  peñol, Colombia
                </h3>

                <p>
                  Atención presencial y
                  asesoría para tus compras.
                </p>
              </div>

            </div>

            <div className="contact-card">

              <div className="contact-card-icon">
                📞
              </div>

              <div>
                <span>Llámamos</span>

                <h3> 
                    +57 312 754 2157
                </h3>

                <p>
                  Lunes a sábado,
                  8:00 a. m. - 6:00 p. m.
                </p>
              </div>

            </div>

            <div className="contact-card">

              <div className="contact-card-icon">
                ✉️
              </div>

              <div>
                <span>Escríbenos</span>

                <h3>
                  lopeex77@gmail.com
                </h3>

                <p>
                  Respondemos tus consultas
                  lo antes posible.
                </p>
              </div>

            </div>

          </div>

          <div className="contact-action">

            <div className="contact-action-icon">
              💬
            </div>

            <span>
              ¿Tienes una pregunta?
            </span>

            <h3>
              Habla directamente
              <br />
              con nosotros.
            </h3>

            <p>
              Nuestro equipo puede ayudarte a
              encontrar el accesorio adecuado
              para tu vehículo.
            </p>

            <a
              href="https://wa.me/573127542157"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp"
            >
              <span>WhatsApp</span>
              <strong>→</strong>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;