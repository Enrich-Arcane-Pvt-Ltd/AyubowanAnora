import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const links = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Sponsors (UAE & SL)', href: '/sponsors' },
        { name: 'Packages & Seminars', href: '/packages' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <nav className="fixed z-50 w-full border-b bg-brand-dark/80 backdrop-blur-md border-white/10">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link href="#" className="relative block w-40 h-10">
                            <Image
                                src="/Images/img7.png"
                                alt="Ayubowan Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-baseline ml-10 space-x-8">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="px-3 py-2 text-sm font-medium transition-all rounded-md hover:text-transparent hover:bg-clip-text hover:bg-brand-gradient"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Link href="/events" className="px-6 py-2 text-sm font-bold text-white transition-all rounded-full bg-brand-gradient hover:opacity-90">
                            Explore Events
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}