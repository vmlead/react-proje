import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ darkMode, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur shadow-sm border-b border-slate-200 dark:bg-gray-900/70 dark:border-gray-700">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#home" className="flex items-center gap-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
          <img src="vmLogo.png" alt="VM Logo" className="h-8 w-8" />
          Vivek.dev
        </a>

        <div className="flex items-center gap-2">
          <IconButton
            onClick={onToggleTheme}
            size="small"
            color="inherit"
            aria-label="Toggle dark mode"
            className="text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white"
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 dark:text-gray-700 md:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-200 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-slate-900 dark:hover:text-white transition-colors duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2 hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
