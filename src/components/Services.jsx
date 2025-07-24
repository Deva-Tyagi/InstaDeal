'use client';
import React, { useEffect, useRef } from 'react';
import { 
  Home, 
  Building2, 
  Key, 
  TrendingUp, 
  Search, 
  FileText, 
  Shield, 
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Star
} from 'lucide-react';

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const serviceCardsRef = useRef([]);
  const floatingElementsRef = useRef([]);
  const decorativeElementsRef = useRef([]);

  useEffect(() => {
    // GSAP Timeline Animation
    const tl = {
      set: (elements, props) => {
        elements.forEach(el => {
          if (el) {
            Object.assign(el.style, props);
          }
        });
      },
      to: (elements, props, delay = 0) => {
        setTimeout(() => {
          elements.forEach(el => {
            if (el) {
              Object.assign(el.style, props);
            }
          });
        }, delay * 1000);
      },
      fromTo: (elements, fromProps, toProps, delay = 0) => {
        elements.forEach(el => {
          if (el) {
            Object.assign(el.style, fromProps);
            setTimeout(() => {
              Object.assign(el.style, toProps);
            }, delay * 1000);
          }
        });
      }
    };

    const animateSection = () => {
      // Set initial states
      tl.set([titleRef.current], {
        transform: 'translateY(100px) scale(0.8)',
        opacity: '0',
        transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      });

      tl.set([subtitleRef.current], {
        transform: 'translateY(50px)',
        opacity: '0',
        transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      });

      // Set service cards initial state
      serviceCardsRef.current.forEach((card, index) => {
        if (card) {
          Object.assign(card.style, {
            transform: 'translateY(100px) rotateX(45deg) scale(0.8)',
            opacity: '0',
            transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          });
        }
      });

      // Set floating elements initial state
      floatingElementsRef.current.forEach(el => {
        if (el) {
          Object.assign(el.style, {
            transform: 'translateY(50px) rotate(180deg) scale(0)',
            opacity: '0',
            transition: 'all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          });
        }
      });

      // Animate title
      tl.to([titleRef.current], {
        transform: 'translateY(0px) scale(1)',
        opacity: '1'
      }, 0.2);

      // Animate subtitle
      tl.to([subtitleRef.current], {
        transform: 'translateY(0px)',
        opacity: '1'
      }, 0.4);

      // Animate service cards with stagger
      serviceCardsRef.current.forEach((card, index) => {
        if (card) {
          setTimeout(() => {
            Object.assign(card.style, {
              transform: 'translateY(0px) rotateX(0deg) scale(1)',
              opacity: '1'
            });
          }, (0.6 + index * 0.2) * 1000);
        }
      });

      // Animate floating elements
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          setTimeout(() => {
            Object.assign(el.style, {
              transform: 'translateY(0px) rotate(0deg) scale(1)',
              opacity: '0.6'
            });
          }, (1.2 + index * 0.1) * 1000);
        }
      });

      // Animate decorative elements
      decorativeElementsRef.current.forEach((el, index) => {
        if (el) {
          setTimeout(() => {
            Object.assign(el.style, {
              transform: 'scale(1) rotate(0deg)',
              opacity: '0.3'
            });
          }, (1.5 + index * 0.15) * 1000);
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSection();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'FRESH BOOKING\nRESIDENTIAL',
      description: 'Premium residential properties with modern amenities and strategic locations for your dream home investment.',
      icon: Home,
      gradient: 'from-blue-600 via-blue-700 to-cyan-600',
      features: ['Prime Locations', 'Modern Amenities', 'Flexible Payment Plans', 'Legal Assistance']
    },
    {
      title: 'PRE LEASED\nPROPERTY\nSALE/PURCHASE',
      description: 'Secure investment opportunities in pre-leased commercial and residential properties with guaranteed returns.',
      icon: Building2,
      gradient: 'from-emerald-600 via-teal-700 to-green-600',
      features: ['Guaranteed Returns', 'Verified Tenants', 'Legal Documentation', 'Market Analysis']
    },
    {
      title: 'RESIDENTIAL\nRESALE',
      description: 'Expert assistance in buying and selling residential properties with complete market knowledge and support.',
      icon: Key,
      gradient: 'from-purple-600 via-violet-700 to-indigo-600',
      features: ['Market Valuation', 'Property Inspection', 'Documentation', 'Negotiation Support']
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (floatingElementsRef.current[i] = el)}
            className={`absolute rounded-full blur-2xl ${
              i % 4 === 0 ? 'bg-gradient-to-br from-blue-300/30 to-cyan-300/30 w-40 h-40' :
              i % 4 === 1 ? 'bg-gradient-to-br from-emerald-300/30 to-teal-300/30 w-32 h-32' :
              i % 4 === 2 ? 'bg-gradient-to-br from-purple-300/30 to-violet-300/30 w-36 h-36' :
              'bg-gradient-to-br from-orange-300/30 to-pink-300/30 w-28 h-28'
            }`}
            style={{
              left: `${5 + (i * 12) % 85}%`,
              top: `${5 + (i * 15) % 80}%`,
              transform: 'translateY(50px) rotate(180deg) scale(0)',
              opacity: 0,
              transition: 'all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          />
        ))}
      </div>

      {/* Geometric Decorative Elements */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (decorativeElementsRef.current[i] = el)}
          className={`absolute ${
            i % 3 === 0 ? 'w-16 h-16 bg-blue-200/20' :
            i % 3 === 1 ? 'w-12 h-12 bg-emerald-200/20' :
            'w-20 h-20 bg-purple-200/20'
          } ${
            i % 2 === 0 ? 'rounded-full' : 'rotate-45'
          } blur-sm`}
          style={{
            right: `${10 + (i * 15) % 60}%`,
            top: `${15 + (i * 20) % 60}%`,
            transform: 'scale(0) rotate(45deg)',
            opacity: 0,
            transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 
            ref={titleRef}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            style={{
              transform: 'translateY(100px) scale(0.8)',
              opacity: 0,
              transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-emerald-800 bg-clip-text text-transparent relative">
              OUR SERVICES
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce">
                <Sparkles className="w-4 h-4 text-white m-2" />
              </div>
            </span>
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            style={{
              transform: 'translateY(50px)',
              opacity: 0,
              transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            Comprehensive real estate solutions tailored to your unique needs and investment goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                ref={(el) => (serviceCardsRef.current[index] = el)}
                className="group relative"
                style={{
                  transform: 'translateY(100px) rotateX(45deg) scale(0.8)',
                  opacity: 0,
                  transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                {/* Main Service Card */}
                <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${service.gradient} text-white transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-700 shadow-2xl group-hover:shadow-3xl min-h-[400px] flex flex-col justify-between overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12" />
                  </div>

                  {/* Icon */}
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight whitespace-pre-line">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="relative z-10 space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-white/80">
                        <CheckCircle className="w-5 h-5 mr-3 text-white/60" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  {/* <button className="relative z-10 mt-6 inline-flex items-center text-white font-semibold group-hover:text-yellow-300 transition-colors duration-300">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </button> */}

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Star */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Star className="w-6 h-6 text-yellow-300 fill-current animate-pulse" />
                  </div>
                </div>

                {/* Shadow Card for Depth */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-30 transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        {/* <div className="text-center mt-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-emerald-600 to-purple-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <Users className="w-6 h-6 mr-3" />
            Ready to Get Started? Contact Our Experts
            <Sparkles className="w-6 h-6 ml-3 animate-pulse" />
          </div>
        </div> */}
      </div>

      <style jsx>{`
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default Services;