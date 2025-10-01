import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center min-h-screen p-8 bg-background text-text">
      <h1 className="text-4xl font-bold mb-6 text-primary">About Me</h1>

      {/* Top photo (optional, personable) */}
      <div className="mb-8">
        <Image
          src="/about/chairEgon.jpg" // <-- Add to /public/headshots/
          alt="Ethan Lowe"
          width={300}
          height={300}
          className="rounded-xl shadow-lg border-4 border-primary object-cover"
        />
      </div>

      <section className="max-w-3xl space-y-6 text-lg">
        <p>
          Hello! I’m{" "}
          <span className="font-semibold text-accent">Ethan Lowe</span>, a
          dedicated{" "}
          <span className="font-semibold text-primary">
            AWS-focused Data Engineer
          </span>{" "}
          and a current{" "}
          <span className="font-semibold text-accent">
            senior at Elon University
          </span>{" "}
          majoring in Computer Science and Data Analytics.
        </p>

        <p>
          I thrive at the intersection of{" "}
          <span className="font-semibold text-secondary">
            data, cloud infrastructure,
          </span>{" "}
          and{" "}
          <span className="font-semibold text-secondary">
            scalable software systems
          </span>
          . My experiences range from building academic projects to industry
          internships where I’ve contributed to automation frameworks, database
          pipelines, and cloud-native solutions.
        </p>

        <p>
          Beyond academics and engineering, I’m passionate about{" "}
          <span className="font-semibold text-accent">
            helping others learn and succeed
          </span>
          . As a Technology Ambassador for Elon’s Data Nexus, I provide tutoring
          and support in{" "}
          <span className="font-semibold text-primary">R, SAS, Excel, SQL,</span>{" "}
          and other tools, ensuring students build confidence with analytics and
          problem-solving.
        </p>

        <p>
          My love for technology began after I{" "}
          <span className="font-semibold text-secondary">
            lost my hearing and received my first hearing aid
          </span>
          . Experiencing firsthand how an innovative device could restore and
          transform daily life sparked a fascination in me. That early
          experience inspired my drive to understand and build technology — not
          just as tools, but as meaningful solutions that can make people’s
          lives better.
        </p>

        <p>
          Outside of tech, I enjoy creating{" "}
          <span className="font-semibold text-accent">YouTube videos</span>{" "}
          exploring the intricacies of video games and the unique storytelling
          within the medium. Using{" "}
          <span className="font-semibold text-secondary">
            Adobe Premiere, After Effects, and Photoshop
          </span>
          , I craft video essays and analyses that merge creativity with
          critical insight. It’s a way for me to connect my analytical mindset
          with a love for games and storytelling.
        </p>

        {/* YouTube profile picture */}
        <div className="flex justify-center mt-6">
          <Image
            src="/about/PFP.png" // <-- Add to /public/about/
            alt="YouTube profile"
            width={180}
            height={180}
            className="rounded-full shadow-md border-2 border-primary"
          />
        </div>

        <p>
          I’m also a little{" "}
          <span className="font-semibold text-accent">too into basketball</span>
          . As a die-hard{" "}
          <span className="font-semibold text-primary">Indiana Pacers</span>{" "}
          fan, I can often be found diving into{" "}
          <span className="font-semibold text-secondary">
            advanced stats and analytics
          </span>{" "}
          to better understand the game. It’s both a hobby and another way I get
          to connect my passion for data with something I love outside of
          academics and engineering.
        </p>
      </section>
    </main>
  );
}
