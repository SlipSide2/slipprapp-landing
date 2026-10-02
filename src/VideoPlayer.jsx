import React, { useState } from 'react';
import { Play, RotateCcw, CheckCircle2, Sparkles } from 'lucide-react';

export default function VideoPlayer({ title, description, youtubeId, demoScenario = "scan" }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const demoScenarios = {
    hero: {
      steps: [
        { title: "1. Photograph Slip", detail: "Take a clear picture of printed receipt" },
        { title: "2. AI Optical OCR", detail: "Reading prices & stores automatically" },
        { title: "3. Total Reconciliation", detail: "Maths verified: R143.97 matches total" },
        { title: "4. Instant Category Report", detail: "Sorted into Dairy, Fresh Produce, Bakery" }
      ],
      videoColor: "from-[#102A43] to-[#1E3A5F]"
    },
    scan: {
      steps: [
        { title: "Camera Capture", detail: "Aligning camera frame over paper till slip" },
        { title: "Line Extractor", detail: "Detecting items: Milk 1L R35.99, Eggs 6s R42.99" },
        { title: "Correction Audit", detail: "Item auto-linked to category Dairy" }
      ],
      videoColor: "from-[#0F172A] to-[#1E293B]"
    },
    import: {
      steps: [
        { title: "Connect Gmail", detail: "One-click secure sync for order confirmations" },
        { title: "Detect Orders", detail: "Checkers Sixty60 & Woolworths Dash parsed" },
        { title: "Auto-Populate", detail: "Order items added without opening emails" }
      ],
      videoColor: "from-[#064E3B] to-[#047857]"
    },
    report: {
      steps: [
        { title: "Monthly Summary", detail: "Total spend across all stores: R3,473.13" },
        { title: "Store Comparison", detail: "Checkers vs Woolies price delta analysis" },
        { title: "Export Excel", detail: "Download CSV/Excel reports for accounting" }
      ],
      videoColor: "from-[#312E81] to-[#4338CA]"
    }
  };

  const currentScenario = demoScenarios[demoScenario] || demoScenarios.hero;

  const handlePlay = () => {
    if (youtubeId && !youtubeId.startsWith('REPLACE_WITH')) {
      setIsPlaying(true);
    } else {
      setIsPlaying(true);
      let step = 0;
      const interval = setInterval(() => {
        step += 1;
        if (step < currentScenario.steps.length) {
          setActiveStep(step);
        } else {
          clearInterval(interval);
        }
      }, 1200);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setActiveStep(0);
  };

  if (isPlaying && youtubeId && !youtubeId.startsWith('REPLACE_WITH')) {
    return (
      <div className="relative w-full aspect-video bg-[#102A43] border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}?autoplay=1&rel=0`}
          title={title || "SlipSide video"}
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video bg-gradient-to-br border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between p-6 text-white group">
      <div className={`absolute inset-0 bg-gradient-to-br ${currentScenario.videoColor} opacity-95`}></div>
      <div className="absolute inset-0 bg-[radial-gradient(#40DE7F_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>

      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-[#40DE7F] border border-[#40DE7F]/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Prototype Demo</span>
        </div>
        {isPlaying && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-black/40 px-3 py-1 rounded-full border border-white/20 transition"
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
        )}
      </div>

      <div className="relative z-10 my-auto text-center">
        {!isPlaying ? (
          <div className="flex flex-col items-center justify-center gap-4 py-4">
            <button
              onClick={handlePlay}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#40DE7F] hover:bg-[#2fc86a] text-[#102A43] flex items-center justify-center transition-all transform hover:scale-105 shadow-xl group-hover:ring-4 group-hover:ring-[#40DE7F]/30"
              aria-label={`Play interactive video: ${title || 'SlipSide demo'}`}
            >
              <Play className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1" />
            </button>
            <div>
              <p className="font-bold text-lg md:text-xl text-white">{title || "Watch SlipSide Demo"}</p>
              <p className="text-xs md:text-sm text-slate-300 max-w-sm mx-auto">{description || "Click to play animated feature simulation"}</p>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-md mx-auto space-y-3 py-2 text-left">
            <div className="text-xs uppercase font-bold tracking-widest text-[#40DE7F]">
              Live Simulation Progress
            </div>
            <div className="space-y-2">
              {currentScenario.steps.map((step, idx) => {
                const isCurrent = idx === activeStep;
                const isDone = idx < activeStep;
                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border transition-all duration-300 flex items-start gap-3 ${
                      isCurrent
                        ? 'bg-[#40DE7F]/20 border-[#40DE7F] text-white scale-102 shadow-md'
                        : isDone
                        ? 'bg-black/30 border-slate-700 text-slate-300'
                        : 'bg-black/20 border-white/5 text-slate-500'
                    }`}
                  >
                    <div className="mt-0.5">
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-[#40DE7F]" />
                      ) : (
                        <div className={`w-4 h-4 rounded-full border-2 text-[10px] flex items-center justify-center font-bold ${isCurrent ? 'border-[#40DE7F] text-[#40DE7F] animate-pulse' : 'border-slate-600'}`}>
                          {idx + 1}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{step.title}</div>
                      <div className="text-xs opacity-80">{step.detail}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-3">
        <span>SlipSide SA Grocery AI</span>
        <span>{isPlaying ? `Step ${activeStep + 1} of ${currentScenario.steps.length}` : 'Interactive Video Prototype'}</span>
      </div>
    </div>
  );
}
