import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../utils/api';

const StudentDashboard = () => {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            setUser(JSON.parse(userInfo));
            fetchSubmissions();
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const fetchSubmissions = async () => {
        try {
            setLoading(true);
            const { data } = await API.get('/assignments');
            if (data.success) {
                setSubmissions(data.data);
            }
        } catch (err) {
            setError('Failed to load submissions.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        navigate('/login');
    };

    const stats = {
        total: submissions.length,
        verified: submissions.length, // Currently mocking all as verified
        pending: 0
    };

    return (
        <div className="bg-surface text-on-surface min-h-screen antialiased">
            {/* Side Navigation Bar */}
            <aside className="fixed left-0 top-0 h-screen w-64 z-40 bg-slate-50 flex flex-col py-8 px-4 font-sans text-sm font-semibold tracking-tight shadow-sm border-r border-slate-100">
                <div className="flex items-center gap-3 px-2 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
                    </div>
                    <div>
                        <h1 className="text-lg font-extrabold tracking-tighter text-slate-900 leading-none">HashGuard</h1>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1 font-bold">The Immutable Archive</p>
                    </div>
                </div>
                <nav className="flex-1 space-y-1">
                    <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-600 bg-indigo-50 font-bold active:scale-95 transition-all" to="/dashboard/student">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span>Dashboard</span>
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-100 transition-all hover:translate-x-1 font-semibold" to="/dashboard/student/upload">
                        <span className="material-symbols-outlined">cloud_upload</span>
                        <span>Upload</span>
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-100 transition-all hover:translate-x-1 font-semibold" to="/dashboard/student/submissions">
                        <span className="material-symbols-outlined">history_edu</span>
                        <span>Submissions</span>
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-100 transition-all hover:translate-x-1 font-semibold" to="/dashboard/profile">
                        <span className="material-symbols-outlined">person</span>
                        <span>Profile</span>
                    </Link>
                </nav>
                <div className="mt-auto">
                    <Link to="/dashboard/student/upload" className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-200 hover:opacity-90 transition-all active:scale-95">
                        <span className="material-symbols-outlined text-sm">add</span>
                        <span>New Submission</span>
                    </Link>
                </div>
            </aside>

            {/* Top Navigation Bar */}
            <header className="fixed top-0 left-64 right-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="flex justify-between items-center px-10 py-4 w-full font-sans antialiased text-sm font-medium tracking-tight">
                    <div className="flex items-center gap-2">
                        <span className="text-slate-400 font-bold">/</span>
                        <span className="text-slate-900 font-extrabold tracking-tighter">Dashboard Overview</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="text-right">
                                <p className="font-extrabold text-slate-900 leading-none mb-1">{user?.name || 'Loading...'}</p>
                                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                                    {user?.role || 'User'} ID: #{user?._id.slice(-6).toUpperCase() || '------'}
                                </p>
                            </div>
                            <img alt="User profile avatar" className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-50 border-2 border-white shadow-sm" src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name || 'default'}`} />
                        </div>
                        <div className="h-6 w-[1px] bg-slate-200"></div>
                        <button onClick={handleLogout} className="text-slate-500 hover:text-red-600 transition-colors flex items-center gap-2 font-bold group">
                            <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">logout</span>
                            <span>Sign Out</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content Canvas */}
            <main className="ml-64 pt-24 min-h-screen px-10 pb-12 bg-white/50 relative">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl -z-10 animate-pulse"></div>

                <header className="mb-12">
                    <h2 className="text-4xl font-extrabold tracking-tighter text-slate-900 mb-3">Welcome back, {user?.name.split(' ')[0]}!</h2>
                    <p className="text-slate-600 max-w-2xl font-medium leading-relaxed">Your digital archive is synchronized and secured with cryptographically sound SHA-256 signatures. Review and manage your immutable records below.</p>
                </header>

                {/* Stats Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-7 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/50 group transition-all hover:shadow-[0_8px_30px_rgb(79,70,229,0.08)]">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                <span className="material-symbols-outlined">folder_shared</span>
                            </div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Global Archive</span>
                        </div>
                        <p className="text-5xl font-black tracking-tighter text-slate-900 mb-1">{stats.total.toString().padStart(2, '0')}</p>
                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Total submissions stored</p>
                    </div>
                    <div className="bg-white p-7 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/50 group transition-all hover:shadow-[0_8px_30px_rgb(16,185,129,0.08)]">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 transition-all duration-300">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                            </div>
                            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">Integrity Verified</span>
                        </div>
                        <p className="text-5xl font-black tracking-tighter text-emerald-600 mb-1">{stats.verified.toString().padStart(2, '0')}</p>
                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Hash-matched entries</p>
                    </div>
                    <div className="bg-white p-7 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/50 group transition-all hover:shadow-[0_8px_30px_rgb(245,158,11,0.08)]">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 transition-all duration-300">
                                <span className="material-symbols-outlined">security_update_good</span>
                            </div>
                            <span className="text-[10px] font-black text-amber-600 uppercase tracking-[0.2em]">Live Archival</span>
                        </div>
                        <p className="text-5xl font-black tracking-tighter text-amber-600 mb-1">{stats.pending.toString().padStart(2, '0')}</p>
                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Active nodes syncing</p>
                    </div>
                </div>

                {/* Submissions Table Section */}
                <section className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-slate-100/50">
                    <div className="px-10 py-7 flex justify-between items-center border-b border-slate-100/50">
                        <div>
                            <h3 className="text-xl font-black tracking-tighter text-slate-900">Recent Immutable Entries</h3>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Transaction History</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="w-10 h-10 flex items-center justify-center hover:bg-slate-50 rounded-xl transition-colors"><span className="material-symbols-outlined text-slate-400">search</span></button>
                            <button className="w-10 h-10 flex items-center justify-center hover:bg-slate-50 rounded-xl transition-colors"><span className="material-symbols-outlined text-slate-400">filter_list</span></button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50">
                                    <th className="px-10 py-5 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">File Reference</th>
                                    <th className="px-10 py-5 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">Cryptographic Seal</th>
                                    <th className="px-10 py-5 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">Archived At</th>
                                    <th className="px-10 py-5 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 text-right">Operation</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {loading ? (
                                    <tr>
                                        <td colSpan="4" className="px-10 py-20 text-center">
                                            <div className="flex flex-col items-center gap-4">
                                                <div className="w-10 h-10 border-4 border-indigo-600/10 border-t-indigo-600 rounded-full animate-spin"></div>
                                                <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Synchronizing Archive...</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : submissions.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="px-10 py-20 text-center">
                                            <div className="flex flex-col items-center gap-2">
                                                <span className="material-symbols-outlined text-4xl text-slate-200">database_off</span>
                                                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">No immutable records detected</p>
                                                <Link to="/dashboard/student/upload" className="text-indigo-600 text-xs font-bold hover:underline mt-2">Start your first submission</Link>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    submissions.map((sub) => (
                                        <tr key={sub._id} className="group hover:bg-slate-50/50 transition-colors">
                                            <td className="px-10 py-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                                                        <span className="material-symbols-outlined">description</span>
                                                    </div>
                                                    <div>
                                                        <span className="block font-extrabold text-slate-900 tracking-tight">{sub.title}</span>
                                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{sub.fileName || 'Archive-File'}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-10 py-6">
                                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50/50 rounded-lg border border-indigo-100 selection:bg-indigo-100">
                                                    <code className="text-[11px] font-mono text-indigo-700 font-bold tracking-tighter">
                                                        {sub.hash.slice(0, 8)}...{sub.hash.slice(-8)}
                                                    </code>
                                                    <span className="material-symbols-outlined text-[12px] text-indigo-300">security</span>
                                                </div>
                                            </td>
                                            <td className="px-10 py-6">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-slate-700">{new Date(sub.timestamp).toLocaleDateString()}</span>
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase">{new Date(sub.timestamp).toLocaleTimeString()}</span>
                                                </div>
                                            </td>
                                            <td className="px-10 py-6 text-right">
                                                <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-colors shadow-lg shadow-slate-200">Verify</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="px-10 py-6 bg-slate-50/30 flex justify-between items-center">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            Showing {submissions.length} secured entries
                        </p>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="ml-64 w-[calc(100%-16rem)] border-t border-slate-100 bg-white">
                <div className="flex flex-col md:flex-row justify-between items-center px-10 py-12 max-w-7xl mx-auto gap-6 font-sans text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">
                    <div className="flex items-center gap-3">
                        <span className="text-lg font-black text-slate-900 tracking-tighter lowercase">hashguard.</span>
                        <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                        <span>© 2024</span>
                    </div>
                    <div className="flex gap-10">
                        <Link className="hover:text-indigo-600 transition-colors" to="#">Protocol</Link>
                        <Link className="hover:text-indigo-600 transition-colors" to="#">Nodes</Link>
                        <Link className="hover:text-indigo-600 transition-colors" to="#">Security</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default StudentDashboard;
