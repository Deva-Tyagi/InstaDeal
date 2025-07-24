'use client';
import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  User, 
  MessageSquare, 
  Building2,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Star,
  Users,
  Award,
  Shield
} from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    property_type: '',
    budget_range: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState('');

  // EmailJS Configuration - REPLACE WITH YOUR CREDENTIALS
  const EMAILJS_CONFIG = {
    // serviceId: 'your_service_id',        // Replace with your EmailJS service ID
    // templateId: 'your_template_id',      // Replace with your EmailJS template ID
    // publicKey: 'your_public_key'        // Replace with your EmailJS public key
  };

  useEffect(() => {
    // Initialize EmailJS - UNCOMMENT AND ADD YOUR PUBLIC KEY
    // emailjs.init(EMAILJS_CONFIG.publicKey);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS send function - UNCOMMENT AND ADD YOUR SERVICE/TEMPLATE IDs
      /*
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form.current,
        EMAILJS_CONFIG.publicKey
      );
      */

      // Simulate success for demo (REMOVE THIS WHEN EMAILJS IS CONFIGURED)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        user_name: '',
        user_email: '',
        user_phone: '',
        property_type: '',
        budget_range: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const propertyTypes = [
    'Residential Apartment',
    'Commercial Space',
    'Villa/Independent House',
    'Plot/Land',
    'Office Space',
    'Retail Shop',
    'Warehouse',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹50 Lakhs',
    '₹50 Lakhs - ₹1 Crore',
    '₹1 Crore - ₹2 Crores',
    '₹2 Crores - ₹5 Crores',
    '₹5 Crores - ₹10 Crores',
    'Above ₹10 Crores'
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Let's Find Your Dream Property
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to make your real estate dreams come true? Our expert team is here to guide you every step of the way. 
            <span className="text-blue-600 font-semibold"> Get started today!</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Trust Indicators */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Award className="w-6 h-6 text-yellow-500 mr-3" />
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-slate-700">500+ Happy Customers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-slate-700">RERA Verified Properties</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Star className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-slate-700">15+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Users className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="text-slate-700">98% Client Satisfaction</span>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-2xl">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Visit Our Office</h4>
                    <p className="text-slate-600 leading-relaxed">
                      World Trade Tower Block B<br />
                      Sector 16, Noida<br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-2xl">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Call Us</h4>
                    <p className="text-slate-600">+91 9818094754</p>
                    <p className="text-sm text-slate-500">Mon-Sat 10AM-7PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-2xl">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Email Us</h4>
                    <p className="text-slate-600">info@instadeal.in</p>
                    <p className="text-sm text-slate-500">We reply within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-2xl">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Business Hours</h4>
                    <p className="text-slate-600">Mon - Sat: 10:00 AM - 7:00 PM</p>
                    <p className="text-slate-600">Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 relative overflow-hidden">
              {/* Form Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-teal-50/50 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">
                    🏡 Start Your Property Journey Today!
                  </h3>
                  <p className="text-slate-600">
                    Fill out this form and our property experts will contact you within 30 minutes!
                  </p>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="text-green-800 font-semibold">Message sent successfully! 🎉</p>
                      <p className="text-green-600 text-sm">We'll contact you within 30 minutes.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center space-x-3">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                    <div>
                      <p className="text-red-800 font-semibold">Something went wrong!</p>
                      <p className="text-red-600 text-sm">Please try again or call us directly.</p>
                    </div>
                  </div>
                )}

                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                          focusedField === 'user_name' ? 'text-blue-600' : 'text-slate-400'
                        }`} />
                        <input
                          type="text"
                          name="user_name"
                          value={formData.user_name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('user_name')}
                          onBlur={() => setFocusedField('')}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-0 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                          focusedField === 'user_email' ? 'text-blue-600' : 'text-slate-400'
                        }`} />
                        <input
                          type="email"
                          name="user_email"
                          value={formData.user_email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('user_email')}
                          onBlur={() => setFocusedField('')}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-0 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone Field */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                          focusedField === 'user_phone' ? 'text-blue-600' : 'text-slate-400'
                        }`} />
                        <input
                          type="tel"
                          name="user_phone"
                          value={formData.user_phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('user_phone')}
                          onBlur={() => setFocusedField('')}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-0 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    {/* Property Type */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Property Type *
                      </label>
                      <div className="relative">
                        <Building2 className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                          focusedField === 'property_type' ? 'text-blue-600' : 'text-slate-400'
                        }`} />
                        <select
                          name="property_type"
                          value={formData.property_type}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('property_type')}
                          onBlur={() => setFocusedField('')}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-0 transition-all duration-300 bg-white/70 backdrop-blur-sm appearance-none cursor-pointer"
                        >
                          <option value="">Select property type</option>
                          {propertyTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Budget Range */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Budget Range *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {budgetRanges.map((range) => (
                        <label key={range} className="relative cursor-pointer">
                          <input
                            type="radio"
                            name="budget_range"
                            value={range}
                            checked={formData.budget_range === range}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className={`p-4 rounded-2xl border-2 text-center transition-all duration-300 ${
                            formData.budget_range === range
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-slate-200 bg-white/70 text-slate-600 hover:border-blue-300'
                          }`}>
                            <span className="text-sm font-medium">{range}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Additional Requirements
                    </label>
                    <div className="relative">
                      <MessageSquare className={`absolute left-4 top-4 w-5 h-5 transition-colors ${
                        focusedField === 'message' ? 'text-blue-600' : 'text-slate-400'
                      }`} />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        rows="5"
                        className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-0 transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none"
                        placeholder="Tell us about your specific requirements, preferred location, timeline, etc."
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white font-bold py-5 px-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        <span>Sending your request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        <span>Get My Dream Property! 🚀</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-slate-500 mt-4">
                    🔒 Your information is secure and will not be shared with third parties.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;