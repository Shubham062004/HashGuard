import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <main className="min-h-screen flex flex-col md:flex-row overflow-hidden bg-surface text-on-surface antialiased">
            {/* Left Side: Visual Anchor (Hidden on Mobile for focus) */}
            <section className="hidden md:flex w-1/2 relative bg-surface-container overflow-hidden items-center justify-center p-12">
                {/* Decorative Background Element */}
                <div className="absolute inset-0 opacity-10">
                    <img className="w-full h-full object-cover" alt="abstract network background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKeS9GXgdHmN632sD28wrX6pqsYxVTlLJ4bpnnUfvgnLY1pHR4H6JOaBbNOYFebQwBNXC1-nU2K3wmT_KRcfbUYMem_qWgNZ6mQCv2sIidx1i6FMIDpsMrbzApWkGPTqVlkO907ljWlk2BKzxiSkOqv8sbUHo89KncqrXk_sRfQKk5Gmj5g3wki6YM41p2fzTqmWurm_LtGIgBe6m7FVUrJf4LfqKMMTVnM6CwtbeIuQ23a03U15DhTULIuGDVp3pf3rA-Y6U8S30" />
                </div>
                <div className="relative z-10 w-full max-w-lg">
                    <div className="space-y-8">
                        {/* Proof-Seal Badge Context Component */}
                        <div className="inline-flex items-center gap-3 glass-panel px-4 py-2 rounded-full border border-outline-variant/20 shadow-ambient">
                            <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary font-label">The Immutable Archive</span>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-5xl font-extrabold tracking-tighter text-on-surface leading-tight">
                                Secure your academic <span className="text-primary">legacy.</span>
                            </h1>
                            <p className="text-lg text-on-surface-variant font-medium leading-relaxed max-w-md">
                                HashGuard utilizes cryptographic timestamps to ensure your submissions are tamper-proof and permanently archived.
                            </p>
                        </div>
                        {/* Visual Representation: Secure Vault/Seal */}
                        <div className="relative group">
                            <div className="absolute inset-0 fluid-indigo-gradient blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            <div className="relative bg-surface-container-lowest p-8 rounded-2xl shadow-ambient border border-outline-variant/10 aspect-square flex flex-col items-center justify-center gap-6 overflow-hidden">
                                <div className="w-32 h-32 rounded-full fluid-indigo-gradient flex items-center justify-center shadow-lg">
                                    <span className="material-symbols-outlined text-on-primary text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                                </div>
                                <div className="text-center space-y-1">
                                    <div className="font-mono text-[10px] text-primary/60 tracking-widest uppercase">SHA-256 Verified</div>
                                    <div className="font-bold text-on-surface text-xl">System Integrity: 100%</div>
                                </div>
                                {/* Decorative code/hashes */}
                                <div className="absolute bottom-4 left-0 right-0 overflow-hidden whitespace-nowrap opacity-20 pointer-events-none">
                                    <span className="font-mono text-[8px] text-slate-500 uppercase tracking-tighter italic">
                                        0x4f46e5...3525cd...93000a...ba1a1a...454386...c7c4d8...e7eefe...f9f9ff
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Right Side: Login Form */}
            <section className="flex-1 flex flex-col bg-surface-container-lowest px-6 py-12 md:px-24 justify-center relative">
                {/* Mobile Header Logo */}
                <div className="md:hidden absolute top-8 left-8">
                    <span className="text-xl font-extrabold tracking-tighter text-on-surface">HashGuard</span>
                </div>
                <div className="w-full max-w-md mx-auto space-y-10">
                    <header className="space-y-2">
                        <div className="hidden md:block text-2xl font-extrabold tracking-tighter text-on-surface mb-8">HashGuard</div>
                        <h2 className="text-3xl font-bold tracking-tight text-on-surface">Welcome back</h2>
                        <p className="text-on-surface-variant font-medium">Please enter your credentials to access the vault.</p>
                    </header>
                    <form className="space-y-6">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold tracking-tight text-on-surface-variant font-label" htmlFor="email">Work Email</label>
                            <div className="relative">
                                <input className="w-full px-4 py-3.5 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-200 placeholder:text-outline/50 text-on-surface font-medium" id="email" placeholder="name@university.edu" type="email" />
                            </div>
                        </div>
                        {/* Password Field */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold tracking-tight text-on-surface-variant font-label" htmlFor="password">Password</label>
                                <Link className="text-xs font-bold text-primary hover:text-on-primary-fixed-variant transition-colors" to="#">Forgot password?</Link>
                            </div>
                            <div className="relative group">
                                <input className="w-full px-4 py-3.5 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-200 placeholder:text-outline/50 text-on-surface font-medium" id="password" placeholder="••••••••" type="password" />
                                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors" type="button">
                                    <span className="material-symbols-outlined text-xl">visibility</span>
                                </button>
                            </div>
                        </div>
                        {/* Role Selection Hint */}
                        <div className="space-y-3">
                            <span className="text-xs font-bold uppercase tracking-widest text-outline/70 block">Identify your role</span>
                            <div className="grid grid-cols-2 gap-3">
                                <label className="cursor-pointer group">
                                    <input defaultChecked name="role" type="radio" className="hidden peer" />
                                    <div className="flex items-center justify-center gap-2 p-3 rounded-xl border border-outline-variant/20 bg-surface-container-low peer-checked:bg-surface-container peer-checked:border-primary peer-checked:text-primary transition-all group-hover:bg-surface-container-high">
                                        <span className="material-symbols-outlined text-lg">school</span>
                                        <span className="text-sm font-bold">Student</span>
                                    </div>
                                </label>
                                <label className="cursor-pointer group">
                                    <input name="role" type="radio" className="hidden peer" />
                                    <div className="flex items-center justify-center gap-2 p-3 rounded-xl border border-outline-variant/20 bg-surface-container-low peer-checked:bg-surface-container peer-checked:border-primary peer-checked:text-primary transition-all group-hover:bg-surface-container-high">
                                        <span className="material-symbols-outlined text-lg">workspace_premium</span>
                                        <span className="text-sm font-bold">Teacher</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        {/* Options */}
                        <div className="flex items-center gap-3">
                            <input className="w-5 h-5 rounded border-outline-variant/30 text-primary focus:ring-primary/20 bg-surface-container-low" id="remember" type="checkbox" />
                            <label className="text-sm font-medium text-on-surface-variant" htmlFor="remember">Remember me for 30 days</label>
                        </div>
                        {/* Primary Action */}
                        <button className="w-full fluid-indigo-gradient text-on-primary py-4 rounded-xl font-bold text-lg shadow-ambient hover:opacity-95 active:scale-[0.98] transition-all duration-200" type="submit">
                            Login
                        </button>
                    </form>
                    <footer className="text-center space-y-8">
                        <p className="text-on-surface-variant font-medium">
                            Don't have an account? 
                            <Link className="text-primary font-bold hover:underline underline-offset-4 decoration-2" to="/signup">Sign up</Link>
                        </p>
                        <div className="pt-10 border-t border-outline-variant/10">
                            <div className="flex justify-center gap-6">
                                <span className="text-[10px] uppercase font-bold tracking-widest text-outline/50">GDPR Compliant</span>
                                <span className="text-[10px] uppercase font-bold tracking-widest text-outline/50">AES-256 Encrypted</span>
                                <span className="text-[10px] uppercase font-bold tracking-widest text-outline/50">SOC2 Type II</span>
                            </div>
                        </div>
                    </footer>
                </div>
                {/* Floating Background Decoration for form side */}
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            </section>
        </main>
    );
};

export default Login;
