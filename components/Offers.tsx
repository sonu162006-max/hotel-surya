import React from 'react';
import { Tag } from 'lucide-react';
import { OfferType } from '../types';

const offers: OfferType[] = [
    {
        id: 1,
        title: "Book Direct",
        description: "Get the best rate guaranteed when you book directly through our website or phone.",
        discount: "10% OFF",
        code: "DIRECT10"
    },
    {
        id: 2,
        title: "Early Bird",
        description: "Plan ahead and save. Book at least 15 days in advance.",
        discount: "15% OFF",
        code: "EARLY15"
    },
    {
        id: 3,
        title: "Extended Stay",
        description: "Stay for 3 nights or more and enjoy special discounted rates.",
        discount: "20% OFF",
        code: "LONGSTAY"
    },
    {
        id: 4,
        title: "Festive Delight",
        description: "Special packages for wedding guests and festival holidays.",
        discount: "Special Deal",
        code: "FESTIVE"
    }
];

const Offers: React.FC = () => {
    return (
        <section id="offers" className="py-20 bg-brand-navy text-white relative overflow-hidden">
             {/* Decorative pattern */}
             <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-brand-gold uppercase tracking-widest font-semibold text-sm">Promotions</span>
                    <h2 className="text-4xl font-serif font-bold mt-2">Special Offers</h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offers.map((offer) => (
                        <div key={offer.id} className="border border-brand-gold/30 bg-white/5 backdrop-blur-sm p-6 rounded hover:bg-white/10 transition-colors group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-brand-gold text-brand-navy font-bold text-xs px-2 py-1 rounded uppercase">
                                    {offer.discount}
                                </div>
                                <Tag className="text-brand-gold group-hover:rotate-12 transition-transform" size={20} />
                            </div>
                            <h3 className="text-xl font-serif font-bold mb-3">{offer.title}</h3>
                            <p className="text-gray-300 text-sm mb-6">{offer.description}</p>
                            <div className="border-t border-gray-700 pt-4">
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Use Code:</span>
                                <span className="block text-brand-gold font-mono font-bold text-lg">{offer.code}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offers;