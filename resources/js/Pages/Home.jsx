import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { MapPin, Phone, Mail, Clock, Star, Shield, Truck } from 'lucide-react';

const Home = ({ auth }) => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);

    // Parallax scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Auto slide testimonials
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
            name: "Muda Satria harsono",
            rating: 5,
            comment: "Sangat puas dengan pelayanannya yang ramah harga ramah di kantong bersih bersih pula barangnya makasi boss",
            avatar: "https://lh3.googleusercontent.com/p/AF1QipNnB2Lr8UNFwg1s97ek8s_Gh2qNd06rvtNW807f=s1360-w1360-h1020-rw"
        },
        {
            id: 2,
            name: "Dino Ichsandy Hanggara",
            rating: 5,
            comment: "Bagus banget disini untuk persewaan tenda dan alat outdoor, harga sama kualitas gokil parah, alat-alat selalu prima dan juga lengkap, di wa fast respon banget",
            avatar: "https://lh3.googleusercontent.com/p/AF1QipNnB2Lr8UNFwg1s97ek8s_Gh2qNd06rvtNW807f=s1360-w1360-h1020-rw"
        },
        {
            id: 3,
            name: "Rizqi Rinaldi",
            rating: 5,
            comment: "Recomended buat alatnya, sangat komplit dan terjaga kebersihan.",
            avatar: "https://lh3.googleusercontent.com/p/AF1QipNnB2Lr8UNFwg1s97ek8s_Gh2qNd06rvtNW807f=s1360-w1360-h1020-rw"
        }
    ];

    const features = [
        {
            icon: <Shield size={32} className="text-deep-green" />,
            title: "Kualitas Terjamin",
            description: "Semua peralatan dalam kondisi baik dan terawat"
        },
        {
            icon: <Truck size={32} className="text-deep-green" />,
            title: "Pengiriman Cepat",
            description: "Proses pengiriman dan pengambilan barang yang efisien"
        },
        {
            icon: <Clock size={32} className="text-deep-green" />,
            title: "Fleksibel",
            description: "Sewa harian dengan harga terjangkau"
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

            {/* Hero Section with Parallax */}
            <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
                {/* Parallax Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://picsum.photos/seed/camping/1920/1080.jpg')",
                        transform: `translateY(${scrollY * 0.5}px)`,
                        willChange: 'transform'
                    }}
                ></div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-deep-green/80 to-deep-green/60 z-10"></div>

                {/* Hero Content */}
                <div
                    className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-12"
                    style={{
                        transform: `translateY(${scrollY * 0.2}px)`,
                        opacity: Math.max(1 - scrollY / 500, 0),
                        willChange: 'transform, opacity'
                    }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in">
                        Jelajahi Alam Bersama Prawira Outdoor
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 animate-fade-in-delay">
                        Sewa alat camping berkualitas dengan harga terjangkau untuk petualangan Anda
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-delay-2">
                        <Link
                            href="/catalog"
                            className="bg-sand text-deep-green px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 text-center shadow-lg hover:shadow-xl"
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
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden sm:block">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Features Section with Parallax */}
            <section className="py-12 sm:py-16 bg-gray-50 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div
                    className="absolute top-0 right-0 w-64 h-64 bg-deep-green/5 rounded-full blur-3xl"
                    style={{
                        transform: `translateY(${scrollY * 0.1}px)`,
                        willChange: 'transform'
                    }}
                ></div>
                <div
                    className="absolute bottom-0 left-0 w-64 h-64 bg-sand/10 rounded-full blur-3xl"
                    style={{
                        transform: `translateY(${-scrollY * 0.1}px)`,
                        willChange: 'transform'
                    }}
                ></div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-deep-green mb-3 sm:mb-4">
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
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    opacity: Math.min((scrollY - 300) / 300, 1),
                                    transform: `translateY(${Math.max(50 - (scrollY - 300) / 5, 0)}px)`,
                                    willChange: 'transform, opacity'
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

            {/* About Section with Parallax */}
            <section id="about" className="py-12 sm:py-16 bg-white relative overflow-hidden">
                {/* Parallax Background Shape */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%231B4332\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                        transform: `translateX(${scrollY * 0.05}px)`,
                        willChange: 'transform'
                    }}
                ></div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-deep-green mb-4 sm:mb-6">
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
                                    <div className="bg-deep-green text-white w-12 h-12 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-lg">
                                        <span className="font-bold text-sm">100+</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm sm:text-base">Pelanggan Puas</p>
                                    </div>
                                </div>
                                <div className="flex items-center transform hover:scale-105 transition-transform">
                                    <div className="bg-deep-green text-white w-12 h-12 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-lg">
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
                                transform: `translateY(${scrollY * 0.05}px)`,
                                willChange: 'transform'
                            }}
                        >
                            <img
                                src="https://lh3.googleusercontent.com/p/AF1QipNnB2Lr8UNFwg1s97ek8s_Gh2qNd06rvtNW807f=s1360-w1360-h1020-rw"
                                alt="Tentang Prawira Outdoor"
                                className="rounded-lg shadow-xl w-full transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section with Parallax */}

            <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        transform: `translateY(${scrollY * 0.03}px)`,
                        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"%231B4332\" fill-opacity=\"1\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')"
                    }}
                />

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <Star size={48} className="mx-auto text-yellow-500 mb-4" />
                        <h2 className="text-4xl md:text-5xl font-bold text-deep-green mb-4">
                            Apa Kata Pelanggan Kami
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Kepuasan pelanggan adalah prioritas utama kami
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-sand/20 rounded-full -ml-16 -mt-16" />
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-deep-green/20 rounded-full -mr-16 -mb-16" />

                            <div className="relative z-10">
                                <div className="flex items-center mb-6">
                                    <img
                                        src={testimonials[activeTestimonial].avatar}
                                        alt={testimonials[activeTestimonial].name}
                                        className="w-20 h-20 rounded-full mr-6 border-4 border-deep-green/20 shadow-lg"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-2xl text-deep-green">{testimonials[activeTestimonial].name}</h4>
                                        <div className="flex mt-2">
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
                                <p className="text-gray-700 italic text-lg leading-relaxed">
                                    "{testimonials[activeTestimonial].comment}"
                                </p>
                                
                                {/* Google Reviews attribution */}
                                <div className="flex items-center justify-end mt-4">
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

                        <div className="flex justify-center mt-8 space-x-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleTestimonialSelect(index)}
                                    className={`transition-all duration-300 ${index === activeTestimonial
                                            ? 'w-12 h-4 bg-deep-green rounded-full'
                                            : 'w-4 h-4 bg-gray-300 rounded-full hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Location Section */}
            <section id="location" className="py-12 sm:py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-deep-green mb-3 sm:mb-4">
                            Kunjungi Kami
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
                            Datang langsung ke toko kami untuk melihat koleksi lengkap alat camping
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <div>
                            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg h-full shadow-md hover:shadow-xl transition-shadow">
                                <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                                    <MapPin size={24} className="mr-2 text-deep-green flex-shrink-0" />
                                    Lokasi Kami
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-4">
                                    Jl. Sekar Taman No.35, Tonatan <br />
                                    Kec. Ponorogo, Kab. Ponorogo <br />
                                    Jawa Timur 63418
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-center group">
                                        <Phone size={18} className="mr-3 text-deep-green flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        <span className="text-sm sm:text-base">+62 822-2914-3373</span>
                                    </div>
                                    <div className="flex items-center group">
                                        <Mail size={18} className="mr-3 text-deep-green flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        <span className="text-sm sm:text-base break-all">info@prawiraoutdoor.com</span>
                                    </div>
                                    <div className="flex items-center group">
                                        <Clock size={18} className="mr-3 text-deep-green flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        <span className="text-sm sm:text-base">Senin - Sabtu: 09:00 - 21:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-64 sm:h-80 md:h-full min-h-[300px]">
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
            <section className="py-12 sm:py-16 bg-deep-green text-white opacity-95 relative overflow-hidden h-[400px]">
                <div
                    className="absolute inset-0 opacity-50"
                    style={{
                        backgroundImage: "url('https://images.pexels.com/photos/2741648/pexels-photo-2741648.jpeg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        zIndex: -1,
                    }}
                ></div>

                <div className="max-w-4xl mx-auto p-8 sm:p-12 lg:p-16 text-center relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                        Siap Untuk Petualangan Anda?
                    </h2>
                    <p className="text-white text-base sm:text-lg mb-6 sm:mb-8">
                        Sewa sekarang dan dapatkan alat yang Anda butuhkan untuk petualangan Anda.
                    </p>
                    <Link
                        href="/catalog"
                        className="bg-sand text-deep-green px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 inline-block shadow-xl hover:shadow-2xl"
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
                                <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
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

                .animate-fade-in-delay {
                    animation: fade-in 1s ease-out 0.2s backwards;
                }

                .animate-fade-in-delay-2 {
                    animation: fade-in 1s ease-out 0.4s backwards;
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
            `}</style>
        </>
    );
};

export default Home;