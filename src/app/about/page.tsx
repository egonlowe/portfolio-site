export default function AboutPage() {
  return (
    <main className="flex flex-col items-center min-h-screen p-8 bg-background text-text">
      <h1 className="text-4xl font-bold mb-6 text-primary">About Me</h1>

      <section className="max-w-3xl space-y-6 text-lg">
        <p>
          Hello! I’m <span className="font-semibold text-accent">Ethan Lowe</span>, a
          dedicated <span className="font-semibold text-primary">AWS-focused Data Engineer</span>{" "}
          and a current <span className="font-semibold text-accent">senior at Elon University</span>{" "}
          majoring in Computer Science and Data Analytics.
        </p>

        <p>
          I thrive at the intersection of{" "}
          <span className="font-semibold text-secondary">data, cloud infrastructure,</span> and{" "}
          <span className="font-semibold text-secondary">scalable software systems</span>. My
          experiences range from building academic projects to industry internships where I’ve
          contributed to automation frameworks, database pipelines, and cloud-native solutions.
        </p>

        <p>
          Beyond academics and engineering, I’m passionate about{" "}
          <span className="font-semibold text-accent">helping others learn and succeed</span>. As a
          Technology Ambassador for Elon’s Data Nexus, I provide tutoring and support in{" "}
          <span className="font-semibold text-primary">R, SAS, Excel, SQL,</span> and other tools,
          ensuring students build confidence with analytics and problem-solving.
        </p>

        <p>
          Outside of tech, I enjoy exploring how{" "}
          <span className="font-semibold text-secondary">technology impacts everyday life</span> and
          seeking opportunities to combine my analytical mindset with creativity to deliver
          meaningful solutions.
        </p>
      </section>
    </main>
  );
}
