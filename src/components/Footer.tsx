export function Footer() {
  return (
    <footer className="bg-[#9C6644] text-lightbg py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side */}
        <p className="text-sm">
          © {new Date().getFullYear()} Ethan Lowe. All rights reserved.
        </p>

        {/* Right side */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/egonlowe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent hover:underline transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ethanjlowe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent hover:underline transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ethan.lowe1304@gmail.com"
            className="hover:text-accent hover:underline transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
