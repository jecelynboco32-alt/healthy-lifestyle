import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h2>✿ HealthyLife</h2>
          <p>
            Simple habits. Better living.
            <br />
            Start your journey toward a healthier lifestyle.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/food">Healthy Food</Link>
          <Link href="/exercise">Exercise</Link>
          <Link href="/sleep">Sleep</Link>
          <Link href="/tips">Healthy Tips</Link>
          <Link href="/about">About Us</Link>
        </div>

        <div>
          <h3>Our Goal</h3>
          <p>
            Helping students and young people
            understand the importance of healthy habits.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 HealthyLife. All Rights Reserved.
      </div>
    </footer>
  );
}