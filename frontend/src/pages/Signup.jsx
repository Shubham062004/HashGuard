import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <main className="min-h-screen flex flex-col md:flex-row overflow-hidden bg-surface text-on-surface antialiased">
            {/* Left Side: Visual Anchor (Branding & Graphic) */}
            <section className="hidden md:flex w-1/2 relative bg-surface-container overflow-hidden items-center justify-center p-12">
                {/* Decorative Background Element */}
                <div className="absolute inset-0 opacity-10">
                    <img className="w-full h-full object-cover" alt="abstract network background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKeS9GXgdHmN632sD28wrX6pqsYxVTlLJ4bpnnUfvgnLY1pHR4H6JOaBbNOYFebQwBNXC1-nU2K3wmT_KRcfbUYMem_qWgNZ6mQCv2sIidx1i6FMIDpsMrbzApWkGPTqVlkO907ljWlk2BKzxiSkOqv8sbUHo89KncqrXk_sRfQKk5Gmj5g3wki6YM41p2fzTqmWurm_LtGIgBe6m7FVUrJf4LfqKMMTVnM6CwtbeIuQ23a03U15DhTULIuGDVp3pf3rA-Y6U8S30" />
                </div>
                <div className="relative z-10 w-full max-w-lg">
                    <div className="space-y-8">
                        {/* Proof-Seal Badge Context Component */}
                        <div className="inline-flex items-center gap-3 glass-panel px-4 py-2 rounded-full border border-outline-variant/20 shadow-ambient">
                            <span className="material-symbols-outlined text-primary text-sm">history_edu</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary font-label">The Immutable Archive</span>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-5xl font-extrabold tracking-tighter text-on-surface leading-tight">
                                Start your academic <span className="text-primary">legacy.</span>
                            </h1>
                            <p className="text-lg text-on-surface-variant font-medium leading-relaxed max-w-md">
                                Join thousands of scholars securing their intellectual property with cryptographic permanence.
                            </p>
                        </div>
                        {/* Visual Representation: Secure Creation/Legacy */}
                        <div className="relative group">
                            <div className="absolute inset-0 fluid-indigo-gradient blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            <div className="relative bg-surface-container-lowest p-8 rounded-2xl shadow-ambient border border-outline-variant/10 aspect-square flex flex-col items-center justify-center gap-6 overflow-hidden">
                                <div className="w-32 h-32 rounded-full fluid-indigo-gradient flex items-center justify-center shadow-lg">
                                    <span className="material-symbols-outlined text-on-primary text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>add_moderator</span>
                                </div>
                                <div className="text-center space-y-1">
                                    <div className="font-mono text-[10px] text-primary/60 tracking-widest uppercase">Protocol: Genesis-Archive</div>
                                    <div className="font-bold text-on-surface text-xl">Identity Verification Active</div>
                                </div>
                                {/* Decorative code/hashes */}
                                <div className="absolute bottom-4 left-0 right-0 overflow-hidden whitespace-nowrap opacity-20 pointer-events-none">
                                    <span className="font-mono text-[8px] text-slate-500 uppercase tracking-tighter italic">
                                        VERISUBMIT_SIGNUP_SESSION_ID_0x777...SHA512_ARCHIVE_ENCRYPTION_ENABLED
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Right Side: Sign Up Form */}
            <section className="flex-1 flex flex-col bg-surface-container-lowest px-6 py-12 md:px-24 justify-center relative">
                {/* Mobile Header Logo */}
                <div className="md:hidden absolute top-8 left-8">
                    <span className="text-xl font-extrabold tracking-tighter text-on-surface">HashGuard</span>
                </div>
                <div className="w-full max-w-md mx-auto space-y-8">
                    <header className="space-y-2">
                        <div className="hidden md:block text-2xl font-extrabold tracking-tighter text-on-surface mb-6">HashGuard</div>
                        <h2 className="text-3xl font-bold tracking-tight text-on-surface">Join the Archive</h2>
                        <p className="text-on-surface-variant font-medium">Create your tamper-proof identity to start securing academic excellence.</p>
                    </header>
                    <form className="space-y-5">
                        {/* Full Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold tracking-tight text-on-surface-variant font-label" htmlFor="full-name">Full Name</label>
                            <input className="w-full px-4 py-3 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-200 placeholder:text-outline/50 text-on-surface font-medium" id="full-name" placeholder="Enter your legal name" type="text" />
                        </div>
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold tracking-tight text-on-surface-variant font-label" htmlFor="email">Work Email</label>
                            <input className="w-full px-4 py-3 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-200 placeholder:text-outline/50 text-on-surface font-medium" id="email" placeholder="name@university.edu" type="email" />
                        </div>
                        {/* Role Selection */}
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
                        {/* Password Group */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold tracking-tight text-on-surface-variant font-label" htmlFor="password">Password</label>
                                <input className="w-full px-4 py-3 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-200 placeholder:text-outline/50 text-on-surface font-medium" id="password" placeholder="••••••••" type="password" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold tracking-tight text-on-surface-variant font-label" htmlFor="confirm-password">Confirm</label>
                                <input className="w-full px-4 py-3 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-200 placeholder:text-outline/50 text-on-surface font-medium" id="confirm-password" placeholder="••••••••" type="password" />
                            </div>
                        </div>
                        {/* Password Strength Indicator */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] uppercase tracking-tighter font-bold text-outline">Security Strength</span>
                                <span className="text-[10px] uppercase tracking-tighter font-bold text-primary">Moderate</span>
                            </div>
                            <div className="flex gap-1 h-1 w-full">
                                <div className="flex-1 bg-primary rounded-full"></div>
                                <div className="flex-1 bg-primary rounded-full"></div>
                                <div className="flex-1 bg-surface-container rounded-full"></div>
                                <div className="flex-1 bg-surface-container rounded-full"></div>
                            </div>
                            <p className="text-[10px] text-on-surface-variant italic">Requirement: 8+ characters with cryptographic diversity.</p>
                        </div>
                        {/* Primary Action */}
                        <div className="pt-2">
                            <button className="w-full fluid-indigo-gradient text-on-primary py-4 rounded-xl font-bold text-lg shadow-ambient hover:opacity-95 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2" type="submit">
                                <span>Create Account</span>
                                <span className="material-symbols-outlined text-xl">arrow_forward</span>
                            </button>
                        </div>
                    </form>
                    <footer className="text-center space-y-6">
                        <p className="text-on-surface-variant font-medium">
                            Already have an account? 
                            <Link className="text-primary font-bold hover:underline underline-offset-4 decoration-2" to="/login">Login</Link>
                        </p>
                        <div className="pt-8 border-t border-outline-variant/10">
                            <div className="flex justify-center gap-6">
                                <span className="text-[10px] uppercase font-bold tracking-widest text-outline/50">GDPR Compliant</span>
                                <span className="text-[10px] uppercase font-bold tracking-widest text-outline/50">AES-256 Encrypted</span>
                                <span className="text-[10px] uppercase font-bold tracking-widest text-outline/50">SOC2 Type II</span>
                            </div>
                        </div>
                    </footer>
                </div>
                {/* Floating Background Decoration */}
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div >
            </section>
        </main>
    );
};

export default Signup;
