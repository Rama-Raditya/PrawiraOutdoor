import React, { useState } from 'react';
import { Link, router } from '@inertiajs/react';
import { Menu, X, ShoppingCart, User, LogOut, Settings, Package } from 'lucide-react';
import { useCart } from '@/Components/CartContext';

const Navbar = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const { setIsCartOpen, cartItems } = useCart();

    const handleLogout = () => {
        router.post('/logout');
    };

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
                            <div className="relative">
                                <button
                                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                    className="flex items-center space-x-2 text-gray-700 hover:text-deep-green focus:outline-none"
                                >
                                    <div className="w-8 h-8 bg-deep-green rounded-full flex items-center justify-center text-white font-semibold">
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                                    <span className="font-medium">{user.name}</span>
                                </button>

                                {isUserMenuOpen && (
                                    <>
                                        <div
                                            className="fixed inset-0 z-10"
                                            onClick={() => setIsUserMenuOpen(false)}
                                        ></div>
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-20 border border-gray-200">
                                            {user.is_admin && (
                                                <>
                                                    <Link
                                                        href="/admin/dashboard"
                                                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                        onClick={() => setIsUserMenuOpen(false)}
                                                    >
                                                        <Package size={16} className="mr-2" />
                                                        Dashboard Admin
                                                    </Link>
                                                    <div className="border-t border-gray-200 my-1"></div>
                                                </>
                                            )}
                                            <button
                                                onClick={() => {
                                                    setIsUserMenuOpen(false);
                                                    handleLogout();
                                                }}
                                                className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                            >
                                                <LogOut size={16} className="mr-2" />
                                                Logout
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        ) : null}
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
                        </div>

                        {user && (
                            <div className="border-t border-gray-200 pt-2 mt-2">
                                <div className="px-3 py-2">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <div className="w-8 h-8 bg-deep-green rounded-full flex items-center justify-center text-white font-semibold">
                                            {user.name.charAt(0).toUpperCase()}
                                        </div>
                                        <span className="font-medium text-gray-800">{user.name}</span>
                                    </div>
                                </div>
                                
                                {user.is_admin && (
                                    <Link
                                        href="/admin/dashboard"
                                        className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                                    >
                                        <Package size={18} className="mr-2" />
                                        Dashboard Admin
                                    </Link>
                                )}
                                
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-md"
                                >
                                    <LogOut size={18} className="mr-2" />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;