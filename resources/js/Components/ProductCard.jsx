import React from 'react';
import { Link } from '@inertiajs/react';
import { Eye, ShoppingCart } from 'lucide-react';

const ProductCard = ({ item, onAddToCart, onShowDetail }) => {
    const stockStatus = item.stock < 3 ? 'low' : item.stock < 10 ? 'medium' : 'high';
    const stockColor = stockStatus === 'low' ? 'text-red-500' : stockStatus === 'medium' ? 'text-yellow-500' : 'text-green-500';

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div
                className="relative cursor-pointer"
                onClick={() => onShowDetail(item)}
            >
                <img
                    src={`/storage/${item.image}`}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded-full">
                    <span className={`text-xs font-semibold ${stockColor}`}>
                        Stok: {item.stock}
                    </span>
                </div>
            </div>

            <div className="p-4">
                <div className="mb-2">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {item.category.name}
                    </span>
                </div>

                <h3
                    className="text-lg font-semibold text-gray-800 mb-2 cursor-pointer hover:text-deep-green transition-colors"
                    onClick={() => onShowDetail(item)}
                >
                    {item.name}
                </h3>

                <p
                    className="text-gray-600 text-sm mb-3 line-clamp-2 cursor-pointer"
                    onClick={() => onShowDetail(item)}
                >
                    {item.description}
                </p>

                <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-deep-green">
                        Rp {item.price.toLocaleString('id-ID')}
                    </span>
                    <span className="text-sm text-gray-500">/hari</span>
                </div>

                <div className="mt-4">
                    <button
                        onClick={() => onAddToCart(item)}
                        className="w-full bg-deep-green text-white py-2 px-3 rounded-md flex items-center justify-center hover:bg-opacity-90 transition-colors"
                    >
                        <ShoppingCart size={18} className="mr-2" />
                        Tambah Keranjang
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;