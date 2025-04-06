import React from 'react';
import { Navigation } from '../components/Navigation';

export function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <Navigation />

        <div className="relative z-10 container mx-auto px-6 py-32">
          <h1 className="heading-xl mb-6">
            Our Portfolio
          </h1>
          <p className="body-text text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
            Explore our curated collection of premium investment opportunities and success stories.
          </p>
        </div>
      </header>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="glass-card p-8 rounded-2xl">
            <iframe 
              className="airtable-embed w-full rounded-lg"
              src="https://airtable.com/embed/appKpuo1dPnNhw7Fp/shrss5MK3v13Wf8cA" 
              frameBorder="0" 
              style={{ 
                height: '533px',
                background: 'transparent', 
                border: '1px solid rgba(156, 163, 175, 0.2)'
              }}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;