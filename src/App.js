import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, Microscope, Heart, FlaskConical, User, Home, ChevronRight, ChevronLeft, Star, Award, Shield } from 'lucide-react';

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

  // Load images from public/images/manifest.json so they are served as static assets
  // This avoids bundling image binaries and makes it easy to add/remove images.
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    let mounted = true;
    // Use PUBLIC_URL so the app works when deployed to a subpath (e.g. GitHub Pages)
    const manifestUrl = `${process.env.PUBLIC_URL || ''}/images/manifest.json`;
    const metadataUrl = `${process.env.PUBLIC_URL || ''}/images/metadata.json`;

    async function load() {
      try {
        const res = await fetch(manifestUrl);
        if (!res.ok) throw new Error('manifest not found');
        const list = await res.json();

        // try to load optional metadata (filename -> title)
        let meta = {};
        try {
          const mres = await fetch(metadataUrl);
          if (mres.ok) meta = await mres.json();
        } catch (e) {
          // ignore missing metadata
        }

        if (!mounted) return;
        const arr = Array.isArray(list)
          ? list.map((name) => ({ src: `${process.env.PUBLIC_URL || ''}/images/${name}`, name, title: meta[name] || null }))
          : [];
        setGalleryImages(arr);
      } catch (err) {
        console.warn('Could not load image manifest or metadata:', err);
        if (mounted) setGalleryImages([]);
      }
    }

    load();
    return () => { mounted = false; };
  }, []);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevLightbox = () => setLightboxIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const nextLightbox = () => setLightboxIndex((i) => (i + 1) % galleryImages.length);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, galleryImages.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 bg-white shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src="/images/logo.png" alt="Rakshitha Diagnostics Logo" className="w-24 h-24 transition duration-300 hover:rotate-12 hover:scale-110" />
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
              <a href="#contact" className="text-gray-700 hover:text-red-600 transition font-medium relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-red-50 rounded-lg transition font-medium">Home</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-red-50 rounded-lg transition font-medium">Services</a>
              <a href="#packages" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-red-50 rounded-lg transition font-medium">Packages</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-red-50 rounded-lg transition font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-clip-text text-transparent">Rakshitha</span>
            <br />
            <span className="text-gray-700">Diagnostics</span>
          </h2>
          <p className="text-2xl text-gray-600 mb-8 italic font-light">"Your health is our priority"</p>
          
          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
                <feature.icon className="text-red-600" size={20} />
                <span className="text-gray-700 font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
              <Clock size={24} />
              <div className="text-left">
                <p className="font-semibold">Mon - Sat: 7:00 AM - 6:30 PM</p>
                <p className="text-sm text-blue-100">Sun: 7:00 AM - 1:00 PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
              <Home size={24} />
              <span className="font-semibold">House Visit Available</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:9448202999" className="group relative bg-gradient-to-r from-red-600 to-orange-600 text-white px-10 py-4 rounded-2xl hover:from-red-700 hover:to-orange-700 transition shadow-xl hover:shadow-2xl flex items-center space-x-3 transform hover:-translate-y-1 duration-300">
              <Phone size={24} />
              <span className="font-bold text-lg">Call Now</span>
              <ChevronRight className="group-hover:translate-x-1 transition" size={20} />
            </a>
            <a href="#packages" className="group bg-white text-red-600 px-10 py-4 rounded-2xl hover:bg-gray-50 transition shadow-xl hover:shadow-2xl border-2 border-red-600 font-bold text-lg transform hover:-translate-y-1 duration-300 flex items-center space-x-2">
              <span>View Packages</span>
              <ChevronRight className="group-hover:translate-x-1 transition" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-transparent to-blue-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-800 mb-4">Our Services</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative z-10">
                  <div className={`w-20 h-20 ${service.color} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition duration-500`}>
                    <service.icon className="text-white" size={36} strokeWidth={2} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-800 mb-4">Out Look</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 text-lg">State-of-the-art laboratory with modern equipment</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img, idx) => {
              // image objects have { src, name, title }
              const caption = img.title || img.name.replace(/\.[^/.]+$/, '').replace(/[_-]+/g, ' ');
              return (
                <div key={idx} className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 z-10"></div>
                  <img 
                    src={img.src} 
                    alt={caption} 
                    loading="lazy"
                    onClick={() => openLightbox(idx)}
                    onError={(e) => {
                      // inline lightweight placeholder (neutral background) so broken icon doesn't show
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><rect width='100%' height='100%' fill='%23f1f5f9'/></svg>";
                    }}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-700 cursor-pointer bg-slate-100"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-full group-hover:translate-y-0 transition duration-500">
                    <p className="text-white font-bold text-xl">{caption}</p>
                  </div>
                </div>
              );
            })}
          </div>
            {/* Lightbox modal */}
            {lightboxOpen && galleryImages.length > 0 && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={closeLightbox}>
                <div className="relative max-w-5xl w-full h-[80vh] bg-transparent flex items-center justify-center">
                  <button aria-label="close" className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/30 hover:bg-black/50" onClick={closeLightbox}>
                    ✕
                  </button>
                  <button aria-label="previous" className="absolute left-4 text-white p-2 rounded-full bg-black/30 hover:bg-black/50" onClick={(e) => { e.stopPropagation(); prevLightbox(); }}>
                    <ChevronLeft />
                  </button>
                  <div className="overflow-hidden rounded-lg shadow-2xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                    <img src={galleryImages[lightboxIndex]?.src} alt={galleryImages[lightboxIndex]?.title || galleryImages[lightboxIndex]?.name || `Large ${lightboxIndex+1}`} className="max-w-full max-h-full object-contain" />
                  </div>
                  <button aria-label="next" className="absolute right-4 text-white p-2 rounded-full bg-black/30 hover:bg-black/50" onClick={(e) => { e.stopPropagation(); nextLightbox(); }}>
                    <ChevronRight />
                  </button>
                </div>
              </div>
            )}
        </div>
      </section>

      {/* Health Packages Section */}
      <section id="packages" className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-800 mb-4">Health Packages</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 text-lg">Comprehensive health checkup packages at affordable prices</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {healthPackages.map((pkg, idx) => (
              <div key={idx} className={`relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${pkg.popular ? 'ring-4 ring-purple-500 scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10 animate-pulse">
                    MOST POPULAR
                  </div>
                )}
                <div className={`bg-gradient-to-r ${pkg.color} text-white p-8 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                  <div className="relative z-10">
                    <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold mb-3">{pkg.badge}</span>
                    <h4 className="text-3xl font-bold mb-2">{pkg.name}</h4>
                    <div className="flex items-end space-x-2 mb-2">
                      <span className="text-5xl font-bold">{pkg.discountPrice}</span>
                      <span className="text-xl line-through opacity-70 mb-2">{pkg.price}</span>
                    </div>
                    <span className="inline-block bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-bold">{pkg.discount}</span>
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {pkg.tests.map((test, testIdx) => (
                      <li key={testIdx} className="flex items-start space-x-3 group">
                        <div className="mt-1 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition">{test}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="tel:9448202999" className={`mt-8 w-full bg-gradient-to-r ${pkg.color} text-white py-4 rounded-2xl hover:shadow-lg transition font-bold text-lg flex items-center justify-center space-x-2 group`}>
                    <span>Book Now</span>
                    <ChevronRight className="group-hover:translate-x-1 transition" size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-800 mb-4">Our Expert Team</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 text-lg">Experienced and certified laboratory professionals</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              { name: 'Mr. Ashok Kumar', degree: 'B.Sc., MLT (MAHE, Manipal)', role: 'Lab Technologist', color: 'from-blue-500 to-cyan-500', image: '/images/Ashok kumar.jpg' },
              { name: 'Poornima Ashok Kumar', degree: 'DMLT', role: 'Lab Technologist', color: 'from-purple-500 to-pink-500', image: '/images/Poornima Ashok kumar.jpg' }
            ].map((member, idx) => (
              <div key={idx} className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative z-10 text-center">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-28 h-28 rounded-3xl mx-auto mb-6 object-cover shadow-lg group-hover:scale-110 group-hover:rotate-3 transition duration-500"
                    />
                  ) : (
                    <div className={`w-28 h-28 bg-gradient-to-br ${member.color} rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition duration-500`}>
                      <User className="text-white" size={48} strokeWidth={2} />
                    </div>
                  )}
                  <h4 className="text-3xl font-bold text-gray-800 mb-3">{member.name}</h4>
                  <p className={`bg-gradient-to-r ${member.color} bg-clip-text text-transparent font-bold text-lg mb-2`}>{member.degree}</p>
                  <p className="text-gray-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-red-600 via-orange-600 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-bold mb-4">Get In Touch</h3>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
            <p className="mt-4 text-xl text-red-100">We're here to help you with your health needs</p>
          </div>

          {/* Responsive cards: horizontal on md+, stacked on small screens */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center gap-10">
            {/* Card 1 - Call Us */}
            <div className="w-full md:w-1/3 max-w-sm flex flex-col items-center text-center px-6 py-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg mb-4">
                <Phone className="text-white" size={40} />
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white mb-3">Call Us</h4>
              <div className="text-white space-y-1 text-lg sm:text-xl font-semibold">
                <div>9448202999</div>
                <div>7760934979</div>
                <div>08202574499</div>
              </div>
            </div>

            {/* Card 2 - Working Hours */}
            <div className="w-full md:w-1/3 max-w-sm flex flex-col items-center text-center px-6 py-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg mb-4">
                <Clock className="text-white" size={40} />
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white mb-3">Working Hours</h4>
              <div className="text-white space-y-1 text-lg sm:text-xl font-semibold">
                <div>Mon - Sat</div>
                <div>7:00 AM - 6:30 PM</div>
                <div>Sunday: 7:00 AM - 1:00 PM</div>
              </div>
            </div>

            {/* Card 3 - Visit Us */}
            <div className="w-full md:w-1/3 max-w-sm flex flex-col items-center text-center px-6 py-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg mb-4">
                <MapPin className="text-white" size={40} />
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white mb-3">Visit Us</h4>
              <div className="text-white space-y-1 text-lg sm:text-xl font-semibold">
                <div>Opposite KMC Manipal</div>
                <div>Tiger Circle, Kukkikatte</div>
                <div>Manipal, Udupi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center mb-4">
            <h5 className="text-3xl font-bold">Rakshitha Diagnostics</h5>
          </div>
          <p className="text-gray-400 mb-4 italic text-lg">"Your health is our priority"</p>
          <p className="text-gray-400 mb-2">Blood & Urine Testing Laboratory</p>
          <p className="text-gray-400 mb-6">NABL Accredited | House Visit Available</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="tel:9448202999" className="text-gray-400 hover:text-red-500 transition">
              <Phone size={24} />
            </a>
            <a href="#contact" className="text-gray-400 hover:text-red-500 transition">
              <MapPin size={24} />
            </a>
            <a href="#home" className="text-gray-400 hover:text-red-500 transition">
              <Home size={24} />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">© 2024 Rakshitha Diagnostics. All rights reserved.</p>
            <p className="text-gray-600 text-xs mt-2">Manipal, Udupi - Your Trusted Healthcare Partner</p>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <a 
        href="tel:9448202999"
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition animate-pulse"></div>
        <div className="relative w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition duration-300">
          <Phone className="text-white animate-bounce" size={28} />
        </div>
      </a>
    </div>
  );
}

export default App;
