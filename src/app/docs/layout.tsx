"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleToggle = () => setIsSidebarOpen(prev => !prev);
        window.addEventListener('toggle-sidebar', handleToggle);
        return () => window.removeEventListener('toggle-sidebar', handleToggle);
    }, []);

    return (
        <div className="flex">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <div className="flex-1 md:ml-64 p-6 md:p-12 max-w-4xl mx-auto w-full">
                {children}
            </div>
        </div>
    );
}
