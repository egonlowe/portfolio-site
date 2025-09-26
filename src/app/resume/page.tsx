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
      description:
        "Developed scripts to recreate and modify virtual maps using C# in Unity, while integrating objects to enhance user interaction. Ensured seamless user experience by allowing free movement within the maps and the ability to manipulate objects. Goal: create a cohesive environment for humans and robots to interact seamlessly and safely with the guidance of Dr. Miroslav Pajic and Duke University graduate students.",
    },
    {
      role: "Elon University - Campus Technology Support Service Desk Assistant",
      date: "May 2024 - Present",
      description:
        "Core duties include responding to customer inquiries at the service desk and Elon switchboard, researching to provide solutions for service requests, monitoring ticketing system queues, live chatting with customers, and analyzing requests to properly assign them to other areas within IT among other duties assigned.",
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

  const defaultVisible = 3;

  return (
    <main className="flex flex-col min-h-screen p-8 bg-[#CAD2C5] text-text space-y-16">
      {/* Two-column section */}
      <div className="flex flex-col md:flex-row items-start justify-start">
        {/* Left Column → Timeline */}
        <section className="flex-1 relative border-l-4 border-primary pl-10">
          <h1 className="text-3xl font-bold mb-8 text-primary">Experience</h1>
          <ul className="space-y-8">
            {experiences.map((exp, index) => (
              <li key={index} className="relative">
                {/* Timeline dot (filled, aligned) */}
                <span className="absolute -left-[45px] top-6 w-6 h-6 rounded-full bg-primary border-2 border-primary"></span>

                {/* Timeline card */}
                <div className="p-4 rounded-md bg-[#84A98C] shadow border border-primary">
                  <h2 className="text-xl font-semibold text-[#2F3E46]">
                    {exp.role}
                  </h2>
                  <p className="text-sm text-[#354F52] mb-2">{exp.date}</p>
                  <p className="text-[#2F3E46]">{exp.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Right Column → Resume Download (Sticky) */}
        <aside className="w-full md:w-1/3 md:pl-8 mt-8 md:mt-0 sticky top-20 self-start">
          <div className="p-6 rounded-md shadow bg-[#84A98C] border border-primary">
            <h2 className="text-2xl font-bold mb-4 text-[#2F3E46]">Resume</h2>
            <p className="mb-4 text-[#2F3E46]">
              Download a copy of my most recent resume for a detailed overview
              of my professional experience, skills, and education.
            </p>
            <a
              href="/files/ResumeSept2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="block px-6 py-3 bg-primary text-lightbg font-semibold rounded-md shadow hover:bg-secondary hover:text-lightbg transition-colors text-center"
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

        <div
          className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? "max-h-[2000px]" : "max-h-[600px]"
          }`}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`p-4 bg-[#84A98C] rounded-md shadow border border-primary transform transition-all duration-500 ease-in-out ${
                expanded || index < defaultVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              style={{
                transitionDelay: expanded ? `${index * 100}ms` : "0ms",
              }}
            >
              <h3 className="text-lg font-semibold text-[#2F3E46]">
                {cert.name}
              </h3>
              <p className="text-sm text-[#354F52] mb-2">{cert.date}</p>
              <p className="text-[#2F3E46] text-sm">{cert.description}</p>
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
