import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F5FBF7] text-[#334155] flex flex-col font-sans">
      <Header />
      <section className="p-8"><h1 className="text-2xl font-bold">Terms & Conditions</h1></section>
      <Footer />
    </div>
  );
}
