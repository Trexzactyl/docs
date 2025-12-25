import Link from 'next/link';
import { getDocSlugs } from '@/lib/docs';

// Manual sidebar configuration for now to match the user's previous structure
// Or we can generate it. For premium feel, categorized is best.

const sidebarData = [
    {
        title: 'Panel (v1.x)',
        items: [
            { title: 'Install Dependencies', href: '/docs/panel/install/dependencies' },
            { title: 'Download Files', href: '/docs/panel/install/download' },
            { title: 'Database Setup', href: '/docs/panel/install/database' },
            { title: 'Environment Setup', href: '/docs/panel/install/environment' },
            { title: 'Queue Workers', href: '/docs/panel/install/queue-workers' },
        ]
    },
    {
        title: 'Webserver Setup',
        items: [
            { title: 'SSL Setup', href: '/docs/panel/webservers/setup-ssl' },
            { title: 'NGINX (SSL)', href: '/docs/panel/webservers/nginx-ssl' },
            { title: 'NGINX', href: '/docs/panel/webservers/nginx' },
            { title: 'Apache (SSL)', href: '/docs/panel/webservers/apache-ssl' },
            { title: 'Apache', href: '/docs/panel/webservers/apache' },
            { title: 'DirectAdmin', href: '/docs/panel/webservers/directadmin' },
        ]
    },
    {
        title: 'Updating',
        items: [
            { title: 'Manual Update', href: '/docs/panel/updating/manual' },
        ]
    },
    {
        title: 'Additional Config',
        items: [
            { title: 'Discord OAuth', href: '/docs/discord/oauth' },
            { title: 'PayPal', href: '/docs/payments/paypal' },
            { title: 'Stripe', href: '/docs/payments/stripe' },
            { title: 'Renewals', href: '/docs/config/renewal' },
        ]
    },
    {
        title: 'Building',
        items: [
            { title: 'Install Tools', href: '/docs/build/install' },
            { title: 'Build Frontend', href: '/docs/build/building' },
        ]
    }
];

export function Sidebar({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    return (
        <>
            {/* Mobile Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden"
                    onClick={onClose}
                />
            )}

            <aside className={`
        w-64 h-[calc(100vh-4rem)] fixed left-0 top-16 overflow-y-auto border-r border-white/10 bg-black/50 backdrop-blur-xl p-4 transition-transform duration-300 z-[60]
        md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
                <nav className="space-y-8">
                    {sidebarData.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold text-primary-400 mb-2 uppercase text-xs tracking-wider">{section.title}</h3>
                            <ul className="space-y-1">
                                {section.items.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            onClick={onClose}
                                            className="block px-2 py-1.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>
        </>
    );
}
