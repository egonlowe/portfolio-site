export default function ResumePage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-10 text-center">My Resume</h1>

      <div className="flex w-full max-w-6xl gap-12">
        {/* LEFT: Timeline */}
        <section className="flex-1">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="relative border-l border-gray-300 ml-4 space-y-8">

            {/* Elon Data Nexus Ambassador */}
            <div className="ml-6">
              <div className="absolute -left-3 w-6 h-6 bg-blue-600 rounded-full border border-white"></div>
              <h3 className="text-lg font-semibold">
                Elon Data Nexus Technology Ambassador
              </h3>
              <p className="text-gray-500 text-sm">Sept 2025 – Present · Elon University</p>
              <p className="mt-2 text-gray-700">
                Provide one-on-one tutoring and workshop support for students working with{" "}
                <span className="font-semibold">statistics and data tools</span>. 
                Specialize in guiding peers through{" "}
                <span className="font-semibold">R, SAS, Excel, SQL, and related analytics platforms</span>. 
                Help foster data literacy across campus by assisting with assignments, research projects, 
                and real-world problem solving, empowering students to confidently work with data.
              </p>
            </div>

            {/* IT Intern - ODFL */}
            <div className="ml-6">
              <div className="absolute -left-3 w-6 h-6 bg-blue-600 rounded-full border border-white"></div>
              <h3 className="text-lg font-semibold">IT Intern – QA Test Automation</h3>
              <p className="text-gray-500 text-sm">June 2025 – Aug 2025 · Old Dominion Freight Line</p>
              <p className="mt-2 text-gray-700">
                Collaborated with the QA Test Automation team to design and develop an automated
                testing framework using Appium and Selenium. Supported quality assurance for updated 
                mobile applications and laid groundwork for future automated testing efforts.
              </p>
            </div>

            {/* AR Lab Assistant */}
            <div className="ml-6">
              <div className="absolute -left-3 w-6 h-6 bg-blue-600 rounded-full border border-white"></div>
              <h3 className="text-lg font-semibold">Intern – Augmented Reality Lab Assistant</h3>
              <p className="text-gray-500 text-sm">June 2024 – Sept 2024 · Duke University</p>
              <p className="mt-2 text-gray-700">
                Developed scripts in C# with Unity to recreate and enhance interactive 3D maps for 
                human-robot interaction studies under Dr. Miroslav Pajic. Focused on seamless UX, 
                enabling free movement and manipulation of virtual objects in VR environments.
              </p>
            </div>

            {/* Service Desk Assistant */}
            <div className="ml-6">
              <div className="absolute -left-3 w-6 h-6 bg-blue-600 rounded-full border border-white"></div>
              <h3 className="text-lg font-semibold">
                Campus Technology Support Service Desk Assistant
              </h3>
              <p className="text-gray-500 text-sm">May 2024 – Present · Elon University</p>
              <p className="mt-2 text-gray-700">
                Respond to student and faculty inquiries at the Service Desk and Switchboard. 
                Troubleshoot technical requests, monitor ticketing queues, and provide live chat 
                support. Assist with print checks, hardware issues, and routing cases to the appropriate teams.
              </p>
            </div>
          </div>
        </section>

        {/* RIGHT: Sticky Download Button */}
        <aside className="w-64 flex-shrink-0">
          <div className="sticky top-24 bg-gray-100 border border-gray-300 rounded-md p-6 shadow">
            <h3 className="text-lg font-semibold mb-4">Download Resume</h3>
            <a
              href="/ResumeSept2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 bg-blue-600 text-white font-semibold text-center rounded-md shadow hover:bg-blue-700 transition-colors"
            >
              PDF Version
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
