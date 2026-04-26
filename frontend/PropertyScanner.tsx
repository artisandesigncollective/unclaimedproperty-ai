import React, { useState } from 'react';

/**
 * UnclaimedProperty AI: National Search UI
 * 
 * Pain Point: Searching 50 separate state treasury websites manually takes hours.
 * Solution: User inputs their name and past addresses once. We simulate parallel scraping.
 */

export const PropertyScanner = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [scanActive, setScanActive] = useState(false);
  const [foundFunds, setFoundFunds] = useState<number | null>(null);

  const handleScan = () => {
    if (!name || !address) return;
    setScanActive(true);
    
    // Simulate parallel 50-state scraping
    setTimeout(() => {
      setScanActive(false);
      setFoundFunds(1420); // Found $1,420
    }, 4000);
  };

  const handleSubmit = () => {
    alert('Redirecting to Stripe ($29 flat fee) to unlock the state claim forms...');
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        
        <h2 className="text-3xl font-black text-slate-900">National Escheatment Search</h2>
        <p className="text-slate-600">Enter your legal name and any state you have lived in. We will simultaneously query all 50 State Controller databases.</p>

        {!scanActive && foundFunds === null && (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Legal First & Last Name</label>
              <input 
                type="text" 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 outline-none focus:border-amber-500"
                placeholder="e.g., John Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Previous States / Cities Lived In</label>
              <input 
                type="text" 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 outline-none focus:border-amber-500"
                placeholder="e.g., California, Austin TX"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <button 
              onClick={handleScan}
              className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-black transition text-lg mt-4"
            >
              Initiate 50-State Sweep
            </button>
          </div>
        )}

        {scanActive && (
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-6"></div>
            <p className="text-slate-500 font-mono text-sm animate-pulse">Querying State Treasury APIs...</p>
            <p className="text-slate-400 text-xs mt-2">Checking CA Controller's Office... Found 1 Match.</p>
            <p className="text-slate-400 text-xs mt-1">Checking TX Comptroller of Public Accounts... No Matches.</p>
          </div>
        )}

        {foundFunds !== null && (
          <div className="bg-amber-100 p-8 rounded-2xl border border-amber-300">
            <h3 className="text-xl font-bold text-amber-900 mb-2">Unclaimed Property Found!</h3>
            <p className="text-5xl font-black text-amber-700 mb-6">${foundFunds}.00</p>
            <div className="bg-white/50 p-4 rounded text-left mb-8 border border-amber-200">
               <p className="text-sm font-bold text-amber-900 mb-2">Sources Detected:</p>
               <ul className="text-xs text-amber-800 list-disc pl-4 space-y-1">
                 <li>California State Controller: "Uncashed Payroll Check" ($820)</li>
                 <li>New York Office of Unclaimed Funds: "Utility Deposit" ($600)</li>
               </ul>
            </div>
            
            <button 
              onClick={handleSubmit}
              className="w-full bg-amber-500 text-white font-black py-4 rounded-xl hover:bg-amber-600 transition text-lg shadow-lg shadow-amber-500/20"
            >
              Generate Unlock Packet ($29)
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default PropertyScanner;
