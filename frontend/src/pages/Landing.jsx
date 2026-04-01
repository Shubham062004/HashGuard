import React from 'react';

export default function Landing() {
  return (
    <div className="bg-surface text-on-surface antialiased">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-[0_20px_40px_-10px_rgba(53,37,205,0.08)]">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="text-xl font-extrabold tracking-tighter text-slate-900 dark:text-white">HashGuard</div>
          <div className="hidden md:flex items-center gap-8 font-sans antialiased text-sm font-medium tracking-tight">
            <a className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-colors" href="#features">Features</a>
            <a className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-colors" href="#how-it-works">How it works</a>
            <a className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-colors" href="#about">About</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-indigo-600 transition-all scale-95 active:scale-90">Login</button>
            <button className="px-6 py-2.5 fluid-gradient text-white text-sm font-bold rounded-lg shadow-sm hover:opacity-90 transition-all scale-95 active:scale-90">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-bold text-xs uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now with SHA-256 Protocol
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-6">
              Secure &amp; <span className="text-primary">Tamper-Proof</span> Assignment Submission
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
              Verify your work with SHA-256 hashing and immutable timestamping. Every submission is a prestigious document held within a secure, cryptographic vault.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 fluid-gradient text-white font-bold rounded-lg text-lg shadow-lg hover:shadow-indigo-500/20 transition-all">Get Started Today</button>
              <button className="px-8 py-4 bg-surface-container-highest text-primary font-bold rounded-lg text-lg hover:bg-surface-container-high transition-all">Watch Demo</button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-full aspect-square max-w-lg mx-auto bg-surface-container rounded-3xl overflow-hidden shadow-2xl relative">
              <img className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Futuristic digital safe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABGs1nyBxsVg87wLk98OOMaGEOINQZlxcbvBHoinreD4DuiZKI0okfEdKVOmEYsVSykvlE-nIo4B1dtKL_8Fx5yq1G7G2lBIR1EfLUw6LRlvKOF8N8litbENkZMEHyOggOk_wAd1Y3t2jMk9w0vNtEOKW8b98pxnj8Jh6IKaMp7TpJ33z_eXk7OmVVBZew0Y0t0FQHWfifMfZJNYnnWt1Y1Rcnes_chIdvMN1STavglwiHwa29yq1pmBWaBgB8FG2EP8MWnd79PXc" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="bg-white/90 backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-white/20 max-w-xs">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">verified_user</span>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Status</div>
                      <div className="text-sm font-extrabold text-primary">Immutable Seal Active</div>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded-lg font-mono text-[10px] break-all text-slate-500">
                      48656c6c6f20576f726c6421205348412d32353620456e6372797074696f6e205374616e64617264
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 bg-surface-container-low" id="features">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-4">Unshakeable Security Infrastructure</h2>
            <div className="h-1 w-20 fluid-gradient rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Feature */}
            <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <div className="w-14 h-14 fluid-gradient rounded-xl flex items-center justify-center text-white mb-6">
                  <span className="material-symbols-outlined text-3xl">security</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Secure Upload</h3>
                <p className="text-on-surface-variant leading-relaxed">We utilize industry-standard SHA-256 hashing algorithms to generate a unique digital fingerprint for every file. This ensures that even the smallest change to your submission is instantly detectable.</p>
              </div>
              <div className="w-full md:w-1/3 aspect-square bg-surface-container rounded-lg overflow-hidden">
                <img className="w-full h-full object-cover" alt="Abstract glowing circuit board" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA24OdkQbxcPLjr7L11-MYSWjSaooBGc4PPSn2hTkTz3S3g0AY8Igb20Jzq4ywgBBVj-v0e1BSGWO3rd6VT-4sxUXnt7ig_xq4bA4HE7veNmMjFRwuWJdkky6W3qxiGKjTFWlTJj-t6vlFnRJTMnPmYzyw2qE2sqf3WaohbZUu2A97NFNjS10CoKAMO6YdBLBcF7mQoRnmC9_pjtpeVrm1UygN4eLMWHl8DobsM2C-CgcDyXpcUvEkyWm8vI3NbRNQrnmYALA2g4Rk" />
              </div>
            </div>
            
            {/* Small Feature */}
            <div className="md:col-span-4 bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-tertiary-container/10 rounded-xl flex items-center justify-center text-tertiary mb-6">
                <span className="material-symbols-outlined text-2xl">emergency_home</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Tamper Detection</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Instant alerts for any modification attempt. Our system continuously monitors archive integrity to prevent silent data corruption or unauthorized edits.</p>
            </div>
            
            {/* Small Feature */}
            <div className="md:col-span-4 bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-2xl">history_edu</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Timestamp Verification</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Every document is stamped with a cryptographically secure, immutable timestamp from a globally synchronized atomic clock source.</p>
            </div>
            
            {/* Medium Feature */}
            <div className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-8">
              <div className="flex-1">
                <div className="w-12 h-12 bg-secondary-container/20 rounded-xl flex items-center justify-center text-secondary mb-6">
                  <span className="material-symbols-outlined text-2xl">cloud_done</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Cloud Storage</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Safe and redundant data archiving across multiple geographically isolated servers. Your academic history is preserved with enterprise-grade durability.</p>
              </div>
              <div className="hidden lg:block w-48 h-32 bg-surface-container rounded-lg overflow-hidden">
                <img className="w-full h-full object-cover" alt="Earth from space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1LtmOJphcppLB88LadPnvPQFR69amP3qMLFVIcunxtsFajBEqHYjNGBzkuQNpUSR_pGFZYNTeI88xiMi7xaBpSW1BxkaNaVqwi3ExTZPvkcxXlW8wXjiv16vFj3MD2KE22xjS16rOiP2tInEmmkHJdITicyt5LRfZv2pGiw-u5BxOP8Ap2IczvtswGVp-bDUEQ3IWWaFKJ-xTDDYdET_4Uxg1E_s69ti7WPzNcgTszxM0Rq-wXxl2kdLtc-8V04CxiQK4QhDPWqE" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-surface overflow-hidden" id="how-it-works">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">The Archival Process</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">A seamless four-step journey from local file to immutable digital proof.</p>
          </div>
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-surface-container transform -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-primary font-bold text-2xl mb-6 outline outline-8 outline-surface">1</div>
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm w-full">
                  <span className="material-symbols-outlined text-primary mb-2">upload_file</span>
                  <h4 className="font-bold text-lg mb-2">Upload</h4>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold">Step One</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-primary font-bold text-2xl mb-6 outline outline-8 outline-surface">2</div>
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm w-full">
                  <span className="material-symbols-outlined text-primary mb-2">fingerprint</span>
                  <h4 className="font-bold text-lg mb-2">Hash</h4>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold">Step Two</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-primary font-bold text-2xl mb-6 outline outline-8 outline-surface">3</div>
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm w-full">
                  <span className="material-symbols-outlined text-primary mb-2">storage</span>
                  <h4 className="font-bold text-lg mb-2">Store</h4>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold">Step Three</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-primary font-bold text-2xl mb-6 outline outline-8 outline-surface">4</div>
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm w-full border-2 border-primary/20">
                  <span className="material-symbols-outlined text-primary mb-2">task_alt</span>
                  <h4 className="font-bold text-lg mb-2">Verify</h4>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold">Step Four</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Proof Seal Component */}
      <section className="py-20 bg-primary overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10 text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-8 italic">"In Hashing We Trust"</h2>
          <div className="inline-block glass-nav bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl">
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary shadow-inner">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-indigo-100 mb-2">Identity Signature</p>
                <p className="font-mono text-sm md:text-base opacity-80 break-all bg-black/20 p-4 rounded-lg">
                    SHA256: 7d1a7114b09c855a024e8e19574c6d669e4f3a7a920c822e
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="bg-surface-container-lowest p-12 md:p-20 rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(53,37,205,0.12)]">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Start submitting securely today</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-10">Join thousands of students and institutions preserving academic integrity through the immutable archive.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 fluid-gradient text-white font-extrabold rounded-xl text-lg hover:scale-[1.02] transition-transform shadow-lg">Create Free Account</button>
              <button className="px-10 py-5 bg-white text-on-surface border border-surface-container font-extrabold rounded-xl text-lg hover:bg-surface-container transition-all">Contact Institutional Sales</button>
            </div>
            <p className="mt-8 text-xs text-on-surface-variant uppercase tracking-widest font-bold">No credit card required for individual students</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200/15 dark:border-slate-800/15 bg-slate-50 dark:bg-slate-900">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto gap-6 font-sans text-xs uppercase tracking-widest font-semibold">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-lg font-bold text-slate-900 dark:text-white">HashGuard</div>
            <p className="text-slate-500 dark:text-slate-400 normal-case tracking-normal font-normal">© 2024 HashGuard. The Immutable Archive. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 transition-colors opacity-80 hover:opacity-100" href="#">Security Whitepaper</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 transition-colors opacity-80 hover:opacity-100" href="#">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
