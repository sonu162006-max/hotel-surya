import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { HOTEL_INFO, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-brand-navy text-white pt-20 pb-10 border-t-4 border-brand-gold">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    
                    {/* Brand Info */}
                    <div>
                         <a href="#" className="text-white font-serif text-2xl font-bold tracking-wider block mb-6">
                            GRAND <span className="text-brand-gold">SURYA</span>
                        </a>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {HOTEL_INFO.description}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-brand-gold">Quick Links</h4>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-gray-400 hover:text-brand-gold transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-brand-gold">Our Services</h4>
                        <ul className="space-y-3">
                            {['Restaurant & Bar', 'Banquet Hall', 'Conference Room', 'Wedding Venue', 'Luxury Rooms'].map((service) => (
                                <li key={service} className="text-gray-400 flex items-center gap-2">
                                     <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-brand-gold">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-brand-gold shrink-0 mt-1" size={20} />
                                <span>{HOTEL_INFO.location}</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-brand-gold shrink-0" size={20} />
                                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-white transition-colors">{HOTEL_INFO.phone}</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-brand-gold shrink-0" size={20} />
                                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-white transition-colors">{HOTEL_INFO.email}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Hotel Grand Surya. All rights reserved. 
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;