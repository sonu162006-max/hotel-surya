import React from 'react';
import { IMAGES } from '../constants';

const Gallery: React.FC = () => {
    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand-gold uppercase tracking-widest font-semibold text-sm">Visual Tour</span>
                    <h2 className="text-4xl font-serif font-bold text-brand-navy mt-2">Our Gallery</h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                    <div className="col-span-2 row-span-2 overflow-hidden rounded relative group">
                        <img 
                            src={IMAGES.hero} 
                            alt="Hotel Exterior" 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                        />
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div className="col-span-1 row-span-1 overflow-hidden rounded relative group">
                        <img 
                            src={IMAGES.gallery1} 
                            alt="Interior" 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                        />
                    </div>
                    <div className="col-span-1 row-span-1 overflow-hidden rounded relative group">
                        <img 
                            src={IMAGES.gallery2} 
                            alt="Details" 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                        />
                    </div>
                    <div className="col-span-1 row-span-1 overflow-hidden rounded relative group">
                        <img 
                            src={IMAGES.gallery3} 
                            alt="Events" 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                        />
                    </div>
                    <div className="col-span-1 row-span-1 overflow-hidden rounded relative group">
                        <img 
                            src={IMAGES.gallery4} 
                            alt="Food" 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;