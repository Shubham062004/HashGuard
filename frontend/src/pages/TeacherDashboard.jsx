import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../utils/api';

const TeacherDashboard = () => {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [verifying, setVerifying] = useState(null); // ID of being verified
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            setUser(JSON.parse(userInfo));
            fetchAllSubmissions();
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const fetchAllSubmissions = async () => {
        try {
            setLoading(true);
            const { data } = await API.get('/assignments/all');
            if (data.success) {
                setSubmissions(data.data);
            }
        } catch (err) {
            console.error('Error fetching all submissions:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleVerify = async (sub) => {
        setVerifying(sub._id);
        try {
            const { data } = await API.post('/assignments/verify', {
                assignmentId: sub._id,
                providedHash: sub.hash
            });
            
            if (data.success) {
                alert(data.message);
                // Optionally refresh or update local state
            }
        } catch (err) {
            alert('Verification failed. Error: ' + (err.response?.data?.message || 'Server error'));
        } finally {
            setVerifying(null);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        navigate('/login');
    };

    return (
        <div className="bg-surface text-on-surface min-h-screen antialiased">
            {/* Sidebar (SideNavBar) */}
            <aside className="fixed left-0 h-full w-64 z-40 bg-slate-50 flex flex-col py-6 px-4 gap-2 shadow-sm border-r border-slate-100">
                <div className="mb-8 px-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                        </div>
                        <div>
                            <h1 className="text-lg font-black text-indigo-700 leading-none">HashGuard</h1>
                            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">Teacher Node</p>
                        </div>
                    </div>
                </div>
                <nav className="flex-1 flex flex-col gap-1">
                    <Link className="bg-indigo-50 text-indigo-700 rounded-xl px-4 py-3 font-bold flex items-center gap-3 text-sm" to="/dashboard/teacher">
                        <span className="material-symbols-outlined text-xl">description</span>
                        Submission Ledger
                    </Link>
                    <Link className="text-slate-600 px-4 py-3 hover:bg-slate-100 rounded-xl flex items-center gap-3 font-semibold text-sm transition-all" to="/dashboard/profile">
                        <span className="material-symbols-outlined text-xl">person</span>
                        Profile Settings
                    </Link>
                </nav>
                <div className="mt-auto px-2">
                    <button onClick={handleLogout} className="w-full text-slate-600 px-4 py-3 hover:bg-red-50 hover:text-red-600 rounded-xl flex items-center gap-3 font-bold text-sm transition-colors">
                        <span className="material-symbols-outlined text-xl">logout</span>
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content Wrapper */}
            <div className="pl-64 min-h-screen">
                {/* Top Navigation */}
                <header className="fixed top-0 right-0 left-64 h-20 bg-white/80 backdrop-blur-md z-30 border-b border-slate-100 flex justify-between items-center px-10">
                    <div>
                        <h2 className="text-xl font-black tracking-tighter text-slate-900">Global Archive Control</h2>
                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Active Monitoring Layer 01</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="text-right">
                                <p className="font-bold text-slate-900 leading-none mb-1">{user?.name || 'Teacher'}</p>
                                <p className="text-[10px] uppercase tracking-widest text-indigo-600 font-bold">Authorized Auditor</p>
                            </div>
                            <img alt="User avatar" className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-50 border-2 border-white shadow-sm" src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name || 'teacher'}`} />
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="pt-28 pb-12 px-10">
                    <div className="mb-10 flex items-end justify-between">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 mb-2 block">System Ledger</span>
                            <h2 className="text-4xl font-extrabold tracking-tighter text-slate-900">Master Audit Log</h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-slate-50 p-1.5 rounded-xl flex items-center border border-slate-100">
                                <span className="px-4 py-2 rounded-lg bg-white shadow-sm text-xs font-bold text-indigo-700">All Submissions</span>
                            </div>
                        </div>
                    </div>

                    {/* Table Container */}
                    <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-slate-100/50">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50">
                                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Student Identity</th>
                                    <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Resource Registry</th>
                                    <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Archived At</th>
                                    <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Vault Hash</th>
                                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Integrity Tool</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {loading ? (
                                    <tr>
                                        <td colSpan="5" className="px-8 py-20 text-center">
                                            <div className="flex flex-col items-center gap-4">
                                                <div className="w-8 h-8 border-4 border-indigo-600/10 border-t-indigo-600 rounded-full animate-spin"></div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Accessing Ledger...</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : submissions.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="px-8 py-20 text-center text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                                            No archival records detected in the vault.
                                        </td>
                                    </tr>
                                ) : (
                                    submissions.map((sub) => (
                                        <tr key={sub._id} className="group hover:bg-slate-50/50 transition-all duration-200">
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-indigo-600 border border-slate-200">
                                                        {sub.uploadedBy?.name?.charAt(0) || 'U'}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-black text-slate-900 leading-tight">{sub.uploadedBy?.name || 'Anonymous Student'}</div>
                                                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{sub.uploadedBy?.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
                                                        <span className="material-symbols-outlined text-lg">description</span>
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-bold text-slate-900 truncate max-w-[150px]">{sub.title}</div>
                                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter overflow-hidden text-ellipsis whitespace-nowrap max-w-[150px]">{sub.fileName}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-6">
                                                <div className="text-sm font-bold text-slate-700">{new Date(sub.timestamp).toLocaleDateString()}</div>
                                                <div className="text-[10px] text-slate-400 font-bold uppercase">{new Date(sub.timestamp).toLocaleTimeString()}</div>
                                            </td>
                                            <td className="px-6 py-6">
                                                <div className="inline-flex items-center px-2 py-1 bg-slate-100 rounded-lg border border-slate-200">
                                                    <code className="text-[10px] font-mono text-indigo-700 font-bold tracking-tighter">
                                                        {sub.hash.slice(0, 10)}...
                                                    </code>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <button 
                                                    onClick={() => handleVerify(sub)}
                                                    disabled={verifying === sub._id}
                                                    className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-md active:scale-95 ${
                                                        verifying === sub._id 
                                                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                                                        : 'bg-slate-900 text-white hover:bg-indigo-600 shadow-slate-200'
                                                    }`}
                                                >
                                                    {verifying === sub._id ? 'Verifying...' : 'Verify Cryptography'}
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TeacherDashboard;
