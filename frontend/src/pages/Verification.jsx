import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import API from '../utils/api';

const Verification = () => {
    const location = useLocation();
    const [file, setFile] = useState(null);
    const [txId, setTxId] = useState(location.state?.assignmentId || '');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null); // { success, message, data, authentic }
    const [localHash, setLocalHash] = useState('');

    const generateHash = async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    };

    const handleFileChange = async (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setResult(null);
            const hash = await generateHash(selectedFile);
            setLocalHash(hash);
        }
    };

    const handleVerify = async () => {
        if (!txId) {
            alert('Please provide a Transaction ID (Assignment ID) for verification.');
            return;
        }
        if (!localHash) {
            alert('Please select a file to hash.');
            return;
        }

        setLoading(true);
        try {
            const { data } = await API.post('/assignments/verify', {
                assignmentId: txId,
                providedHash: localHash
            });
            setResult(data);
        } catch (err) {
            setResult({
                success: false,
                message: err.response?.data?.message || 'Verification system error. Access denied.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-background font-body text-on-surface antialiased min-h-screen">
            {/* Top Navigation Bar */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md flex justify-between items-center px-8 h-16 shadow-[0_20px_40px_-10px_rgba(53,37,205,0.08)]">
                <div className="flex items-center gap-8">
                    <Link to="/" className="text-xl font-extrabold tracking-tighter text-indigo-700">HashGuard</Link>
                    <div className="hidden md:flex items-center gap-6">
                        <Link className="text-slate-500 hover:text-indigo-500 transition-colors font-inter tracking-tight" to="/dashboard/student">Dashboard</Link>
                        <Link className="text-indigo-700 font-bold border-b-2 border-indigo-600 transition-colors font-inter tracking-tight" to="/verification">Verification</Link>
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
                            
                            <input 
                                type="file" 
                                id="verify-file" 
                                className="hidden" 
                                onChange={handleFileChange}
                            />
                            <label 
                                htmlFor="verify-file"
                                className="border-2 border-dashed border-outline-variant/30 rounded-xl p-12 bg-surface-container-low/50 flex flex-col items-center justify-center text-center group hover:bg-surface-container-low transition-all cursor-pointer"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
                                </div>
                                <p className="font-semibold text-on-surface mb-1">
                                    {file ? file.name : 'Drop the file here or browse'}
                                </p>
                                <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">SHA-256 Process Active</p>
                            </label>

                            <div className="mt-10 space-y-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Assignment ID</label>
                                    <input 
                                        className="w-full bg-surface-container-low border-none rounded-lg px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary/20 transition-all font-mono text-sm outline-none" 
                                        placeholder="Enter the ID from the submission table" 
                                        type="text" 
                                        value={txId}
                                        onChange={(e) => setTxId(e.target.value)}
                                    />
                                </div>
                                <button 
                                    onClick={handleVerify}
                                    disabled={loading || !file || !txId}
                                    className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-lg shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98] tracking-widest text-sm uppercase disabled:opacity-50"
                                >
                                    {loading ? 'AUDITING SIGNATURES...' : 'InitiATE VERIFICATION SEAL'}
                                </button>
                            </div>
                        </section>

                        {/* Comparison Detail */}
                        {localHash && (
                            <section className="bg-surface-container-low rounded-xl p-8 animate-fade-in">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-6">Cryptographic Signature Analysis</h3>
                                <div className="space-y-4">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-surface-container-lowest rounded-lg shadow-sm">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-tertiary">fingerprint</span>
                                            <span className="font-semibold text-sm">Active Asset Hash</span>
                                        </div>
                                        <code className="text-[10px] md:text-xs font-mono bg-surface-container p-2 rounded text-indigo-700 font-bold overflow-hidden">
                                            {localHash}
                                        </code>
                                    </div>
                                    {result && result.data && (
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-surface-container-lowest rounded-lg shadow-sm">
                                            <div className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-primary">database</span>
                                                <span className="font-semibold text-sm">Ledger Hash</span>
                                            </div>
                                            <code className="text-[10px] md:text-xs font-mono bg-surface-container p-2 rounded text-indigo-700 font-bold overflow-hidden">
                                                {result.data.originalHash}
                                            </code>
                                        </div>
                                    )}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Right Side: Status Indicators */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Verification Status Card */}
                        {result ? (
                            <div className={`${result.authentic ? 'bg-primary/5 ring-primary/20' : 'bg-error-container/10 ring-error/20'} rounded-xl p-10 flex flex-col items-center text-center relative overflow-hidden ring-1`}>
                                <div className={`absolute -top-24 -right-24 w-64 h-64 ${result.authentic ? 'bg-primary/10' : 'bg-error/10'} blur-[80px] rounded-full`}></div>
                                <div className={`w-24 h-24 ${result.authentic ? 'bg-primary' : 'bg-error'} text-white rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10`}>
                                    <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                                        {result.authentic ? 'verified_user' : 'report'}
                                    </span>
                                </div>
                                <span className={`${result.authentic ? 'bg-primary' : 'bg-error'} text-white text-[0.65rem] font-black uppercase tracking-[0.2em] px-4 py-1 rounded-full mb-4 relative z-10`}>
                                    {result.authentic ? 'Immutable Identity Confirmed' : 'Integrity Mismatch Detected'}
                                </span>
                                <h2 className="text-4xl font-black tracking-tighter text-on-surface mb-2 relative z-10">
                                    {result.authentic ? 'VALID SEAL' : 'INVALID SEAL'}
                                </h2>
                                <p className="text-on-surface-variant text-sm mb-8 px-4 font-medium relative z-10">
                                    {result.message}
                                </p>
                            </div>
                        ) : (
                            <div className="bg-surface-container-low p-10 rounded-xl flex flex-col items-center text-center border-2 border-dashed border-outline-variant/20">
                                <span className="material-symbols-outlined text-outline text-5xl mb-4">search_check</span>
                                <h3 className="font-bold text-on-surface">Awaiting Audit</h3>
                                <p className="text-xs text-on-surface-variant px-6 mt-2">Upload a file and provide the Assignment ID to begin the cryptographic verification process.</p>
                            </div>
                        )}

                        {/* Certificate of Authenticity (Mock but with data if available) */}
                        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_-10px_rgba(53,37,205,0.08)] relative border border-transparent">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">qr_code_2</span>
                                </div>
                                <h4 className="font-bold tracking-tight text-on-surface">Audit Metadata</h4>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-2 border-b border-surface-container">
                                    <span className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Protocol</span>
                                    <span className="text-xs font-bold text-on-surface">SHA-256 Genesis</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-surface-container">
                                    <span className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Node Status</span>
                                    <span className="text-xs font-bold text-emerald-600">Synchronized</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Verification;
