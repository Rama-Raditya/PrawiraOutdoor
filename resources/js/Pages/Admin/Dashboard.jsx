import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { Link } from '@inertiajs/react';
import { Package, ShoppingCart, Users, TrendingUp } from 'lucide-react';

const Dashboard = ({ auth }) => {
    return (
        <>
            <Head title="Dashboard - Admin" />
            <Navbar user={auth.user} />

            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-deep-green mb-2">Dashboard Admin</h1>
                        <p className="text-gray-600">Kelola bisnis persewaan alat camping Anda</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-deep-green bg-opacity-10 mr-4">
                                    <Package size={24} className="text-deep-green" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Total Produk</p>
                                    <p className="text-2xl font-bold text-gray-800">24</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-sand bg-opacity-20 mr-4">
                                    <ShoppingCart size={24} className="text-sand" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Pesanan Hari Ini</p>
                                    <p className="text-2xl font-bold text-gray-800">8</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-blue-100 mr-4">
                                    <Users size={24} className="text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Pelanggan Baru</p>
                                    <p className="text-2xl font-bold text-gray-800">12</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-green-100 mr-4">
                                    <TrendingUp size={24} className="text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Pendapatan Bulan Ini</p>
                                    <p className="text-2xl font-bold text-gray-800">Rp 4.2jt</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Produk Stok Rendah</h2>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                                    <div>
                                        <p className="font-medium">Tenda Kap 4</p>
                                        <p className="text-sm text-gray-500">Kategori: Tenda</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-bold text-red-500">2</p>
                                        <p className="text-xs text-gray-500">stok tersisa</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                                    <div>
                                        <p className="font-medium">Carrier 60L</p>
                                        <p className="text-sm text-gray-500">Kategori: Backpack</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-bold text-yellow-500">4</p>
                                        <p className="text-xs text-gray-500">stok tersisa</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Aksi Cepat</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <Link
                                    href="/admin/items/create"
                                    className="bg-deep-green text-white p-4 rounded-lg text-center hover:bg-opacity-90 transition-colors"
                                >
                                    <Package size={24} className="mx-auto mb-2" />
                                    <p>Tambah Produk</p>
                                </Link>

                                <Link
                                    href="/admin/items"
                                    className="bg-sand text-deep-green p-4 rounded-lg text-center hover:bg-opacity-90 transition-colors"
                                >
                                    <ShoppingCart size={24} className="mx-auto mb-2" />
                                    <p>Kelola Produk</p>
                                </Link>

                                <Link
                                    href="/admin/categories/create"
                                    className="bg-blue-500 text-white p-4 rounded-lg text-center hover:bg-opacity-90 transition-colors"
                                >
                                    <Users size={24} className="mx-auto mb-2" />
                                    <p>Tambah Kategori</p>
                                </Link>

                                <Link
                                    href="/admin/categories"
                                    className="bg-gray-500 text-white p-4 rounded-lg text-center hover:bg-opacity-90 transition-colors"
                                >
                                    <TrendingUp size={24} className="mx-auto mb-2" />
                                    <p>Kelola Kategori</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;