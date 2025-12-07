import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { HOTEL_INFO, NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-navy shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="#" className="text-white font-serif text-2xl md:text-3xl font-bold tracking-wider">
                            GRAND <span className="text-brand-gold">SURYA</span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <a 
                                key={link.label}
                                href={link.href} 
                                className="text-white hover:text-brand-gold transition-colors text-sm uppercase tracking-widest font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a 
                            href={`tel:${HOTEL_INFO.phone}`}
                            className="flex items-center gap-2 bg-brand-gold hover:bg-brand-goldlight text-brand-navy px-4 py-2 rounded-sm font-semibold transition-colors"
                        >
                            <Phone size={16} />
                            <span>Book Now</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={toggleMenu} 
                        className="md:hidden text-white hover:text-brand-gold focus:outline-none"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-brand-navy shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="flex flex-col px-4 py-4 space-y-4">
                    {NAV_LINKS.map((link) => (
                        <a 
                            key={link.label}
                            href={link.href} 
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-brand-gold border-b border-gray-700 pb-2 text-sm uppercase tracking-widest"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a 
                        href={`tel:${HOTEL_INFO.phone}`}
                        className="flex items-center justify-center gap-2 bg-brand-gold text-brand-navy px-4 py-3 rounded-sm font-bold"
                    >
                        <Phone size={18} />
                        <span>{HOTEL_INFO.phone}</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;