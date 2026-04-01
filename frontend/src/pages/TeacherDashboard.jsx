import React from 'react';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
    return (
        <div className="bg-background text-on-surface min-h-screen antialiased">
            {/* Sidebar (SideNavBar) */}
            <aside className="fixed left-0 h-full w-64 z-40 bg-slate-50 flex flex-col py-6 px-4 gap-2 transition-transform duration-200 shadow-sm">
                <div className="mb-8 px-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                        </div>
                        <div>
                            <h1 className="text-lg font-black text-indigo-700 leading-none">HashGuard</h1>
                            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">Tamper-Proof System</p>
                        </div>
                    </div>
                </div>
                <nav className="flex-1 flex flex-col gap-1">
                    <Link className="text-slate-600 px-4 py-2 hover:bg-slate-100 hover:translate-x-1 transition-transform duration-200 flex items-center gap-3 font-medium text-sm" to="/dashboard/teacher">
                        <span className="material-symbols-outlined text-xl">dashboard</span>
                        Overview
                    </Link>
                    <Link className="bg-indigo-50 text-indigo-700 rounded-lg px-4 py-2 font-semibold flex items-center gap-3 text-sm" to="/dashboard/teacher/submissions">
                        <span className="material-symbols-outlined text-xl">description</span>
                        Submissions
                    </Link>
                    <Link className="text-slate-600 px-4 py-2 hover:bg-slate-100 hover:translate-x-1 transition-transform duration-200 flex items-center gap-3 font-medium text-sm" to="/dashboard/teacher/verification">
                        <span className="material-symbols-outlined text-xl">verified_user</span>
                        Verification
                    </Link>
                    <Link className="text-slate-600 px-4 py-2 hover:bg-slate-100 hover:translate-x-1 transition-transform duration-200 flex items-center gap-3 font-medium text-sm" to="/dashboard/teacher/analytics">
                        <span className="material-symbols-outlined text-xl">bar_chart</span>
                        Analytics
                    </Link>
                    <Link className="text-slate-600 px-4 py-2 hover:bg-slate-100 hover:translate-x-1 transition-transform duration-200 flex items-center gap-3 font-medium text-sm" to="/dashboard/teacher/settings">
                        <span className="material-symbols-outlined text-xl">settings</span>
                        Settings
                    </Link>
                </nav>
                <div className="mt-auto pt-6 flex flex-col gap-1">
                    <button className="mb-4 mx-2 py-3 bg-gradient-to-br from-primary to-primary-container text-white rounded-xl font-bold shadow-xl shadow-indigo-500/20 active:scale-95 transition-all text-sm">
                        New Assignment
                    </button>
                    <Link className="text-slate-600 px-4 py-2 hover:bg-slate-100 flex items-center gap-3 font-medium text-sm" to="#">
                        <span className="material-symbols-outlined text-xl">help</span>
                        Support
                    </Link>
                    <Link className="text-slate-600 px-4 py-2 hover:bg-slate-100 flex items-center gap-3 font-medium text-sm" to="/login">
                        <span className="material-symbols-outlined text-xl">logout</span>
                        Sign Out
                    </Link>
                </div>
            </aside>

            {/* Main Content Wrapper */}
            <div className="pl-64 min-h-screen">
                {/* Top Navigation (TopNavBar) */}
                <header className="fixed top-0 right-0 left-64 h-16 bg-white/80 backdrop-blur-md z-30 shadow-[0_20px_40px_-10px_rgba(53,37,205,0.08)] flex justify-between items-center px-8">
                    <div className="flex items-center flex-1">
                        <div className="relative w-full max-w-md">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                            <input className="w-full bg-slate-50 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500/20 placeholder:text-slate-400 outline-none" placeholder="Search archive..." type="text" />
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden lg:flex items-center gap-6">
                            <Link className="text-slate-500 hover:text-indigo-500 text-sm font-medium transition-colors" to="/dashboard/teacher/overview">Dashboard</Link>
                            <Link className="text-slate-500 hover:text-indigo-500 text-sm font-medium transition-colors" to="/dashboard/teacher/verification">Verification</Link>
                            <Link className="text-indigo-700 font-bold border-b-2 border-indigo-600 text-sm py-5" to="/dashboard/teacher/submissions">Submissions</Link>
                        </div>
                        <div className="h-6 w-px bg-slate-200 mx-2"></div>
                        <div className="flex items-center gap-4">
                            <button className="relative text-slate-500 hover:bg-indigo-50 p-2 rounded-full transition-all">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
                            </button>
                            <button className="text-slate-500 hover:bg-indigo-50 p-2 rounded-full transition-all">
                                <span className="material-symbols-outlined">history</span>
                            </button>
                            <img alt="User avatar" className="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-500/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnphpJEL1t8svjSSRwwCOiOHvuy47IzbQFWbZBbMjNUrPvAa99qsO3B2NaUVWv3et0i-bRmMxeqnvaBPkavA06NdjAk2WGbeSNngoyCnGSuQ3kL91QRefFzucZTFVvZFyvLrw1hCnJmXjSr7559T3z-YM71BfIVQsv7VoCGj8wG1w7kGDFD9g0PyIqjgkZfg_-NyC8289NEOEcR-oEGKamVnDXrl3VXyux9XB3iw_tEFv0wwHxWTLD5yW_14ByMCOi_5rGXt7sgqc" />
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="pt-24 pb-12 px-10">
                    {/* Header Section */}
                    <div className="mb-10">
                        <div className="flex items-end justify-between">
                            <div>
                                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-indigo-600 mb-2 block">Archive Control</span>
                                <h2 className="text-4xl font-extrabold tracking-tighter text-on-surface">Submission Ledger</h2>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-surface-container-low p-1 rounded-lg flex items-center">
                                    <button className="px-4 py-2 rounded-md bg-white shadow-sm text-sm font-bold text-indigo-700">All</button>
                                    <button className="px-4 py-2 rounded-md text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Verified</button>
                                    <button className="px-4 py-2 rounded-md text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Tampered</button>
                                </div>
                                <button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-highest rounded-lg text-primary text-sm font-bold hover:bg-surface-container transition-colors">
                                    <span className="material-symbols-outlined text-lg">filter_list</span>
                                    Advanced Filters
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Table Container */}
                    <div className="bg-surface-container-low rounded-2xl p-1 overflow-hidden">
                        <div className="bg-surface-container-lowest rounded-xl shadow-[0_20px_40px_-10px_rgba(53,37,205,0.08)] overflow-hidden border border-transparent">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-surface-container-low/50 border-b border-indigo-50/50">
                                        <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Student Identity</th>
                                        <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Resource / File</th>
                                        <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Submission Timestamp</th>
                                        <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Vault Status</th>
                                        <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-right">Verification Controls</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {/* Row 1 */}
                                    <tr className="group hover:bg-surface-container-low transition-all duration-200">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-3">
                                                <img alt="Student avatar" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLLxmuFEi5kOFuf53Lm-43Ifrqjgjw1vJkDukWE4NLR-U3OpWEPpKTND_pOZxf3qkJKz9VDvdd_HrgZFhozD7g2TaXmlNFE-cNagoLmAPdMUHL0qtJuUePcyWNCQgeuqNC0KB1I-_QT8SCWYy47k_bouerEj_h90jIJnsFnI64ZbXk0Lq3SJpaUY41-3SEE73U9pL8iEeiifRO1V6T_lZfqksyorTNsV1lQyFkDQkbj6Te7l8QbQTqsQuYPltUxXvkQsO0jM0knq0" />
                                                <div>
                                                    <div className="text-sm font-bold text-on-surface">Julian Thorne</div>
                                                    <div className="text-xs text-slate-400 font-medium">ID: 29402-A</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                                                    <span className="material-symbols-outlined text-lg">description</span>
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium text-on-surface">thesis_v4_final.pdf</div>
                                                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-tighter">SHA256: 4f82...1a9e</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="text-sm text-on-surface">Oct 24, 2023</div>
                                            <div className="text-xs text-slate-400">14:22:05 GMT</div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-white text-[11px] font-bold tracking-tight">
                                                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                                Verified
                                            </span>
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="View Details">
                                                    <span className="material-symbols-outlined">visibility</span>
                                                </button>
                                                <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Re-Verify Ledger">
                                                    <span className="material-symbols-outlined">task_alt</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* Row 2 */}
                                    <tr className="group hover:bg-surface-container-low transition-all duration-200">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-3">
                                                <img alt="Student avatar" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh6xSVw0GySh2-UaA6xA3ajkPRkudlEO2eiLUuft2mqTRNlvNsBVdYh-tXYNIUSRqaSpV0IM1lnsUf9nVDuYVs4nU4iq-B--C0o8q6OtKz4UEs9AxIq5JqTI9BeRPQPahSOxc1EZiY7r8Jzq3NXrlUCP7Ji5q-KusJz9CoT20dm1wqO6DBzSZiGDT2VtVS13gcgz6y--TnJNKHmhE9kHbnmoea4RdDaUjHqwJUid0x4TwWs013EFB538anvalhDVUeLWG7gFh_g5M" />
                                                <div>
                                                    <div className="text-sm font-bold text-on-surface">Marcus Chen</div>
                                                    <div className="text-xs text-slate-400 font-medium">ID: 88291-B</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-error/10 rounded-lg text-error">
                                                    <span className="material-symbols-outlined text-lg">history_edu</span>
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium text-on-surface">lit_review_update.docx</div>
                                                    <div className="text-[10px] font-mono text-error uppercase tracking-tighter">HASH_MISMATCH_ERROR</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="text-sm text-on-surface">Oct 25, 2023</div>
                                            <div className="text-xs text-slate-400">09:10:44 GMT</div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-error-container text-error text-[11px] font-bold tracking-tight">
                                                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>gpp_maybe</span>
                                                Tampered
                                            </span>
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="View Details">
                                                    <span className="material-symbols-outlined">visibility</span>
                                                </button>
                                                <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Investigate Audit Trail">
                                                    <span className="material-symbols-outlined">search_insights</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* Row 3 */}
                                    <tr className="group hover:bg-surface-container-low transition-all duration-200">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-3">
                                                <img alt="Student avatar" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5GE-Hfol5JI87RIBvipppcnAum2AJOPYCckpMsU9Sm5E7jNT1kyFPSk8WIOdHkF-HLafHLqWpqI8sMxtdDkUPbyP_ekD6JcjB_omgLzAmnE0MIrLntLPEeqCmc5k8fiRYYElgciyzuUgn0cc-Q3uslMeuGp2xG-GxbXn7RBzcHGE9pndHIKntAq39HgF7laxuVrFrHiw3kcIk_Qqd5QucHy2eEltj2r4jJfzwOTNa6hK7FbcfgtcavMLLgH-6-DdewNkfqA9wbEc" />
                                                <div>
                                                    <div className="text-sm font-bold text-on-surface">Elena Rodriguez</div>
                                                    <div className="text-xs text-slate-400 font-medium">ID: 41103-C</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-slate-100 rounded-lg text-slate-500">
                                                    <span className="material-symbols-outlined text-lg">code</span>
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium text-on-surface">algorithm_source.zip</div>
                                                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-tighter">PENDING_NETWORK_CONSENSUS</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="text-sm text-on-surface">Oct 26, 2023</div>
                                            <div className="text-xs text-slate-400">23:59:59 GMT</div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-container text-white text-[11px] font-bold tracking-tight">
                                                <span className="material-symbols-outlined text-[14px]">hourglass_empty</span>
                                                Pending
                                            </span>
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="View Details">
                                                    <span className="material-symbols-outlined">visibility</span>
                                                </button>
                                                <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Verify Now">
                                                    <span className="material-symbols-outlined">bolt</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Pagination / Footer Metadata */}
                            <div className="px-8 py-5 flex items-center justify-between border-t border-slate-50 bg-slate-50/30">
                                <p className="text-xs text-slate-500 font-medium tracking-tight">
                                    Showing <span className="text-on-surface font-bold">1-12</span> of <span className="text-on-surface font-bold">148</span> secured entries
                                </p>
                                <div className="flex items-center gap-2">
                                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-white hover:shadow-sm disabled:opacity-30" disabled>
                                        <span className="material-symbols-outlined text-xl">chevron_left</span>
                                    </button>
                                    <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary text-white font-bold text-xs shadow-md shadow-indigo-500/20">1</button>
                                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface font-bold text-xs hover:bg-white hover:shadow-sm">2</button>
                                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface font-bold text-xs hover:bg-white hover:shadow-sm">3</button>
                                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-white hover:shadow-sm transition-all">
                                        <span className="material-symbols-outlined text-xl">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Proof-Seal Area */}
                    <div className="mt-12 flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-container rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                                <div className="relative bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-indigo-50 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-lg">verified_user</span>
                                    <span className="text-[10px] font-mono text-indigo-700 tracking-wider font-bold">LEDGER_STABILITY: 99.98%</span>
                                </div>
                            </div>
                            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                                System Integrity Synchronized: <span className="text-on-surface">2m ago</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-3 bg-white rounded-xl shadow-sm border border-indigo-50 flex flex-col">
                                <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Total Verified</span>
                                <span className="text-lg font-black text-on-surface leading-none">12.4k</span>
                            </div>
                            <div className="p-3 bg-white rounded-xl shadow-sm border border-indigo-50 flex flex-col">
                                <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Active Blocks</span>
                                <span className="text-lg font-black text-on-surface leading-none">882</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TeacherDashboard;
