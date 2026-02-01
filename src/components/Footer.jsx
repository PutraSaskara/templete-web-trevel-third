import { Link } from 'react-router-dom';
import { siteConfig } from '../data/site-config';

export default function Footer() {
    const { footer, navbar, logo, siteName } = siteConfig.global;

    // Logo component - shows image if logoUrl exists, otherwise shows text
    const Logo = () => {
        if (logo?.url) {
            return (
                <img
                    src={logo.url}
                    alt={logo.alt || siteName}
                    style={{ height: 32 }}
                    className="object-contain"
                />
            );
        }
        return (
            <span className="text-white font-bold text-lg tracking-wider uppercase">
                {navbar.logoText || siteName}
            </span>
        );
    };

    return (
        <footer className="bg-black text-gray-500 py-12 md:py-16 border-t border-gray-800">
            <div className="container mx-auto px-6 md:px-12">
                {/* Top section with logo and links */}
                <div className="flex flex-col items-center gap-8 mb-10">
                    {/* Logo - centered on mobile */}
                    <Link to="/" className="flex items-center animate-fade-in">
                        <Logo />
                    </Link>

                    {/* Navigation Links - Grid on mobile, flex on desktop */}
                    <nav className="w-full">
                        <div className="grid grid-cols-2 gap-4 md:flex md:items-center md:justify-center md:gap-8">
                            {navbar.links.map((link, index) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className={`text-center py-3 px-4 rounded-lg bg-surface/50 md:bg-transparent hover:bg-surface md:hover:bg-transparent hover:text-white transition-all duration-300 uppercase text-sm font-medium tracking-wide animate-fade-in-up stagger-${index + 1}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className={`text-center py-3 px-4 rounded-lg bg-primary/20 md:bg-transparent hover:bg-primary/30 md:hover:bg-transparent text-primary md:text-gray-500 hover:text-white transition-all duration-300 uppercase text-sm font-medium tracking-wide col-span-2 md:col-span-1 animate-fade-in-up stagger-${navbar.links.length + 1}`}
                            >
                                Contact
                            </Link>
                        </div>
                    </nav>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-4">
                        {/* Contact Person */}
                        <div className="text-center md:text-left text-sm">
                            <span className="text-gray-600">Contact Person</span>
                            <span className="text-white ml-2 font-medium">{footer.contact}</span>
                        </div>

                        {/* Copyright */}
                        <div className="text-center md:text-right text-xs text-gray-600">
                            {footer.copyright}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
