"use client";

import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';

export function Navbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
    return (
        <header className="fixed top-0 left-0 w-full h-16 border-b border-white/10 bg-black/50 backdrop-blur-xl z-50 flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={onToggleSidebar}
                    className="p-2 -ml-2 text-gray-400 hover:text-white md:hidden"
                >
                    <Menu className="w-6 h-6" />
                </button>
                <Link href="/" className="text-xl font-bold text-white hover:text-primary-400 transition-colors">
                    Trexzactyl
                </Link>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-white/70">v1.0</span>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search docs..."
                        className="bg-white/5 border border-white/10 rounded-full py-1.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary-500 transition-colors w-64"
                    />
                </div>
                <Link href="https://github.com/trexzactyl" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                    GitHub
                </Link>
            </div>
        </header>
    );
}
