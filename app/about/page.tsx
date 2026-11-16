import Hero from "@/components/Hero";

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About HealthyLife."
        subtitle="A simple educational website dedicated to promoting healthy lifestyle habits."
        image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1800"
      />

      <section className="section-padding">
        <div className="about-layout">
          <div>
            <span className="eyebrow">WHO WE ARE</span>
            <h2>Making Healthy Living Easier to Understand</h2>

            <p>
              HealthyLife is an educational website designed
              to provide simple and useful information about
              maintaining healthy habits.
            </p>

            <p>
              Our goal is to help students and young people
              understand the importance of proper nutrition,
              exercise, quality sleep, drinking enough water,
              and stress management.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=900"
            alt="Healthy lifestyle and wellness"
          />
        </div>

        <div className="about-values">
          <article>
            <span>🎯</span>
            <h3>Our Mission</h3>
            <p>
              To share simple and useful health information
              that encourages positive everyday habits.
            </p>
          </article>

          <article>
            <span>🌿</span>
            <h3>Our Vision</h3>
            <p>
              To encourage students and young people to
              appreciate and practice healthy living.
            </p>
          </article>

          <article>
            <span>💚</span>
            <h3>Our Purpose</h3>
            <p>
              To make information about health and wellness
              easy to understand and accessible.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}