import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, Microscope, Heart, FlaskConical, User, Home, ChevronRight, Star, Award, Shield } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const healthPackages = [
    {
      name: 'PAKOO1',
      badge: 'Basic',
      price: '₹1180',
      discountPrice: '₹750',
      discount: '36% OFF',
      tests: [
        'Complete Haemogram (CBC)',
        'Blood Sugar (FBS, PPBS)',
        'Lipid Profile (FLP)',
        'Liver Function Test (LFT)',
        'Kidney Function Test (RFT)'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'PAKOO2',
      badge: 'Popular',
      price: '₹1600',
      discountPrice: '₹1100',
      discount: '31% OFF',
      popular: true,
      tests: [
        'Complete Haemogram',
        'Blood Sugar (FBS, PPBS)',
        'Lipid Profile (FLP)',
        'Liver Function Test (LFT)',
        'Kidney Function Test (RFT)',
        'Glycosylated Hemoglobin (HBA1C)',
        'Serum Calcium',
        'Complete Urine Analysis'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'PAKOO3',
      badge: 'Premium',
      price: '₹2500',
      discountPrice: '₹1600',
      discount: '36% OFF',
      tests: [
        'Complete Haemogram',
        'Blood Sugar (FBS, PPBS)',
        'Lipid Profile (FLP)',
        'Liver Function Test (LFT)',
        'Kidney Function Test (RFT)',
        'Glycosylated Hemoglobin (HBA1C)',
        'Serum Calcium',
        'Serum Electrolytes (NA+, K+, CL-)',
        'HIV, HB, Ag',
        'Thyroid Function Test (T3, T4, TSH)',
        'Complete Urine Analysis'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const services = [
    { icon: Microscope, title: 'Complete Haemogram', desc: 'Comprehensive blood cell analysis', color: 'bg-gradient-to-br from-red-500 to-pink-500' },
    { icon: FlaskConical, title: 'Biochemistry Tests', desc: 'Blood sugar, lipid profile, liver & kidney function', color: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
    { icon: Heart, title: 'Thyroid Function', desc: 'T3, T4, TSH testing', color: 'bg-gradient-to-br from-purple-500 to-indigo-500' },
    { icon: Home, title: 'Home Visit Available', desc: 'Convenient sample collection at your doorstep', color: 'bg-gradient-to-br from-orange-500 to-amber-500' }
  ];

  const features = [
    { icon: Award, text: 'Certified Lab Technologists' },
    { icon: Shield, text: 'Accurate Results' },
    { icon: Star, text: 'Modern Equipment' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              {/* Enhanced Logo */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition duration-300">
                  <div className="absolute inset-1 bg-white/20 rounded-xl"></div>
                  <div className="relative">
                    <Microscope className="text-white" size={28} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Rakshitha Diagnostics</h1>
                <p className="text-xs text-gray-600 font-medium">NABL Accredited Laboratory</p>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-red-600 transition font-medium relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#services" className="text-gray-700 hover:text-red-600 transition font-medium relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#packages" className="text-gray-700 hover:text-red-600 transition font-medium relative group">
                Packages
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </a>
