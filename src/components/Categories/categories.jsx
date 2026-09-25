import "./Categories.css";

const categories = [
  {
    id: 1,
    icon: "🚨",
    name: "Emergencia",
  },
  {
    id: 2,
    icon: "📱",
    name: "Accesorios",
  },
  {
    id: 3,
    icon: "🧹",
    name: "Limpieza",
  },
  {
    id: 4,
    icon: "📷",
    name: "Tecnología",
  },
];

function Categories() {
  return (
    <section className="categories">
      <h2>Explora por categoría</h2>

      <div className="categories-grid">

        {categories.map((category) => (
          <div
            className="category-card"
            key={category.id}
          >
            <span>
              {category.icon}
            </span>

            <h3>
              {category.name}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Categories;