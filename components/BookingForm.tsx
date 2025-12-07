import React from 'react';
import { Calendar, Users, Home } from 'lucide-react';

const BookingForm: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your inquiry! Our reception will contact you shortly to confirm availability.');
    };

    return (
        <div className="relative z-20 -mt-24 container mx-auto px-4 mb-20">
            <div className="bg-white rounded shadow-xl p-6 md:p-8">
                <h3 className="text-brand-navy font-serif text-2xl font-bold mb-6 text-center md:text-left">Check Availability</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Check In</label>
                        <div className="relative">
                            <input type="date" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold text-gray-700 bg-transparent" required />
                            <Calendar className="absolute right-0 top-2 text-brand-gold w-4 h-4 pointer-events-none" />
                        </div>
                    </div>
                    
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Check Out</label>
                        <div className="relative">
                            <input type="date" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold text-gray-700 bg-transparent" required />
                            <Calendar className="absolute right-0 top-2 text-brand-gold w-4 h-4 pointer-events-none" />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Guests</label>
                        <div className="relative">
                            <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold text-gray-700 bg-transparent appearance-none">
                                <option>1 Adult</option>
                                <option>2 Adults</option>
                                <option>3 Adults</option>
                                <option>4+ Adults</option>
                            </select>
                            <Users className="absolute right-0 top-2 text-brand-gold w-4 h-4 pointer-events-none" />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Room Type</label>
                        <div className="relative">
                            <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold text-gray-700 bg-transparent appearance-none">
                                <option>Standard</option>
                                <option>Deluxe</option>
                                <option>Imperial</option>
                                <option>Premium</option>
                            </select>
                            <Home className="absolute right-0 top-2 text-brand-gold w-4 h-4 pointer-events-none" />
                        </div>
                    </div>

                    <div className="flex items-end">
                        <button type="submit" className="w-full bg-brand-navy text-brand-gold font-bold py-3 hover:bg-gray-800 transition-colors uppercase tracking-widest text-sm rounded-sm">
                            Check Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;