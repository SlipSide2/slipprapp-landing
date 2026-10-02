import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-8 text-center bg-[#F5FBF7] border-t border-[#E2E8F0] text-xs md:text-sm text-[#64748B]">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-2 md:gap-4">
        <span>© 2026 SlipSide</span>
        <span className="text-[#CBD5E1]">·</span>
        <a href="mailto:hello@theslipside.com" className="hover:text-[#2fc86a] transition">hello@theslipside.com</a>
        <span className="text-[#CBD5E1]">·</span>
        <Link to="/how-it-works" className="hover:text-[#2fc86a] transition">How it works</Link>
        <span className="text-[#CBD5E1]">·</span>
        <Link to="/household" className="hover:text-[#2fc86a] transition">Household Budgeting</Link>
        <span className="text-[#CBD5E1]">·</span>
        <Link to="/privacy" className="hover:text-[#2fc86a] transition">Privacy Policy</Link>
        <span className="text-[#CBD5E1]">·</span>
        <Link to="/terms" className="hover:text-[#2fc86a] transition">Terms & Conditions</Link>
      </div>
    </footer>
  );
}
