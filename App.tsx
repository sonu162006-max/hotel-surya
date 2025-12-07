import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import Rooms from './components/Rooms';
import Services from './components/Services';
import Offers from './components/Offers';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BookingForm />
        
        {/* About Summary */}
        <div className="container mx-auto px-4 text-center mb-10 max-w-3xl">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">The Best Choice</span>
            <h2 className="text-3xl font-serif text-brand-navy mb-4">Welcome to Hotel Grand Surya</h2>
            <p className="text-gray-600">
                Experience the perfect blend of luxury and comfort in the heart of Koderma. 
                Whether you are traveling for business or leisure, our premium amenities and 
                exceptional service ensure a memorable stay.
            </p>
        </div>

        <Rooms />
        <Services />
        <Offers />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;