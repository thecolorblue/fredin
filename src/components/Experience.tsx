import { profile } from "@/content/profile";

export function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">{"// experience"}</h2>
      <ol className="timeline">
        {profile.experience.map((job) => (
          <li className={job.current ? "job job-current" : "job"} key={job.role}>
            <span className="period">{job.period}</span>
            <h3>{job.role}</h3>
            {job.body && <p>{job.body}</p>}
          </li>
        ))}
      </ol>
    </section>
  );
}
