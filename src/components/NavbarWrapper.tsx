"use client";

import { Navbar } from "./Navbar";

export function NavbarWrapper() {
    const toggleSidebar = () => {
        // This will dispatch a custom event for the DocsLayout to listen to
        window.dispatchEvent(new CustomEvent('toggle-sidebar'));
    };

    return <Navbar onToggleSidebar={toggleSidebar} />;
}
