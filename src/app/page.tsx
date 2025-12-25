import Link from "next/link";
import { ArrowRight, Terminal, Server, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-8 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary-300 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          v1.0 is now available
        </div>

        <h1 className="text-4xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent pb-4">
          The Future of Game Server Management
        </h1>

        <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Trexzactyl aims to improve already-existing features of Pterodactyl as well as integrate many more functions to make this software easier, more advanced, and nicer to use.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/docs/panel/install/dependencies" className="w-full sm:w-auto group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary-600 px-8 font-medium text-white transition-all duration-300 hover:bg-primary-700 hover:scale-105 active:scale-95 focus:outline-none ring-offset-2 focus:ring-2 ring-primary-500">
            <span className="mr-2">Get Started</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
          </Link>

          <Link href="https://github.com/trexzactyl" target="_blank" className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md border border-white/10 bg-white/5 px-8 font-medium text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95">
            View Source
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-16 text-left">
          <FeatureCard
            icon={<Terminal className="w-6 h-6 text-primary-400" />}
            title="Modern Stack"
            description="Built using the latest dependencies and packages for maximum performance."
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6 text-primary-400" />}
            title="Secure & Scalable"
            description="Enterprise-grade security features and scalable architecture out of the box."
          />
          <FeatureCard
            icon={<Server className="w-6 h-6 text-primary-400" />}
            title="Resource Management"
            description="Advanced tools for purchasing resources and creating servers easily."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/50 transition-colors">
      <div className="w-12 h-12 rounded-lg bg-black/50 flex items-center justify-center mb-4 border border-white/10">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
