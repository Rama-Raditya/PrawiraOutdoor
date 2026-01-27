import React from 'react';
import { X, ShoppingCart } from 'lucide-react';

const ProductModal = ({ item, isOpen, onClose, onAddToCart }) => {
    if (!isOpen || !item) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
                {/* Header - Sticky */}
                <div className="sticky top-0 bg-white border-b p-4 sm:p-6 flex justify-between items-center z-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 pr-4">{item.name}</h2>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-gray-100 flex-shrink-0"
                    >
                        <X size={24} />
                    </button>
                </div>
                
                <div className="p-4 sm:p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Image Section */}
                        <div>
                            <img 
                                src={`/storage/${item.image}`} 
                                alt={item.name} 
                                className="w-full rounded-lg shadow-md"
                            />
                        </div>
                        
                        {/* Details Section */}
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                    {item.category.name}
                                </span>
                            </div>
                            
                            <div className="mb-4">
                                <span className={`text-base sm:text-lg font-semibold ${
                                    item.stock < 3 ? 'text-red-500' : 
                                    item.stock < 10 ? 'text-yellow-500' : 
                                    'text-green-500'
                                }`}>
                                    Stok: {item.stock} item
                                </span>
                            </div>
                            
                            <div className="mb-6">
                                <span className="text-2xl sm:text-3xl font-bold text-deep-green">
                                    Rp {item.price.toLocaleString('id-ID')}
                                </span>
                                <span className="text-gray-500 ml-1 text-sm sm:text-base">/hari</span>
                            </div>
                            
                            <div className="mb-6">
                                <h3 className="text-base sm:text-lg font-semibold mb-2">Deskripsi</h3>
                                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                            </div>
                            
                            {item.specifications && (
                                <div className="mb-6">
                                    <h3 className="text-base sm:text-lg font-semibold mb-2">Spesifikasi</h3>
                                    <p className="text-sm sm:text-base text-gray-600">{item.specifications}</p>
                                </div>
                            )}
                            
                            {/* Add to Cart Button - Sticky on Mobile */}
                            <div className="mt-auto">
                                <button
                                    onClick={() => {
                                        onAddToCart(item);
                                        onClose();
                                    }}
                                    className="w-full bg-deep-green text-white py-3 px-4 rounded-md flex items-center justify-center hover:bg-opacity-90 transition-colors text-sm sm:text-base font-medium"
                                >
                                    <ShoppingCart size={20} className="mr-2" />
                                    Tambah ke Keranjang
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Sticky Bottom Button */}
                <div className="md:hidden sticky bottom-0 bg-white border-t p-4">
                    <button
                        onClick={() => {
                            onAddToCart(item);
                            onClose();
                        }}
                        className="w-full bg-deep-green text-white py-3 px-4 rounded-md flex items-center justify-center hover:bg-opacity-90 transition-colors font-medium"
                    >
                        <ShoppingCart size={20} className="mr-2" />
                        Tambah ke Keranjang
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;