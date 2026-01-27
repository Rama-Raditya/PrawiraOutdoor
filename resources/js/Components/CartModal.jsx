import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/Components/CartContext';

const CartModal = () => {
    const {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        updateQuantity,
        removeFromCart,
        checkout
    } = useCart();

    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        address: '',
        pickup_date: '',
        pickup_time: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        checkout(formData);
    };

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-end sm:items-center justify-center">
            <div className="bg-white rounded-t-lg sm:rounded-lg w-full sm:max-w-4xl sm:max-h-[90vh] max-h-[95vh] overflow-auto">
                {/* Header - Sticky */}
                <div className="sticky top-0 bg-white border-b p-4 sm:p-6 flex justify-between items-center z-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center">
                        <ShoppingBag size={24} className="mr-2" />
                        Keranjang Belanja
                    </h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-1 rounded-full hover:bg-gray-100"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="p-4 sm:p-6">
                    {cartItems.length === 0 ? (
                        <div className="text-center py-8 sm:py-12">
                            <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
                            <p className="text-gray-500">Keranjang belanja Anda kosong</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                            {/* Products List */}
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold mb-4">Produk</h3>
                                <div className="space-y-3 sm:space-y-4">
                                    {cartItems.map((item, index) => (
                                        <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                                            <img
                                                src={`/storage/${item.image}`}
                                                alt={item.name}
                                                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded flex-shrink-0"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-sm sm:text-base text-gray-800 truncate">{item.name}</h4>
                                                <p className="text-xs sm:text-sm text-gray-500">Rp {item.price.toLocaleString('id-ID')}/hari</p>
                                                <div className="flex items-center justify-between mt-2">
                                                    <div className="flex items-center">
                                                        <button
                                                            onClick={() => updateQuantity(index, item.quantity - 1)}
                                                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                                                        >
                                                            <Minus size={14} />
                                                        </button>
                                                        <span className="mx-2 font-medium text-sm">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(index, item.quantity + 1)}
                                                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>
                                                    <button
                                                        onClick={() => removeFromCart(index)}
                                                        className="p-1 rounded-full text-red-500 hover:bg-red-50"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Total - Mobile Only */}
                                <div className="lg:hidden mt-6 p-4 bg-gray-50 rounded-lg">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-600">Subtotal:</span>
                                        <span className="font-medium">Rp {calculateTotal().toLocaleString('id-ID')}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                                        <span className="text-lg font-semibold">Total:</span>
                                        <span className="text-xl font-bold text-deep-green">
                                            Rp {calculateTotal().toLocaleString('id-ID')}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Checkout Form */}
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold mb-4">Form Checkout</h3>
                                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Nama Lengkap
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-green"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Nomor WhatsApp
                                        </label>
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            required
                                            placeholder="08xxxxxxxxxx"
                                            className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-green"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Alamat Lengkap
                                        </label>
                                        <textarea
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            required
                                            rows="3"
                                            className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-green"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Tanggal Pengambilan
                                            </label>
                                            <input
                                                type="date"
                                                name="pickup_date"
                                                value={formData.pickup_date}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-green"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Jam Pengambilan
                                            </label>
                                            <input
                                                type="time"
                                                name="pickup_time"
                                                value={formData.pickup_time}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-green"
                                            />
                                        </div>
                                    </div>

                                    {/* Total - Desktop Only */}
                                    <div className="hidden lg:block p-4 bg-gray-50 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-600">Subtotal:</span>
                                            <span className="font-medium">Rp {calculateTotal().toLocaleString('id-ID')}</span>
                                        </div>
                                        <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                                            <span className="text-lg font-semibold">Total:</span>
                                            <span className="text-xl font-bold text-deep-green">
                                                Rp {calculateTotal().toLocaleString('id-ID')}
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-deep-green text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors font-medium text-sm sm:text-base"
                                    >
                                        Checkout via WhatsApp
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartModal;