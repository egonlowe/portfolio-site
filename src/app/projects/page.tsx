"use client";

import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Keyword Bot: An AI YouTube Video Keyword Generator",
      description:
        "A smart, AI keyword generator that reads your YouTube video title, compares it to a dataset of real videos, and builds a pool of highly relevant tags. It currently uses custom NLP heuristics for relevance scoring, with a Genetic Algorithm coming next to polish everything into a perfect 500-character keyword list.",
      tech: ["Python 3", "NumPy", "SpaCy", "Genetic Algorithms"],
      image: "/recentNews/youtubeLogo.jpg",
      github: "https://github.com/egonlowe/youtube_keyword_bot.git", 
      demo: null,
      status: "Completed",
      snippet: `
# ===============================================
# 1. TITLE SEMANTIC SIMILARITY (weak weight)
# ===============================================
row_tokens = self.tp.tokenize(entry.title)
row_vec = self.tp.vectorize(row_tokens)
title_sim = self.tp.similarity(input_vec, row_vec)
      if title_sim < 0:
          title_sim = 0.0
`,
    },
    
    {
      title: "ThumbsUp - An Apple Watch 'Likes' System",
      description:
        "An Apple Watch app prototype inspired by the 'likes' system in Death Stranding. This app allows users to send 'likes' to one another over local AirDrop connections, triggered by natural hand and wrist movements resembling a thumbs-up gesture. The goal is to bring a playful, gamified way of expressing gratitude to everyday interactions.",
      tech: ["Swift", "WatchOS", "Motion Sensors", "Haptics"],
      image: "/projects/likesSimulator.png",
      github: "https://github.com/yourusername/LikesSimulator", // placeholder
      demo: null,
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
`,
    },
    {
      title: "Office Space Rent Predictor",
      description:
        "A Shiny web app built using R to predict commercial lease prices based on building size, industry type, move type, and location. Uses real data from the 2025 Elon Data Nexus DataFest competition.",
      tech: ["R", "Shiny", "Data Visualization", "Predictive Modeling"],
      image: "/projects/ShinyAppScreenshot.png",
      github: "https://github.com/egonlowe/shinyApp-leasePredict",
      demo: "https://elowe.shinyapps.io/OfficeSpaceRentPredictor/",
      status: "Completed",
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
`,
    },
    {
      title: "NBA Analytics - Indiana Pacers Assist Efficiency",
      description:
        "A Google Colab project and research paper analyzing the assist distribution of the 2023–24 Indiana Pacers, before and after the Pascal Siakam trade. Using gramian matrices, I quantified passing relationships to measure changes in offensive flow, identified which players became the most common assist targets, and highlighted how roster moves impacted team efficiency.",
      tech: ["Python", "Google Colab", "Pandas", "Matplotlib", "Seaborn"],
      image: "/projects/obiToppin.jpeg",
      github: "https://github.com/egonlowe/pacersAssists",
      demo: null,
      paper: "/files/pacersOffensiveEfficiency.pdf",
      status: "Completed",
      snippet: `
import pandas as pd
import numpy as np

# Load dataset
df = pd.read_csv("pacers_assists.csv")

# Build gramian matrix: passer (rows) × receiver (cols)
players = sorted(df["passer"].unique())
gram_matrix = pd.DataFrame(
    0, index=players, columns=players
)

for _, row in df.iterrows():
    gram_matrix.loc[row["passer"], row["receiver"]] += 1

print(gram_matrix.head())
`,
    },
  ];

  return (
    <main className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[40vh] bg-primary text-lightbg text-center p-6">
        <h1 className="text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-lg max-w-2xl">
          A collection of applications, tools, and experiments I’ve built across
          data engineering, web development, and analytics.
        </p>
      </section>

      {/* Project Sections */}
      {projects.map((project, index) => (
        <section
          key={index}
          className={`flex flex-col md:flex-row items-center justify-between min-h-[60vh] p-12 gap-8 ${
            index % 2 === 0 ? "bg-[#CAD2C5]" : "bg-[#84A98C]"
          }`}
        >
          {/* Left column - text */}
          <div className="flex-1 text-left space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-primary">{project.title}</h2>
              {project.status && (
                <span
                  className={`px-3 py-1 text-sm font-semibold rounded-full whitespace-nowrap
                    ${
                      project.status === "In Development"
                        ? "bg-[#52796F] text-[#CAD2C5]"
                        : project.status === "Completed"
                        ? "bg-[#354F52] text-[#CAD2C5]"
                        : "bg-[#2F3E46] text-[#CAD2C5]" // fallback or future use
                    }`}
                >
                  {project.status}
                </span>
              )}
            </div>
            <p className="text-lg text-text">{project.description}</p>
            <p className="text-sm text-secondary">
              <strong>Tech:</strong> {project.tech.join(", ")}
            </p>

            {/* Buttons */}
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
              {project.paper && (
                <a
                  href={project.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-secondary text-lightbg rounded-md shadow hover:bg-accent hover:text-text transition"
                >
                  Read Paper
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
