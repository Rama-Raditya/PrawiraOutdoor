import React, { useState, useEffect, useRef } from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { MapPin, Phone, Mail, Clock, Star, Shield, Package, DollarSign } from 'lucide-react';

const Home = ({ auth }) => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const heroRef = useRef(null);
    const featuresRef = useRef(null);
    const aboutRef = useRef(null);
    const testimonialsRef = useRef(null);
    const ctaRef = useRef(null);
    const [visibleSections, setVisibleSections] = useState({
        features: false,
        about: false,
        testimonials: false,
        location: false,
        cta: false
    });

    // Optimized visibility detection using IntersectionObserver
    useEffect(() => {
        const observerOptions = {
            root: null,
            threshold: 0.1
        };

        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const section = entry.target.getAttribute('data-section');
                    if (section) {
                        setVisibleSections(prev => ({ ...prev, [section]: true }));
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        const sections = [
            { ref: featuresRef, id: 'features' },
            { ref: aboutRef, id: 'about' },
            { ref: testimonialsRef, id: 'testimonials' },
            { ref: ctaRef, id: 'cta' }
        ];

        sections.forEach(s => {
            if (s.ref.current) {
                s.ref.current.setAttribute('data-section', s.id);
                observer.observe(s.ref.current);
            }
        });

        const locationEl = document.getElementById('location');
        if (locationEl) {
            locationEl.setAttribute('data-section', 'location');
            observer.observe(locationEl);
        }

        return () => observer.disconnect();
    }, []);

    // Optimized scroll effect with throttling
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Set loaded state after a short delay for initial animations
        setTimeout(() => setIsLoaded(true), 100);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!autoSlide) return;

        const interval = setInterval(() => {
            setActiveTestimonial((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [autoSlide]);

    const testimonials = [
        {
            id: 1,
            name: "Muda Satria Harsono",
            rating: 5,
            comment: "Sangat puas dengan pelayanannya yang ramah, harga ramah di kantong, bersih bersih pula barangnya. Makasi boss!",
            avatar: "/images/avatar.png"
        },
        {
            id: 2,
            name: "Dino Ichsandy Hanggara",
            rating: 5,
            comment: "Bagus banget disini untuk persewaan tenda dan alat outdoor, harga sama kualitas gokil parah, alat-alat selalu prima dan juga lengkap, di wa fast respon banget",
            avatar: "/images/avatar.png"
        },
        {
            id: 3,
            name: "Rizqi Rinaldi",
            rating: 5,
            comment: "Recomended buat alatnya, sangat komplit dan terjaga kebersihan.",
            avatar: "/images/avatar.png"
        },
        {
            id: 4,
            name: "Rizqi Rinaldi",
            rating: 5,
            comment: "Recomended buat alatnya, sangat komplit dan terjaga kebersihan.",
            avatar: "/images/avatar.png"
        },
        {
            id: 5,
            name: "Rizqi Rinaldi",
            rating: 5,
            comment: "Recomended buat alatnya, sangat komplit dan terjaga kebersihan.",
            avatar: "/images/avatar.png"
        },
        {
            id: 6,
            name: "Rizqi Rinaldi",
            rating: 5,
            comment: "Recomended buat alatnya, sangat komplit dan terjaga kebersihan.",
            avatar: "/images/avatar.png"
        },
        {
            id: 7,
            name: "Rizqi Rinaldi",
            rating: 5,
            comment: "Recomended buat alatnya, sangat komplit dan terjaga kebersihan.",
            avatar: "/images/avatar.png"
        },
        {
            id: 8,
            name: "Rizqi Rinaldi",
            rating: 5,
            comment: "Recomended buat alatnya, sangat komplit dan terjaga kebersihan.",
            avatar: "/images/avatar.png"
        },
        {
            id: 9,
            name: "Rizqi Rinaldi",
            rating: 5,
            comment: "Recomended buat alatnya, sangat komplit dan terjaga kebersihan.",
            avatar: "/images/avatar.png"
        },
        {
            id: 10,
            name: "Rizqi Rinaldi",
            rating: 5,
            comment: "Recomended buat alatnya, sangat komplit dan terjaga kebersihan.",
            avatar: "/images/avatar.png"
        },
    ];

    const features = [
        {
            icon: <Shield size={32} className="text-orange-theme" />,
            title: "Kualitas Terjamin",
            description: "Semua peralatan dalam kondisi baik dan terawat"
        },
        {
            icon: <Package size={32} className="text-orange-theme" />,
            title: "Peralatan Lengkap",
            description: "Berbagai macam alat camping tersedia untuk kebutuhan Anda"
        },
        {
            icon: <DollarSign size={32} className="text-orange-theme" />,
            title: "Harga Terjangkau",
            description: "Sewa harian dengan harga yang bersahabat di kantong"
        }
    ];

    // Function to handle manual testimonial selection
    const handleTestimonialSelect = (index) => {
        setActiveTestimonial(index);
        setAutoSlide(false);
        // Resume auto-slide after 10 seconds of inactivity
        setTimeout(() => setAutoSlide(true), 10000);
    };

    return (
        <>
            <Head title="Prawira Outdoor - Penyewaan Alat Camping" />
            <Navbar user={auth.user} />

            {/* Hero Section - Optimized */}
            <section ref={heroRef} className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-screen flex items-center justify-center overflow-hidden">
                {/* Single optimized background with fixed attachment */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage: "url('https://picsum.photos/seed/camping/1920/1080.jpg')",
                        transform: `translateY(${scrollY * 0.3}px)`,
                    }}
                ></div>

                {/* Dark overlay untuk meningkatkan keterbacaan teks */}
                <div className="absolute inset-0 bg-black/40 z-5"></div>

                {/* Orange gradient overlay - lebih soft tapi tetap terlihat */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-theme/70 via-orange-theme/50 to-orange-theme/40 z-10"></div>

                {/* Additional orange layer untuk warna yang lebih kuat */}
                <div className="absolute inset-0 bg-orange-theme/25 z-10"></div>

                {/* Subtle animated gradient overlay */}
                <div
                    className="absolute inset-0 z-10 opacity-30"
                    style={{
                        background: 'linear-gradient(45deg, rgba(254, 111, 15, 0.3) 0%, transparent 50%, rgba(254, 111, 15, 0.2) 100%)',
                        animation: 'gradient-shift 8s ease infinite',
                    }}
                ></div>

                {/* Vignette effect untuk fokus ke tengah */}
                <div className="absolute inset-0 z-10" style={{
                    background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)'
                }}></div>

                {/* Minimal floating elements - reduced for performance */}
                <div
                    className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl z-5"
                    style={{
                        transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.1}px)`,
                    }}
                ></div>

                {/* Hero Content - Optimized animations */}
                <div
                    className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-12"
                    style={{
                        opacity: Math.max(1 - scrollY / 600, 0),
                    }}
                >
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
                        style={{
                            opacity: isLoaded ? 1 : 0,
                            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                            textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), 0 0 20px rgba(254, 111, 15, 0.3)'
                        }}
                    >
                        Jelajahi Alam Bersama Prawira Outdoor
                    </h1>
                    <p
                        className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white font-medium"
                        style={{
                            opacity: isLoaded ? 1 : 0,
                            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s',
                            textShadow: '0 2px 4px rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.3)'
                        }}
                    >
                        Sewa alat camping berkualitas dengan harga terjangkau untuk petualangan Anda
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                        style={{
                            opacity: isLoaded ? 1 : 0,
                            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
                        }}
                    >
                        <Link
                            href="/catalog"
                            className="bg-white text-orange-theme px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 text-center shadow-lg hover:shadow-xl"
                        >
                            Lihat Katalog
                        </Link>
                        <a
                            href="#about"
                            className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-deep-green transition-all text-center shadow-lg hover:shadow-xl"
                        >
                            Tentang Kami
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block"
                    style={{
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 1s ease-out 0.6s'
                    }}
                >
                    <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2 animate-bounce">
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section ref={featuresRef} className="py-12 sm:py-16 bg-gray-50 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-theme/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-theme/10 rounded-full blur-3xl"></div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div
                        className="text-center mb-8 sm:mb-12"
                        style={{
                            opacity: visibleSections.features ? 1 : 0,
                            transform: visibleSections.features ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                        }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-theme mb-3 sm:mb-4">
                            Mengapa Memilih Prawira Outdoor?
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
                            Kami menyediakan peralatan camping berkualitas dengan layanan terbaik untuk memastikan petualangan Anda berjalan lancar
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                                style={{
                                    opacity: visibleSections.features ? 1 : 0,
                                    transform: visibleSections.features ? 'translateY(0)' : 'translateY(30px)',
                                    transition: `opacity 0.8s ease-out ${index * 0.1}s, transform 0.8s ease-out ${index * 0.1}s`
                                }}
                            >
                                <div className="flex justify-center mb-4 transform transition-transform hover:scale-110">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-center mb-2">{feature.title}</h3>
                                <p className="text-sm sm:text-base text-gray-600 text-center">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section ref={aboutRef} id="about" className="py-12 sm:py-16 bg-white relative overflow-hidden">
                {/* Background Pattern */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23fe6f0f\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                    }}
                ></div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
                        <div
                            className="order-2 md:order-1"
                            style={{
                                opacity: visibleSections.about ? 1 : 0,
                                transform: visibleSections.about ? 'translateX(0)' : 'translateX(-30px)',
                                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                            }}
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-theme mb-4 sm:mb-6">
                                Tentang Prawira Outdoor
                            </h2>
                            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                                Prawira Outdoor adalah penyedia layanan persewaan alat camping yang berkomitmen untuk memberikan pengalaman outdoor terbaik bagi para pecinta alam. Didirikan pada tahun 2020, kami telah melayani ratusan pelanggan yang ingin menjelajahi keindahan alam Indonesia.
                            </p>
                            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                                Kami menyediakan berbagai macam peralatan camping mulai dari tenda, sleeping bag, matras, hingga peralatan masak. Semua produk kami terjamin kualitasnya dan selalu dalam kondisi terbaik untuk memastikan kenyamanan dan keamanan Anda selama berpetualang.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center transform hover:scale-105 transition-transform">
                                    <div className="bg-orange-theme text-white w-12 h-12 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-lg">
                                        <span className="font-bold text-sm">100+</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm sm:text-base">Pelanggan Puas</p>
                                    </div>
                                </div>
                                <div className="flex items-center transform hover:scale-105 transition-transform">
                                    <div className="bg-orange-theme text-white w-12 h-12 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-lg">
                                        <span className="font-bold text-sm">10+</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm sm:text-base">Jenis Produk</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="order-1 md:order-2"
                            style={{
                                opacity: visibleSections.about ? 1 : 0,
                                transform: visibleSections.about ? 'translateX(0)' : 'translateX(30px)',
                                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                            }}
                        >
                            <img
                                src="https://picsum.photos/seed/outdoor-gear/600/400.jpg"
                                alt="Tentang Prawira Outdoor"
                                className="rounded-lg shadow-xl w-full transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section ref={testimonialsRef} className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"%23fe6f0f\" fill-opacity=\"1\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')"
                    }}
                />

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div
                        className="text-center mb-12 lg:mb-16"
                        style={{
                            opacity: visibleSections.testimonials ? 1 : 0,
                            transform: visibleSections.testimonials ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                        }}
                    >
                        <Star size={48} className="mx-auto text-yellow-500 mb-4" />
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-theme mb-4">
                            Apa Kata Pelanggan Kami
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Kepuasan pelanggan adalah prioritas utama kami
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div
                            className="bg-white p-8 sm:p-10 lg:p-12 rounded-3xl shadow-2xl relative overflow-hidden mb-8 lg:mb-12"
                            style={{
                                opacity: visibleSections.testimonials ? 1 : 0,
                                transition: 'opacity 0.8s ease-out 0.2s'
                            }}
                        >
                            <div className="absolute top-0 left-0 w-32 h-32 bg-orange-theme/20 rounded-full -ml-16 -mt-16" />
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-theme/20 rounded-full -mr-16 -mb-16" />

                            <div className="relative z-10">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 text-center sm:text-left">
                                    <img
                                        src={testimonials[activeTestimonial].avatar}
                                        alt={testimonials[activeTestimonial].name}
                                        className="w-20 h-20 rounded-full mb-4 sm:mb-0 sm:mr-6 border-4 border-orange-theme/20 shadow-lg"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-xl lg:text-2xl text-orange-theme">{testimonials[activeTestimonial].name}</h4>
                                        <div className="flex justify-center sm:justify-start mt-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={20}
                                                    className={i < testimonials[activeTestimonial].rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic text-lg leading-relaxed text-center sm:text-left">
                                    "{testimonials[activeTestimonial].comment}"
                                </p>

                                {/* Google Reviews attribution */}
                                <div className="flex items-center justify-center sm:justify-end mt-6">
                                    <span className="text-sm text-gray-500 mr-2">Review dari</span>
                                    <img
                                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                                        alt="Google"
                                        className="h-6 w-auto"
                                    />
                                    <span className="text-sm text-gray-500 ml-1 font-medium">Reviews</span>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial dots */}
                        <div
                            className="flex justify-center items-center space-x-3 relative z-20"
                            style={{
                                opacity: visibleSections.testimonials ? 1 : 0,
                                transition: 'opacity 0.8s ease-out 0.4s'
                            }}
                        >
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleTestimonialSelect(index)}
                                    className={`transition-all duration-300 focus:outline-none ${index === activeTestimonial
                                        ? 'w-12 h-4 bg-orange-theme rounded-full shadow-md'
                                        : 'w-4 h-4 bg-gray-300 rounded-full hover:bg-gray-400 hover:shadow-md'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section id="location" className="py-12 sm:py-16 bg-white relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M0 40L40 0H20L0 20M40 40V20L20 40\"/%3E%3C/g%3E%3C/svg%3E')",
                    }}
                ></div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div
                        className="text-center mb-8 sm:mb-12"
                        style={{
                            opacity: visibleSections.location ? 1 : 0,
                            transform: visibleSections.location ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                        }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-theme mb-3 sm:mb-4">
                            Kunjungi Kami
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
                            Datang langsung ke toko kami untuk melihat koleksi lengkap alat camping
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <div
                            style={{
                                opacity: visibleSections.location ? 1 : 0,
                                transform: visibleSections.location ? 'translateX(0)' : 'translateX(-30px)',
                                transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
                            }}
                        >
                            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg h-full shadow-md hover:shadow-xl transition-shadow">
                                <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                                    <MapPin size={24} className="mr-2 text-orange-theme flex-shrink-0" />
                                    Lokasi Kami
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-4">
                                    Jl. Sekar Taman No.35, Tonatan <br />
                                    Kec. Ponorogo, Kab. Ponorogo <br />
                                    Jawa Timur 63418
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-center group">
                                        <Phone size={18} className="mr-3 text-orange-theme flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        <span className="text-sm sm:text-base">+62 822-2914-3373</span>
                                    </div>
                                    <div className="flex items-center group">
                                        <Mail size={18} className="mr-3 text-orange-theme flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        <span className="text-sm sm:text-base break-all">prawiray813@gmail.com</span>
                                    </div>
                                    <div className="flex items-center group">
                                        <Clock size={18} className="mr-3 text-orange-theme flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        <span className="text-sm sm:text-base">Senin - Minggu: 09:00 - 21:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="h-64 sm:h-80 md:h-full min-h-[300px]"
                            style={{
                                opacity: visibleSections.location ? 1 : 0,
                                transform: visibleSections.location ? 'translateX(0)' : 'translateX(30px)',
                                transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
                            }}
                        >
                            <div className="bg-gray-200 h-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.2065090811834!2d111.4830538!3d-7.8734478999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79a1dc17da7389%3A0xef99900fb18a623!2sPRAWIRA%20OUTDOOR%20(Persewaan%20Tenda%20Camping%20dan%20Peralatan%20Outdoor)!5e0!3m2!1sen!2sid!4v1769258063459!5m2!1sen!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Prawira Outdoor Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                ref={ctaRef}
                className="py-12 sm:py-16 bg-orange-theme text-white relative overflow-hidden h-[400px]"
            >
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: "url('https://images.pexels.com/photos/2741648/pexels-photo-2741648.jpeg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        zIndex: 0
                    }}
                ></div>

                <div
                    className="max-w-4xl mx-auto p-8 sm:p-12 lg:p-16 text-center relative z-10"
                    style={{
                        opacity: visibleSections.cta ? 1 : 0,
                        transform: visibleSections.cta ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                    }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                        Siap Untuk Petualangan Anda?
                    </h2>
                    <p className="text-white text-base sm:text-lg mb-6 sm:mb-8">
                        Sewa sekarang dan dapatkan alat yang Anda butuhkan untuk petualangan Anda.
                    </p>
                    <Link
                        href="/catalog"
                        className="bg-white text-orange-theme px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 inline-block shadow-xl hover:shadow-2xl"
                    >
                        Sewa Sekarang
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark-charcoal text-white py-8 sm:py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Prawira Outdoor</h3>
                            <p className="text-sm sm:text-base text-gray-400">
                                Penyedia layanan persewaan alat camping terpercaya untuk petualangan Anda.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><Link href="/" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Beranda</Link></li>
                                <li><Link href="/catalog" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Katalog</Link></li>
                                <li><a href="#about" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Tentang Kami</a></li>
                                <li><a href="#location" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Lokasi</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Kategori</h4>
                            <ul className="space-y-2">
                                <li><Link href="/catalog?category=tenda" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Tenda</Link></li>
                                <li><Link href="/catalog?category=sleeping-bag" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Sleeping Bag</Link></li>
                                <li><Link href="/catalog?category=matras" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Matras</Link></li>
                                <li><Link href="/catalog?category=cooking-set" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Cooking Set</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Hubungi Kami</h4>
                            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                                <li>+62 822-2914-3373</li>
                                <li className="break-all">info@prawiraoutdoor.com</li>
                                <li>Jl. Sekar Taman No.35, Tonatan, Kec. Ponorogo, Kabupaten Ponorogo, Jawa Timur 63418</li>
                            </ul>

                            <div className="flex space-x-4 mt-4">
                                {/* instagram path */}
                                <a href="https://www.instagram.com/prawiraoutdoorgear" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                {/* tiktok path */}
                                <a href="https://www.tiktok.com/@prawiraoutdoorgear" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-sm sm:text-base text-gray-400">
                        <p>&copy; 2026 Prawira Outdoor. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            <style jsx>{`
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }

                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .animate-bounce {
                    animation: bounce 2s infinite;
                }

                :root {
                    --orange-theme: #fe6f0f;
                }

                .text-orange-theme {
                    color: #fe6f0f;
                }

                .bg-orange-theme {
                    background-color: #fe6f0f;
                }

                .border-orange-theme {
                    border-color: #fe6f0f;
                }
            `}</style>
        </>
    );
};

export default Home;