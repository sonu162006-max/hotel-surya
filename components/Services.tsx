import React from 'react';
import { Utensils, Users, Mic2, BedDouble } from 'lucide-react';
import { IMAGES } from '../constants';

const Services: React.FC = () => {
    return (
        <section id="facilities" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Content */}
                    <div>
                        <span className="text-brand-gold uppercase tracking-widest font-semibold text-sm">Our Facilities</span>
                        <h2 className="text-4xl font-serif font-bold text-brand-navy mt-2 mb-6">Experience World-Class Services</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            At Hotel Grand Surya, we pride ourselves on providing more than just a stay. We offer a complete experience tailored to meet the needs of modern business travelers and leisure guests alike.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-4">
                                <div className="bg-brand-navy/5 p-3 h-fit rounded text-brand-gold">
                                    <BedDouble size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-navy mb-1">Accommodation</h4>
                                    <p className="text-sm text-gray-500">28 Well-furnished luxury rooms</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-brand-navy/5 p-3 h-fit rounded text-brand-gold">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-navy mb-1">Meeting Rooms</h4>
                                    <p className="text-sm text-gray-500">Professional conference facilities</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-brand-navy/5 p-3 h-fit rounded text-brand-gold">
                                    <Utensils size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-navy mb-1">Fine Dining</h4>
                                    <p className="text-sm text-gray-500">Two restaurants & rooftop dining</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-brand-navy/5 p-3 h-fit rounded text-brand-gold">
                                    <Mic2 size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-navy mb-1">Banquet Hall</h4>
                                    <p className="text-sm text-gray-500">Ideal for weddings & events</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <img src={IMAGES.dining} alt="Dining" className="rounded shadow-lg w-full h-48 object-cover transform translate-y-8" />
                        <img src={IMAGES.meeting} alt="Meeting" className="rounded shadow-lg w-full h-48 object-cover" />
                        <img src={IMAGES.wedding} alt="Wedding" className="rounded shadow-lg w-full h-48 object-cover transform translate-y-8" />
                        <img src={IMAGES.roomPremium} alt="Room" className="rounded shadow-lg w-full h-48 object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;