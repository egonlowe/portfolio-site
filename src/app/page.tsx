"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const news = [
    {
      title: "Keyword Bot Development Completes",
      date: "December 2025",
      description:
        "The YouTube Keyword Optimization Bot is officially complete! It now generates smart, SEO-friendly keyword lists using a hybrid heuristic and genetic algorithm system.",
      image: "/recentNews/youtubeLogo.jpg",
    },
    {
      title: "Attended the 2025 Southeastern SAS Users Group Convention",
      date: "September 22-24, 2025",
      description:
        "I’m attending the SESUG Conference, a regional event for SAS users in the southeastern U.S. The conference offers workshops, presentations, and networking opportunities to build skills and connect with the SAS community.",
      image: "/recentNews/SESUG.jpg",
    },
    {
      title: "Concluded ODFL Summer Internship",
      date: "June 2025 - August 2025",
      description:
        "Concluded my ODFL Summer Internship, where I worked with the QA Automation team to develop a testing framework for mobile software. Gained hands-on experience in automation, quality assurance processes, and building tools that improve software reliability.",
      image: "/recentNews/ODFL_Interns.jpeg",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevNews = () =>
    setCurrent((prev) => (prev === 0 ? news.length - 1 : prev - 1));

  const nextNews = () =>
    setCurrent((prev) => (prev === news.length - 1 ? 0 : prev + 1));

  // Auto-slide every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === news.length - 1 ? 0 : prev + 1));
    }, 15000);
    return () => clearInterval(interval);
  }, [news.length]);

  return (
    <main className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-primary text-lightbg text-center p-6">
        <h1 className="text-6xl font-bold mb-4">👋 Hi, I’m Ethan Lowe</h1>
        <p className="text-xl">Data Engineer, Automation Tester | Elon University</p>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] p-8 bg-lightbg text-text gap-12 max-w-6xl mx-auto">
        {/* Text */}
        <div className="flex-1 text-left max-w-lg">
          <h2 className="text-3xl font-bold mb-4 text-primary">About Me</h2>
          <p className="mb-4">
            I’m an{" "}
            <span className="font-semibold text-accent">
              AWS-focused Data Engineer
            </span>{" "}
            and a{" "}
            <span className="font-semibold text-accent">
              senior at Elon University
            </span>
            , double majoring in Computer Science and Data Analytics.
          </p>
          <p className="mb-4">
            I love building scalable systems and web applications that bridge
            the gap between{" "}
            <span className="font-semibold text-secondary">
              data, cloud infrastructure,
            </span>{" "}
            and{" "}
            <span className="font-semibold text-secondary">
              real-world impact.
            </span>
          </p>
          <p className="mb-8">
            My technical toolkit includes{" "}
            <span className="font-semibold">
              SAS, R, Java, Python, C#, JavaScript
            </span>{" "}
            and more — with strong experience in{" "}
            <span className="font-semibold text-primary">AWS services</span> for
            scalable, secure systems.
          </p>

          <a
            href="/about"
            className="px-6 py-3 bg-primary text-lightbg font-semibold rounded-md shadow hover:bg-secondary transition-colors"
          >
            About Me
          </a>
        </div>

        {/* Headshot */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/headshots/elowe7-1.png"
            alt="Ethan Lowe"
            width={360} // 🔼 increased size
            height={360} // 🔼 increased size
            className="rounded-full shadow-lg border-4 border-primary scale-105"
          />
        </div>
      </section>

      {/* Recent News Section */}
<section className="flex flex-col items-center justify-center min-h-[70vh] p-8 bg-background text-text">
  <h2 className="text-3xl font-bold mb-8 text-primary">Recent News</h2>

  <div className="relative w-2/3 min-h-[350px]">
    {news.map((item, index) => (
      <div
        key={index}
        className={`absolute inset-0 p-8 rounded-xl shadow-xl border border-primary flex items-center transition-opacity duration-700 ease-in-out ${
          index === current ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
        style={{ backgroundColor: "var(--color-lightbg)" }}
      >
        {/* Left Column */}
        <div
          className={`pr-6 ${item.image ? "flex-1" : "w-full"} text-left`}
        >
          <h3 className="text-2xl font-bold text-primary mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-secondary mb-4">{item.date}</p>
          <p className="text-text text-lg">{item.description}</p>
        </div>

        {/* Right Column - Image */}
        {item.image && (
          <div className="flex-1 h-full flex items-center justify-center">
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={200}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        )}
      </div>
    ))}

    {/* Arrows */}
    <button
      onClick={prevNews}
      className="absolute left-[-70px] top-1/2 -translate-y-1/2 z-20 px-4 py-2 bg-primary text-lightbg rounded-full shadow hover:bg-secondary transition"
    >
      ←
    </button>
    <button
      onClick={nextNews}
      className="absolute right-[-70px] top-1/2 -translate-y-1/2 z-20 px-4 py-2 bg-primary text-lightbg rounded-full shadow hover:bg-secondary transition"
    >
      →
    </button>
  </div>

  {/* Dot Indicators */}
<div className="flex justify-center mt-6 space-x-3 relative z-30">
  {news.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrent(index)}
      className={`w-4 h-4 rounded-full border-2 transition ${
        index === current
          ? "bg-transparent border-[var(--color-primary)] scale-110"
          : "bg-[var(--color-primary)] border-[var(--color-primary)] hover:bg-[var(--foreground)]"
      }`}
    />
  ))}
</div>
</section>
    </main>
  );
}
