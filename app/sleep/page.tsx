import Hero from "@/components/Hero";

export default function SleepPage() {
  return (
    <>
      <Hero
        title="Rest Well, Live Better."
        subtitle="Quality sleep is an important part of maintaining a healthy and balanced lifestyle."
        image="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1800&q=85"
      />

      <section className="section-padding">
        <div className="section-heading">
          <span className="eyebrow">REST AND RECOVERY</span>
          <h2>Why Proper Sleep Matters</h2>
          <p>
            Sleep helps the body and mind recover and
            prepares you for everyday activities.
          </p>
        </div>

        <div className="sleep-layout">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000&q=85"
            alt="Comfortable and peaceful bedroom"
          />

          <div className="sleep-content">
            <h2>Create Healthy Sleep Habits</h2>

            <p>
              Developing a consistent sleep routine can
              help improve sleep quality and support
              your overall well-being.
            </p>

            <div className="sleep-tip">
              <span>🌙</span>
              <div>
                <h3>Keep a Regular Schedule</h3>
                <p>Try to sleep and wake up at consistent times.</p>
              </div>
            </div>

            <div className="sleep-tip">
              <span>📵</span>
              <div>
                <h3>Limit Screen Time</h3>
                <p>Make time to relax before going to bed.</p>
              </div>
            </div>

            <div className="sleep-tip">
              <span>🛏️</span>
              <div>
                <h3>Comfortable Environment</h3>
                <p>Keep your sleeping space quiet and comfortable.</p>
              </div>
            </div>

            <div className="sleep-tip">
              <span>☕</span>
              <div>
                <h3>Relax Before Bedtime</h3>
                <p>Try reading or listening to calming sounds.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="info-banner">
          <h2>Remember</h2>
          <p>
            Sleep needs vary with age. Teenagers generally
            need 8–10 hours of sleep, while adults generally
            need at least 7 hours.
          </p>
        </div>
      </section>
    </>
  );
}