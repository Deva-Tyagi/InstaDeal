'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Handshake, 
  Star,
  Award,
  Users,
  Building,
  TrendingUp,
  Shield,
  Globe,
  Sparkles,
  Heart
} from 'lucide-react';
import ats from '@/../public/ats.avif';
import bhutani from '@/../public/bhutani.avif';
import godrej from '@/../public/godrej.avif';
import dlf from '@/../public/dlf.avif';
import tataValue from '@/../public/tataValue.avif';
import eldeco from '@/../public/eldeco.avif';
import ace from '@/../public/ace.png';
import eternia from '@/../public/eternia1.webp';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Partners = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const partnerCardsRef = useRef([]);
  const floatingElementsRef = useRef([]);
  const decorativeElementsRef = useRef([]);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create master timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      });

      // Set initial states
      gsap.set(titleRef.current, {
        y: 80,
        scale: 0.8,
        opacity: 0,
        rotationX: 45
      });

      gsap.set(subtitleRef.current, {
        y: 40,
        opacity: 0
      });

      gsap.set(partnerCardsRef.current, {
        y: 100,
        rotationY: 45,
        scale: 0.7,
        opacity: 0
      });

      gsap.set(floatingElementsRef.current, {
        y: 60,
        rotation: 180,
        scale: 0,
        opacity: 0
      });

      gsap.set(decorativeElementsRef.current, {
        scale: 0,
        rotation: 90,
        opacity: 0
      });

      gsap.set(statsRef.current, {
        y: 30,
        opacity: 0
      });

      // Animate title
      tl.to(titleRef.current, {
        y: 0,
        scale: 1,
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      })
      
      // Animate subtitle
      .to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.5")

      // Animate partner cards with stagger
      .to(partnerCardsRef.current, {
        y: 0,
        rotationY: 0,
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
          amount: 0.6,
          from: "center"
        }
      }, "-=0.3")

      // Animate floating elements
      .to(floatingElementsRef.current, {
        y: 0,
        rotation: 0,
        scale: 1,
        opacity: 0.6,
        duration: 1.2,
        ease: "power2.out",
        stagger: {
          amount: 0.8,
          from: "random"
        }
      }, "-=0.6")

      // Animate decorative elements
      .to(decorativeElementsRef.current, {
        scale: 1,
        rotation: 0,
        opacity: 0.3,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1
      }, "-=0.8")

      // Animate stats
      .to(statsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.4");

      // Add hover animations for partner cards
      partnerCardsRef.current.forEach((card, index) => {
        if (card) {
          // Set initial state for hover elements
          gsap.set(card.querySelector('.partner-glow'), { opacity: 0 });
          gsap.set(card.querySelector('.partner-shine'), { x: '-100%' });
          
          const handleMouseEnter = () => {
            gsap.to(card, {
              scale: 1.08,
              rotationY: index % 2 === 0 ? -5 : 5,
              z: 50,
              duration: 0.4,
              ease: "power2.out"
            });
            
            gsap.to(card.querySelector('.partner-glow'), {
              opacity: 1,
              duration: 0.3,
              ease: "power2.out"
            });
            
            gsap.to(card.querySelector('.partner-logo'), {
              scale: 1.1,
              duration: 0.3,
              ease: "back.out(1.7)"
            });
            
            gsap.to(card.querySelector('.partner-shine'), {
              x: '200%',
              duration: 0.6,
              ease: "power2.out"
            });
          };
          
          const handleMouseLeave = () => {
            gsap.to(card, {
              scale: 1,
              rotationY: 0,
              z: 0,
              duration: 0.4,
              ease: "power2.out"
            });
            
            gsap.to(card.querySelector('.partner-glow'), {
              opacity: 0,
              duration: 0.3,
              ease: "power2.out"
            });
            
            gsap.to(card.querySelector('.partner-logo'), {
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
            
            gsap.set(card.querySelector('.partner-shine'), {
              x: '-100%',
              delay: 0.1
            });
          };

          card.addEventListener('mouseenter', handleMouseEnter);
          card.addEventListener('mouseleave', handleMouseLeave);
        }
      });

      // Continuous floating animation
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: "+=20",
            rotation: "+=10",
            duration: 3 + (index * 0.5),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Sample partner data with your imported images
  const partners = [
    {
      id: 1,
      name: 'ACE Group',
      logo: ace,
      description: 'Premium Real Estate Development'
    },
    {
      id: 2,
      name: 'Godrej Properties',
      logo: godrej,
      description: 'Luxury Residential Projects'
    },
    {
      id: 3,
      name: 'ATS Infrastructure',
      logo: ats,
      description: 'Modern Living Solutions'
    },
    {
      id: 4,
      name: 'Tata Value Homes',
      logo: tataValue,
      description: 'Innovative Construction'
    },
    {
      id: 5,
      name: 'Bhutani Group',
      logo: bhutani,
      description: 'Integrated Township'
    },
    {
      id: 6,
      name: 'DLF',
      logo: dlf,
      description: 'Affordable Housing'
    },
    {
      id: 7,
      name: 'Eldeco Group',
      logo: eldeco,
      description: 'Quality Construction'
    },
    {
      id: 8,
      name: 'Eternia Group',
      logo: eternia, // Using ace logo as placeholder - replace with your actual Mahagun logo
      description: 'Premium Developments'
    }
  ];

  return (
    <section id="partners" ref={sectionRef} className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (floatingElementsRef.current[i] = el)}
            className={`absolute rounded-full blur-3xl ${
              i % 4 === 0 ? 'bg-gradient-to-br from-blue-300/20 to-cyan-300/20 w-40 h-40' :
              i % 4 === 1 ? 'bg-gradient-to-br from-emerald-300/20 to-teal-300/20 w-32 h-32' :
              i % 4 === 2 ? 'bg-gradient-to-br from-purple-300/20 to-violet-300/20 w-36 h-36' :
              'bg-gradient-to-br from-orange-300/20 to-pink-300/20 w-28 h-28'
            }`}
            style={{
              left: `${5 + (i * 11) % 85}%`,
              top: `${5 + (i * 13) % 80}%`
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
            i % 2 === 0 ? 'rounded-full' : 'rotate-45 rounded-lg'
          } blur-sm`}
          style={{
            right: `${8 + (i * 15) % 60}%`,
            top: `${12 + (i * 18) % 65}%`
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-emerald-800 bg-clip-text text-transparent relative">
              PARTNERS
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Handshake className="w-5 h-5 text-white" />
              </div>
            </span>
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
          >
            Trusted collaborations with industry leaders to deliver exceptional real estate experiences
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              ref={(el) => (partnerCardsRef.current[index] = el)}
              className="group relative cursor-pointer"
            >
              {/* Main Partner Card */}
              <div className="relative bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 rounded-3xl p-2 shadow-2xl overflow-hidden">
                {/* Inner white container */}
                <div className="relative bg-white rounded-2xl p-6 h-48 flex flex-col items-center justify-center overflow-hidden">
                  {/* Shine effect */}
                  <div className="partner-shine absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full -skew-x-12" />
                  
                  {/* Partner Logo */}
                  <div className="partner-logo relative z-10 w-20 h-20 mb-3 rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                    {typeof partner.logo === 'string' ? (
                      partner.logo.startsWith('http') ? (
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            console.error(`Failed to load image for ${partner.name}:`, e);
                            e.target.style.display = 'none';
                          }}
                        />
                      ) : (
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            console.error(`Failed to load image for ${partner.name}:`, e);
                            e.target.style.display = 'none';
                          }}
                        />
                      )
                    ) : (
                      <img
                        src={partner.logo?.src || partner.logo?.default || partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          console.error(`Failed to load image for ${partner.name}:`, e);
                          e.target.style.display = 'none';
                        }}
                      />
                    )}
                  </div>
                  
                  {/* Partner Name */}
                  <h3 className="text-lg font-bold text-slate-800 text-center mb-1 relative z-10">
                    {partner.name}
                  </h3>
                  
                  {/* Partner Description */}
                  <p className="text-sm text-slate-600 text-center relative z-10">
                    {partner.description}
                  </p>

                  {/* Decorative corner elements */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full opacity-60" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60" />
                </div>

                {/* Hover Glow Effect */}
                <div className="partner-glow absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-emerald-500/20 to-purple-500/20 opacity-0" />
                
                {/* Floating sparkle */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
              </div>

              {/* Shadow Card for Depth */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 opacity-20 transform translate-x-2 translate-y-2 -z-10" />
            </div>
          ))}
        </div>

        {/* Partnership Stats */}
        <div 
          ref={statsRef}
          className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-500/20 rounded-full mb-3">
                <Building className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-1">8+</div>
              <div className="text-sm text-slate-600">Trusted Partners</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500/10 to-emerald-500/20 rounded-full mb-3">
                <TrendingUp className="w-6 h-6 text-emerald-500" />
              </div>
              <div className="text-2xl font-bold text-emerald-600 mb-1">50+</div>
              <div className="text-sm text-slate-600">Joint Projects</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500/10 to-purple-500/20 rounded-full mb-3">
                <Users className="w-6 h-6 text-purple-500" />
              </div>
              <div className="text-2xl font-bold text-purple-600 mb-1">5000+</div>
              <div className="text-sm text-slate-600">Happy Clients</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500/10 to-orange-500/20 rounded-full mb-3">
                <Award className="w-6 h-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-600 mb-1">15+</div>
              <div className="text-sm text-slate-600">Years Together</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;