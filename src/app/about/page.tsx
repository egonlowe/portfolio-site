export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen text-center p-6">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <section className="max-w-3xl text-left space-y-6">
        {/* 👇 Section 1: Introduction */}
        <p>
          Hi, I’m <span className="font-semibold">Ethan Lowe</span>, a{" "}
          <span className="font-semibold">senior at Elon University </span> 
          majoring in <span className="font-semibold">Computer Science </span> 
          and <span className="font-semibold">Data Analytics</span>.
        </p>

        {/* 👇 Section 2: Professional Focus */}
        <p>
          My passion lies in building scalable, cloud-native applications. 
          I specialize in <span className="font-semibold">AWS services</span>, 
          data engineering, automation testing, and backend systems that turn raw data into 
          actionable insights.
        </p>

        {/* 👇 Section 3: Skills */}
        <p>
          Over the years I’ve gained experience in languages like{" "}
          <span className="font-semibold">SAS, R, Java, Python, C#, JavaScript,</span> 
          and more. I also enjoy working with{" "}
          <span className="font-semibold">React, Next.js, and cloud 
          infrastructure tools</span>.
        </p>

        {/* 👇 Section 4: Personal Touch */}
        <p>
          Outside of coding, I’m interested in <em>content creation, keeping active, and all sorts of puzzles</em>. I believe that technology should not only be 
          efficient and transformative, but also meaningful — solving problems that make a 
          difference in people’s lives.
        </p>
      </section>
    </main>
  );
}
