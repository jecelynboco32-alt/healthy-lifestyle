import Hero from "@/components/Hero";

const tips = [
  {
    icon: "💧",
    title: "Drink Enough Water",
    description:
      "Drink water regularly throughout the day to stay hydrated.",
  },
  {
    icon: "🥗",
    title: "Eat Balanced Meals",
    description:
      "Include different nutritious foods in your daily meals.",
  },
  {
    icon: "🚶",
    title: "Stay Active",
    description:
      "Make time for enjoyable physical activities and movement.",
  },
  {
    icon: "🌙",
    title: "Get Enough Sleep",
    description:
      "Maintain a consistent sleep routine and allow time for rest.",
  },
  {
    icon: "🧘",
    title: "Manage Stress",
    description:
      "Take breaks, relax, and spend time doing activities you enjoy.",
  },
  {
    icon: "🌱",
    title: "Build Good Habits",
    description:
      "Start with small positive changes that you can maintain.",
  },
];

export default function TipsPage() {
  return (
    <>
      <Hero
        title="Small Habits, Big Difference."
        subtitle="Simple everyday practices can help you build a balanced and healthier lifestyle."
        image="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1800"
      />

      <section className="section-padding">
        <div className="section-heading">
          <span className="eyebrow">EVERYDAY WELLNESS</span>
          <h2>Healthy Lifestyle Tips</h2>
          <p>
            Practice simple habits that can support your
            physical and mental well-being.
          </p>
        </div>

        <div className="tips-grid">
          {tips.map((tip) => (
            <article className="tip-card" key={tip.title}>
              <span className="tip-icon">{tip.icon}</span>
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </article>
          ))}
        </div>

        <div className="quote-section tips-quote">
          <div className="quote-content">
            <span className="eyebrow">YOUR DAILY REMINDER</span>
            <h2>Progress Starts With Small Steps.</h2>
            <p>
              You do not need to change everything at once.
              Begin with simple habits and build your routine
              gradually.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=900"
            alt="Beautiful green nature"
          />
        </div>
      </section>
    </>
  );
}