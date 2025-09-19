export default function About() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen text-center p-6 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">About Me</h1>

      <p className="max-w-2xl text-lg mb-4">
        I’m <span className="font-semibold text-accent">Ethan Lowe</span>, 
        a current senior at <span className="font-semibold text-secondary">Elon University</span>, 
        pursuing a double major in <span className="font-semibold text-primary">Computer Science</span> 
        and <span className="font-semibold text-primary">Data Analytics</span>.
      </p>

      <p className="max-w-2xl text-lg mb-4">
        My passion lies in building systems that blend{" "}
        <span className="font-semibold text-secondary">data engineering</span>,{" "}
        <span className="font-semibold text-secondary">cloud infrastructure</span>, 
        and meaningful user experiences.
      </p>

      <p className="max-w-2xl text-lg mb-4">
        Over the years, I’ve developed strong skills in{" "}
        <span className="font-semibold">SAS, R, Java, Python, C#, JavaScript, SQL</span>, 
        and have worked extensively with{" "}
        <span className="font-semibold text-primary">AWS services</span>.
      </p>

      <p className="max-w-2xl text-lg mb-4">
        Outside of coding, I enjoy solving tough data problems, mentoring students in 
        statistics and programming, and exploring how technology can 
        <span className="font-semibold text-accent"> make an impact at scale</span>.
      </p>
    </main>
  );
}
