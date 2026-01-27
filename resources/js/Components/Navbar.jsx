import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X, ShoppingCart, User, Home, Package, MapPin, Info } from 'lucide-react';
import { useCart } from '@/Components/CartContext';

const Navbar = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { setIsCartOpen, cartItems } = useCart();

    const navLinks = [
        { href: '/', label: 'Beranda', icon: Home },
        { href: '/catalog', label: 'Katalog', icon: Package },
        { href: '/#about', label: 'Tentang', icon: Info },
        { href: '/#location', label: 'Lokasi', icon: MapPin },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <span className="text-xl sm:text-2xl font-bold text-deep-green">
                                Prawira <span className="hidden sm:inline">Outdoor</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-deep-green px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="p-2 rounded-full text-gray-700 hover:text-deep-green hover:bg-gray-100 relative transition-colors"
                        >
                            <ShoppingCart size={20} />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                                    {cartItems.length}
                                </span>
                            )}
                        </button>

                        {user ? (
                            <Link
                                href="/admin/dashboard"
                                className="flex items-center text-gray-700 hover:text-deep-green px-3 py-2 rounded-md transition-colors"
                            >
                                <User size={20} className="mr-1" />
                                <span>Admin</span>
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                className="bg-deep-green text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
                            >
                                Masuk
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button & Cart */}
                    <div className="flex items-center space-x-2 lg:hidden">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="p-2 rounded-full text-gray-700 hover:text-deep-green hover:bg-gray-100 relative transition-colors"
                        >
                            <ShoppingCart size={20} />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                                    {cartItems.length}
                                </span>
                            )}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-700 hover:text-deep-green hover:bg-gray-100 focus:outline-none transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden border-t border-gray-200 bg-white">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center text-gray-700 hover:text-deep-green hover:bg-gray-50 px-3 py-3 rounded-md text-base font-medium transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Icon size={20} className="mr-3" />
                                    {link.label}
                                </Link>
                            );
                        })}

                        <div className="pt-4 border-t border-gray-200">
                            {user ? (
                                <Link
                                    href="/admin/dashboard"
                                    className="flex items-center text-gray-700 hover:text-deep-green hover:bg-gray-50 px-3 py-3 rounded-md text-base font-medium transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <User size={20} className="mr-3" />
                                    Dashboard Admin
                                </Link>
                            ) : (
                                <Link
                                    href="/login"
                                    className="flex items-center justify-center bg-deep-green text-white px-4 py-3 rounded-md text-base font-medium hover:bg-opacity-90 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Masuk
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;