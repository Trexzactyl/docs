"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Github, MessageSquare, Book } from "lucide-react";

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleToggle = () => setIsOpen(prev => !prev);
        window.addEventListener('toggle-sidebar', handleToggle);
        return () => window.removeEventListener('toggle-sidebar', handleToggle);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] md:hidden">
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
            />
            <nav className="fixed right-0 top-0 bottom-0 w-80 bg-black border-l border-white/10 p-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-right duration-300">
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-white">Menu</span>
                    <button onClick={() => setIsOpen(false)} className="p-2 text-gray-400 hover:text-white">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    <Link
                        href="/docs/panel/install/dependencies"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                    >
                        <Book className="w-5 h-5 text-primary-400" />
                        <span className="font-medium">Documentation</span>
                    </Link>

                    <Link
                        href="https://discord.gg/Uf59NRyYU9"
                        target="_blank"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                    >
                        <MessageSquare className="w-5 h-5 text-blue-400" />
                        <span className="font-medium">Discord</span>
                    </Link>

                    <Link
                        href="https://github.com/trexzactyl"
                        target="_blank"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                    >
                        <Github className="w-5 h-5 text-gray-400" />
                        <span className="font-medium">GitHub</span>
                    </Link>
                </div>

                <div className="mt-auto pb-4">
                    <p className="text-sm text-gray-500 text-center">Trexzactyl &copy; 2025</p>
                </div>
            </nav>
        </div>
    );
}
