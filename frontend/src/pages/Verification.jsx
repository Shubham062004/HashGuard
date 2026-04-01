import React from 'react';
import { Link } from 'react-router-dom';

const Verification = () => {
    return (
        <div className="bg-background font-body text-on-surface antialiased min-h-screen">
            {/* Top Navigation Bar */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md flex justify-between items-center px-8 h-16 shadow-[0_20px_40px_-10px_rgba(53,37,205,0.08)]">
                <div className="flex items-center gap-8">
                    <Link to="/" className="text-xl font-extrabold tracking-tighter text-indigo-700">HashGuard</Link>
                    <div className="hidden md:flex items-center gap-6">
                        <Link className="text-slate-500 hover:text-indigo-500 transition-colors font-inter tracking-tight" to="/dashboard/student">Dashboard</Link>
                        <Link className="text-indigo-700 font-bold border-b-2 border-indigo-600 transition-colors font-inter tracking-tight" to="/verification">Verification</Link>
                        <Link className="text-slate-500 hover:text-indigo-500 transition-colors font-inter tracking-tight" to="/dashboard/student/submissions">Submissions</Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="p-2 text-slate-500 hover:bg-indigo-50/50 rounded-full transition-all">
                        <span className="material-symbols-outlined">history</span>
                    </button>
                    <button className="p-2 text-slate-500 hover:bg-indigo-50/50 rounded-full transition-all">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <div className="w-8 h-8 rounded-full bg-surface-container overflow-hidden ring-2 ring-indigo-500/10">
                        <img alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkfqKJ7-_3xL2YYFZqBNmaJRIpLcTVlPL1n44Q6yvvx-ob-cUsBOwruZka7cwiJc3kVt3lmcJeLgGNuyyG_EHUwDHZos8rTg-yO14fujzQYh-x22Puw7ik1py13obzyXM7xhPJOywauPCHpr7H2PlqlCxlKIAW3mMnu8CodQzTh1Ht8wDEtonwFMU_0ILm_y_lm6a_deSVAn9pgrq7BXRvRldQ7cLvSbcqcvrfFjpccphtuuUpyzY9Xtq53W6UB6VjI9T2rzrbHSQ" />
                    </div>
                </div>
            </nav>

            <main className="pt-24 pb-12 px-6 lg:px-12 max-w-7xl mx-auto min-h-screen">
                {/* Header Section */}
                <header className="mb-12">
                    <h1 className="text-[3.5rem] font-extrabold tracking-tighter text-on-surface leading-none mb-4">Verification Vault</h1>
                    <p className="text-on-surface-variant max-w-2xl text-lg font-medium">Compare your local assets against our tamper-proof cryptographic ledger to ensure record integrity.</p>
                </header>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Left Side: Upload & Process */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Verification Input Card */}
                        <section className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_20px_40px_-10px_rgba(53,37,205,0.08)] border border-transparent">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-xl font-bold tracking-tight">Direct Asset Verification</h2>
                                    <p className="text-sm text-on-surface-variant font-medium">Upload the file to generate its current cryptographic seal.</p>
                                </div>
                                <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                            </div>
                            <div className="border-2 border-dashed border-outline-variant/30 rounded-xl p-12 bg-surface-container-low/50 flex flex-col items-center justify-center text-center group hover:bg-surface-container-low transition-all cursor-pointer">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
                                </div>
                                <p className="font-semibold text-on-surface mb-1">Drop the file here or <span className="text-primary underline">browse</span></p>
                                <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Maximum file size: 256MB</p>
                            </div>
                            <div className="mt-10 space-y-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Existing Transaction ID</label>
                                    <input className="w-full bg-surface-container-low border-none rounded-lg px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary/20 transition-all font-mono text-sm outline-none" placeholder="TX_88294721_HASH_ARCHIVE" type="text" />
                                </div>
                                <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-lg shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98] tracking-widest text-sm uppercase">
                                    InitiATE VERIFICATION SEAL
                                </button>
                            </div>
                        </section>

                        {/* Comparison Detail */}
                        <section className="bg-surface-container-low rounded-xl p-8">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-6">Cryptographic Signature Comparison</h3>
                            <div className="space-y-4">
                                {/* Row 1 */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-surface-container-lowest rounded-lg shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary">database</span>
                                        <span className="font-semibold text-sm">Original Ledger Hash</span>
                                    </div>
                                    <code className="text-[10px] md:text-xs font-mono bg-surface-container p-2 rounded text-indigo-700 font-bold overflow-hidden">SHA256: 4f18...9b32...88cc...10ff</code>
                                </div>
                                {/* Row 2 */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-surface-container-lowest rounded-lg shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-tertiary">fingerprint</span>
                                        <span className="font-semibold text-sm">Active Asset Hash</span>
                                    </div>
                                    <code className="text-[10px] md:text-xs font-mono bg-surface-container p-2 rounded text-indigo-700 font-bold overflow-hidden">SHA256: 4f18...9b32...88cc...10ff</code>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Side: Status Indicators */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Verification Status Card */}
                        <div className="bg-primary/5 rounded-xl p-10 flex flex-col items-center text-center relative overflow-hidden ring-1 ring-primary/20">
                            {/* Background Glow */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[80px] rounded-full"></div>
                            <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(53,37,205,0.3)] relative z-10">
                                <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                            </div>
                            <span className="bg-primary text-white text-[0.65rem] font-black uppercase tracking-[0.2em] px-4 py-1 rounded-full mb-4 relative z-10">Immutable Identity Confirmed</span>
                            <h2 className="text-4xl font-black tracking-tighter text-on-surface mb-2 relative z-10">VALID SEAL</h2>
                            <p className="text-on-surface-variant text-sm mb-8 px-4 font-medium relative z-10">The submitted file matches the archive hash exactly. Integrity has been maintained with zero tampering detected.</p>
                            <div className="w-full bg-white/60 p-4 rounded-lg flex items-center justify-between backdrop-blur-sm relative z-10 border border-white/40">
                                <div className="text-left">
                                    <p className="text-[0.6rem] uppercase font-bold text-on-surface-variant">Timestamp</p>
                                    <p className="text-xs font-mono font-bold">2023-11-24 14:02:11 UTC</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[0.6rem] uppercase font-bold text-on-surface-variant">Node ID</p>
                                    <p className="text-xs font-mono font-bold">#992-ARC</p>
                                </div>
                            </div>
                        </div>

                        {/* Certificate of Authenticity */}
                        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_-10px_rgba(53,37,205,0.08)] relative border border-transparent">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">qr_code_2</span>
                                </div>
                                <h4 className="font-bold tracking-tight text-on-surface">Certificate of Authenticity</h4>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-2 border-b border-surface-container">
                                    <span className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Author</span>
                                    <span className="text-xs font-bold text-on-surface">Dr. Alistair Vance</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-surface-container">
                                    <span className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Archive Tier</span>
                                    <span className="text-xs font-bold text-primary">Gold / Immutable</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-surface-container">
                                    <span className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Replications</span>
                                    <span className="text-xs font-bold text-on-surface">12 Geodes</span>
                                </div>
                            </div>
                            <button className="mt-8 w-full bg-surface-container-low text-primary font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-surface-container transition-all active:scale-[0.98] text-sm uppercase tracking-widest">
                                <span className="material-symbols-outlined text-lg">download</span>
                                Download Seal Report
                            </button>
                        </div>

                        {/* Alternative Result (Failed Attempt) */}
                        <div className="bg-error-container/20 border border-error/5 p-6 rounded-xl flex items-start gap-4">
                            <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>report</span>
                            <div>
                                <h5 className="text-sm font-bold text-error uppercase tracking-tight">Previous Attempt: FAILED</h5>
                                <p className="text-xs text-on-error-container/80 mt-1 font-medium leading-relaxed">Archive ID #TX-449 was flagged for a 0.02% bit-mismatch in the header metadata.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* System Background Texture Placeholder */}
                <div className="fixed bottom-0 right-0 p-8 opacity-5 pointer-events-none select-none -z-10">
                    <h2 className="text-9xl font-black tracking-tighter text-primary">VERIFIED</h2>
                </div>
            </main>

            {/* Side Navigation Placeholder (Desktop only) */}
            <aside className="hidden xl:flex fixed left-0 top-16 h-[calc(100vh-64px)] w-20 flex-col py-8 items-center gap-8 bg-slate-50 border-r border-slate-100 z-40 transition-all hover:w-64 group overflow-hidden">
                <Link className="flex items-center gap-4 w-full px-6 py-3" to="/dashboard/student">
                    <span className="material-symbols-outlined text-slate-500 group-hover:text-indigo-600 transition-colors">dashboard</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity font-semibold whitespace-nowrap text-on-surface">Overview</span>
                </Link>
                <Link className="flex items-center gap-4 w-full px-6 bg-indigo-50 text-indigo-700 py-3 rounded-r-full" to="/verification">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity font-bold whitespace-nowrap">Verification</span>
                </Link>
                <Link className="flex items-center gap-4 w-full px-6 py-3" to="/dashboard/student/submissions">
                    <span className="material-symbols-outlined text-slate-500 group-hover:text-indigo-600 transition-colors">description</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity font-semibold whitespace-nowrap text-on-surface">Submissions</span>
                </Link>
                <Link className="flex items-center gap-4 w-full px-6 py-3" to="#">
                    <span className="material-symbols-outlined text-slate-500 group-hover:text-indigo-600 transition-colors">bar_chart</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity font-semibold whitespace-nowrap text-on-surface">Analytics</span>
                </Link>
                <div className="mt-auto flex flex-col gap-6 w-full items-center">
                    <Link className="flex items-center gap-4 w-full px-6 py-3" to="/dashboard/profile">
                        <span className="material-symbols-outlined text-slate-500 group-hover:text-indigo-600 transition-colors">settings</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity font-semibold whitespace-nowrap text-on-surface">Settings</span>
                    </Link>
                    <Link className="flex items-center gap-4 w-full px-6 py-3 text-error" to="/login">
                        <span className="material-symbols-outlined">logout</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity font-semibold whitespace-nowrap">Sign Out</span>
                    </Link>
                </div>
            </aside>
        </div>
    );
};

export default Verification;
