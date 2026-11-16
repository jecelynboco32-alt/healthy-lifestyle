import Hero from "@/components/Hero";

const activities = [
  {
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=700",
    title: "Walking",
    description:
      "Walking is a simple activity that can be included in your daily routine.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700",
    title: "Yoga",
    description:
      "Yoga combines movement, balance, breathing, and relaxation.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700",
    title: "Strength Activities",
    description:
      "Strength activities help develop muscles and support physical fitness.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=700",
    title: "Stretching",
    description:
      "Gentle stretching can support flexibility and comfortable movement.",
  },
];

export default function ExercisePage() {
  return (
    <>
      <Hero
        title="Move More, Feel Better."
        subtitle="Discover enjoyable physical activities and make movement part of your everyday life."
        image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1800"
      />

      <section className="section-padding">
        <div className="section-heading">
          <span className="eyebrow">ACTIVE LIVING</span>
          <h2>Explore Physical Activities</h2>
          <p>
            Regular physical activity supports your health,
            mobility, and overall well-being.
          </p>
        </div>

        <div className="food-grid">
          {activities.map((activity) => (
            <article className="food-card" key={activity.title}>
              <img src={activity.image} alt={activity.title} />
              <div className="food-info">
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="info-banner">
          <h2>Tips for Staying Active</h2>
          <ul>
            <li>Choose activities that you enjoy.</li>
            <li>Take breaks from sitting for long periods.</li>
            <li>Include movement in your daily routine.</li>
            <li>Stay hydrated during physical activities.</li>
            <li>Allow time for rest and recovery.</li>
          </ul>
        </div>
      </section>
    </>
  );
}