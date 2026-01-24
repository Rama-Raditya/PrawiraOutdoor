import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { useCart } from '@/Components/CartContext';

const Navbar = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { setIsCartOpen, cartItems } = useCart();

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-deep-green">Prawira Outdoor</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-deep-green px-3 py-2 rounded-md text-sm font-medium">
                            Beranda
                        </Link>
                        <Link href="/catalog" className="text-gray-700 hover:text-deep-green px-3 py-2 rounded-md text-sm font-medium">
                            Katalog
                        </Link>
                        <Link href="/#about" className="text-gray-700 hover:text-deep-green px-3 py-2 rounded-md text-sm font-medium">
                            Tentang
                        </Link>
                        <Link href="/#location" className="text-gray-700 hover:text-deep-green px-3 py-2 rounded-md text-sm font-medium">
                            Lokasi
                        </Link>

                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="p-1 rounded-full text-gray-700 hover:text-deep-green relative"
                        >
                            <ShoppingCart size={20} />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                    {cartItems.length}
                                </span>
                            )}
                        </button>

                        {user ? (
                            <Link href="/admin/dashboard" className="flex items-center text-gray-700 hover:text-deep-green">
                                <User size={20} className="mr-1" />
                                <span>Admin</span>
                            </Link>
                        ) : (
                            <Link href="/login" className="bg-deep-green text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90">
                                Masuk
                            </Link>
                        )}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-deep-green hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-deep-green"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                        <Link href="/" className="block text-gray-700 hover:text-deep-green px-3 py-2 rounded-md text-base font-medium">
                            Beranda
                        </Link>
                        <Link href="/catalog" className="block text-gray-700 hover:text-deep-green px-3 py-2 rounded-md text-base font-medium">
                            Katalog
                        </Link>
                        <Link href="/#about" className="block text-gray-700 hover:text-deep-green px-3 py-2 rounded-md text-base font-medium">
                            Tentang
                        </Link>
                        <Link href="/#location" className="block text-gray-700 hover:text-deep-green px-3 py-2 rounded-md text-base font-medium">
                            Lokasi
                        </Link>

                        <div className="flex items-center space-x-4 px-3 py-2">
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="p-1 rounded-full text-gray-700 hover:text-deep-green relative"
                            >
                                <ShoppingCart size={20} />
                                {cartItems.length > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                        {cartItems.length}
                                    </span>
                                )}
                            </button>

                            {user ? (
                                <Link href="/admin/dashboard" className="flex items-center text-gray-700 hover:text-deep-green">
                                    <User size={20} className="mr-1" />
                                    <span>Admin</span>
                                </Link>
                            ) : (
                                <Link href="/login" className="bg-deep-green text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90">
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