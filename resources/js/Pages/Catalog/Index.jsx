import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import ProductCard from '@/Components/ProductCard';
import ProductModal from '@/Components/ProductModal';
import { useCart } from '@/Components/CartContext';
import { Search, Filter, ShoppingCart, X } from 'lucide-react';

const Catalog = ({ items, categories }) => {
    const [filteredItems, setFilteredItems] = useState(items);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showMobileFilter, setShowMobileFilter] = useState(false);

    const {
        cartItems,
        setIsCartOpen,
        addToCart,
    } = useCart();

    useEffect(() => {
        let filtered = items;

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by category
        if (selectedCategory) {
            filtered = filtered.filter(item => item.category.slug === selectedCategory);
        }

        setFilteredItems(filtered);
    }, [searchTerm, selectedCategory, items]);

    const handleShowDetail = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleAddToCart = (item) => {
        addToCart(item);
    };

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedCategory('');
        setShowMobileFilter(false);
    };

    return (
        <>
            <Head title="Katalog - Prawira Outdoor" />
            <Navbar />

            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                    {/* Header */}
                    <div className="mb-6 sm:mb-8">
                        <h1 className="text-2xl sm:text-3xl font-bold text-deep-green mb-2">Katalog Produk</h1>
                        <p className="text-sm sm:text-base text-gray-600">Temukan peralatan camping yang Anda butuhkan</p>
                    </div>

                    {/* Search & Filter Section */}
                    <div className="mb-6 sm:mb-8">
                        {/* Search Bar */}
                        <div className="relative mb-4">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search size={20} className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Cari produk..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="block w-full pl-10 pr-3 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-deep-green focus:border-deep-green"
                            />
                        </div>

                        {/* Desktop Filter & Cart Button */}
                        <div className="hidden sm:flex gap-4">
                            <div className="relative flex-1">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Filter size={20} className="text-gray-400" />
                                </div>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="appearance-none block w-full pl-10 pr-8 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-deep-green focus:border-deep-green"
                                >
                                    <option value="">Semua Kategori</option>
                                    {categories.map(category => (
                                        <option key={category.id} value={category.slug}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="bg-deep-green text-white px-6 py-2 rounded-md flex items-center hover:bg-opacity-90 transition-colors whitespace-nowrap"
                            >
                                <ShoppingCart size={20} className="mr-2" />
                                <span className="hidden lg:inline">Keranjang</span> ({cartItems.length})
                            </button>
                        </div>

                        {/* Mobile Filter & Cart Buttons */}
                        <div className="sm:hidden flex gap-2">
                            <button
                                onClick={() => setShowMobileFilter(!showMobileFilter)}
                                className="flex-1 border border-gray-300 bg-white text-gray-700 px-4 py-2.5 rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                                <Filter size={20} className="mr-2" />
                                Filter
                                {selectedCategory && (
                                    <span className="ml-2 bg-deep-green text-white text-xs px-2 py-0.5 rounded-full">1</span>
                                )}
                            </button>

                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="bg-deep-green text-white px-4 py-2.5 rounded-md flex items-center justify-center hover:bg-opacity-90 transition-colors relative"
                            >
                                <ShoppingCart size={20} />
                                {cartItems.length > 0 && (
                                    <span className="ml-2 bg-white text-deep-green text-xs font-bold px-2 py-0.5 rounded-full">
                                        {cartItems.length}
                                    </span>
                                )}
                            </button>
                        </div>

                        {/* Mobile Filter Modal */}
                        {showMobileFilter && (
                            <div className="sm:hidden mt-4 bg-white border border-gray-200 rounded-md p-4 shadow-lg">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="font-semibold text-gray-800">Filter Kategori</h3>
                                    <button
                                        onClick={() => setShowMobileFilter(false)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => {
                                        setSelectedCategory(e.target.value);
                                        setShowMobileFilter(false);
                                    }}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-deep-green focus:border-deep-green"
                                >
                                    <option value="">Semua Kategori</option>
                                    {categories.map(category => (
                                        <option key={category.id} value={category.slug}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                                {selectedCategory && (
                                    <button
                                        onClick={clearFilters}
                                        className="mt-3 w-full text-sm text-deep-green hover:underline"
                                    >
                                        Hapus Filter
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Active Filters */}
                    {(searchTerm || selectedCategory) && (
                        <div className="mb-4 flex flex-wrap gap-2 items-center">
                            <span className="text-sm text-gray-600">Filter aktif:</span>
                            {searchTerm && (
                                <span className="inline-flex items-center bg-deep-green text-white text-xs px-3 py-1 rounded-full">
                                    "{searchTerm}"
                                    <button
                                        onClick={() => setSearchTerm('')}
                                        className="ml-2 hover:text-gray-200"
                                    >
                                        <X size={14} />
                                    </button>
                                </span>
                            )}
                            {selectedCategory && (
                                <span className="inline-flex items-center bg-deep-green text-white text-xs px-3 py-1 rounded-full">
                                    {categories.find(c => c.slug === selectedCategory)?.name}
                                    <button
                                        onClick={() => setSelectedCategory('')}
                                        className="ml-2 hover:text-gray-200"
                                    >
                                        <X size={14} />
                                    </button>
                                </span>
                            )}
                            <button
                                onClick={clearFilters}
                                className="text-xs text-deep-green hover:underline"
                            >
                                Hapus semua
                            </button>
                        </div>
                    )}

                    {/* Products Grid */}
                    {filteredItems.length === 0 ? (
                        <div className="text-center py-12 sm:py-16">
                            <div className="text-gray-400 mb-4">
                                <Search size={48} className="mx-auto" />
                            </div>
                            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">Tidak ada produk ditemukan</h3>
                            <p className="text-sm sm:text-base text-gray-500 mb-4">Coba ubah kata kunci pencarian atau filter kategori</p>
                            {(searchTerm || selectedCategory) && (
                                <button
                                    onClick={clearFilters}
                                    className="text-deep-green hover:underline text-sm sm:text-base"
                                >
                                    Hapus semua filter
                                </button>
                            )}
                        </div>
                    ) : (
                        <>
                            <div className="mb-4 text-sm text-gray-600">
                                Menampilkan {filteredItems.length} produk
                            </div>
                            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                                {filteredItems.map(item => (
                                    <ProductCard
                                        key={item.id}
                                        item={item}
                                        onAddToCart={handleAddToCart}
                                        onShowDetail={handleShowDetail}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>

            <ProductModal
                item={selectedItem}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddToCart={handleAddToCart}
            />
        </>
    );
};


export default Catalog;