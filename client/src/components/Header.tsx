import { useState, useEffect } from "react";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check if the page has scrolled to add background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-colors duration-300 ${scrolled ? "bg-white/90 dark:bg-background/90 backdrop-blur-sm" : ""}`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold text-primary">
            AC
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden px-6 py-4 bg-white dark:bg-background border-t border-gray-100 dark:border-gray-800 ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center">
            <ModeToggle />
            <span className="ml-2 text-sm font-medium">Toggle theme</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
