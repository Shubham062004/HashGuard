import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="bg-background text-on-surface font-body min-h-screen antialiased">
            {/* Sidebar (SideNavBar) */}
            <aside className="fixed left-0 h-full w-64 z-40 bg-slate-50 flex flex-col py-6 px-4 gap-2 bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 hidden md:flex border-r border-slate-100">
                <div className="mb-8 px-4">
                    <h1 className="text-lg font-black text-indigo-700 tracking-tighter">HashGuard</h1>
                    <p className="text-xs font-medium text-slate-500">Tamper-Proof System</p>
                </div>
                <nav className="flex-1 space-y-1">
                    <Link className="text-slate-600 px-4 py-2 hover:bg-slate-100 flex items-center gap-3 transition-transform duration-200 hover:translate-x-1 font-medium text-sm rounded-lg" to="/dashboard/student">
                        <span className="material-symbols-outlined">dashboard</span>
                        Overview
                    </Link>
                    <Link className="text-slate-600 px-4 py-2 hover:bg-slate-100 flex items-center gap-3 transition-transform duration-200 hover:translate-x-1 font-medium text-sm rounded-lg" to="/dashboard/student/submissions">
                        <span className="material-symbols-outlined">description</span>
                        Submissions
                    </Link>
                    <Link className="text-slate-600 px-4 py-2 hover:bg-slate-100 flex items-center gap-3 transition-transform duration-200 hover:translate-x-1 font-medium text-sm rounded-lg" to="/dashboard/student/verification">
                        <span className="material-symbols-outlined">verified_user</span>
                        Verification
                    </Link>
                    <Link className="bg-indigo-50 text-indigo-700 rounded-lg px-4 py-2 font-semibold flex items-center gap-3 text-sm" to="/dashboard/profile">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
                        Settings
                    </Link>
                </nav>
                <div className="mt-auto pt-6 space-y-1 border-t border-slate-100">
                    <Link className="text-slate-600 px-4 py-2 hover:bg-slate-100 flex items-center gap-3 transition-transform duration-200 hover:translate-x-1 font-medium text-sm rounded-lg" to="#">
                        <span className="material-symbols-outlined">help</span>
                        Support
                    </Link>
                    <Link className="text-slate-600 px-4 py-2 hover:bg-slate-100 flex items-center gap-3 transition-transform duration-200 hover:translate-x-1 font-medium text-sm rounded-lg" to="/login">
                        <span className="material-symbols-outlined">logout</span>
                        Sign Out
                    </Link>
                </div>
            </aside>

            {/* Top Navigation (TopNavBar) */}
            <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md flex justify-between items-center px-8 h-16 shadow-[0_20px_40px_-10px_rgba(53,37,205,0.08)]">
                <div className="flex items-center gap-8">
                    <div className="text-xl font-extrabold tracking-tighter text-indigo-700">HashGuard</div>
                    <nav className="hidden md:flex gap-6 items-center">
                        <Link className="text-slate-500 hover:text-indigo-500 transition-colors text-sm font-inter tracking-tight" to="/dashboard/student">Dashboard</Link>
                        <Link className="text-slate-500 hover:text-indigo-500 transition-colors text-sm font-inter tracking-tight" to="/dashboard/student/verification">Verification</Link>
                        <Link className="text-slate-500 hover:text-indigo-500 transition-colors text-sm font-inter tracking-tight" to="/dashboard/student/submissions">Submissions</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <button className="p-2 text-slate-500 hover:bg-indigo-50/50 rounded-full transition-all">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <div className="h-8 w-8 rounded-full overflow-hidden ring-2 ring-indigo-500/20">
                        <img alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLm4EVlaiNtXAnNs2Ld5XIDnuYxx3rOKw-_IXk02ii77kUq-7KtVngTnKpw7vi0AvAFk9vx4n3hbwRx7msQhD6yGgHVZ8P2xpjylCOqDJ8yIgF9fvHfDKFOhxpDYB1YTG4KmQlrI0RVnQUGg-yk1IVU5d6rysCjEZnAtAw9LeOCq8ap4FjgbS6e1YRbMCTKG1S5Wx8iOP1Uz37q_RsRu74vq7SPNC0btSJUGtDCcj6p9ypxKuQiqbrKMpzvK0sY_yUESfwUwODPK0" />
                    </div>
                </div>
            </header>

            {/* Main Canvas */}
            <main className="md:ml-64 pt-24 pb-12 px-6 md:px-12 lg:px-20 min-h-screen flex flex-col gap-10">
                {/* Header Section */}
                <section className="max-w-5xl w-full mx-auto">
                    <div className="mb-4">
                        <span className="text-xs font-bold tracking-widest text-primary uppercase font-label">Account Preferences</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface font-headline tracking-tighter mt-2">User Profile</h2>
                    </div>
                </section>

                {/* Profile Bento Grid */}
                <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* 1. User Info Card */}
                    <section className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-8 shadow-[0_20px_40px_-10px_rgba(53,37,205,0.08)] flex flex-col md:flex-row gap-8 items-center md:items-start border border-transparent">
                        <div className="relative group">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden relative shadow-xl">
                                <img alt="User avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwteYblVCiydoqQRnPQR72pkXCQSbVYb7txmJXckpVT9Tgoe2ENgbwy4VKyhPZSjfObuk66XG-Jrp9vcKyFerWobSLwG8lEvMtOyM348edpF3e9qrrjRum9w5LAfS8pKYyclfjq1Xzq-HVBOxF6DwhLx56pwAJPFU0cZ2iy0-FSEIap4RumOOmihbjfhxXUJ_ZVTRHXign0rJ69OUo9E8xbjTbrvMrGD4NCqd6KChWksTZsjSmJirZRYlFp7BShM-Owa5pIHtq-18" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm cursor-pointer">
                                    <span className="material-symbols-outlined text-white text-3xl">photo_camera</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-primary-container text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                                Verified
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left space-y-4">
                            <div>
                                <p className="text-xs font-bold tracking-widest text-primary uppercase font-label mb-1">Identity Profile</p>
                                <h3 className="text-3xl font-bold text-on-surface tracking-tight">Dr. Julian Sterling</h3>
                                <p className="text-on-surface-variant font-medium mt-1">julian.sterling@hashguard.edu</p>
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-lg">
                                    <span className="material-symbols-outlined text-primary text-sm">school</span>
                                    <span className="text-sm font-semibold text-secondary">Senior Teacher</span>
                                </div>
                                <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-lg">
                                    <span className="material-symbols-outlined text-primary text-sm">id_card</span>
                                    <span className="text-sm font-semibold text-secondary">ID: 8829-X</span>
                                </div>
                            </div>
                            <div className="pt-4 flex items-center gap-4 text-xs text-on-surface-variant font-medium">
                                <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                                    Joined Oct 2023
                                </span>
                                <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">location_on</span>
                                    London, UK
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* 2. Stats Section */}
                    <section className="lg:col-span-4 grid grid-cols-1 gap-6 text-on-primary">
                        <div className="bg-primary-container rounded-xl p-6 shadow-xl flex flex-col justify-between relative overflow-hidden group">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                            <div>
                                <span className="material-symbols-outlined text-3xl mb-4 text-white">cloud_upload</span>
                                <h4 className="text-sm font-bold tracking-widest uppercase opacity-80 font-label text-white">Total Uploads</h4>
                            </div>
                            <div className="mt-4">
                                <span className="text-5xl font-black tracking-tighter leading-none text-white">1,284</span>
                                <p className="text-xs font-medium mt-2 opacity-70 text-white">Immutable documents stored</p>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_20px_40px_-10px_rgba(53,37,205,0.08)] flex flex-col justify-between border-l-4 border-primary text-on-surface">
                            <div>
                                <span className="material-symbols-outlined text-3xl text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                <h4 className="text-sm font-bold tracking-widest text-on-surface-variant uppercase font-label">Verified Integrity</h4>
                            </div>
                            <div className="mt-4">
                                <span className="text-5xl font-black text-on-surface tracking-tighter leading-none">100%</span>
                                <p className="text-xs font-medium mt-2 text-primary uppercase font-bold">Cryptographically sound</p>
                            </div>
                        </div>
                    </section>

                    {/* 3. Security & Management */}
                    <section className="lg:col-span-12 bg-surface-container-lowest rounded-xl p-8 shadow-[0_20px_40px_-10px_rgba(53,37,205,0.08)] border border-transparent">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                            <div>
                                <h3 className="text-2xl font-bold text-on-surface tracking-tight">Security & Management</h3>
                                <p className="text-on-surface-variant text-sm mt-1">Manage your account credentials and system access.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <button className="flex items-center justify-between p-5 bg-surface-container-low hover:bg-surface-container rounded-xl transition-all group">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                                        <span className="material-symbols-outlined">edit</span>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-bold text-on-surface">Edit Profile</p>
                                        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label">Personal Details</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:translate-x-1 transition-all">chevron_right</span>
                            </button>
                            <button className="flex items-center justify-between p-5 bg-surface-container-low hover:bg-surface-container rounded-xl transition-all group">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                                        <span className="material-symbols-outlined">lock</span>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-bold text-on-surface">Change Password</p>
                                        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label">Security Shield</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:translate-x-1 transition-all">chevron_right</span>
                            </button>
                            <button className="flex items-center justify-between p-5 bg-error-container/20 hover:bg-error-container/40 rounded-xl transition-all group border border-error/5">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-error shadow-sm">
                                        <span className="material-symbols-outlined">logout</span>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-bold text-error">Terminate Session</p>
                                        <p className="text-[10px] text-error/60 uppercase tracking-widest font-label">Logout</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-error/40 group-hover:translate-x-1 transition-all">chevron_right</span>
                            </button>
                        </div>
                    </section>

                    {/* Proof-Seal Branding */}
                    <section className="lg:col-span-12 flex flex-col items-center py-10 opacity-40">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-[1px] bg-outline-variant"></div>
                            <span className="material-symbols-outlined text-primary text-lg">fingerprint</span>
                            <div className="w-8 h-[1px] bg-outline-variant"></div>
                        </div>
                        <div className="text-center">
                            <p className="text-[10px] font-mono tracking-tighter text-on-surface-variant">SHA-256: 8f3c...a9b2</p>
                            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary mt-1">Immutable Identity Protocol v4.0</p>
                        </div>
                    </section>
                </div>
            </main>

            {/* Bottom Navigation for Mobile */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg h-16 flex items-center justify-around px-4 border-t border-indigo-50 z-50">
                <button className="flex flex-col items-center gap-1 text-slate-400">
                    <span className="material-symbols-outlined">dashboard</span>
                    <span className="text-[10px] font-bold">Home</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-slate-400">
                    <span className="material-symbols-outlined">description</span>
                    <span className="text-[10px] font-bold">Vault</span>
                </button>
                <div className="relative">
                    <button className="flex flex-col items-center justify-center bg-primary text-white w-12 h-12 rounded-full absolute -top-10 left-1/2 -translate-x-1/2 shadow-xl border-4 border-white">
                        <span className="material-symbols-outlined">add</span>
                    </button>
                </div>
                <button className="flex flex-col items-center gap-1 text-slate-400">
                    <span className="material-symbols-outlined">verified_user</span>
                    <span className="text-[10px] font-bold">Verify</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-indigo-700">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
                    <span className="text-[10px] font-bold">Profile</span>
                </button>
            </nav>
        </div>
    );
};

export default Profile;
