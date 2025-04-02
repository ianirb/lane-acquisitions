import React from 'react';
import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="relative z-10 container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <Building2 className="w-8 h-8 text-violet-400 animate-icon" />
          <span className="brand-name animate-gradient-text">Lane Acquisitions</span>
        </Link>
        <div className="hidden md:flex space-x-12">
          <Link to="/" className="nav-link hover-text tracking-wider text-sm uppercase">Home</Link>
          <Link to="/about" className="nav-link hover-text tracking-wider text-sm uppercase">About</Link>
          <Link to="/contact" className="nav-link hover-text tracking-wider text-sm uppercase">Contact</Link>
        </div>
      </div>
    </nav>
  );
}