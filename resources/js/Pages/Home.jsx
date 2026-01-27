import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { MapPin, Phone, Mail, Clock, Star, Shield, Truck, Mountain, Tent, Compass } from 'lucide-react';

const Home = ({ auth }) => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // Testimonials
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
            comment: "Bagus banget disini untuk persewaan tenda dan alat outdoor t,harga sama kualitas gokil parah, alat” selalu prima dan juga lengkap , di wa fast respon banget",
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

    return (
        <>
            <Head title="Prawira Outdoor - Penyewaan Alat Camping" />
            <Navbar user={auth.user} />

            {/* Hero Section with Parallax */}
            <section className="relative h-screen overflow-hidden">
                {/* Background Layer 1 - Sky */}
                <div 
                    className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200"
                    style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                />

                {/* Background Layer 2 - Mountains Far */}
                <div 
                    className="absolute inset-0 opacity-40"
                    style={{ 
                        transform: `translateY(${scrollY * 0.3}px)`,
                        backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />

                {/* Background Layer 3 - Mountains Near */}
                <div 
                    className="absolute inset-0 opacity-60"
                    style={{ 
                        transform: `translateY(${scrollY * 0.15}px)`,
                        backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center bottom'
                    }}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-green/20 to-deep-green/80" />

                {/* Content */}
                <div 
                    className="relative z-20 h-full flex items-center justify-center text-center text-white px-4"
                    style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-8 animate-float">
                            <Mountain size={80} className="mx-auto text-white/90 mb-4" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
                            Jelajahi Alam Bersama<br />
                            <span className="text-sand">Prawira Outdoor</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-white/95 drop-shadow-md">
                            Sewa alat camping berkualitas dengan harga terjangkau untuk petualangan Anda
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                href="/catalog" 
                                className="bg-sand text-deep-green px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
                            >
                                Lihat Katalog
                            </Link>
                            <a 
                                href="#about" 
                                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-deep-green transition-all shadow-lg"
                            >
                                Tentang Kami
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
                    </div>
                </div>
            </section>

            {/* Features Section with Parallax Cards */}
            <section className="relative py-32 overflow-hidden">
                {/* Background Pattern */}
                <div 
                    className="absolute inset-0 opacity-5"
                    style={{ 
                        transform: `translateY(${scrollY * 0.05}px)`,
                        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%231B4332\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
                    }}
                />

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <Compass size={48} className="mx-auto text-deep-green mb-4" />
                        <h2 className="text-4xl md:text-5xl font-bold text-deep-green mb-4">
                            Mengapa Memilih Prawira Outdoor?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Kami menyediakan peralatan camping berkualitas dengan layanan terbaik untuk memastikan petualangan Anda berjalan lancar
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div 
                                key={index} 
                                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 relative overflow-hidden group"
                                style={{ 
                                    transform: `translateY(${scrollY * 0.02 * (index + 1)}px)`,
                                    transitionDelay: `${index * 100}ms`
                                }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-deep-green/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                                <div className="relative z-10">
                                    <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold text-center mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section with Parallax Image */}
            <section id="about" className="relative py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div 
                            className="relative"
                            style={{ transform: `translateX(${-scrollY * 0.05}px)` }}
                        >
                            <div className="relative z-10">
                                <Tent size={64} className="text-deep-green mb-6" />
                                <h2 className="text-4xl md:text-5xl font-bold text-deep-green mb-6">
                                    Tentang Prawira Outdoor
                                </h2>
                                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                                    <p>
                                        Prawira Outdoor adalah penyedia layanan persewaan alat camping yang berkomitmen untuk memberikan pengalaman outdoor terbaik bagi para pecinta alam. Didirikan pada tahun 2020, kami telah melayani ratusan pelanggan yang ingin menjelajahi keindahan alam Indonesia.
                                    </p>
                                    <p>
                                        Kami menyediakan berbagai macam peralatan camping mulai dari tenda, sleeping bag, matras, hingga peralatan masak. Semua produk kami terjamin kualitasnya dan selalu dalam kondisi terbaik untuk memastikan kenyamanan dan keamanan Anda selama berpetualang.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-6 mt-8">
                                    <div className="flex items-center bg-deep-green text-white p-4 rounded-xl shadow-lg">
                                        <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                                            <span className="font-bold text-2xl">500+</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-lg">Pelanggan Puas</p>
                                            <p className="text-sm text-white/80">Kepercayaan mereka adalah prioritas kami</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center bg-sand text-deep-green p-4 rounded-xl shadow-lg">
                                        <div className="bg-deep-green/20 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                                            <span className="font-bold text-2xl">50+</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-lg">Jenis Produk</p>
                                            <p className="text-sm text-deep-green/80">Pilihan lengkap untuk petualangan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div 
                            className="relative h-[600px]"
                            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
                        >
                            <div className="absolute inset-0 bg-deep-green/10 rounded-3xl transform rotate-6" />
                            <img 
                                src="https://lh3.googleusercontent.com/p/AF1QipNnB2Lr8UNFwg1s97ek8s_Gh2qNd06rvtNW807f=s1360-w1360-h1020-rw" 
                                alt="Tentang Prawira Outdoor" 
                                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-sand rounded-full opacity-50 blur-3xl" />
                            <div className="absolute -top-6 -left-6 w-48 h-48 bg-deep-green rounded-full opacity-30 blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
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
                            </div>
                        </div>
                        
                        <div className="flex justify-center mt-8 space-x-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTestimonial(index)}
                                    className={`transition-all duration-300 ${
                                        index === activeTestimonial 
                                            ? 'w-12 h-4 bg-deep-green rounded-full' 
                                            : 'w-4 h-4 bg-gray-300 rounded-full hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section with Parallax */}
            <section id="location" className="relative py-32 overflow-hidden">
                {/* Parallax Background */}
                <div 
                    className="absolute inset-0"
                    style={{ 
                        transform: `translateY(${scrollY * 0.15}px)`,
                        backgroundImage: "url('https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=1920')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(0.3)'
                    }}
                />
                <div className="absolute inset-0 bg-deep-green/60" />

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <MapPin size={48} className="mx-auto text-white mb-4" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Kunjungi Kami
                        </h2>
                        <p className="text-white/90 max-w-2xl mx-auto text-lg">
                            Datang langsung ke toko kami untuk melihat koleksi lengkap alat camping
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
                            <h3 className="text-2xl font-semibold mb-6 flex items-center text-deep-green">
                                <MapPin size={28} className="mr-3" />
                                Lokasi Kami
                            </h3>
                            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                                Jl. Sekar Taman No.35, Tonatan <br />
                                Kec. Ponorogo, Kab. Ponorogo <br />
                                Jawa Timur 63418
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center bg-deep-green/5 p-4 rounded-xl">
                                    <Phone size={24} className="mr-4 text-deep-green flex-shrink-0" />
                                    <span className="text-lg">+62 822-2914-3373</span>
                                </div>
                                <div className="flex items-center bg-deep-green/5 p-4 rounded-xl">
                                    <Mail size={24} className="mr-4 text-deep-green flex-shrink-0" />
                                    <span className="text-lg">info@prawiraoutdoor.com</span>
                                </div>
                                <div className="flex items-center bg-deep-green/5 p-4 rounded-xl">
                                    <Clock size={24} className="mr-4 text-deep-green flex-shrink-0" />
                                    <span className="text-lg">Senin - Sabtu: 09:00 - 21:00</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="h-[500px] rounded-2xl overflow-hidden shadow-2xl">
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
            </section>

            {/* CTA Section */}
            <section className="relative py-32 overflow-hidden">
                <div 
                    className="absolute inset-0"
                    style={{ 
                        transform: `translateY(${scrollY * 0.1}px)`,
                        backgroundImage: "url('https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1920')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
                <div className="absolute inset-0 bg-deep-green/90" />

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <div className="inline-block p-4 bg-white/10 rounded-full mb-8">
                        <Tent size={64} className="text-white" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Siap Untuk Petualangan Anda?
                    </h2>
                    <p className="text-white/95 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                        Sewa sekarang dan dapatkan alat camping yang Anda butuhkan
                    </p>
                    <Link 
                        href="/catalog" 
                        className="inline-block bg-sand text-deep-green px-10 py-5 rounded-xl font-semibold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-2xl"
                    >
                        Sewa Sekarang
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark-charcoal text-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-12">
                        <div>
                            <div className="flex items-center mb-4">
                                <Mountain size={32} className="text-sand mr-2" />
                                <h3 className="text-2xl font-bold">Prawira Outdoor</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                Penyedia layanan persewaan alat camping terpercaya untuk petualangan Anda.
                            </p>
                        </div>
                        
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-sand">Quick Links</h4>
                            <ul className="space-y-3">
                                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Beranda</Link></li>
                                <li><Link href="/catalog" className="text-gray-400 hover:text-white transition-colors">Katalog</Link></li>
                                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</a></li>
                                <li><a href="#location" className="text-gray-400 hover:text-white transition-colors">Lokasi</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-sand">Kategori</h4>
                            <ul className="space-y-3">
                                <li><Link href="/catalog?category=tenda" className="text-gray-400 hover:text-white transition-colors">Tenda</Link></li>
                                <li><Link href="/catalog?category=sleeping-bag" className="text-gray-400 hover:text-white transition-colors">Sleeping Bag</Link></li>
                                <li><Link href="/catalog?category=matras" className="text-gray-400 hover:text-white transition-colors">Matras</Link></li>
                                <li><Link href="/catalog?category=cooking-set" className="text-gray-400 hover:text-white transition-colors">Cooking Set</Link></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-sand">Hubungi Kami</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start">
                                    <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                                    <span>+62 822-2914-3373</span>
                                </li>
                                <li className="flex items-start">
                                    <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                                    <span>info@prawiraoutdoor.com</span>
                                </li>
                                <li className="flex items-start">
                                    <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                                    <span>Jl. Sekar Taman No.35, Tonatan, Kec. Ponorogo</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                        <p className="text-gray-400">&copy; 2026 Prawira Outdoor. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes scroll {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(10px); }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-scroll {
                    animation: scroll 1.5s ease-in-out infinite;
                }
            `}</style>
        </>
    );
};

export default Home;