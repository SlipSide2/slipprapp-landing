import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function HouseholdPage() {
  return (
    <div className="min-h-screen bg-[#F5FBF7] text-[#334155] flex flex-col font-sans">
      <Header />
      <section className="pt-8 pb-12 bg-[#F5FBF7] border-b border-[#E2E8F0] text-center px-4">
        <h1 className="text-3xl font-extrabold text-[#102A43]">Household Budgeting</h1>
      </section>
      <Footer />
    </div>
  );
}
