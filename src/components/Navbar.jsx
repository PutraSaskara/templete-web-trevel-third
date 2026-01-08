import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { siteConfig } from '../data/site-config';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { navbar, logo, siteName } = siteConfig.global;

    // Logo component - shows image if logoUrl exists, otherwise shows text
    const Logo = () => {
        if (logo?.url) {
            return (
                <img
                    src={logo.url}
                    alt={logo.alt || siteName}
                    style={{ height: logo.height || 40 }}
                    className="object-contain"
                />
            );
        }
        return (
            <span className="text-white font-bold text-lg md:text-xl tracking-wider uppercase">
                {navbar.logoText || siteName}
            </span>
        );
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-12 py-4 md:py-6">
            <div className="nav-glass rounded-lg flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border border-white/10 shadow-lg">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <Logo />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-200">
                    <button className="hover:text-white transition-colors">
                        <Search size={20} />
                    </button>
                    {navbar.links.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={`hover:text-white transition-all pb-1 uppercase tracking-wide ${location.pathname === link.href
                                ? 'border-b-2 border-white text-white'
                                : 'hover:border-b-2 hover:border-white/50'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="bg-primary hover:bg-opacity-80 text-white px-6 py-2 rounded transition-all uppercase text-xs font-bold tracking-wider"
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden nav-glass mt-2 rounded-lg border border-white/10 p-4 animate-fade-in">
                    <div className="flex flex-col space-y-4">
                        {navbar.links.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`text-gray-200 hover:text-white transition-colors uppercase text-sm tracking-wide ${location.pathname === link.href ? 'text-white font-bold' : ''
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="bg-primary text-white px-6 py-3 rounded text-center uppercase text-sm font-bold tracking-wider"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
