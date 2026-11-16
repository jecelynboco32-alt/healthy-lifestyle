import Link from "next/link";

const features = [
  {
    icon: "🥗",
    title: "Healthy Food",
    description:
      "Discover nutritious foods and learn how to enjoy balanced meals.",
    href: "/food",
  },
  {
    icon: "🏃",
    title: "Exercise",
    description:
      "Explore physical activities that help support your overall wellness.",
    href: "/exercise",
  },
  {
    icon: "🌙",
    title: "Proper Sleep",
    description:
      "Understand why quality sleep is important for your daily life.",
    href: "/sleep",
  },
  {
    icon: "💧",
    title: "Healthy Tips",
    description:
      "Learn simple habits that you can practice every day.",
    href: "/tips",
  },
];

export default function Home() {
  return (
    <>
      <section
        className="home-hero"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(17,48,34,.85), rgba(17,48,34,.12)), url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1800')",
        }}
      >
        <div className="home-hero-content">
          <span className="eyebrow">
            WELCOME TO HEALTHYLIFE
          </span>

          <h1>
            Make Your Health
            <br />
            A Daily Priority.
          </h1>

          <p>
            Small healthy choices today can create
            positive habits for tomorrow. Discover
            simple ways to live a healthier life.
          </p>

          <div className="hero-actions">
            <Link href="/food" className="primary-button">
              Explore Healthy Living →
            </Link>

            <Link href="/about" className="secondary-button">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="welcome-section section-padding">
        <div className="section-heading">
          <span className="eyebrow">LIVE WELL, FEEL WELL</span>
          <h2>A Healthier Lifestyle Starts Here</h2>
          <p>
            Taking care of yourself does not have to be complicated.
            Learn about the simple habits that can support your
            physical and mental well-being.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <Link
              href={feature.href}
              className="feature-card"
              key={feature.title}
            >
              <div className="feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <span className="card-link">
                Discover More →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-content">
          <span className="eyebrow">A GENTLE REMINDER</span>
          <h2>
            Your health is an important part of your journey.
          </h2>
          <p>
            Take one small step today. Every healthy habit
            is an opportunity to care for yourself.
          </p>
          <Link href="/tips" className="primary-button">
            Explore Healthy Tips →
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900"
          alt="Fresh healthy meal"
        />
      </section>

      <section className="bottom-cta">
        <h2>Start Your Healthy Lifestyle Journey</h2>
        <p>
          Learn, grow, and discover healthy habits one day at a time.
        </p>
        <Link href="/about" className="primary-button">
          About HealthyLife →
        </Link>
      </section>
    </>
  );
}
