import React from 'react';
import Header from './Header';
import Footer from './Footer';
import VideoPlayer from './VideoPlayer';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#F5FBF7] text-[#334155] flex flex-col font-sans">
      <Header />
      <section className="pt-8 pb-12 bg-[#F5FBF7] border-b border-[#E2E8F0] text-center px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2fc86a] bg-[#EAF7EF] border border-[#40DE7F]/30 px-3 py-1 rounded-full">
            How it works
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102A43] tracking-tight leading-tight">
            The story behind the spend.<br />
            SlipSide just reads it.
          </h1>
        </div>
      </section>
      <Footer />
    </div>
  );
}
