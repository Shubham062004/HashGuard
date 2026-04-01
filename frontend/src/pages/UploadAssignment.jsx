import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../utils/api';

const UploadAssignment = () => {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [uploadData, setUploadData] = useState(null);
    
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            setUser(JSON.parse(userInfo));
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setError('');
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        if (!title.trim()) {
            setError('Please provide an assignment title.');
            return;
        }
        if (!file) {
            setError('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('file', file);

        setLoading(true);
        try {
            const { data } = await API.post('/assignments/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (data.success) {
                setSuccess(true);
                setUploadData(data.data);
                setTitle('');
                setFile(null);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Upload failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        // Could add a toast here
    };

    return (
        <div className="bg-surface text-on-surface min-h-screen antialiased">
            {/* SideNavBar */}
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
            </aside>

            <main className="ml-64 min-h-screen flex flex-col">
                <header className="flex justify-between items-center px-10 py-6">
                    <div>
                        <h1 className="text-2xl font-extrabold tracking-tight text-on-surface">Secure Document Deposit</h1>
                        <p className="text-sm text-outline font-medium">Archive your work with cryptographic certainty.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden md:block">
                            <p className="text-xs font-bold uppercase tracking-widest text-outline">Hello, {user?.name || 'Student'}</p>
                            <p className="text-sm font-semibold text-indigo-600 flex items-center gap-1 justify-end">
                                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                                Immutable Layer Active
                            </p>
                        </div>
                    </div>
                </header>

                <div className="flex-1 flex items-center justify-center p-10">
                    <div className="w-full max-w-2xl">
                        <form onSubmit={handleUpload} className="bg-surface-container-lowest rounded-2xl shadow-[0_20px_40px_-10px_rgba(53,37,205,0.08)] p-10 space-y-8 relative overflow-hidden">
                            {loading && (
                                <div className="absolute top-0 left-0 w-full h-1 bg-surface-container">
                                    <div className="h-full bg-indigo-600 animate-progress transition-all"></div>
                                </div>
                            )}
                            
                            {success && (
                                <div className="flex items-center gap-3 bg-emerald-50 p-4 rounded-xl border border-emerald-100 animate-fade-in">
                                    <span className="material-symbols-outlined text-emerald-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                    <p className="text-sm font-bold text-emerald-800">Assignment successfully hashed and archived.</p>
                                </div>
                            )}

                            {error && (
                                <div className="flex items-center gap-3 bg-red-50 p-4 rounded-xl border border-red-100">
                                    <span className="material-symbols-outlined text-red-600">error</span>
                                    <p className="text-sm font-bold text-red-800">{error}</p>
                                </div>
                            )}

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-outline ml-1">Assignment Title</label>
                                    <input 
                                        className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 text-on-surface font-semibold focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                                        placeholder="Enter document name..." 
                                        type="text" 
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-outline ml-1">Document Upload</label>
                                    <div className="group relative">
                                        <input 
                                            type="file" 
                                            id="file-upload" 
                                            className="hidden" 
                                            onChange={handleFileChange}
                                        />
                                        <label 
                                            htmlFor="file-upload"
                                            className="w-full border-2 border-dashed border-outline-variant bg-surface-container-low rounded-2xl p-10 transition-all hover:bg-white hover:border-indigo-600/40 cursor-pointer flex flex-col items-center justify-center text-center gap-4"
                                        >
                                            <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 transition-transform group-hover:scale-110">
                                                <span className="material-symbols-outlined text-2xl">upload_file</span>
                                            </div>
                                            <div>
                                                <p className="text-base font-extrabold text-on-surface tracking-tight">
                                                    {file ? file.name : 'Click to browse or drag & drop'}
                                                </p>
                                                <p className="text-xs text-outline mt-1">Supported: <span className="font-bold text-on-surface">PDF, DOC, Images (Max 10MB)</span></p>
                                            </div>
                                            {file && (
                                                <div className="flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold">
                                                    <span className="material-symbols-outlined text-xs">database</span>
                                                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                                                </div>
                                            )}
                                        </label>
                                    </div>
                                </div>

                                {uploadData && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-slide-up">
                                        <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100 flex flex-col gap-1 ring-2 ring-indigo-200/50">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-indigo-500">Generated Archive Hash</label>
                                            <div className="flex items-center justify-between">
                                                <code className="text-xs font-mono text-indigo-700 font-bold truncate mr-2" title={uploadData.hash}>
                                                    {uploadData.hash.slice(0, 12)}...{uploadData.hash.slice(-8)}
                                                </code>
                                                <button 
                                                    type="button"
                                                    onClick={() => copyToClipboard(uploadData.hash)}
                                                    className="material-symbols-outlined text-indigo-400 hover:text-indigo-600 transition-colors text-sm"
                                                >
                                                    content_copy
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col gap-1">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">System Timestamp</label>
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-indigo-600 text-sm">schedule</span>
                                                <span className="text-xs font-bold text-on-surface">
                                                    {new Date(uploadData.timestamp).toLocaleString()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="pt-4">
                                <button 
                                    type="submit"
                                    disabled={loading}
                                    className="group w-full py-5 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-800 text-white font-extrabold text-lg shadow-[0_10px_20px_rgba(79,70,229,0.2)] hover:shadow-[0_15px_30px_rgba(79,70,229,0.3)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                >
                                    <span>{loading ? 'Executing Hashing...' : 'Execute Immutable Deposit'}</span>
                                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </button>
                                <p className="text-center text-[10px] text-outline font-medium mt-4 uppercase tracking-widest">Cryptographic permanence is guaranteed upon execution</p>
                            </div>
                        </form>
                    </div>
                </div>

                <footer className="w-full border-t border-slate-200/15 bg-slate-50 flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto gap-6 mt-auto font-sans tracking-tight">
                    <div className="flex flex-col gap-2">
                        <span className="text-lg font-bold text-slate-900">HashGuard</span>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">© 2024 HashGuard. The Immutable Archive. All rights reserved.</p>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default UploadAssignment;

