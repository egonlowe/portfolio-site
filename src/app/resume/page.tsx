"use client";

import { useState } from "react";

export default function Resume() {
  const experiences = [
    {
      role: "Elon University - Data Nexus Technology Ambassador",
      date: "Sept 2025 - Present",
      description:
        "Provide tutoring and technical assistance to Elon students across statistics, data science, and analytics. Specializing in R, SAS, Excel, SQL, and other analytical tools. Support students in developing problem-solving approaches with data and software.",
    },
    {
      role: "Old Dominion Freight Line - Data Engineer Intern",
      date: "June 2025 - August 2025",
      description:
        "Worked with the QA Test Automation team to design and develop an automated testing framework using Appium and Selenium. This framework will support quality assurance efforts for newly updated mobile software and lay the foundation for future testing across ODFL's suite of mobile applications.",
    },
    {
      role: "Duke University - Augmented Reality Lab Assistant",
      date: "June 2024 - September 2024",
      description: "Developed scripts to recreate and modify virtual maps using C# in Unity, while integrating objects to enhance user interaction. I ensured seamless user experience by allowing free movement within the maps and the ability to manipulate objects with the goal of creating a cohesive environment for humans and robots to interact seamlessly and safely with the guidance of Dr. Miroslav Pajic and Duke University graduate students.",
    },
    {
      role: "Elon University - Campus Technology Support Service Desk Assitant",
      date: "May 2024 - Present",
      description:
        "Core duties include responding to customer's inquiries at the service desk and Elon switchboard, researching to provide solutions for service requests, monitoring ticketing system queues, live chatting with customers, and analyzing requests to properly assign them to other ares within Information Technology among other duties assigned.",
    },
  ];

  const certifications = [
    {
      name: "Advanced Data Competency Badge",
      date: "April 2025",
      description:
        "Recognizes sustained academic and co-curricular engagement with data through completion of three data-intensive courses across disciplines and two approved co-curricular experiences. Includes participation in a Data Nexus-sponsored DataFest competition focused on real-world data analysis.",
    },
    {
      name: "AWS Certified Data Engineer",
      date: "September 2025",
      description:
        "Validates skills and knowledge in core data-related AWS services, ability to ingest and transform data, orchestrate data pipelines while applying programming concepts, design data models, manage data life cycles, and ensure data quality.",
    },
    {
      name: "SAS Base Programming Specialist Certification",
      date: "January 2025",
      description:
        "SAS certified professionals demonstrate expertise in reading and creating data files, generating reports with base SAS, manipulating data, and troubleshooting syntax and programming errors.",
    },
    {
      name: "SAS Micro-Credential",
      date: "May 2024",
      description:
        "Course dedicated to mastering the syntax for data procedures. Teaches the steps necessary to generate numerical descriptive statistics using standard procedures.",
    },
  ];

  const [expanded, setExpanded] = useState(false);

  return (
    <main className="flex flex-col min-h-screen p-8 bg-background text-foreground space-y-16">
      {/* Two-column section */}
      <div className="flex flex-col md:flex-row items-start justify-start">
        {/* Left Column → Timeline */}
        <section className="flex-1 relative border-l-4 border-primary pl-6">
          <h1 className="text-3xl font-bold mb-8 text-primary">Experience</h1>
          <ul className="space-y-8">
            {experiences.map((exp, index) => (
              <li key={index} className="relative">
                {/* Timeline dot */}
                <span className="absolute -left-[34px] flex items-center justify-center w-6 h-6 rounded-full bg-accent border-4 border-background"></span>

                {/* Timeline card */}
                <div className="p-4 rounded-md bg-lightbg shadow">
                  <h2 className="text-xl font-semibold text-primary">
                    {exp.role}
                  </h2>
                  <p className="text-sm text-primary mb-2">{exp.date}</p>
                  <p className="text-text">{exp.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Right Column → Resume Download (Sticky) */}
        <aside className="w-full md:w-1/3 md:pl-8 mt-8 md:mt-0 sticky top-20 self-start">
          <div className="p-6 rounded-md shadow bg-lightbg border border-primary">
            <h2 className="text-2xl font-bold mb-4 text-primary">Resume</h2>
            <p className="mb-4 text-text">
              Download a copy of my most recent resume for a detailed overview
              of my professional experience, skills, and education.
            </p>
            <a
              href="/EthanLowe_Resume.pdf" /* ⚠️ Place your PDF in public/ */
              download
              className="block px-6 py-3 bg-primary text-lightbg font-semibold rounded-md shadow hover:bg-secondary transition-colors text-center"
            >
              Download Resume
            </a>
          </div>
        </aside>
      </div>

      {/* Full-width section → Certifications & Awards */}
      <section className="w-full mt-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">
          Certifications & Awards
        </h2>

        {/* Animated container */}
        <div
          className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? "max-h-[2000px]" : "max-h-[400px]"
          }`}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`p-4 bg-lightbg rounded-md shadow border border-primary transform transition-all duration-500 ease-in-out ${
                expanded
                  ? "opacity-100 translate-y-0 delay-200"
                  : index > 1
                  ? "opacity-0 -translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <h3 className="text-lg font-semibold text-primary">
                {cert.name}
              </h3>
              <p className="text-sm text-primary mb-2">{cert.date}</p>
              <p className="text-text text-sm">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Expand / Collapse Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-6 py-2 bg-primary text-lightbg font-semibold rounded-md shadow hover:bg-secondary transition-colors"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      </section>
    </main>
  );
}
