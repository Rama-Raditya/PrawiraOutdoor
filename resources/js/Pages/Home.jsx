import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { MapPin, Phone, Mail, Clock, Star, Shield, Truck } from 'lucide-react';

const Home = ({ auth }) => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Ahmad Rizki",
            rating: 5,
            comment: "Peralatan camping yang disewakan sangat berkualitas dan harga terjangkau. Pelayanan sangat ramah dan memuaskan!",
            avatar: "https://picsum.photos/seed/user1/100/100.jpg"
        },
        {
            id: 2,
            name: "Siti Nurhaliza",
            rating: 5,
            comment: "Sangat puas dengan layanan Prawira Outdoor. Semua barang yang kami sewa dalam kondisi baik dan bersih.",
            avatar: "https://picsum.photos/seed/user2/100/100.jpg"
        },
        {
            id: 3,
            name: "Budi Santoso",
            rating: 4,
            comment: "Pengalaman pertama sewa alat camping di sini dan sangat memuaskan. Pasti akan kembali lagi.",
            avatar: "https://picsum.photos/seed/user3/100/100.jpg"
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
            
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-deep-green to-deep-green/70 z-10"></div>
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://picsum.photos/seed/camping/1920/1080.jpg')" }}
                ></div>
                
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Jelajahi Alam Bersama Prawira Outdoor
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-white/90">
                        Sewa alat camping berkualitas dengan harga terjangkau untuk petualangan Anda
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/catalog" 
                            className="bg-sand text-deep-green px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
                        >
                            Lihat Katalog
                        </Link>
                        <a 
                            href="#about" 
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-deep-green transition-all"
                        >
                            Tentang Kami
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-4">
                            Mengapa Memilih Prawira Outdoor?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Kami menyediakan peralatan camping berkualitas dengan layanan terbaik untuk memastikan petualangan Anda berjalan lancar
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex justify-center mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-center mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-center">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-6">
                                Tentang Prawira Outdoor
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Prawira Outdoor adalah penyedia layanan persewaan alat camping yang berkomitmen untuk memberikan pengalaman outdoor terbaik bagi para pecinta alam. Didirikan pada tahun 2020, kami telah melayani ribuan pelanggan yang ingin menjelajahi keindahan alam Indonesia.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Kami menyediakan berbagai macam peralatan camping mulai dari tenda, sleeping bag, matras, hingga peralatan masak. Semua produk kami terjamin kualitasnya dan selalu dalam kondisi terbaik untuk memastikan kenyamanan dan keamanan Anda selama berpetualang.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center">
                                    <div className="bg-deep-green text-white w-12 h-12 rounded-full flex items-center justify-center mr-3">
                                        <span className="font-bold">500+</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Pelanggan Puas</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-deep-green text-white w-12 h-12 rounded-full flex items-center justify-center mr-3">
                                        <span className="font-bold">50+</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Jenis Produk</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img 
                                src="https://picsum.photos/seed/about/600/400.jpg" 
                                alt="Tentang Prawira Outdoor" 
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-4">
                            Apa Kata Pelanggan Kami
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Kepuasan pelanggan adalah prioritas utama kami
                        </p>
                    </div>
                    
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <img 
                                    src={testimonials[activeTestimonial].avatar} 
                                    alt={testimonials[activeTestimonial].name} 
                                    className="w-16 h-16 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-lg">{testimonials[activeTestimonial].name}</h4>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star 
                                                key={i} 
                                                size={16} 
                                                className={i < testimonials[activeTestimonial].rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">"{testimonials[activeTestimonial].comment}"</p>
                        </div>
                        
                        <div className="flex justify-center mt-6 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTestimonial(index)}
                                    className={`w-3 h-3 rounded-full ${index === activeTestimonial ? 'bg-deep-green' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section id="location" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-4">
                            Kunjungi Kami
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Datang langsung ke toko kami untuk melihat koleksi lengkap alat camping
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <div className="bg-gray-100 p-6 rounded-lg h-full">
                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                                    <MapPin size={24} className="mr-2 text-deep-green" />
                                    Lokasi Kami
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Jl. Sekar Taman No.35, Tonatan <br />
                                    Kec. Ponorogo, Kab. Ponorogo <br />
                                    Jawa Timur 63418
                                </p>
                                
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <Phone size={20} className="mr-3 text-deep-green" />
                                        <span>+62 822-2914-3373</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail size={20} className="mr-3 text-deep-green" />
                                        <span>info@prawiraoutdoor.com</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock size={20} className="mr-3 text-deep-green" />
                                        <span>Senin - Sabtu: 09:00 - 18:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="h-full min-h-[300px]">
                            <div className="bg-gray-200 h-full rounded-lg overflow-hidden">
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
            <section className="py-16 bg-deep-green">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Siap Untuk Petualangan Anda?
                    </h2>
                    <p className="text-white/90 text-lg mb-8">
                        Sewa sekarang dan dapatkan alat camping terbaik untuk petualangan Anda
                    </p>
                    <Link 
                        href="/catalog" 
                        className="bg-sand text-deep-green px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 inline-block"
                    >
                        Sewa Sekarang
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark-charcoal text-white py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Prawira Outdoor</h3>
                            <p className="text-gray-400">
                                Penyedia layanan persewaan alat camping terpercaya untuk petualangan Anda.
                            </p>
                        </div>
                        
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><Link href="/" className="text-gray-400 hover:text-white">Beranda</Link></li>
                                <li><Link href="/catalog" className="text-gray-400 hover:text-white">Katalog</Link></li>
                                <li><a href="#about" className="text-gray-400 hover:text-white">Tentang Kami</a></li>
                                <li><a href="#location" className="text-gray-400 hover:text-white">Lokasi</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Kategori</h4>
                            <ul className="space-y-2">
                                <li><Link href="/catalog?category=tenda" className="text-gray-400 hover:text-white">Tenda</Link></li>
                                <li><Link href="/catalog?category=sleeping-bag" className="text-gray-400 hover:text-white">Sleeping Bag</Link></li>
                                <li><Link href="/catalog?category=matras" className="text-gray-400 hover:text-white">Matras</Link></li>
                                <li><Link href="/catalog?category=cooking-set" className="text-gray-400 hover:text-white">Cooking Set</Link></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>+62 822-2914-3373</li>
                                <li>info@prawiraoutdoor.com</li>
                                <li>Jl. Sekar Taman No.35, Tonatan, Kec. Ponorogo, Kabupaten Ponorogo, Jawa Timur 63418</li>
                            </ul>
                            
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2023 Prawira Outdoor. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;