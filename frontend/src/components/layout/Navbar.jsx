import React from 'react';
import { Bell, Search, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center bg-slate-100 rounded-md px-3 py-1.5 w-64">
        <Search className="w-4 h-4 text-slate-400 mr-2" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="bg-transparent border-none outline-none text-sm text-slate-700 w-full placeholder:text-slate-400"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-slate-500 hover:text-slate-700 relative transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-indigo-500 rounded-full"></span>
        </button>
        <div className="h-8 w-8 bg-indigo-100 text-indigo-700 flex items-center justify-center rounded-full font-semibold cursor-pointer border border-indigo-200">
          <User className="w-4 h-4" />
        </div>
      </div>
    </header>
  );
}
