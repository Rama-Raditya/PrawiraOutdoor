import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import ProductCard from '@/Components/ProductCard';
import ProductModal from '@/Components/ProductModal';
import { useCart } from '@/Components/CartContext';
import { Search, Filter, ShoppingCart } from 'lucide-react';

const Catalog = ({ items, categories }) => {
    const [filteredItems, setFilteredItems] = useState(items);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    return (
        <>
            <Head title="Katalog - Prawira Outdoor" />
            <Navbar />

            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-deep-green mb-2">Katalog Produk</h1>
                        <p className="text-gray-600">Temukan peralatan camping yang Anda butuhkan</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search size={20} className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Cari produk..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-deep-green focus:border-deep-green"
                            />
                        </div>

                        <div className="relative">
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
                            className="bg-deep-green text-white px-4 py-2 rounded-md flex items-center hover:bg-opacity-90 transition-colors"
                        >
                            <ShoppingCart size={20} className="mr-2" />
                            Keranjang ({cartItems.length})
                        </button>
                    </div>

                    {filteredItems.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-4">
                                <Search size={48} className="mx-auto" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada produk ditemukan</h3>
                            <p className="text-gray-500">Coba ubah kata kunci pencarian atau filter kategori</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredItems.map(item => (
                                <ProductCard
                                    key={item.id}
                                    item={item}
                                    onAddToCart={handleAddToCart}
                                    onShowDetail={handleShowDetail}
                                />
                            ))}
                        </div>
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