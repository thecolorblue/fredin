import { profile } from "@/content/profile";

export function Shipped() {
  return (
    <section className="section" id="shipped">
      <h2 className="section-title">{"// shipped"}</h2>
      <div className="cards">
        {profile.shipped.map((item) => (
          <article
            className={item.featured ? "card card-featured" : "card"}
            key={item.title}
          >
            <div className="card-head">
              <h3>{item.title}</h3>
              <span className={item.live ? "pill pill-live" : "pill"}>
                {item.pill}
              </span>
            </div>
            <p>{item.body}</p>
            {item.link && (
              <a
                className="card-link"
                href={item.link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.link.label}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
