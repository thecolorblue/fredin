import { profile } from "@/content/profile";

export function Hero() {
  const { hero } = profile;
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <p className="prompt">{hero.prompt}</p>
        <h1>
          {hero.firstLine}
          <br />
          <span className="gradient">{hero.secondLine}</span>
        </h1>
        <p className="lede">{hero.lede}</p>
        <div className="buttons">
          <a className="button primary" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <a
            className="button"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <dl className="stats">
        {hero.stats.map((stat) => (
          <div className="stat" key={stat.key}>
            <dt>{stat.key}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
