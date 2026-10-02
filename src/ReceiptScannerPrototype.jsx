import React, { useState } from 'react';
import { Camera, Check, ShoppingBag, RefreshCw } from 'lucide-react';

export default function ReceiptScannerPrototype() {
  const [activeTab, setActiveTab] = useState('slip');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);

  const mockItems = [
    { name: 'FULL CREAM MILK 2L', category: 'Dairy & Eggs', price: 35.99 },
    { name: 'FREE RANGE EGGS 18S', category: 'Dairy & Eggs', price: 54.99 },
    { name: 'CHEDDAR CHEESE 400G', category: 'Dairy & Eggs', price: 64.99 },
    { name: 'BANANAS BUNCH 1KG', category: 'Fresh Produce', price: 22.99 },
    { name: 'WHOLEMEAL BREAD 700G', category: 'Bakery', price: 18.99 },
  ];

  const subtotal = mockItems.reduce((acc, item) => acc + item.price, 0);

  const startScan = () => {
    setIsScanning(true);
    setScanStep(1);
    setTimeout(() => {
      setScanStep(2);
      setIsScanning(false);
    }, 1800);
  };

  const resetScan = () => {
    setScanStep(0);
    setIsScanning(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8 bg-white border border-[#E2E8F0] rounded-3xl p-6 md:p-8 shadow-xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-6 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#40DE7F] bg-[#EAF7EF] px-3 py-1 rounded-full">
            Live Web Prototype
          </span>
          <h3 className="text-2xl font-extrabold text-[#102A43] mt-2">
            Try the SlipSide Receipt & Order Engine
          </h3>
          <p className="text-sm text-[#64748B]">
            Simulate how our AI reconciles till slips and Gmail orders rand-by-rand.
          </p>
        </div>

        <div className="flex bg-[#F5FBF7] p-1.5 rounded-xl border border-[#E2E8F0] self-stretch md:self-auto">
          <button
            onClick={() => { setActiveTab('slip'); resetScan(); }}
            className={`flex-1 md:flex-none px-4 py-2 text-sm font-semibold rounded-lg transition ${
              activeTab === 'slip' ? 'bg-[#102A43] text-white shadow-sm' : 'text-[#64748B] hover:text-[#102A43]'
            }`}
          >
            Till Slip Scan
          </button>
          <button
            onClick={() => { setActiveTab('email'); resetScan(); }}
            className={`flex-1 md:flex-none px-4 py-2 text-sm font-semibold rounded-lg transition ${
              activeTab === 'email' ? 'bg-[#102A43] text-white shadow-sm' : 'text-[#64748B] hover:text-[#102A43]'
            }`}
          >
            Gmail Import (Sixty60)
          </button>
        </div>
      </div>

      {activeTab === 'slip' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-xs bg-[#FAFAF9] border border-[#E2E8F0] rounded-lg p-5 font-mono text-xs shadow-md text-[#1A1A1A] overflow-hidden">
              <div className="text-center pb-4 border-b border-dashed border-zinc-300">
                <p className="font-bold text-sm tracking-wider">CHECKERS HYPER</p>
                <p className="text-[10px] text-zinc-500">SANDTON CITY · 011-555-0199</p>
                <p className="text-[10px] text-zinc-400 mt-1">TAX INVOICE · VAT # 4100123456</p>
              </div>

              {scanStep === 1 && (
                <div className="absolute left-0 right-0 h-10 bg-gradient-to-b from-[#40DE7F]/0 via-[#40DE7F]/30 to-[#40DE7F]/0 animate-sweep z-20 pointer-events-none"></div>
              )}

              <div className="py-4 space-y-2.5">
                {mockItems.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-zinc-700">
                    <span className="truncate pr-2">{item.name}</span>
                    <span className="font-bold">R{item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-dashed border-zinc-300 space-y-1">
                <div className="flex justify-between font-bold text-sm text-[#102A43]">
                  <span>TOTAL DUE</span>
                  <span>R{subtotal.toFixed(2)}</span>
                </div>
                <div className="text-[10px] text-zinc-400 text-center pt-2">
                  ITEMS COUNT: {mockItems.length} · MASTERCARD ***4829
                </div>
              </div>
            </div>

            <div className="mt-5 w-full max-w-xs flex gap-2">
              {scanStep === 0 && (
                <button
                  onClick={startScan}
                  className="w-full py-3 bg-[#40DE7F] hover:bg-[#2fc86a] text-[#102A43] font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition shadow-md"
                >
                  <Camera className="w-4 h-4" /> Scan This Slip
                </button>
              )}
              {scanStep === 1 && (
                <button disabled className="w-full py-3 bg-[#EAF7EF] text-[#102A43] font-bold text-sm rounded-xl flex items-center justify-center gap-2 animate-pulse">
                  <RefreshCw className="w-4 h-4 animate-spin text-[#2fc86a]" /> AI Processing OCR...
                </button>
              )}
              {scanStep === 2 && (
                <button
                  onClick={resetScan}
                  className="w-full py-3 bg-[#102A43] text-white hover:bg-slate-800 font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition"
                >
                  <RefreshCw className="w-4 h-4" /> Scan Another
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#F5FBF7] border border-[#E2E8F0] rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-extrabold text-[#102A43] text-base flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#40DE7F]" />
                Extracted Line Items
              </h4>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                scanStep === 2 ? 'bg-[#40DE7F]/20 text-[#102A43]' : 'bg-slate-200 text-slate-600'
              }`}>
                {scanStep === 2 ? 'Maths Reconciled' : 'Awaiting Scan'}
              </span>
            </div>

            {scanStep === 0 && (
              <div className="py-12 text-center text-slate-500 space-y-2">
                <Camera className="w-10 h-10 mx-auto text-slate-300" />
                <p className="text-sm font-medium">Click "Scan This Slip" to test SlipSide's AI parsing.</p>
              </div>
            )}

            {scanStep === 1 && (
              <div className="py-12 text-center space-y-3">
                <div className="w-8 h-8 border-4 border-[#40DE7F] border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-sm font-semibold text-[#102A43]">Extracting prices & checking total reconciliation...</p>
              </div>
            )}

            {scanStep === 2 && (
              <div className="space-y-3 animate-reveal">
                {mockItems.map((item, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-[#E2E8F0] flex items-center justify-between text-xs md:text-sm shadow-sm">
                    <div>
                      <p className="font-bold text-[#102A43]">{item.name}</p>
                      <span className="text-[11px] font-medium text-[#2fc86a] bg-[#EAF7EF] px-2 py-0.5 rounded-md inline-block mt-0.5">
                        {item.category}
                      </span>
                    </div>
                    <div className="text-right font-extrabold text-[#102A43]">
                      R{item.price.toFixed(2)}
                    </div>
                  </div>
                ))}

                <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-lg">
                    <Check className="w-4 h-4" /> Total R{subtotal.toFixed(2)} Verified
                  </div>
                  <span className="text-xs text-slate-500">5 items categorized</span>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-[#F5FBF7] border border-[#E2E8F0] rounded-2xl p-6 text-center space-y-4">
          <div className="w-12 h-12 bg-[#EAF7EF] text-[#2fc86a] rounded-2xl flex items-center justify-center mx-auto text-xl font-bold">
            📧
          </div>
          <h4 className="text-xl font-extrabold text-[#102A43]">
            Automatic Sixty60, Dash & asap! Order Sync
          </h4>
          <p className="text-sm text-[#64748B] max-w-md mx-auto">
            Connect your Gmail once. SlipSide securely filters only grocery receipts and automatically creates itemized logs without manual uploads.
          </p>

          <div className="max-w-md mx-auto bg-white border border-[#E2E8F0] rounded-2xl p-4 text-left shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2">
              <span className="text-xs font-bold text-[#102A43]">Connected Email</span>
              <span className="text-xs text-[#2fc86a] font-semibold bg-[#EAF7EF] px-2 py-0.5 rounded">Active Sync</span>
            </div>
            <p className="text-xs text-slate-600">user@gmail.com</p>

            <div className="bg-[#EAF7EF] p-3 rounded-xl border border-[#40DE7F]/30 text-xs text-[#102A43] flex items-center justify-between">
              <div>
                <p className="font-bold">Checkers Sixty60 Order #94821</p>
                <p className="text-[11px] text-slate-500">12 items · R759.26</p>
              </div>
              <span className="bg-[#40DE7F] text-[#102A43] font-bold px-2 py-1 rounded-md text-[10px]">
                Imported
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
