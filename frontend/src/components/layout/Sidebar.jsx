import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldCheck, LayoutDashboard, UploadCloud, FileCheck, User } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="h-full flex flex-col text-slate-300">
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <ShieldCheck className="w-6 h-6 text-indigo-400 mr-2" />
        <span className="font-bold text-lg text-white tracking-wide">HashGuard</span>
      </div>
      
      <div className="flex-1 py-6 px-4 space-y-1">
        <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Student</p>
        <NavLink 
          to="/dashboard/student" 
          className={({isActive}) => `flex items-center px-3 py-2 rounded-md transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
          end
        >
          <LayoutDashboard className="w-4 h-4 mr-3" />
          Dashboard
        </NavLink>
        <NavLink 
          to="/dashboard/student/upload" 
          className={({isActive}) => `flex items-center px-3 py-2 rounded-md transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
        >
          <UploadCloud className="w-4 h-4 mr-3" />
          Submit Assignment
        </NavLink>

        <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-8">Teacher</p>
        <NavLink 
          to="/dashboard/teacher" 
          className={({isActive}) => `flex items-center px-3 py-2 rounded-md transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
          end
        >
          <LayoutDashboard className="w-4 h-4 mr-3" />
          Submissions
        </NavLink>
        <NavLink 
          to="/dashboard/teacher/verify" 
          className={({isActive}) => `flex items-center px-3 py-2 rounded-md transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
        >
          <FileCheck className="w-4 h-4 mr-3" />
          Verify Integrity
        </NavLink>

        <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-8">Settings</p>
        <NavLink 
          to="/dashboard/profile" 
          className={({isActive}) => `flex items-center px-3 py-2 rounded-md transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
        >
          <User className="w-4 h-4 mr-3" />
          Profile
        </NavLink>
      </div>
    </div>
  );
}
