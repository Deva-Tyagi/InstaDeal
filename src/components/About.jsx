"use client"; 

import React, { useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  Award, 
  Users, 
  Home, 
  Target, 
  Lightbulb, 
  Shield, 
  Star,
  ChevronRight,
  Building,
  Heart,
  Zap
} from 'lucide-react';

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const textContentRef = useRef(null);
  const statsRef = useRef(null);
  const cardsRef = useRef(null);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    // Simulate GSAP timeline animations with CSS transitions and transforms
    const animateSection = () => {
      // Animate title
      if (titleRef.current) {
        titleRef.current.style.transform = 'translateY(0px)';
        titleRef.current.style.opacity = '1';
      }

      // Animate subtitle
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.style.transform = 'translateY(0px)';
          subtitleRef.current.style.opacity = '1';
        }
      }, 200);

      // Animate image with scale effect
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.style.transform = 'scale(1) rotate(0deg)';
          imageRef.current.style.opacity = '1';
        }
      }, 400);

      // Animate text content
      setTimeout(() => {
        if (textContentRef.current) {
          textContentRef.current.style.transform = 'translateX(0px)';
          textContentRef.current.style.opacity = '1';
        }
      }, 600);

      // Animate stats
      setTimeout(() => {
        if (statsRef.current) {
          const statItems = statsRef.current.children;
          Array.from(statItems).forEach((item, index) => {
            setTimeout(() => {
              item.style.transform = 'translateY(0px)';
              item.style.opacity = '1';
            }, index * 100);
          });
        }
      }, 800);

      // Animate feature cards
      setTimeout(() => {
        if (cardsRef.current) {
          const cards = cardsRef.current.children;
          Array.from(cards).forEach((card, index) => {
            setTimeout(() => {
              card.style.transform = 'translateY(0px) rotateX(0deg)';
              card.style.opacity = '1';
            }, index * 150);
          });
        }
      }, 1000);

      // Animate floating elements
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          setTimeout(() => {
            el.style.opacity = '0.6';
            el.style.transform = 'translateY(0px)';
          }, 1200 + index * 100);
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Home, number: '500+', label: 'Properties Sold', color: 'text-blue-500' },
    { icon: Users, number: '1000+', label: 'Happy Clients', color: 'text-emerald-500' },
    { icon: Award, number: '15+', label: 'Years Experience', color: 'text-purple-500' },
    { icon: TrendingUp, number: '98%', label: 'Success Rate', color: 'text-orange-500' }
  ];

  const features = [
    {
      icon: Target,
      title: 'Customer-Centric Approach',
      description: 'We put our clients first, understanding their unique needs and delivering personalized solutions.',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Technology',
      description: 'Leveraging cutting-edge technology to streamline processes and enhance customer experience.',
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Building lasting relationships through honest communication and reliable service delivery.',
      gradient: 'from-emerald-600 to-teal-500'
    },
    {
      icon: Zap,
      title: 'Quick Solutions',
      description: 'Fast, efficient processes that get you to your dream property without unnecessary delays.',
      gradient: 'from-orange-600 to-red-500'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (floatingElementsRef.current[i] = el)}
            className={`absolute w-32 h-32 rounded-full bg-gradient-to-br ${
              i % 4 === 0 ? 'from-blue-200/20 to-cyan-200/20' :
              i % 4 === 1 ? 'from-purple-200/20 to-pink-200/20' :
              i % 4 === 2 ? 'from-emerald-200/20 to-teal-200/20' :
              'from-orange-200/20 to-red-200/20'
            } blur-3xl`}
            style={{
              left: `${10 + (i * 15) % 80}%`,
              top: `${10 + (i * 20) % 70}%`,
              transform: 'translateY(30px)',
              opacity: 0,
              transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            style={{
              transform: 'translateY(50px)',
              opacity: 0,
              transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-emerald-800 bg-clip-text text-transparent">
              ABOUT US
            </span>
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            style={{
              transform: 'translateY(30px)',
              opacity: 0,
              transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s'
            }}
          >
            Pioneering the future of real estate with innovation, trust, and exceptional service
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Image */}
          <div className="relative">
            <div 
              ref={imageRef}
              className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-700"
              style={{
                transform: 'scale(0.8) rotate(-5deg)',
                opacity: 0,
                transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
                alt="Professional real estate consultation"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Floating Icon */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl animate-bounce">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Right Side - Content */}
          <div 
            ref={textContentRef}
            className="space-y-8"
            style={{
              transform: 'translateX(50px)',
              opacity: 0,
              transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s'
            }}
          >
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                WELCOME TO THE NEW ERA<br />
                <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  OF REAL ESTATE INVESTMENT
                </span>
              </h3>
              <div className="text-lg text-slate-600 space-y-4 leading-relaxed">
                <p>
                  <span className="font-semibold text-slate-800">RESIDENTIAL RESALE, SALE/PURCHASE</span> - 
                  A mindset of curiosity and continuous learning inspires us to discover the impossible and solve it for our customers.
                </p>
                <p>
                  A culture of seeking the new, innovating, and reimagining makes us different from the market. We don't just sell properties; we create dreams and build futures.
                </p>
              </div>
            </div>

            {/* Action Button */}
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Learn More About Us
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/50"
                style={{
                  transform: 'translateY(30px)',
                  opacity: 0,
                  transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-gradient-to-br from-current/10 to-current/20 rounded-full mb-4`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div 
            ref={cardsRef}
            className="col-span-full grid md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-white/50 overflow-hidden"
                  style={{
                    transform: 'translateY(30px) rotateX(10deg)',
                    opacity: 0,
                    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h4 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {feature.description}
                  </p>

                  {/* Hover Effect Stars */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Star className="w-6 h-6 text-yellow-400 fill-current animate-pulse" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
