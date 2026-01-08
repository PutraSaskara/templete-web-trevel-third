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
        <footer className="bg-black text-gray-500 py-12 border-t border-gray-800">
            <div className="container mx-auto px-6 md:px-12">
                {/* Top section with logo and links */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <Logo />
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-6 text-sm">
                        {navbar.links.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="hover:text-white transition-colors uppercase"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="hover:text-white transition-colors uppercase"
                        >
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                        <div>
                            Contact Person <span className="text-white ml-2">{footer.contact}</span>
                        </div>
                        <div>
                            {footer.copyright}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
