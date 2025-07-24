'use client';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Briefcase, 
  Eye, 
  Users, 
  Phone,
  ChevronDown,
  Sparkles,
  Building2
} from 'lucide-react';
// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navRef = useRef(null);
  const logoRef = useRef(null); 
  const logoImageRef = useRef(null); 
  const menuItemsRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const backgroundRef = useRef(null);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'vision', label: 'Vision', icon: Eye },
    { id: 'partners', label: 'Partners', icon: Users },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states to ensure visibility
      gsap.set(navRef.current, { opacity: 1, y: 0 });
      gsap.set(logoRef.current, { scale: 1, rotation: 0 });
      gsap.set(logoImageRef.current, { scale: 1, opacity: 1 });
      gsap.set(menuItemsRef.current, { opacity: 1, y: 0 });

      // Initial animation for navbar (optional entrance animation)
      gsap.fromTo(navRef.current, 
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );

      // Animate logo container
      gsap.fromTo(logoRef.current,
        { scale: 0.8, rotation: 10 },
        { scale: 1, rotation: 0, duration: 0.6, ease: "back.out(1.7)", delay: 0.4 }
      );

      // Animate logo image separately for more control
      gsap.fromTo(logoImageRef.current,
        { scale: 0.5, opacity: 0, rotation: -10 },
        { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)", delay: 0.5 }
      );

      // Animate menu items
      gsap.fromTo(menuItemsRef.current,
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", stagger: 0.05, delay: 0.6 }
      );

    }, navRef);

    return () => ctx.revert();
  }, []);

  // Handle scroll effects separately
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Set initial active section
    setActiveSection('home');

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    if (!isOpen) {
      gsap.to(mobileMenuRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out"
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power3.in"
      });
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <nav 
        ref={navRef}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-white/95 backdrop-blur-lg shadow-2xl border-b border-white/20' 
            : 'py-6 bg-transparent'
        }`}
      >
        {/* Background Gradient */}
        <div 
          ref={backgroundRef}
          className={`absolute inset-0 transition-opacity duration-500 ${
            isScrolled 
              ? 'opacity-100 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-emerald-600/5' 
              : 'opacity-0'
          }`}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div 
              ref={logoRef}
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              {/* Your Logo Image */}
              <div className="relative">
                <img 
                  ref={logoImageRef}
                  src="/instadeal.png" 
                  alt="InstaDeal Logo"
                  className={`transition-all duration-300 group-hover:scale-110 ${
                    isScrolled ? 'h-16 w-auto' : 'h-14 w-auto'
                  }`}
                  onError={(e) => {
                    console.log("Image failed to load from:", e.target.src);
                  }}
                />
                {/* Optional sparkle effect */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-2 h-2 text-white" />
                </div>
              </div>
              
              {/* Optional Text beside logo */}
              <div className="hidden sm:block">
                <h1 className={`text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent transition-all duration-300 ${
                  isScrolled ? 'text-xl' : 'text-2xl'
                }`}>
                  InstaDeal
                </h1>
                <p className="text-xs text-slate-500 -mt-1">Real Estate Excellence</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    ref={(el) => (menuItemsRef.current[index] = el)}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative group px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-white shadow-lg transform scale-105'
                        : isScrolled
                        ? 'text-slate-700 hover:text-white'
                        : 'text-slate-100 hover:text-white'
                    } hover:shadow-xl hover:scale-105`}
                  >
                    {/* Active/Hover Background */}
                    <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 opacity-100'
                        : 'bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 opacity-0 group-hover:opacity-100'
                    }`} />
                    
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600/50 via-purple-600/50 to-emerald-600/50 opacity-75'
                        : 'bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-emerald-600/30 opacity-0 group-hover:opacity-50'
                    }`} />
                    
                    {/* Content */}
                    <div className="relative flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-3 rounded-2xl transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white shadow-lg' 
                  : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
              } hover:scale-110`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </nav>

      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 z-40 lg:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          {/* Mobile Logo */}
          <div className="flex items-center space-x-3 mb-8">
            <img 
              src="/instadeal.png" // Direct path to public folder
              alt="InstaDeal Logo" 
              className="h-16 w-auto"
              onError={(e) => {
                console.log("Mobile image failed to load from:", e.target.src);
              }}
            />
            <div>
              <h1 className="text-3xl font-bold text-white">InstaDeal</h1>
              <p className="text-sm text-slate-300">Real Estate Excellence</p>
            </div>
          </div>

          {/* Mobile Menu Items */}
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group flex items-center space-x-4 px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white shadow-2xl scale-105'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                } hover:scale-105 hover:shadow-xl`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`p-3 rounded-xl ${
                  isActive
                    ? 'bg-white/20'
                    : 'bg-white/10 group-hover:bg-white/20'
                } transition-all duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span>{item.label}</span>
                {isActive && (
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse ml-auto" />
                )}
              </button>
            );
          })}

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
          <div className="absolute bottom-32 right-12 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl" />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;