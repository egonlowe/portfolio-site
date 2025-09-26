export function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] text-[var(--foreground)] py-6 mt-12">
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
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ethanjlowe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a href="mailto:ethan.lowe1304@gmail.com" className="hover:underline">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
