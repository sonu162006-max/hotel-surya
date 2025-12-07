import React from 'react';
import { HOTEL_INFO, IMAGES } from '../constants';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: `url(${IMAGES.hero})` }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-brand-navy/40 to-brand-navy/90"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
                <span className="block text-brand-gold uppercase tracking-[0.2em] mb-4 text-sm md:text-base font-semibold animate-fade-in-up">
                    Welcome to Koderma
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-bold mb-6 leading-tight animate-fade-in-up delay-100">
                    {HOTEL_INFO.name}
                </h1>
                <p className="text-gray-200 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
                    {HOTEL_INFO.tagline}
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                    <a href="#rooms" className="px-8 py-3 bg-brand-gold text-brand-navy font-bold hover:bg-brand-goldlight transition-colors rounded-sm uppercase tracking-wider">
                        View Rooms
                    </a>
                    <a href="#contact" className="px-8 py-3 border-2 border-white text-white font-bold hover:bg-white hover:text-brand-navy transition-colors rounded-sm uppercase tracking-wider">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;