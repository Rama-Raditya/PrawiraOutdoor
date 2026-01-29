import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, AlertCircle } from 'lucide-react';
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

    const [showTerms, setShowTerms] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validasi apakah sudah setuju dengan syarat dan ketentuan
        if (!agreedToTerms) {
            alert('Mohon setujui syarat dan ketentuan terlebih dahulu');
            return;
        }

        checkout(formData);
        // Reset form dan checkbox
        setFormData({
            name: '',
            whatsapp: '',
            address: '',
            pickup_date: '',
            pickup_time: '',
        });
        setAgreedToTerms(false);
    };

    const TermsModal = () => (
        <div className="fixed inset-0 z-[60] overflow-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-auto">
                <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-800">Syarat dan Ketentuan Peminjaman</h2>
                    <button
                        onClick={() => setShowTerms(false)}
                        className="p-1 rounded-full hover:bg-gray-100"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6 space-y-4">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                        <div className="flex">
                            <AlertCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-blue-700">
                                Harap baca dan pahami seluruh syarat dan ketentuan sebelum melakukan peminjaman
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <section>
                            <h3 className="font-semibold text-lg text-deep-green mb-2">1. KETENTUAN UMUM</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                <li>Penyewa wajib berusia minimal 17 tahun atau didampingi wali</li>
                                <li>Penyewa wajib memberikan identitas diri yang masih berlaku (KTP/SIM/Paspor)</li>
                                <li>Pemesanan dapat dilakukan minimal H-1 sebelum pengambilan barang</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="font-semibold text-lg text-deep-green mb-2">2. SISTEM PEMBAYARAN</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                <li><strong>DP (Down Payment)</strong>: 50% dari total biaya sewa dibayar saat pemesanan</li>
                                <li><strong>Pelunasan</strong>: Dilakukan saat pengambilan barang</li>
                                <li><strong>Deposit Jaminan</strong>: Rp 200.000 - Rp 500.000 tergantung jenis dan jumlah barang</li>
                                <li>Deposit akan dikembalikan 100% jika barang dikembalikan dalam kondisi baik</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="font-semibold text-lg text-deep-green mb-2">3. PENGAMBILAN DAN PENGEMBALIAN</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                <li>Pengambilan barang di toko: Senin - Sabtu (09:00 - 18:00)</li>
                                <li>Keterlambatan pengembalian dikenakan denda 20% per hari dari harga sewa</li>
                                <li>Konfirmasi pengembalian maksimal H-1 sebelum tanggal pengembalian</li>
                                <li>Barang harus dikembalikan dalam keadaan bersih dan kering</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="font-semibold text-lg text-deep-green mb-2">4. TANGGUNG JAWAB PENYEWA</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                <li>Penyewa bertanggung jawab penuh atas kerusakan atau kehilangan barang</li>
                                <li>Kerusakan ringan: dikenakan biaya perbaikan sesuai estimasi</li>
                                <li>Kerusakan berat/hilang: dikenakan biaya 100% harga barang baru</li>
                                <li>Dilarang meminjamkan barang kepada pihak ketiga tanpa izin</li>
                                <li>Dilarang menggunakan barang untuk kegiatan komersial</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="font-semibold text-lg text-deep-green mb-2">5. PEMBATALAN PEMESANAN</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                <li>Pembatalan H-3 atau lebih: DP dikembalikan 100%</li>
                                <li>Pembatalan H-2: DP dikembalikan 50%</li>
                                <li>Pembatalan H-1 atau H: DP hangus</li>
                                <li>Pembatalan dari pihak Prawira Outdoor: DP dikembalikan 100%</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="font-semibold text-lg text-deep-green mb-2">6. FORCE MAJEURE</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                <li>Prawira Outdoor tidak bertanggung jawab atas keterlambatan/pembatalan akibat bencana alam, kerusuhan, atau kondisi darurat</li>
                                <li>Dalam kondisi force majeure, akan dilakukan negosiasi ulang atau pengembalian dana</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="font-semibold text-lg text-deep-green mb-2">7. LAIN-LAIN</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                <li>Prawira Outdoor berhak menolak pemesanan tanpa memberikan alasan</li>
                                <li>Syarat dan ketentuan dapat berubah sewaktu-waktu tanpa pemberitahuan</li>
                                <li>Keputusan Prawira Outdoor bersifat mutlak dan tidak dapat diganggu gugat</li>
                            </ul>
                        </section>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mt-6">
                        <p className="text-sm text-gray-700 text-center">
                            Dengan menyetujui syarat dan ketentuan ini, Anda menyatakan telah membaca,
                            memahami, dan menyetujui seluruh isi dari syarat dan ketentuan peminjaman
                            di Prawira Outdoor.
                        </p>
                    </div>
                </div>

                <div className="sticky bottom-0 bg-white border-t p-4">
                    <button
                        onClick={() => {
                            setAgreedToTerms(true);
                            setShowTerms(false);
                        }}
                        className="w-full bg-deep-green text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors"
                    >
                        Saya Setuju dengan Syarat dan Ketentuan
                    </button>
                </div>
            </div>
        </div>
    );

    if (!isCartOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
                    <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
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

                    <div className="p-4">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-8">
                                <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
                                <p className="text-gray-500">Keranjang belanja Anda kosong</p>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Produk</h3>
                                    <div className="space-y-4">
                                        {cartItems.map((item, index) => (
                                            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                                                <img
                                                    src={item.image_data
                                                        ? `data:image/jpeg;base64,${item.image_data}`
                                                        : `/storage/${item.image}`
                                                    }
                                                    alt={item.name}
                                                    className="w-16 h-16 object-cover rounded"
                                                    onError={(e) => {
                                                        e.target.src = 'https://via.placeholder.com/100x100?text=No+Image';
                                                    }}
                                                />
                                                <div className="flex-1">
                                                    <h4 className="font-medium text-gray-800">{item.name}</h4>
                                                    <p className="text-sm text-gray-500">Rp {item.price.toLocaleString('id-ID')}/hari</p>
                                                    <div className="flex items-center mt-2">
                                                        <button
                                                            onClick={() => updateQuantity(index, item.quantity - 1)}
                                                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                                                        >
                                                            <Minus size={16} />
                                                        </button>
                                                        <span className="mx-2 font-medium">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(index, item.quantity + 1)}
                                                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                                                        >
                                                            <Plus size={16} />
                                                        </button>
                                                        <button
                                                            onClick={() => removeFromCart(index)}
                                                            className="ml-auto p-1 rounded-full text-red-500 hover:bg-red-50"
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-600">Subtotal:</span>
                                            <span className="font-medium">Rp {calculateTotal().toLocaleString('id-ID')}</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-600">DP (50%):</span>
                                            <span className="font-medium text-orange-600">Rp {(calculateTotal() * 0.5).toLocaleString('id-ID')}</span>
                                        </div>
                                        <div className="border-t pt-2 mt-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-lg font-semibold">Total:</span>
                                                <span className="text-xl font-bold text-deep-green">
                                                    Rp {calculateTotal().toLocaleString('id-ID')}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Form Checkout</h3>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Nama Lengkap <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-green"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Nomor WhatsApp <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="whatsapp"
                                                value={formData.whatsapp}
                                                onChange={handleChange}
                                                required
                                                placeholder="08xxxxxxxxxx"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-green"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Alamat Lengkap <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                required
                                                rows="3"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-green"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Tanggal Pengambilan <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="date"
                                                    name="pickup_date"
                                                    value={formData.pickup_date}
                                                    onChange={handleChange}
                                                    required
                                                    min={new Date().toISOString().split('T')[0]}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-green"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Jam Pengambilan <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="time"
                                                    name="pickup_time"
                                                    value={formData.pickup_time}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-green"
                                                />
                                            </div>
                                        </div>

                                        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                                            <div className="flex">
                                                <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
                                                <div className="text-sm text-yellow-800">
                                                    <p className="font-semibold mb-1">Informasi Penting:</p>
                                                    <ul className="list-disc list-inside space-y-1">
                                                        <li>DP 50% dibayar saat pemesanan</li>
                                                        <li>Pelunasan saat pengambilan barang</li>
                                                        <li>Membawa identitas diri (KTP/SIM)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border rounded-md p-4">
                                            <label className="flex items-start cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={agreedToTerms}
                                                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                                                    className="mt-1 h-4 w-4 text-deep-green focus:ring-deep-green border-gray-300 rounded"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">
                                                    Saya telah membaca dan menyetujui{' '}
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowTerms(true)}
                                                        className="text-deep-green font-semibold hover:underline"
                                                    >
                                                        Syarat dan Ketentuan
                                                    </button>
                                                    {' '}peminjaman <span className="text-red-500">*</span>
                                                </span>
                                            </label>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={!agreedToTerms}
                                            className={`w-full py-3 px-4 rounded-md transition-colors ${agreedToTerms
                                                    ? 'bg-deep-green text-white hover:bg-opacity-90'
                                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                                }`}
                                        >
                                            {agreedToTerms ? 'Checkout via WhatsApp' : 'Setujui Syarat & Ketentuan untuk Checkout'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {showTerms && <TermsModal />}
        </>
    );
};

export default CartModal;