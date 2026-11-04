import { profile } from "@/content/profile";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Say hello</h2>
      <a className="mono-link" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
    </section>
  );
}
