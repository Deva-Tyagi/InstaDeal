'use client'
import React from 'react';
import { MapPin, Phone, Mail, Clock, Building2, Shield, Users, Award } from 'lucide-react';

const Footer = () => {
  // Smooth scroll to section function (same as navbar)
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">InstaDeal</h3>
              <p className="text-blue-100 text-sm">Real Estate Excellence</p>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Discover your dream property with premium real estate solutions. From luxury apartments to modern commercial spaces - we make your vision reality.
            </p>
            <div className="flex space-x-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-teal-300">500+</div>
                <div className="text-xs text-blue-200">Properties Sold</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-teal-300">98%</div>
                <div className="text-xs text-blue-200">Client Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-teal-300">15+</div>
                <div className="text-xs text-blue-200">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-6 text-teal-300">Our Services</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors cursor-pointer">
                <Building2 size={16} className="text-teal-400" />
                <span>Residential Properties</span>
              </li>
              <li className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors cursor-pointer">
                <Building2 size={16} className="text-teal-400" />
                <span>Commercial Spaces</span>
              </li>
              <li className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors cursor-pointer">
                <Shield size={16} className="text-teal-400" />
                <span>Project Verification</span>
              </li>
              <li className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors cursor-pointer">
                <Award size={16} className="text-teal-400" />
                <span>RERA Compliance Check</span>
              </li>
              <li className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors cursor-pointer">
                <Users size={16} className="text-teal-400" />
                <span>Real Estate Consultancy</span>
              </li>
              <li className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors cursor-pointer">
                <Building2 size={16} className="text-teal-400" />
                <span>Developer Finance Analysis</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-6 text-teal-300">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-blue-200 hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-blue-200 hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-blue-200 hover:text-white transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('vision')} 
                  className="text-blue-200 hover:text-white transition-colors text-left"
                >
                  Vision
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('partners')} 
                  className="text-blue-200 hover:text-white transition-colors text-left"
                >
                  Partners
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-blue-200 hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li><a href="/privacy" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-blue-200 hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-6 text-teal-300">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-200 leading-relaxed">
                    World Trade Tower Block B<br />
                    Sector 16, Noida<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-teal-400" />
                <a href="tel:+91 9818094754" className="text-blue-200 hover:text-white transition-colors">
                  +91 XXX XXX XXXX
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-teal-400" />
                <a href="mailto:info@instadeal.com" className="text-blue-200 hover:text-white transition-colors">
                  info@instadeal.in
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock size={20} className="text-teal-400" />
                <div className="text-blue-200">
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-200 text-sm">
              © 2025 InstaDeal. All rights reserved. | RERA Registered Real Estate Consultancy
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/terms" className="text-blue-200 hover:text-white transition-colors">Terms & Conditions</a>
              <a href="/privacy" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/sitemap" className="text-blue-200 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;