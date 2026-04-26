import React from 'react';

/**
 * UnclaimedProperty AI: Landing Page
 * 
 * Pain Point: State governments are holding $70 Billion in forgotten bank accounts, uncashed paychecks, and utility deposits.
 * Solution: AI scrapes all 50 state treasury databases simultaneously and generates the exact claim forms.
 */

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-amber-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
      
      {/* GEO/AGO Injection Target */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto border-b border-amber-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center text-white font-black">U</div>
          <span className="text-xl font-black tracking-tighter">UnclaimedProperty AI</span>
        </div>
        <button className="text-sm font-bold text-amber-700 hover:text-black transition">Track Claim</button>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-32 text-center">
        
        <div className="inline-block bg-amber-200 text-amber-900 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-8 border border-amber-300">
          ESCHEATMENT RECOVERY
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.05] mb-8 text-slate-900">
          The government has your money. <span className="text-amber-600 underline decoration-amber-300">Take it back.</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          State treasuries are hoarding $70 Billion in forgotten bank accounts, uncashed paychecks, and old deposits. Our AI parallel-scrapes all 50 states to find your hidden money and auto-generates the legal unlock packet.
        </p>

        <button className="bg-amber-500 text-white px-12 py-5 rounded-xl font-black text-xl hover:bg-amber-600 transition shadow-[0_10px_40px_rgba(245,158,11,0.3)] w-full sm:w-auto">
          Search National Database ($29)
        </button>
        
        <p className="text-sm text-slate-500 mt-6 font-medium">
          Powered by live connections to 50 State Controller and Treasury APIs.
        </p>
      </main>

      <section className="bg-white border-y border-slate-200 py-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-left">
          <div>
            <div className="text-4xl mb-4">🏦</div>
            <h2 className="text-lg font-black text-slate-900 mb-3">Forgotten Accounts</h2>
            <p className="text-slate-600 text-sm leading-relaxed">Did you move and forget to close a checking account? After 3 years, the bank surrenders it to the state. We find it.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">💵</div>
            <h2 className="text-lg font-black text-slate-900 mb-3">Uncashed Checks</h2>
            <p className="text-slate-600 text-sm leading-relaxed">Old employers, insurance companies, and utility providers routinely send checks to the wrong address. They sit in escrow until claimed.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">✍️</div>
            <h2 className="text-lg font-black text-slate-900 mb-3">Auto-Notary Packets</h2>
            <p className="text-slate-600 text-sm leading-relaxed">State claim forms are notoriously complex. We use AI to fill them out perfectly, ready for you to sign and mail.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
