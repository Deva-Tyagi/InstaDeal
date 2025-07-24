'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Eye, 
  Target, 
  Sparkles, 
  Star,
  Heart,
  Award,
  TrendingUp,
  Users,
  Shield,
  Lightbulb,
  Building,
  Globe
} from 'lucide-react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Vision = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const visionCardRef = useRef(null);
  const missionCardRef = useRef(null);
  const floatingElementsRef = useRef([]);
  const decorativeElementsRef = useRef([]);
  const statsRef = useRef([]);
  const visionIconRef = useRef(null);
  const missionIconRef = useRef(null);

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
        y: 120,
        scale: 0.6,
        opacity: 0,
        rotationX: 90
      });

      gsap.set(subtitleRef.current, {
        y: 60,
        opacity: 0
      });

      gsap.set([visionCardRef.current, missionCardRef.current], {
        y: 200,
        rotationY: 45,
        scale: 0.7,
        opacity: 0
      });

      gsap.set(floatingElementsRef.current, {
        y: 100,
        rotation: 360,
        scale: 0,
        opacity: 0
      });

      gsap.set(decorativeElementsRef.current, {
        scale: 0,
        rotation: 180,
        opacity: 0
      });

      gsap.set(statsRef.current, {
        y: 50,
        scale: 0.8,
        opacity: 0
      });

      gsap.set([visionIconRef.current, missionIconRef.current], {
        scale: 0,
        rotation: 180,
        opacity: 0
      });

      // Animate title with dramatic entrance
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
      }, "-=0.6")

      // Animate vision and mission cards immediately
      .to(visionCardRef.current, {
        y: 0,
        rotationY: 0,
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
      
      .to(missionCardRef.current, {
        y: 0,
        rotationY: 0,
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")

      // Animate icons quickly
      .to(visionIconRef.current, {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)"
      }, "-=0.5")
      
      .to(missionIconRef.current, {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)"
      }, "-=0.4")

      // Animate floating elements in background
      .to(floatingElementsRef.current, {
        y: 0,
        rotation: 0,
        scale: 1,
        opacity: 0.7,
        duration: 1.5,
        ease: "power2.out",
        stagger: {
          amount: 0.8,
          from: "random"
        }
      }, "-=0.8")

      // Animate decorative elements
      .to(decorativeElementsRef.current, {
        scale: 1,
        rotation: 0,
        opacity: 0.4,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1
      }, "-=1")

      // Animate stats
      .to(statsRef.current, {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1
      }, "-=0.6");

      // Add hover animations for cards
      [visionCardRef.current, missionCardRef.current].forEach((card, index) => {
        if (card) {
          const cardTl = gsap.timeline({ paused: true });
          
          cardTl.to(card, {
            scale: 1.05,
            rotationY: index === 0 ? -3 : 3,
            z: 100,
            boxShadow: "0 40px 80px rgba(0,0,0,0.3)",
            duration: 0.6,
            ease: "power2.out"
          })
          .to(card.querySelector('.card-glow'), {
            opacity: 1,
            duration: 0.4
          }, 0)
          .to(card.querySelector('.card-icon'), {
            scale: 1.2,
            rotation: 360,
            duration: 0.8,
            ease: "back.out(1.7)"
          }, 0)
          .to(card.querySelector('.floating-particles'), {
            opacity: 1,
            duration: 0.5
          }, 0.1);

          card.addEventListener('mouseenter', () => cardTl.play());
          card.addEventListener('mouseleave', () => cardTl.reverse());
        }
      });

      // Continuous floating animation for background elements
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: "+=30",
            rotation: "+=15",
            duration: 4 + (index * 0.8),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.3
          });
        }
      });

      // Pulse animation for decorative elements
      decorativeElementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            scale: 1.2,
            opacity: 0.6,
            duration: 2 + (index * 0.5),
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.5
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Building, number: '500+', label: 'Properties', color: 'text-blue-500' },
    { icon: Users, number: '1000+', label: 'Clients', color: 'text-emerald-500' },
    { icon: Award, number: '15+', label: 'Years', color: 'text-purple-500' },
    { icon: TrendingUp, number: '98%', label: 'Success', color: 'text-orange-500' }
  ];

  return (
    <section id="vision" ref={sectionRef} className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (floatingElementsRef.current[i] = el)}
            className={`absolute rounded-full blur-3xl ${
              i % 5 === 0 ? 'bg-gradient-to-br from-blue-400/20 to-cyan-400/20 w-48 h-48' :
              i % 5 === 1 ? 'bg-gradient-to-br from-emerald-400/20 to-teal-400/20 w-36 h-36' :
              i % 5 === 2 ? 'bg-gradient-to-br from-purple-400/20 to-violet-400/20 w-40 h-40' :
              i % 5 === 3 ? 'bg-gradient-to-br from-orange-400/20 to-pink-400/20 w-32 h-32' :
              'bg-gradient-to-br from-indigo-400/20 to-blue-400/20 w-44 h-44'
            }`}
            style={{
              left: `${2 + (i * 11) % 90}%`,
              top: `${3 + (i * 13) % 85}%`
            }}
          />
        ))}
      </div>

      {/* Geometric Decorative Elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (decorativeElementsRef.current[i] = el)}
          className={`absolute ${
            i % 4 === 0 ? 'w-20 h-20 bg-gradient-to-br from-blue-300/30 to-cyan-300/30' :
            i % 4 === 1 ? 'w-16 h-16 bg-gradient-to-br from-emerald-300/30 to-teal-300/30' :
            i % 4 === 2 ? 'w-24 h-24 bg-gradient-to-br from-purple-300/30 to-violet-300/30' :
            'w-18 h-18 bg-gradient-to-br from-orange-300/30 to-pink-300/30'
          } ${
            i % 2 === 0 ? 'rounded-full' : 'rotate-45 rounded-lg'
          } blur-sm`}
          style={{
            right: `${5 + (i * 12) % 70}%`,
            top: `${10 + (i * 15) % 70}%`
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 
            ref={titleRef}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-emerald-800 bg-clip-text text-transparent relative">
              VISION & MISSION
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
            </span>
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
          >
            Driving innovation and excellence in real estate with unwavering commitment to our clients and community
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          {/* Vision Card */}
          <div
            ref={visionCardRef}
            className="group relative cursor-pointer"
          >
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl overflow-hidden min-h-[450px] flex flex-col">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-20 translate-x-20" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-16 -translate-x-16" />
                <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full -translate-x-12 -translate-y-12" />
              </div>

              {/* Floating Particles */}
              <div className="floating-particles absolute inset-0 opacity-0">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
                    style={{
                      left: `${20 + (i * 15) % 60}%`,
                      top: `${20 + (i * 20) % 60}%`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </div>

              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div 
                  ref={visionIconRef}
                  className="card-icon w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                >
                  <Eye className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1">
                <h3 className="text-4xl font-bold mb-6 text-center">Vision</h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  Instadeal vision is to be the leader in real estate in Noida and Delhi, with the renowned reputation of 
                  honest, integrity, impeccable customer service and serving our community. We aspire to be the 
                  best in everything we do, and strive for continuous improvement. Our team is quite Serious, 
                  Determined, Responsible, Stable. We make sure that we treat each one of you as our family.
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="card-glow absolute inset-0 rounded-3xl bg-white/10 opacity-0" />
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4">
                <Star className="w-8 h-8 text-yellow-300 fill-current opacity-80" />
              </div>
            </div>

            {/* Shadow Card for Depth */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 opacity-20 transform translate-x-3 translate-y-3 -z-10" />
          </div>

          {/* Mission Card */}
          <div
            ref={missionCardRef}
            className="group relative cursor-pointer"
          >
            <div className="relative bg-gradient-to-br from-emerald-600 via-teal-700 to-green-600 rounded-3xl p-8 text-white shadow-2xl overflow-hidden min-h-[450px] flex flex-col">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-36 h-36 bg-white rounded-full -translate-y-18 -translate-x-18" />
                <div className="absolute bottom-0 right-0 w-28 h-28 bg-white rounded-full translate-y-14 translate-x-14" />
                <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white rounded-full" />
              </div>

              {/* Floating Particles */}
              <div className="floating-particles absolute inset-0 opacity-0">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
                    style={{
                      left: `${25 + (i * 12) % 50}%`,
                      top: `${25 + (i * 18) % 50}%`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  />
                ))}
              </div>

              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div 
                  ref={missionIconRef}
                  className="card-icon w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                >
                  <Target className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1">
                <h3 className="text-4xl font-bold mb-6 text-center">Mission</h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  Instadeal provides clients with the very best services in all aspects of residential and 
                  commercial real estate. We believe in providing accurate and up to date information, skilled 
                  analysis and best real estate advice according to your goal and buying capacity.
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="card-glow absolute inset-0 rounded-3xl bg-white/10 opacity-0" />
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4">
                <Heart className="w-8 h-8 text-pink-300 fill-current opacity-80" />
              </div>
            </div>

            {/* Shadow Card for Depth */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-700 to-green-600 opacity-20 transform translate-x-3 translate-y-3 -z-10" />
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Vision;