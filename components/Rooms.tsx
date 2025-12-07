import React from 'react';
import { IMAGES } from '../constants';
import { RoomType } from '../types';
import { Wifi, Tv, Coffee, Wind } from 'lucide-react';

const rooms: RoomType[] = [
    {
        id: 1,
        title: "Standard Room",
        description: "Comfortable and cozy rooms perfect for solo travelers or short stays. Equipped with all modern essentials.",
        price: "Starting ₹2,000",
        image: IMAGES.roomStandard,
        features: ["Free WiFi", "TV", "AC"]
    },
    {
        id: 2,
        title: "Deluxe Room",
        description: "Spacious rooms with elegant interiors and enhanced amenities for a relaxing experience.",
        price: "Starting ₹3,500",
        image: IMAGES.roomDeluxe,
        features: ["King Bed", "City View", "Work Desk"]
    },
    {
        id: 3,
        title: "Imperial Room",
        description: "Experience luxury with our Imperial rooms featuring premium furnishings and superior comfort.",
        price: "Starting ₹5,000",
        image: IMAGES.roomImperial,
        features: ["Mini Bar", "Lounge Area", "Bathtub"]
    },
    {
        id: 4,
        title: "Premium Suite",
        description: "The epitome of luxury at Grand Surya. Massive suite with separate living area and top-tier services.",
        price: "Starting ₹7,500",
        image: IMAGES.roomPremium,
        features: ["Living Room", "Butler Service", "Jacuzzi"]
    }
];

const Rooms: React.FC = () => {
    return (
        <section id="rooms" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand-gold uppercase tracking-widest font-semibold text-sm">Accommodation</span>
                    <h2 className="text-4xl font-serif font-bold text-brand-navy mt-2">Our Rooms & Suites</h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {rooms.map((room) => (
                        <div key={room.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="relative overflow-hidden h-64">
                                <img 
                                    src={room.image} 
                                    alt={room.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-brand-gold text-brand-navy text-xs font-bold px-3 py-1 rounded">
                                    {room.price}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-serif font-bold text-brand-navy mb-2">{room.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{room.description}</p>
                                
                                <div className="flex gap-3 mb-6 text-gray-400">
                                    <Wifi size={16} />
                                    <Wind size={16} />
                                    <Tv size={16} />
                                    <Coffee size={16} />
                                </div>

                                <button className="w-full border border-brand-navy text-brand-navy py-2 hover:bg-brand-navy hover:text-white transition-colors uppercase text-xs font-bold tracking-wider rounded-sm">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rooms;