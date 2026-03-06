import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-sm z-10 border-b border-gray-200">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Peace Time logo" className="h-10 w-auto" />
          <span className="font-bold text-xl text-navy">Peace Time</span>
        </Link>

        <div className="hidden md:flex space-x-6 text-gray-700">
          <a href="#about" className="hover:text-sky transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-sky transition-colors">
            Services
          </a>
          <a href="#process" className="hover:text-sky transition-colors">
            Process
          </a>
          <a href="#social" className="hover:text-sky transition-colors">
            Social Proof
          </a>
          <a href="#discord" className="hover:text-sky transition-colors">
            Discord
          </a>
        </div>
      </nav>
    </header>
  );
}
