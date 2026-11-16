
import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
};

export default function Hero({
  title,
  subtitle,
  image,
  buttonText,
  buttonLink = "/food",
}: HeroProps) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(17,48,34,.82), rgba(17,48,34,.15)), url("${image}")`,
      }}
    >
      <div className="hero-content">
        <span className="eyebrow">
          YOUR JOURNEY TO WELLNESS
        </span>

        <h1>{title}</h1>

        <p>{subtitle}</p>

        {buttonText && (
          <Link href={buttonLink} className="primary-button">
            {buttonText} →
          </Link>
        )}
      </div>
    </section>
  );
}
