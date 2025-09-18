export function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-300 text-center p-4 mt-12">
      <p className="text-sm">
        © {new Date().getFullYear()} Ethan Lowe | Built with{" "}
        <span className="font-semibold">Next.js</span> &{" "}
        <span className="font-semibold">Vercel</span>
      </p>
    </footer>
  );
}
