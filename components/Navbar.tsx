"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Healthy Food", href: "/food" },
    { name: "Exercise", href: "/exercise" },
    { name: "Sleep", href: "/sleep" },
    { name: "Healthy Tips", href: "/tips" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          <span className="logo-icon">🌿</span>
          Healthy<span>Life</span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

        </nav>
      </div>
    </header>
  );
}