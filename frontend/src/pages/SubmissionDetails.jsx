import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SubmissionDetails = () => {
    const { id } = useParams();

    return (
        <div className="bg-surface font-body text-on-surface antialiased min-h-screen">
            {/* Sidebar Navigation */}
            <aside className="fixed left-0 top-0 h-screen w-64 z-40 bg-slate-50 flex flex-col py-8 px-4 font-sans text-sm font-semibold tracking-tight shadow-sm">
                <div className="mb-10 flex items-center gap-3 px-2">
                    <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-white shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                    </div>
                    <div>
                        <h1 className="text-lg font-extrabold tracking-tighter text-slate-900 leading-none">HashGuard</h1>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">The Immutable Archive</p>
                    </div>
                </div>
                <div className="space-y-1">
                    <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-100 transition-all hover:translate-x-1 duration-200" to="/dashboard/student">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span>Dashboard</span>
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-100 transition-all hover:translate-x-1 duration-200" to="/dashboard/student/upload">
                        <span className="material-symbols-outlined">cloud_upload</span>
                        <span>Upload</span>
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-600 bg-indigo-50 border-r-4 border-indigo-600 active:scale-95 transition-all" to="/dashboard/student/submissions">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
                        <span>Submissions</span>
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-100 transition-all hover:translate-x-1 duration-200" to="/dashboard/profile">
                        <span className="material-symbols-outlined">person</span>
                        <span>Profile</span>
                    </Link>
                </div>
                <div className="mt-auto px-2">
                    <Link to="/dashboard/student/upload" className="w-full py-4 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white font-bold text-sm shadow-xl shadow-primary/20 hover:opacity-90 transition-all active:scale-95 flex items-center justify-center">
                        New Submission
                    </Link>
                </div>
            </aside>

            {/* Main Content Canvas */}
            <main className="ml-64 min-h-screen p-10">
                {/* Top Context Header */}
                <header className="flex justify-between items-end mb-12">
                    <div>
                        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-2">
                            <span className="material-symbols-outlined text-sm">verified_user</span>
                            Immutable Record
                        </div>
                        <h2 className="text-4xl font-extrabold tracking-tighter text-on-surface">Submission Details</h2>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-6 py-2.5 rounded-lg bg-surface-container-highest text-primary font-bold text-sm transition-all hover:bg-surface-container-high active:scale-95 flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">sync</span>
                            Verify again
                        </button>
                        <button className="px-6 py-2.5 rounded-lg bg-gradient-to-br from-primary to-primary-container text-white font-bold text-sm shadow-lg shadow-primary/10 transition-all hover:opacity-90 active:scale-95 flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">download</span>
                            Download file
                        </button>
                    </div>
                </header>

                {/* Bento Layout for Content */}
                <div className="grid grid-cols-12 gap-8 items-start">
                    {/* Left: File Preview Section */}
                    <div className="col-span-12 lg:col-span-7 space-y-8">
                        <section className="bg-surface-container-lowest rounded-xl p-1 shadow-[0_20px_40px_-10px_rgba(53,37,205,0.08)] overflow-hidden border border-transparent">
                            <div className="bg-surface-container-low rounded-lg aspect-[3/4] flex flex-col items-center justify-center p-12 text-center relative overflow-hidden group">
                                {/* Abstract Background for Visual Interest */}
                                <div className="absolute inset-0 opacity-10 pointer-events-none">
                                    <img alt="abstract background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiJle2TSWWiFXQuyK14IPIc4krG4E4qG6cZ5Ja5hM9WtvILyH12owZYRDSyF8Lt4YEdbrDKFpICC20qOZi96meJeiHzmzUps3QrnGAxY5-t-RisbZKypo0LNiaDJLFhO6m5kZ1ciLN2e9lTQGORJl3G6MSmYmZsRGsb9VFMOzaYaG-5xgzsCEe7OpSsgYdimlZjFlPlFI5lfgkYmXVE4PyowpSYCB_jJXq3vV9O_57sv_22UzVody6I1h4ZoVBBPmQ3tAo_F5KrCw" />
                                </div>
                                <div className="relative z-10 transition-transform duration-500 group-hover:scale-105">
                                    <div className="w-32 h-40 bg-white shadow-2xl rounded-sm mx-auto mb-6 flex flex-col items-center justify-center border-t-8 border-primary relative">
                                        <span className="material-symbols-outlined text-6xl text-primary mb-2">description</span>
                                        <span className="text-[10px] font-black text-primary bg-primary/10 px-2 py-0.5 rounded">PDF</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-on-surface mb-2">Final_Thesis_v1.pdf</h3>
                                    <p className="text-on-surface-variant text-sm max-w-xs mx-auto">Full cryptographic document verification active. This document is archived in the immutable ledger.</p>
                                </div>
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white/40">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                                            <img alt="Alex Johnson avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALaiHsGpnxd6A5Bh_gKvirOnmk4wVae9B4dtrUx9oyjTM0QGUiAS67WAjIE1Q87XspbJLUiahx5mn3xLrP6WYMgQ4w5aopm28I1DdGpY9cWXxqsH3Kk9XdiyBxmIhoxOkXiERap0fWqQrh5c2grlp4ycgV0RWXufNH3NA4ZWxuUCt1S4fxYfWhtkqca0ZGc7D11kYpgTC-vVk1ET1inxLPcChhqZUaJyuLYHtYfQu9uKjhmyntwpDXd8OTnFQHamiqx0uvDkmBHXA" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[10px] uppercase tracking-tighter font-bold text-slate-500">Uploaded by</p>
                                            <p className="text-xs font-bold text-on-surface">Alex Johnson</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] uppercase tracking-tighter font-bold text-slate-500">Timestamp</p>
                                        <p className="text-xs font-bold text-on-surface">Oct 24, 2024 • 14:32:01</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right: Metadata & Verification */}
                    <div className="col-span-12 lg:col-span-5 space-y-8">
                        {/* Proof Seal Gradient Section */}
                        <section className="bg-gradient-to-br from-primary/5 to-indigo-600/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 relative overflow-hidden">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
                            <div className="flex items-center justify-between mb-8">
                                <div className="px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                                    Verified Record
                                </div>
                                <span className="material-symbols-outlined text-primary/40 text-4xl">verified</span>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/60 mb-3 block">Cryptographic SHA-256 Hash</label>
                                    <div className="bg-white/60 p-5 rounded-xl border border-primary/5 font-mono text-sm break-all leading-relaxed text-indigo-900 group relative">
                                        e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                                        <button className="absolute top-4 right-4 text-primary opacity-40 hover:opacity-100 transition-opacity p-2 hover:bg-primary/5 rounded-lg">
                                            <span className="material-symbols-outlined text-lg">content_copy</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/40 p-4 rounded-xl">
                                        <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1 block">Protocol</label>
                                        <p className="text-sm font-bold text-on-surface">V-SEC 2.0</p>
                                    </div>
                                    <div className="bg-white/40 p-4 rounded-xl">
                                        <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1 block">Encryption</label>
                                        <p className="text-sm font-bold text-on-surface">AES-256-GCM</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* System Metadata */}
                        <section className="bg-surface-container-low rounded-2xl p-8">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Archive Metadata</h4>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-slate-500">File Signature Status</span>
                                    <span className="text-sm font-bold text-primary">Authentic</span>
                                </div>
                                <div className="w-full h-px bg-slate-200/50"></div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-slate-500">IPFS CID</span>
                                    <span className="text-xs font-mono text-on-surface bg-slate-100 px-2 py-1 rounded">QmXoyp...32eD</span>
                                </div>
                                <div className="w-full h-px bg-slate-200/50"></div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-slate-500">Node Cluster</span>
                                    <span className="text-sm font-bold text-on-surface">North-Atlantic-01</span>
                                </div>
                                <div className="w-full h-px bg-slate-200/50"></div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-slate-500">Submission Tier</span>
                                    <span className="px-3 py-1 bg-tertiary-container text-[10px] font-bold text-on-tertiary-container rounded-full uppercase tracking-wider">Premium Priority</span>
                                </div>
                            </div>
                        </section>

                        {/* Activity Log Hint */}
                        <div className="bg-white rounded-xl p-6 border border-slate-100 flex items-center gap-4 shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                <span className="material-symbols-outlined">security_update_good</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-on-surface">Integrity Check Passed</p>
                                <p className="text-xs text-slate-500">Last scanned by system: 2 mins ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer Area */}
            <footer className="ml-64 w-auto border-t border-slate-200/15 bg-slate-50 font-sans tracking-tight">
                <div className="flex flex-col md:flex-row justify-between items-center px-10 py-12 max-w-7xl mx-auto gap-6">
                    <div className="flex flex-col gap-2">
                        <span className="text-lg font-bold text-slate-900 tracking-tighter">HashGuard</span>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500">
                            © 2024 HashGuard. The Immutable Archive. All rights reserved.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-8">
                        <Link className="text-xs uppercase tracking-widest font-semibold text-slate-500 hover:text-indigo-500 transition-colors opacity-80 hover:opacity-100" to="#">Privacy Policy</Link>
                        <Link className="text-xs uppercase tracking-widest font-semibold text-slate-500 hover:text-indigo-500 transition-colors opacity-80 hover:opacity-100" to="#">Terms of Service</Link>
                        <Link className="text-xs uppercase tracking-widest font-semibold text-slate-500 hover:text-indigo-500 transition-colors opacity-80 hover:opacity-100" to="#">Security Whitepaper</Link>
                        <Link className="text-xs uppercase tracking-widest font-semibold text-slate-500 hover:text-indigo-500 transition-colors opacity-80 hover:opacity-100" to="#">Contact Support</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SubmissionDetails;
