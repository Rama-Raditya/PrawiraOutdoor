import React from 'react';
import { Link } from '@inertiajs/react';
import { Eye, ShoppingCart } from 'lucide-react';

const ProductCard = ({ item, onAddToCart, onShowDetail }) => {
    const stockStatus = item.stock < 3 ? 'low' : item.stock < 10 ? 'medium' : 'high';
    const stockColor = stockStatus === 'low' ? 'text-red-500' : stockStatus === 'medium' ? 'text-yellow-500' : 'text-green-500';

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-full">
            <div
                className="relative cursor-pointer overflow-hidden"
                onClick={() => onShowDetail(item)}
            >
                <img
                    src={item.image_data
                        ? `data:image/jpeg;base64,${item.image_data}`
                        : `/storage/${item.image}`
                    }
                    alt={item.name}
                    className="w-full h-40 xs:h-48 sm:h-48 object-cover hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                        // Fallback jika gambar tidak ditemukan
                        e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
                    }}
                />
                <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded-full">
                    <span className={`text-xs font-semibold ${stockColor}`}>
                        Stok: {item.stock}
                    </span>
                </div>
            </div>

            <div className="p-3 sm:p-4 flex flex-col flex-grow">
                <div className="mb-2">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {item.category.name}
                    </span>
                </div>

                <h3
                    className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-2 cursor-pointer hover:text-deep-green transition-colors line-clamp-2"
                    onClick={() => onShowDetail(item)}
                >
                    {item.name}
                </h3>

                <p
                    className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2 cursor-pointer flex-grow"
                    onClick={() => onShowDetail(item)}
                >
                    {item.description}
                </p>

                <div className="flex items-center justify-between mb-3">
                    <div>
                        <span className="text-base sm:text-lg lg:text-xl font-bold text-deep-green">
                            Rp {item.price.toLocaleString('id-ID')}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500 ml-1">/hari</span>
                    </div>
                </div>

                <div className="mt-auto">
                    <button
                        onClick={() => onAddToCart(item)}
                        className="w-full bg-deep-green text-white py-2 px-3 rounded-md flex items-center justify-center hover:bg-opacity-90 transition-colors text-xs sm:text-sm"
                    >
                        <ShoppingCart size={16} className="mr-2" />
                        Tambah Ke Keranjang
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;