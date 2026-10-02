import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ showNavLinks = true }) {
  const location = useLocation();

  return (
    <header className="w-full bg-[#F5FBF7] border-b border-[#E2E8F0] py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="inline-flex items-center">
          <img
            src="/assets/logo-navy.png"
            alt="SlipSide: The story behind the spend."
            className="h-16 md:h-24 w-auto object-contain"
          />
        </Link>
        {showNavLinks && (
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-[#102A43]">
            <Link
              to="/how-it-works"
              className={`px-3 py-1.5 rounded-full border transition ${
                location.pathname === '/how-it-works'
                  ? 'bg-[#EAF7EF] border-[#40DE7F] text-[#102A43]'
                  : 'border-transparent hover:border-[#E2E8F0] hover:text-[#2fc86a]'
              }`}
            >
              How it works
            </Link>
            <Link
              to="/household"
              className={`px-3 py-1.5 rounded-full border transition ${
                location.pathname === '/household'
                  ? 'bg-[#EAF7EF] border-[#40DE7F] text-[#102A43]'
                  : 'border-transparent hover:border-[#E2E8F0] hover:text-[#2fc86a]'
              }`}
            >
              Household Budgeting
            </Link>
            <a
              href="/#roadmap"
              className="px-3 py-1.5 rounded-full border border-transparent hover:border-[#E2E8F0] hover:text-[#2fc86a] transition"
            >
              Roadmap
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
