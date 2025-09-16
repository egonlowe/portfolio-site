export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-4xl font-bold mb-4">👋 Hi, I’m Ethan Lowe</h1>

      <p className="max-w-2xl text-lg mb-4">
        I’m an <span className="font-semibold">AWS-focused Data Engineer</span> and 
        a current <span className="font-semibold">senior at Elon University</span>, 
        double majoring in Computer Science and Data Analytics.
      </p>

      <p className="max-w-2xl text-lg mb-4">
        I love building scalable systems and web applications that bridge the gap between 
        <span className="font-semibold"> data, cloud infrastructure,</span> and 
        <span className="font-semibold"> real-world impact.</span>
      </p>

      <p className="max-w-2xl text-lg mb-8">
        My technical toolkit includes <span className="font-semibold">SAS, R, Java, Python, C#, JavaScript,</span> 
        and many more — with strong experience in designing APIs, analyzing data, and developing 
        applications across both academic and professional projects.
      </p>

      <p className="italic text-gray-500">
        This portfolio is built with Next.js and deployed on Vercel — more pages coming soon!
      </p>
    </main>
  );
}
