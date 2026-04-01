import React from 'react';
import { Link } from 'react-router-dom';

const UploadAssignment = () => {
    return (
        <div className="bg-surface text-on-surface min-h-screen antialiased">
            {/* SideNavBar (Active: Upload) */}
            <aside className="fixed left-0 top-0 h-screen w-64 z-40 bg-slate-50 flex flex-col py-8 px-4 font-sans text-sm font-semibold tracking-tight shadow-sm">
                <div className="flex items-center gap-3 px-2 mb-10">
                    <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-on-primary">
                        <span className="material-symbols-outlined">shield</span>
                    </div>
                    <div>
                        <h2 className="text-lg font-extrabold tracking-tighter text-slate-900 leading-tight">HashGuard</h2>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">The Immutable Archive</p>
                    </div>
                </div>
                <nav className="flex-1 space-y-2">
                    <Link className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 transition-all rounded-xl font-semibold text-sm group" to="/dashboard/student">
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">dashboard</span>
                        Dashboard
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 text-indigo-600 bg-indigo-50 border-r-4 border-indigo-600 font-bold text-sm" to="/dashboard/student/upload">
                        <span className="material-symbols-outlined">cloud_upload</span>
                        Upload
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 transition-all rounded-xl font-semibold text-sm group" to="/dashboard/student/submissions">
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">history_edu</span>
                        Submissions
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 transition-all rounded-xl font-semibold text-sm group" to="/dashboard/profile">
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">person</span>
                        Profile
                    </Link>
                </nav>
                <div className="mt-auto">
                    <button className="w-full py-3 px-4 rounded-xl bg-indigo-600 text-white font-bold text-sm shadow-lg hover:shadow-indigo-200 transition-all active:scale-95 flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-sm">add</span>
                        New Submission
                    </button>
                </div>
            </aside>

            <main className="ml-64 min-h-screen flex flex-col">
                {/* Top Header Area (Contextual) */}
                <header className="flex justify-between items-center px-10 py-6">
                    <div>
                        <h1 className="text-2xl font-extrabold tracking-tight text-on-surface">Secure Document Deposit</h1>
                        <p className="text-sm text-outline font-medium">Archive your work with cryptographic certainty.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden md:block">
                            <p className="text-xs font-bold uppercase tracking-widest text-outline">Network Status</p>
                            <p className="text-sm font-semibold text-indigo-600 flex items-center gap-1 justify-end">
                                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                                Immutable Layer Active
                            </p>
                        </div>
                    </div>
                </header>

                {/* Centered Upload Content */}
                <div className="flex-1 flex items-center justify-center p-10">
                    <div className="w-full max-w-2xl">
                        {/* Main Upload Card */}
                        <div className="bg-surface-container-lowest rounded-2xl shadow-[0_20px_40px_-10px_rgba(53,37,205,0.08)] p-10 space-y-10 relative overflow-hidden">
                            {/* Progress Bar (Active State Overlay) */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-surface-container">
                                <div className="h-full bg-indigo-600 transition-all duration-700 ease-out" style={{ width: "100%" }}></div>
                            </div>
                            
                            {/* Success Toast (State Representation) */}
                            <div className="flex items-center gap-3 bg-primary-container/10 p-4 rounded-xl border border-primary/10">
                                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                <p className="text-sm font-bold text-primary">File hashing complete. Ready for immutable archival.</p>
                            </div>

                            {/* Form Content */}
                            <div className="space-y-8">
                                {/* Assignment Title Field */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-outline ml-1">Assignment Title</label>
                                    <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 text-on-surface font-semibold focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Enter document name..." type="text" defaultValue="Blockchain Ethics Final Thesis_v2" />
                                </div>

                                {/* Drag and Drop Area */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-outline ml-1">Document Upload</label>
                                    <div className="group relative cursor-pointer">
                                        <div className="w-full border-2 border-dashed border-outline-variant bg-surface-container-low rounded-2xl p-12 transition-all hover:bg-white hover:border-indigo-600/40 drag-glow flex flex-col items-center justify-center text-center gap-4">
                                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 transition-transform group-hover:scale-110">
                                                <span className="material-symbols-outlined text-3xl">upload_file</span>
                                            </div>
                                            <div>
                                                <p className="text-lg font-extrabold text-on-surface tracking-tight">Final_Thesis_Revision.pdf</p>
                                                <p className="text-sm text-outline mt-1">Supported formats: <span className="font-bold text-on-surface">PDF, DOC</span></p>
                                            </div>
                                            {/* File Details (Post-upload state) */}
                                            <div className="flex items-center gap-4 mt-2">
                                                <div className="flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded-full">
                                                    <span className="material-symbols-outlined text-sm">database</span>
                                                    <span className="text-xs font-bold text-on-surface-variant">2.4 MB</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded-full">
                                                    <span className="material-symbols-outlined text-sm">verified_user</span>
                                                    <span className="text-xs font-bold text-on-surface-variant">SHA-256 Verified</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Proof Seal (The Cryptographic Identity Component) */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col gap-1">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Generated Archive Hash</label>
                                        <div className="flex items-center justify-between">
                                            <code className="text-sm font-mono text-indigo-600 font-bold tracking-tight">0x7d1...822e</code>
                                            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-indigo-600 transition-colors">content_copy</span>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col gap-1">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Timestamp Preview</label>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-indigo-600 text-sm">schedule</span>
                                            <span className="text-sm font-bold text-on-surface">Oct 24, 2024, 14:30 UTC</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Final Action */}
                            <div className="pt-4">
                                <button className="group w-full py-5 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white font-extrabold text-lg shadow-[0_10px_20px_rgba(53,37,205,0.2)] hover:shadow-[0_15px_30px_rgba(53,37,205,0.3)] transition-all flex items-center justify-center gap-3">
                                    <span>Execute Immutable Deposit</span>
                                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </button>
                                <p className="text-center text-xs text-outline font-medium mt-4">Once submitted, this document hash becomes a permanent record in the archive.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer (Shared Component) */}
                <footer className="w-full border-t border-slate-200/15 bg-slate-50 flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto gap-6 mt-auto font-sans tracking-tight">
                    <div className="flex flex-col gap-2">
                        <span className="text-lg font-bold text-slate-900">HashGuard</span>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">© 2024 HashGuard. The Immutable Archive. All rights reserved.</p>
                    </div>
                    <div className="flex flex-wrap gap-8">
                        <Link className="text-[10px] uppercase tracking-widest font-bold text-slate-500 hover:text-indigo-500 transition-colors" to="#">Privacy Policy</Link>
                        <Link className="text-[10px] uppercase tracking-widest font-bold text-slate-500 hover:text-indigo-500 transition-colors" to="#">Terms of Service</Link>
                        <Link className="text-[10px] uppercase tracking-widest font-bold text-slate-500 hover:text-indigo-500 transition-colors" to="#">Security Whitepaper</Link>
                        <Link className="text-[10px] uppercase tracking-widest font-bold text-slate-500 hover:text-indigo-500 transition-colors" to="#">Contact Support</Link>
                    </div>
                </footer>
            </main>

            {/* Floating Background Decorative Elements */}
            <div className="fixed top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/30 rounded-full blur-[120px] -z-10"></div>
            <div className="fixed bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-slate-200/40 rounded-full blur-[100px] -z-10"></div>
        </div>
    );
};

export default UploadAssignment;
