"use client";

import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      title: "ThumbsUp - An Apple Watch 'Likes' System (In Progress)",
      description:
        "An Apple Watch app prototype inspired by the 'likes' system in Death Stranding. This app allows users to send 'likes' to one another over local AirDrop connections, triggered by natural hand and wrist movements resembling a thumbs-up gesture. The goal is to bring a playful, gamified way of expressing gratitude to everyday interactions.",
      tech: ["Swift", "WatchOS", "Motion Sensors", "Haptics"],
      image: "/projects/likesSimulator.png", // add screenshot or placeholder to /public/projects/
      github: "https://github.com/yourusername/LikesSimulator", // optional placeholder until repo is ready
      demo: null, // not live yet
      status: "In Development",
      snippet: `
// Motion detection logic (SwiftUI + CoreMotion)
motionManager.startDeviceMotionUpdates(to: .main) { motion, error in
  if let attitude = motion?.attitude {
    if attitude.pitch > 1.0 { 
      sendLike() // thumbs up detected
    }
  }
}
`
    },
    {
      title: "Office Space Rent Predictor",
      description:
        "A Shiny web app built using R to predict commercial lease prices based on building size, industry type, move type, and location. Uses real data from the 2025 Elon Data Nexus DataFest competition.",
      tech: ["R", "Shiny", "Data Visualization", "Predictive Modeling"],
      image: "/projects/ShinyAppScreenshot.png", // add to /public/projects/
      github: "https://github.com/egonlowe/shinyApp-leasePredict",
      demo: "https://elowe.shinyapps.io/OfficeSpaceRentPredictor/", // optional
      snippet: `
library(shiny)
ui <- fluidPage(
  titlePanel("Lease Price Predictor"),
  sidebarLayout(
    sidebarPanel(
      sliderInput("sqft", "Building Size (sq ft):", 500, 10000, 2000),
      selectInput("industry", "Industry Type:", c("Tech","Healthcare","Retail"))
    ),
    mainPanel(
      plotOutput("predictionPlot")
    )
  )
)
`
    },
    // 👉 add more projects here in the same format
  ];

  return (
    <main className="flex flex-col w-full">
      <section className="flex flex-col items-center justify-center min-h-[40vh] bg-primary text-lightbg text-center p-6">
        <h1 className="text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-lg max-w-2xl">
          A collection of applications, tools, and experiments I’ve built across
          data engineering, web development, and analytics.
        </p>
      </section>

      {projects.map((project, index) => (
        <section
          key={index}
          className={`flex flex-col md:flex-row items-center justify-between min-h-[60vh] p-12 gap-8 ${
            index % 2 === 0 ? "bg-[#EDE0D4]" : "bg-[#E6CCB2]"
          }`}
        >
          {/* Left column - text */}
          <div className="flex-1 text-left space-y-4">
            <h2 className="text-3xl font-bold text-primary">{project.title}</h2>
            <p className="text-lg text-text">{project.description}</p>
            <p className="text-sm text-secondary">
              <strong>Tech:</strong> {project.tech.join(", ")}
            </p>

            <div className="flex space-x-4 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-lightbg rounded-md shadow hover:bg-secondary transition"
                >
                  View on GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-accent text-text rounded-md shadow hover:bg-secondary hover:text-lightbg transition"
                >
                  Live Demo
                </a>
              )}
            </div>

            {/* Code Snippet */}
            {project.snippet && (
              <pre className="mt-6 p-4 bg-background text-text rounded-lg shadow overflow-x-auto text-sm">
                <code>{project.snippet}</code>
              </pre>
            )}
          </div>

          {/* Right column - image */}
          {project.image && (
            <div className="flex-1 flex justify-center">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg shadow-md border border-primary"
              />
            </div>
          )}
        </section>
      ))}
    </main>
  );
}
