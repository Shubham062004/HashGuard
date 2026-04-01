import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
    return (
        <div className="bg-surface text-on-surface min-h-screen">
            {/* Side Navigation Bar */}
            <aside className="fixed left-0 top-0 h-screen w-64 z-40 bg-slate-50 flex flex-col py-8 px-4 font-sans text-sm font-semibold tracking-tight">
                <div className="flex items-center gap-3 px-2 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
                    </div>
                    <div>
                        <h1 className="text-lg font-extrabold tracking-tighter text-slate-900 leading-none">HashGuard</h1>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">The Immutable Archive</p>
                    </div>
                </div>
                <nav className="flex-1 space-y-1">
                    <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-indigo-600 bg-indigo-50 border-r-4 border-indigo-600 active:scale-95 transition-all" to="/dashboard/student">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span>Dashboard</span>
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:bg-slate-100 transition-all hover:translate-x-1" to="/dashboard/student/upload">
                        <span className="material-symbols-outlined">cloud_upload</span>
                        <span>Upload</span>
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:bg-slate-100 transition-all hover:translate-x-1" to="/dashboard/student/submissions">
                        <span className="material-symbols-outlined">history_edu</span>
                        <span>Submissions</span>
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:bg-slate-100 transition-all hover:translate-x-1" to="/dashboard/profile">
                        <span className="material-symbols-outlined">person</span>
                        <span>Profile</span>
                    </Link>
                </nav>
                <div className="mt-auto">
                    <button className="w-full fluid-gradient text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-95">
                        <span className="material-symbols-outlined text-sm">add</span>
                        <span>New Submission</span>
                    </button>
                </div>
            </aside>

            {/* Top Navigation Bar */}
            <header className="fixed top-0 left-64 right-0 z-50 bg-white/80 backdrop-blur-md shadow-[0_20px_40px_-10px_rgba(53,37,205,0.08)]">
                <div className="flex justify-between items-center px-8 py-4 w-full font-sans antialiased text-sm font-medium tracking-tight">
                    <div className="flex items-center gap-6">
                        <span className="text-slate-400">/ Dashboard</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="text-right">
                                <p className="font-bold text-slate-900">Alex Rivers</p>
                                <p className="text-xs text-slate-500">Student ID: #88291</p>
                            </div>
                            <img alt="User profile avatar" className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk5Wg6sXIN1CREFh_-dJ9LxdILmpyfgEzX26nAG-Mhjr8BvNWG4i4QK36FdlAZIOFUKASICxnaq0Li__GtkStUR_AhnTzulf9ZQARXmAZtpn-mOJbMHNrRq339jYWQbwraAENmdDg2R7ycH_NerYfathcz7D_RyJclEESrBCoUa4ijXlSI5F7XWQ8WYpl9aZkiIeHLZaA0QgP6cFPlyWQs3_ufoURblIxiYMZMKWxsda3-lEkATg4tjY0rMAI73uqdrIZ8vkbIN6Q" />
                        </div>
                        <div className="h-6 w-[1px] bg-slate-200"></div>
                        <Link to="/login" className="text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-1 active:scale-95">
                            <span className="material-symbols-outlined text-lg">logout</span>
                            <span>Logout</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content Canvas */}
            <main className="ml-64 pt-24 min-h-screen px-10 pb-12">
                {/* Welcome Header */}
                <header className="mb-10">
                    <h2 className="text-3xl font-extrabold tracking-tighter text-on-surface mb-2">Welcome back, Student!</h2>
                    <p className="text-on-surface-variant max-w-2xl">Your digital archive is synchronized and secured with end-to-end cryptographic proofs. All active submissions are currently verified.</p>
                </header>

                {/* Stats Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Total Card */}
                    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-transparent hover:border-primary/5 transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 rounded-lg bg-surface-container-high text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">folder_shared</span>
                            </div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Count</span>
                        </div>
                        <p className="text-4xl font-extrabold tracking-tighter text-on-surface mb-1">12</p>
                        <p className="text-sm font-medium text-on-surface-variant">Total submissions</p>
                    </div>
                    {/* Verified Card */}
                    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-transparent hover:border-primary/5 transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 rounded-lg bg-primary-container text-white">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                            </div>
                            <span className="text-xs font-bold text-primary uppercase tracking-widest">Secured</span>
                        </div>
                        <p className="text-4xl font-extrabold tracking-tighter text-primary mb-1">10</p>
                        <p className="text-sm font-medium text-on-surface-variant">Verified submissions</p>
                    </div>
                    {/* Pending Card */}
                    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-transparent hover:border-primary/5 transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 rounded-lg bg-tertiary-container text-white">
                                <span className="material-symbols-outlined">hourglass_empty</span>
                            </div>
                            <span className="text-xs font-bold text-tertiary uppercase tracking-widest">Processing</span>
                        </div>
                        <p className="text-4xl font-extrabold tracking-tighter text-tertiary mb-1">02</p>
                        <p className="text-sm font-medium text-on-surface-variant">Pending audit</p>
                    </div>
                </div>

                {/* Submissions Table Section */}
                <section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-transparent">
                    <div className="px-8 py-6 flex justify-between items-center bg-surface-container-low/30">
                        <h3 className="text-xl font-bold tracking-tight text-on-surface">Recent Submissions</h3>
                        <div className="flex gap-2">
                            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><span className="material-symbols-outlined text-slate-500">search</span></button>
                            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><span className="material-symbols-outlined text-slate-500">filter_list</span></button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-surface-container-low/10">
                                    <th className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-slate-400">File Name</th>
                                    <th className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-slate-400">Cryptographic Hash</th>
                                    <th className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-slate-400">Timestamp</th>
                                    <th className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-slate-400">Status</th>
                                    <th className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-slate-400 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100/50">
                                <tr className="group hover:bg-surface-container-low/40 transition-colors">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-indigo-400">description</span>
                                            <span className="font-semibold text-slate-900">Thesis_Final_Draft.pdf</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="proof-seal px-3 py-1 rounded-md inline-flex items-center gap-2">
                                            <span className="font-mono text-xs text-indigo-600">0x4f4...f9f9</span>
                                            <span className="material-symbols-outlined text-[10px] text-indigo-400">key</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-sm text-slate-500">Oct 24, 2023 · 14:32</td>
                                    <td className="px-8 py-5">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-container/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                                            Verified
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <div className="flex justify-end gap-3">
                                            <button className="text-primary hover:underline text-xs font-bold">View details</button>
                                            <button className="bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-md text-xs font-bold text-slate-700 transition-colors">Verify</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="group hover:bg-surface-container-low/40 transition-colors">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-indigo-400">description</span>
                                            <span className="font-semibold text-slate-900">Lab_Report_04.docx</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="proof-seal px-3 py-1 rounded-md inline-flex items-center gap-2">
                                            <span className="font-mono text-xs text-indigo-600">0x7a1...d2e3</span>
                                            <span className="material-symbols-outlined text-[10px] text-indigo-400">key</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-sm text-slate-500">Oct 22, 2023 · 09:15</td>
                                    <td className="px-8 py-5">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-container/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                                            Verified
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <div className="flex justify-end gap-3">
                                            <button className="text-primary hover:underline text-xs font-bold">View details</button>
                                            <button className="bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-md text-xs font-bold text-slate-700 transition-colors">Verify</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="group hover:bg-red-50/30 transition-colors">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-error">warning</span>
                                            <span className="font-semibold text-slate-900">Archive_Backup.zip</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="bg-red-50 px-3 py-1 rounded-md inline-flex items-center gap-2 border border-red-100">
                                            <span className="font-mono text-xs text-error">0xb92...c0c0</span>
                                            <span className="material-symbols-outlined text-[10px] text-error">error</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-sm text-slate-500">Oct 18, 2023 · 21:05</td>
                                    <td className="px-8 py-5">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-error-container text-on-error-container text-[10px] font-bold uppercase tracking-wider">
                                            Tampered
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <div className="flex justify-end gap-3">
                                            <button className="text-error hover:underline text-xs font-bold">Investigate</button>
                                            <button className="bg-error text-white px-3 py-1 rounded-md text-xs font-bold transition-opacity hover:opacity-90">Verify Now</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="px-8 py-4 bg-surface-container-low/20 flex justify-between items-center">
                        <p className="text-xs text-slate-500 font-medium">Showing 3 of 12 secured entries</p>
                        <div className="flex items-center gap-1">
                            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-slate-200 transition-colors"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-md bg-primary text-white text-xs font-bold">1</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-slate-200 transition-colors text-xs font-bold">2</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-slate-200 transition-colors"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
                        </div>
                    </div>
                </section>

                {/* Proof Seal Visual Integration */}
                <div className="mt-12 p-8 rounded-2xl bg-indigo-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHdSn0vlqoQvelj1b7VzY3adLLISxh22rlM-g9rlMjI6LpznAMiUJWa_gxy4wGWdHBZDp0s4E0pEvPYDoZBdZeNkw6KgExWV6MZlLwQuU4QtgsKxvaQnqK8SkUyjIcR_-z1fngNffcaGeOiD1NkqMe_zwJ4oFIAOn9-iglhVVlUF76CtZSWoET8COTKbuy7ttrKX8_Kpm1M8cTe3P2wKzjP73PXe2P1TxbmSPqlIcVk5ph4blY1cBXJZowJReVV01mpbTg-e0_ieY')" }}></div>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div>
                            <h4 className="text-2xl font-bold tracking-tight mb-2">Immutable Proof Network</h4>
                            <p className="text-indigo-200 max-w-md">Your files are currently anchored to the Ethereum Mainnet and IPFS. This creates a permanent, tamper-proof record of your academic history.</p>
                        </div>
                        <div className="flex -space-x-4">
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                <span className="material-symbols-outlined text-white">security</span>
                            </div>
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                <span className="material-symbols-outlined text-white">lan</span>
                            </div>
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="ml-64 w-[calc(100%-16rem)] border-t border-slate-200/15 bg-slate-50">
                <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto gap-6 font-sans text-xs uppercase tracking-widest font-semibold">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-slate-900">HashGuard</span>
                        <span className="text-slate-400">|</span>
                        <span className="text-slate-500">© 2024</span>
                    </div>
                    <div className="flex gap-8">
                        <Link className="text-slate-500 hover:text-indigo-500 transition-colors" to="#">Privacy Policy</Link>
                        <Link className="text-slate-500 hover:text-indigo-500 transition-colors" to="#">Terms of Service</Link>
                        <Link className="text-slate-500 hover:text-indigo-500 transition-colors" to="#">Security Whitepaper</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default StudentDashboard;
