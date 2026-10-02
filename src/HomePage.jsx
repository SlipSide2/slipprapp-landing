import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Sparkles } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import VideoPlayer from './VideoPlayer';
import ReceiptScannerPrototype from './ReceiptScannerPrototype';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5FBF7] text-[#334155] flex flex-col font-sans">
      <Header />

      <section className="pt-8 pb-12 md:pt-14 md:pb-16 bg-[#F5FBF7] border-b border-[#E2E8F0] text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#EAF7EF] border border-[#40DE7F]/40 text-[#102A43] px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold shadow-xs">
            <Sparkles className="w-4 h-4 text-[#2fc86a]" />
            <span>Now with Household Budgeting & Gmail Import</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#102A43] tracking-tight leading-tight">
            The story behind the spend.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#102A43] via-[#2fc86a] to-[#102A43]">
              Finally know where your grocery money goes.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#334155] max-w-2xl mx-auto leading-relaxed">
            Item by item, store by store, rand by rand. AI automatically reads physical till slips and imports online delivery orders.
          </p>

          <div className="pt-2 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://testflight.apple.com/join/83XUq3WH"
                target="_blank"
                rel="noreferrer"
                className="transition hover:scale-105"
              >
                <img src="/assets/app-store-badge.svg" alt="Download on the App Store" className="h-12 w-auto" />
              </a>
              <a
                href="https://play.google.com/apps/testing/com.slipprapp.app"
                target="_blank"
                rel="noreferrer"
                className="transition hover:scale-105"
              >
                <img src="/assets/google-play-badge.png" alt="Get it on Google Play" className="h-12 w-auto" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm font-semibold text-[#102A43] pt-2">
              <Link to="/how-it-works" className="hover:text-[#2fc86a] underline underline-offset-4 decoration-[#40DE7F]">
                See how it works &rarr;
              </Link>
              <Link to="/household" className="hover:text-[#2fc86a] underline underline-offset-4 decoration-[#40DE7F]">
                Household budgeting &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#F5FBF7] border-b border-[#E2E8F0] px-4">
        <ReceiptScannerPrototype />
      </section>

      <section className="py-12 md:py-16 bg-[#EAF7EF] border-b border-[#E2E8F0] px-4">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#2fc86a]">Watch Demo</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#102A43] mt-1">See SlipSide in Action</h2>
            <p className="text-sm md:text-base text-[#64748B] max-w-xl mx-auto mt-2">
              From photographing a physical receipt to an automatic category breakdown you can actually use.
            </p>
          </div>

          <VideoPlayer
            title="SlipSide Mobile App Overview"
            description="Watch OCR receipt extraction and budget categorization live"
            demoScenario="hero"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
