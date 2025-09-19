export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4 text-primary">👋 Hi, I’m Ethan Lowe</h1>

      <p className="max-w-2xl text-lg mb-4">
        I’m an{" "}
        <span className="font-semibold text-accent">AWS-focused Data Engineer</span> and 
        a current <span className="font-semibold text-accent">senior at Elon University</span>, 
        double majoring in Computer Science and Data Analytics.
      </p>

      <p className="max-w-2xl text-lg mb-4">
        I love building scalable systems and web applications that bridge the gap between{" "}
        <span className="font-semibold text-secondary">data, cloud infrastructure,</span> and{" "}
        <span className="font-semibold text-secondary">real-world impact.</span>
      </p>

      <p className="max-w-2xl text-lg mb-8">
        My technical toolkit includes{" "}
        <span className="font-semibold">
          SAS, R, Java, Python, C#, JavaScript
        </span>{" "}
        and many more — with strong experience in{" "}
        <span className="font-semibold text-primary">AWS services</span> for scalable, secure systems.
      </p>

      <a
        href="/resume"
        className="px-6 py-3 bg-primary text-lightbg font-semibold rounded-md shadow hover:bg-secondary transition-colors"
      >
        View My Resume
      </a>
    </main>
  );
}
