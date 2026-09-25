import { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedProfile =
      JSON.parse(
        localStorage.getItem("autoex-profile")
      ) || {};

    setProfile({
      name: savedProfile.name || "",
      email: savedProfile.email || "",
      phone: savedProfile.phone || "",
      address: savedProfile.address || "",
      city: savedProfile.city || "",
      postalCode: savedProfile.postalCode || "",
    });
  }, []);

  const handleChange = (field, value) => {
    setProfile((currentProfile) => ({
      ...currentProfile,
      [field]: value,
    }));

    setSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem(
      "autoex-profile",
      JSON.stringify(profile)
    );

    console.log("Perfil guardado:", profile);
    
    setSaved(true);

    setTimeout(() => {
        window.location.href = "/";
    }, 1000);
  };

  return (
    <main className="profile-page">

      <div className="profile-container">

        <div className="profile-header">
          <span>Autoex</span>

          <h1>Mi perfil</h1>

          <p>
            Administra tus datos personales y de entrega.
          </p>
        </div>

        <section className="profile-card">

          <div className="profile-avatar">
            <span>
              {profile.name
                ? profile.name.charAt(0).toUpperCase()
                : "U"}
            </span>
          </div>

          <div className="profile-form">

            <div className="profile-field">
              <label>
                Nombre completo
              </label>

              <input
                type="text"
                value={profile.name}
                onChange={(e) =>
                  handleChange(
                    "name",
                    e.target.value
                  )
                }
                placeholder="Tu nombre"
              />
            </div>

            <div className="profile-field">
              <label>
                Correo electrónico
              </label>

              <input
                type="email"
                value={profile.email}
                onChange={(e) =>
                  handleChange(
                    "email",
                    e.target.value
                  )
                }
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div className="profile-field">
              <label>
                Teléfono
              </label>

              <input
                type="tel"
                value={profile.phone}
                onChange={(e) =>
                  handleChange(
                    "phone",
                    e.target.value
                  )
                }
                placeholder="300 000 0000"
              />
            </div>

            <div className="profile-field">
              <label>
                Dirección
              </label>

              <input
                type="text"
                value={profile.address}
                onChange={(e) =>
                  handleChange(
                    "address",
                    e.target.value
                  )
                }
                placeholder="Dirección"
              />
            </div>

            <div className="profile-row">

              <div className="profile-field">
                <label>
                  Ciudad
                </label>

                <input
                  type="text"
                  value={profile.city}
                  onChange={(e) =>
                    handleChange(
                      "city",
                      e.target.value
                    )
                  }
                  placeholder="Ciudad"
                />
              </div>

              <div className="profile-field">
                <label>
                  Código postal
                </label>

                <input
                  type="text"
                  value={profile.postalCode}
                  onChange={(e) =>
                    handleChange(
                      "postalCode",
                      e.target.value
                    )
                  }
                  placeholder="Código postal"
                />
              </div>

            </div>

            <button
              className="profile-save"
              type="button"
              onClick={handleSave}
            >
              Guardar cambios
            </button>

            {saved && (
              <p className="profile-success">
                ✓ Datos guardados correctamente
              </p>
            )}

          </div>

        </section>

      </div>

    </main>
  );
}

export default Profile;