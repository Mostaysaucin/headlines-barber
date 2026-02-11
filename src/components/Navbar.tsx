"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Barbers", href: "#barbers" },
  { label: "Reviews", href: "#reviews" },
  { label: "Locations", href: "#locations" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-heading text-2xl sm:text-3xl tracking-wider text-accent">
              HEADLINES
            </span>
            <span className="hidden sm:inline font-heading text-lg tracking-wider text-primary">
              BARBERSHOPS
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-sm tracking-widest text-text-secondary hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#locations"
              className="bg-primary hover:bg-primary-light text-accent font-heading text-sm tracking-widest px-6 py-2.5 transition-colors duration-200"
            >
              BOOK NOW
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-accent p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-secondary/95 backdrop-blur-md pb-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-heading text-sm tracking-widest text-text-secondary hover:text-accent py-3 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#locations"
              onClick={() => setMobileOpen(false)}
              className="inline-block mt-4 bg-primary hover:bg-primary-light text-accent font-heading text-sm tracking-widest px-6 py-2.5 transition-colors"
            >
              BOOK NOW
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
