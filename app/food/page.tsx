import Hero from "@/components/Hero";

const foods = [
  {
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700",
    title: "Fresh Vegetables",
    description:
      "Vegetables provide vitamins, minerals, and fiber that support overall health.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=700",
    title: "Fresh Fruits",
    description:
      "Fruits provide essential nutrients and are a delicious part of balanced meals.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=700",
    title: "Healthy Breakfast",
    description:
      "A balanced breakfast can provide energy and nutrients to start your day.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=700",
    title: "Balanced Meals",
    description:
      "Include different food groups to help meet your nutritional needs.",
  },
];

export default function FoodPage() {
  return (
    <>
      <Hero
        title="Eat Well, Live Well."
        subtitle="Discover the importance of nutritious foods and balanced meals for a healthier lifestyle."
        image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1800"
      />

      <section className="section-padding">
        <div className="section-heading">
          <span className="eyebrow">NUTRITION AND WELLNESS</span>
          <h2>Choose Food That Nourishes You</h2>
          <p>
            Eating a variety of nutritious foods helps provide
            the nutrients your body needs.
          </p>
        </div>

        <div className="food-grid">
          {foods.map((food) => (
            <article className="food-card" key={food.title}>
              <img src={food.image} alt={food.title} />
              <div className="food-info">
                <h3>{food.title}</h3>
                <p>{food.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="info-banner">
          <h2>Simple Nutrition Tips</h2>
          <ul>
            <li>Eat a variety of fruits and vegetables.</li>
            <li>Include whole grains in your meals.</li>
            <li>Choose nutritious sources of protein.</li>
            <li>Drink enough water throughout the day.</li>
            <li>Enjoy balanced meals regularly.</li>
          </ul>
        </div>
      </section>
    </>
  );
}