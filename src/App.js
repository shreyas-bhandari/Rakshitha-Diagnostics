import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, Microscope, Heart, FlaskConical, User, Home, ChevronRight, Star, Award, Shield, Navigation, CheckCircle, Activity, Droplet } from 'lucide-react';

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
      badge: 'Basic Health Checkup',
      price: '₹1180',
      discountPrice: '₹750',
      discount: '36% OFF',
      tests: [
        'Complete Haemogram (CBC)',
        'Blood Sugar (FBS, PPBS)',
        'Lipid Profile (FLP)',
        'Liver Function Test (LFT)',
        'Kidney Function Test (RFT)'
      ]
    },
    {
      name: 'PAKOO2',
      badge: 'Comprehensive Checkup',
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
      ]
    },
    {
      name: 'PAKOO3',
      badge: 'Premium Health Checkup',
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
      ]
    }
  ];

  const services = [
    { icon: Microscope, title: 'Complete Haemogram', desc: 'Comprehensive blood cell analysis for complete health assessment' },
    { icon: FlaskConical, title: 'Biochemistry Tests', desc: 'Blood sugar, lipid profile, liver & kidney function tests' },
    { icon: Activity, title: 'Thyroid Function', desc: 'Complete thyroid profile including T3, T4, and TSH testing' },
    { icon: Home, title: 'Home Collection', desc: 'Convenient sample collection service at your doorstep' }
  ];

  const trustBadges = [
    { icon: Shield, text: 'NABL Certified', color: 'text-blue-600' },
    { icon: Award, text: 'ISO Certified', color: 'text-green-600' },
    { icon: CheckCircle, text: 'Accurate Results', color: 'text-teal-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Phone size={14} />
              <span>9448202999</span>
            </span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:flex items-center space-x-1">
              <Clock size={14} />
              <span>Mon-Sat: 7AM-6:30PM | Sun: 7AM-1PM</span>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle size={14} />
            <span className="font-semibold">NABL & ISO Certified</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Microscope className="text-white" size={28} strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Rakshitha Diagnostics</h1>
                <p className="text-xs text-teal-600 font-semibold">Kukkikatte Branch • NABL Certified</p>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-1">
              {['Home', 'Services', 'Packages', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="px-5 py-2 text-gray-700 hover:text-teal-600 font-semibold transition rounded-lg hover:bg-teal-50"
                >
                  {item}
                </a>
              ))}
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {['Home', 'Services', 'Packages', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-semibold"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Trust Badge - Floating */}
      <div className="fixed top-32 right-8 z-40 hidden lg:block">
        <div className="bg-white rounded-2xl shadow-2xl p-5 border-2 border-teal-500">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-4xl font-bold text-teal-600 mb-1">4.9</div>
            <div className="text-xs text-gray-600 font-semibold mb-3">1,200+ Reviews</div>
            <div className="space-y-2 mb-3">
              <div className="flex items-center space-x-2 text-xs text-gray-700">
                <Shield className="text-blue-600" size={14} />
                <span className="font-semibold">NABL Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-700">
                <Award className="text-green-600" size={14} />
                <span className="font-semibold">ISO Certified</span>
              </div>
            </div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
              98% Satisfaction
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <MapPin size={16} />
                <span>Kukkikatte Branch - Now Open</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                Your Trusted <span className="text-teal-600">Healthcare</span> Partner
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                NABL certified diagnostic laboratory providing accurate and timely test results with home collection facility.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center space-x-2 bg-white px-4 py-3 rounded-lg shadow-md border border-gray-200">
                    <badge.icon className={badge.color} size={20} />
                    <span className="text-gray-700 font-semibold text-sm">{badge.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="tel:9448202999" className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition font-semibold text-lg">
                  <Phone size={22} />
                  <span>Call Now</span>
                </a>
                <a href="#packages" className="inline-flex items-center space-x-2 bg-white text-teal-600 px-8 py-4 rounded-lg hover:shadow-xl transition font-semibold text-lg border-2 border-teal-600">
                  <span>View Packages</span>
                  <ChevronRight size={22} />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8">
                <img 
                  src="/images/5.png"
                  alt="Laboratory"
                  className="rounded-2xl shadow-xl w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">10+ Years</p>
                    <p className="text-sm text-gray-600">Trusted Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { value: '4.9★', label: 'Customer Rating' },
              { value: '1,200+', label: 'Happy Patients' },
              { value: '98%', label: 'Accuracy' },
              { value: '10+', label: 'Years Experience' },
              { value: '24/7', label: 'Report Access' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-teal-100 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive diagnostic services with state-of-the-art equipment and experienced technologists</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-gray-100 group">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <service.icon className="text-teal-600" size={32} strokeWidth={2} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Facility</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Modern, well-equipped laboratory with stringent quality controls</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "/images/1.png",
              "/images/2.png",
              "/images/3.png",
              "/images/4.png",
              "/images/5.png",
              "/images/1.png"
            ].map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
                <img 
                  src={img} 
                  alt={`Facility ${idx + 1}`}
                  className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Packages */}
      <section id="packages" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Health Checkup Packages</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive health packages at affordable prices with accurate results</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {healthPackages.map((pkg, idx) => (
              <div key={idx} className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition border-2 ${pkg.popular ? 'border-teal-500 transform md:scale-105' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white text-center py-2 font-bold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8">
                  <span className="inline-block bg-white text-teal-600 px-4 py-1 rounded-full text-sm font-bold mb-4 shadow-sm">{pkg.badge}</span>
                  <h4 className="text-3xl font-bold text-gray-800 mb-4">{pkg.name}</h4>
                  <div className="flex items-end space-x-2 mb-3">
                    <span className="text-5xl font-bold text-teal-600">{pkg.discountPrice}</span>
                    <span className="text-xl line-through text-gray-400 mb-2">{pkg.price}</span>
                  </div>
                  <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold">{pkg.discount}</span>
                </div>
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {pkg.tests.map((test, testIdx) => (
                      <li key={testIdx} className="flex items-start space-x-3">
                        <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{test}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="tel:9448202999" className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-4 rounded-xl hover:shadow-lg transition font-bold text-lg flex items-center justify-center space-x-2">
                    <span>Book Now</span>
                    <ChevronRight size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Expert Team</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Experienced and certified laboratory professionals dedicated to your health</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {[
              { name: 'Mr. Ashok Kumar', degree: 'B.Sc., MLT (MAHE, Manipal)', role: 'Lab Technologist', image: '/images/Ashok kumar.jpg' },
              { name: 'Poornima Ashok Kumar', degree: 'DMLT', role: 'Lab Technologist', image: '/images/Poornima Ashok kumar.jpg' }
            ].map((member, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition text-center border border-gray-100">
                <div className="w-32 h-32 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <User className="text-teal-600" size={56} strokeWidth={2} />
                  )}
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h4>
                <p className="text-teal-600 font-bold mb-2">{member.degree}</p>
                <p className="text-gray-600 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h3>
            <p className="text-xl text-teal-100">We're here to assist you with all your diagnostic needs</p>
          </div>

          <div className="space-y-8">
            {/* Call Us */}
            <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl hover:bg-white/20 transition">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                  <Phone className="text-teal-600" size={36} strokeWidth={2.5} />
                </div>
                <h4 className="text-3xl font-bold mb-6">Call Us</h4>
                <div className="space-y-3">
                  <a href="tel:9448202999" className="block text-2xl font-semibold hover:text-teal-200 transition">9448202999</a>
                  <a href="tel:7760934979" className="block text-2xl font-semibold hover:text-teal-200 transition">7760934979</a>
                  <a href="tel:08202574499" className="block text-2xl font-semibold hover:text-teal-200 transition">08202574499</a>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl hover:bg-white/20 transition">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                  <Clock className="text-teal-600" size={36} strokeWidth={2.5} />
                </div>
                <h4 className="text-3xl font-bold mb-6">Working Hours</h4>
                <div className="space-y-2">
                  <p className="text-2xl font-semibold">Monday - Saturday</p>
                  <p className="text-xl">7:00 AM - 6:30 PM</p>
                  <p className="text-xl mt-4">Sunday: 7:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            {/* Visit Us */}
            <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl hover:bg-white/20 transition">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                  <MapPin className="text-teal-600" size={36} strokeWidth={2.5} />
                </div>
                <h4 className="text-3xl font-bold mb-6">Visit Us</h4>
                <div className="space-y-2 mb-6">
                  <p className="text-xl font-semibold">Tiger Circle, Kukkikatte</p>
                  <p className="text-xl">Udupi District, Karnataka</p>
                </div>
                <a 
                  href="https://maps.app.goo.gl/RMAqhdvkFWm49aUN7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition"
                >
                  <Navigation size={24} />
                  <span>Get Directions</span>
                  <ChevronRight size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Microscope className="text-white" size={32} />
            </div>
            <h5 className="text-3xl font-bold">Rakshitha Diagnostics</h5>
          </div>
          <div className="inline-block bg-teal-600 text-white px-4 py-2 rounded-full font-bold text-sm mb-4">
            Kukkikatte Branch
          </div>
          <p className="text-gray-400 mb-3">NABL & ISO Certified Laboratory</p>
          <p className="text-gray-400 mb-3">Tiger Circle, Kukkikatte • Udupi District</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="tel:9448202999" className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition">
              <Phone size={20} />
            </a>
            <a href="https://maps.app.goo.gl/RMAqhdvkFWm49aUN7" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
              <MapPin size={20} />
            </a>
            <a href="#home" className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
              <Home size={20} />
            </a>
          </div>
          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">© 2024 Rakshitha Diagnostics. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <a 
        href="tel:9448202999"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-teal-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition"
      >
        <Phone className="text-white" size={28} />
      </a>

      <a 
        href="https://maps.app.goo.gl/RMAqhdvkFWm49aUN7"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-28 right-8 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition"
      >
        <Navigation className="text-white" size={28} />
      </a>
    </div>
  );
}

export default App;
