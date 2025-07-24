'use client';
import React, { useState, useEffect, useRef } from 'react';
import { X, Home, Mail, Phone, User, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import emailjs from '@emailjs/browser';
import bg from '@/../public/instadealBg.png';

const Banner = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [particlesReady, setParticlesReady] = useState(false); // New state for particles
  
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const overlayRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // Initialize EmailJS
    // Add your EmailJS credentials here
    /*
    emailjs.init({
      publicKey: 'YOUR_PUBLIC_KEY',
      serviceId: 'YOUR_SERVICE_ID',
      templateId: 'YOUR_TEMPLATE_ID'
    });
    */

    // Apply GSAP animations only on client side
    const animateElements = () => {
      if (titleRef.current) {
        gsap.fromTo(titleRef.current, 
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
        );
      }
      
      if (subtitleRef.current) {
        gsap.fromTo(subtitleRef.current, 
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.3 }
        );
      }
      
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current, 
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.6 }
        );
      }
      
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0.6,
          duration: 1,
          ease: 'power2.out',
          delay: 0.1
        });
      }
    };

    animateElements();
    setParticlesReady(true); // Trigger particles rendering after mount
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'YOUR_GMAIL_ADDRESS'
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => {
        setIsPopupOpen(false);
        setSubmitStatus(null);
      }, 2000);
      
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="home" className="relative min-h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      />
      
      {/* Animated Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900/70 to-emerald-900/60"
      />
      
      {/* Animated Particles - Rendered only on client side */}
      {particlesReady && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div ref={bannerRef} className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 
            ref={titleRef}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-300 bg-clip-text text-transparent">
              INSTADEAL
            </span>
            <br />
            <span className="text-white/90 text-4xl sm:text-5xl lg:text-6xl">
              Real Estate Services
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl sm:text-2xl lg:text-3xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Discover your dream property with premium real estate solutions. 
            From luxury apartments to modern commercial spaces - we make your vision reality.
          </p>

          {/* CTA Button */}
          <div 
            ref={ctaRef}
          >
            <button
              onClick={() => setIsPopupOpen(true)}
              className="group relative inline-flex items-center px-12 py-6 text-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-700 rounded-full shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 hover:from-blue-500 hover:via-emerald-500 hover:to-blue-600 border-2 border-white/20"
            >
              <Home className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              Get Your Dream Property
              <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { number: '500+', label: 'Properties Sold' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '15+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${0.9 + index * 0.2}s both`
                }}
              >
                <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div ref={formRef} className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform scale-95 animate-[scale_0.3s_ease-out] relative overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-6 text-white relative">
              <button
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
              <p className="text-blue-100">Let's find your perfect property together</p>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your property requirements..."
                  rows="4"
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                    Sending...
                  </div>
                ) : submitStatus === 'success' ? (
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Message Sent!
                  </div>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'error' && (
                <p className="text-red-500 text-center text-sm">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;