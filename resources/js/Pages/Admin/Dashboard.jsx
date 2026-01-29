import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import {
    Package,
    ShoppingCart,
    TrendingUp,
    AlertTriangle,
    FolderOpen,
    Eye,
    Edit,
    PlusCircle,
    BarChart3,
    XCircle,
    CheckCircle
} from 'lucide-react';

const Dashboard = ({ auth, stats, lowStockProducts, recentProducts, categoryStats, stockByCategory }) => {
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(value);
    };

    const getStockStatusColor = (stock) => {
        if (stock === 0) return 'bg-red-100 text-red-800';
        if (stock < 3) return 'bg-red-100 text-red-600';
        if (stock < 5) return 'bg-yellow-100 text-yellow-700';
        return 'bg-green-100 text-green-700';
    };

    const getStockStatusText = (stock) => {
        if (stock === 0) return 'Habis';
        if (stock < 3) return 'Sangat Rendah';
        if (stock < 5) return 'Rendah';
        return 'Tersedia';
    };

    return (
        <>
            <Head title="Dashboard - Admin" />
            <Navbar user={auth.user} />

            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-deep-green mb-2">Dashboard Admin</h1>
                        <p className="text-gray-600">Selamat datang, {auth.user.name}!</p>
                    </div>

                    {/* Statistics Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Total Produk</p>
                                    <p className="text-3xl font-bold text-deep-green">{stats.totalProducts}</p>
                                    <p className="text-xs text-gray-400 mt-1">{stats.availableProducts} tersedia</p>
                                </div>
                                <div className="p-3 rounded-full bg-deep-green bg-opacity-10">
                                    <Package size={28} className="text-deep-green" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Total Kategori</p>
                                    <p className="text-3xl font-bold text-blue-600">{stats.totalCategories}</p>
                                    <p className="text-xs text-gray-400 mt-1">Kelompok produk</p>
                                </div>
                                <div className="p-3 rounded-full bg-blue-100">
                                    <FolderOpen size={28} className="text-blue-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Stok Rendah</p>
                                    <p className="text-3xl font-bold text-yellow-600">{stats.lowStockItems}</p>
                                    <p className="text-xs text-gray-400 mt-1">{stats.outOfStockItems} habis stok</p>
                                </div>
                                <div className="p-3 rounded-full bg-yellow-100">
                                    <AlertTriangle size={28} className="text-yellow-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Nilai Inventori</p>
                                    <p className="text-2xl font-bold text-green-600">
                                        {formatCurrency(stats.totalInventoryValue)}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">Total aset produk</p>
                                </div>
                                <div className="p-3 rounded-full bg-green-100">
                                    <TrendingUp size={28} className="text-green-600" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        {/* Low Stock Products */}
                        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <AlertTriangle size={24} className="mr-2 text-yellow-600" />
                                    Produk Stok Rendah
                                </h2>
                                <Link
                                    href="/admin/items"
                                    className="text-sm text-deep-green hover:underline"
                                >
                                    Lihat Semua
                                </Link>
                            </div>

                            {lowStockProducts.length > 0 ? (
                                <div className="space-y-3">
                                    {lowStockProducts.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    src={item.image_data
                                                        ? `data:image/jpeg;base64,${item.image_data}`
                                                        : `/storage/${item.image}`
                                                    }
                                                    onError={(e) => {
                                                        e.target.src = 'https://via.placeholder.com/150x150?text=No+Image';
                                                    }}
                                                    alt={item.name}
                                                    className="w-16 h-16 object-cover rounded-lg"
                                                />
                                                <div>
                                                    <p className="font-medium text-gray-800">{item.name}</p>
                                                    <p className="text-sm text-gray-500">{item.category.name}</p>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Harga: {formatCurrency(item.price)}/hari
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStockStatusColor(item.stock)}`}>
                                                    {item.stock} unit
                                                </span>
                                                <p className="text-xs text-gray-500 mt-1">{getStockStatusText(item.stock)}</p>
                                                <div className="flex space-x-2 mt-2">
                                                    <Link
                                                        href={`/admin/items/${item.id}/edit`}
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        <Edit size={16} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <CheckCircle size={48} className="mx-auto mb-2 text-green-500" />
                                    <p>Semua produk memiliki stok yang cukup</p>
                                </div>
                            )}
                        </div>

                        {/* Category Statistics */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                <BarChart3 size={24} className="mr-2 text-deep-green" />
                                Statistik Kategori
                            </h2>
                            <div className="space-y-4">
                                {categoryStats.map((category, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium text-gray-700">{category.name}</span>
                                            <span className="text-sm font-bold text-deep-green">{category.count} produk</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-deep-green h-2 rounded-full transition-all duration-300"
                                                style={{ width: `${(category.count / stats.totalProducts) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Recent Products & Quick Actions */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Recent Products */}
                        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold text-gray-800">Produk Terbaru</h2>
                                <Link
                                    href="/admin/items"
                                    className="text-sm text-deep-green hover:underline"
                                >
                                    Lihat Semua
                                </Link>
                            </div>

                            {recentProducts.length > 0 ? (
                                <div className="space-y-3">
                                    {recentProducts.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <div className="flex items-center space-x-3">
                                                <img
                                                    src={item.image_data
                                                        ? `data:image/jpeg;base64,${item.image_data}`
                                                        : `/storage/${item.image}`
                                                    }
                                                    onError={(e) => {
                                                        e.target.src = 'https://via.placeholder.com/150x150?text=No+Image';
                                                    }}
                                                    alt={item.name}
                                                    className="w-12 h-12 object-cover rounded-lg"
                                                />
                                                <div>
                                                    <p className="font-medium text-gray-800">{item.name}</p>
                                                    <div className="flex items-center space-x-2 mt-1">
                                                        <span className="text-xs text-gray-500">{item.category.name}</span>
                                                        <span className="text-xs text-gray-400">•</span>
                                                        <span className="text-xs font-medium text-deep-green">
                                                            {formatCurrency(item.price)}/hari
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                {item.is_available ? (
                                                    <CheckCircle size={18} className="text-green-500" />
                                                ) : (
                                                    <XCircle size={18} className="text-red-500" />
                                                )}
                                                <span className={`text-sm font-medium ${getStockStatusColor(item.stock)} px-2 py-1 rounded`}>
                                                    {item.stock}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <Package size={48} className="mx-auto mb-2 text-gray-300" />
                                    <p>Belum ada produk</p>
                                </div>
                            )}
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Aksi Cepat</h2>
                            <div className="grid grid-cols-1 gap-3">
                                <Link
                                    href="/admin/items/create"
                                    className="bg-deep-green text-white p-4 rounded-lg text-center hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-sm"
                                >
                                    <PlusCircle size={24} className="mx-auto mb-2" />
                                    <p className="font-medium">Tambah Produk</p>
                                </Link>

                                <Link
                                    href="/admin/items"
                                    className="bg-blue-500 text-white p-4 rounded-lg text-center hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-sm"
                                >
                                    <Package size={24} className="mx-auto mb-2" />
                                    <p className="font-medium">Kelola Produk</p>
                                </Link>

                                <Link
                                    href="/admin/categories/create"
                                    className="bg-sand text-deep-green p-4 rounded-lg text-center hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-sm"
                                >
                                    <FolderOpen size={24} className="mx-auto mb-2" />
                                    <p className="font-medium">Tambah Kategori</p>
                                </Link>

                                <Link
                                    href="/admin/categories"
                                    className="bg-gray-500 text-white p-4 rounded-lg text-center hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-sm"
                                >
                                    <BarChart3 size={24} className="mx-auto mb-2" />
                                    <p className="font-medium">Kelola Kategori</p>
                                </Link>
                            </div>

                            {/* Status Summary */}
                            <div className="mt-6 pt-4 border-t border-gray-200">
                                <h3 className="text-sm font-semibold text-gray-700 mb-3">Ringkasan Status</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600 flex items-center">
                                            <CheckCircle size={16} className="mr-1 text-green-500" />
                                            Tersedia
                                        </span>
                                        <span className="font-medium text-green-600">{stats.availableProducts}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600 flex items-center">
                                            <XCircle size={16} className="mr-1 text-red-500" />
                                            Tidak Tersedia
                                        </span>
                                        <span className="font-medium text-red-600">{stats.unavailableProducts}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600 flex items-center">
                                            <AlertTriangle size={16} className="mr-1 text-yellow-500" />
                                            Perlu Restock
                                        </span>
                                        <span className="font-medium text-yellow-600">{stats.lowStockItems}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;