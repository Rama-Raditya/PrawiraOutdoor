import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { ArrowLeft, Upload } from 'lucide-react';

const ItemsCreate = ({ auth, categories }) => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        price: '',
        stock: '',
        specifications: '',
        category_id: '',
        is_available: true,
        image: null,
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/admin/items', {
            forceFormData: true,
        });
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) {
            setData('image', file);
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('image', file);
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <Head title="Tambah Produk - Admin" />
            <Navbar user={auth.user} />

            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="mb-8">
                        <div className="flex items-center mb-2">
                            <Link
                                href="/admin/items"
                                className="text-deep-green hover:text-deep-green/80 flex items-center mr-3"
                            >
                                <ArrowLeft size={20} className="mr-1" />
                                Kembali
                            </Link>
                        </div>
                        <h1 className="text-3xl font-bold text-deep-green mb-2">Tambah Produk Baru</h1>
                        <p className="text-gray-600">Tambahkan produk baru untuk disewakan</p>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Nama Produk
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'
                                            } rounded-md shadow-sm focus:outline-none focus:ring-deep-green focus:border-deep-green`}
                                        required
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                                    )}
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                        Deskripsi
                                    </label>
                                    <textarea
                                        id="description"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        rows="4"
                                        className={`mt-1 block w-full px-3 py-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'
                                            } rounded-md shadow-sm focus:outline-none focus:ring-deep-green focus:border-deep-green`}
                                        required
                                    />
                                    {errors.description && (
                                        <p className="mt-1 text-sm text-red-500">{errors.description}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                                        Harga Sewa (per hari)
                                    </label>
                                    <input
                                        type="number"
                                        id="price"
                                        value={data.price}
                                        onChange={(e) => setData('price', e.target.value)}
                                        className={`mt-1 block w-full px-3 py-2 border ${errors.price ? 'border-red-500' : 'border-gray-300'
                                            } rounded-md shadow-sm focus:outline-none focus:ring-deep-green focus:border-deep-green`}
                                        required
                                    />
                                    {errors.price && (
                                        <p className="mt-1 text-sm text-red-500">{errors.price}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">
                                        Stok
                                    </label>
                                    <input
                                        type="number"
                                        id="stock"
                                        value={data.stock}
                                        onChange={(e) => setData('stock', e.target.value)}
                                        className={`mt-1 block w-full px-3 py-2 border ${errors.stock ? 'border-red-500' : 'border-gray-300'
                                            } rounded-md shadow-sm focus:outline-none focus:ring-deep-green focus:border-deep-green`}
                                        required
                                    />
                                    {errors.stock && (
                                        <p className="mt-1 text-sm text-red-500">{errors.stock}</p>
                                    )}
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="specifications" className="block text-sm font-medium text-gray-700 mb-1">
                                        Spesifikasi
                                    </label>
                                    <textarea
                                        id="specifications"
                                        value={data.specifications}
                                        onChange={(e) => setData('specifications', e.target.value)}
                                        rows="2"
                                        className={`mt-1 block w-full px-3 py-2 border ${errors.specifications ? 'border-red-500' : 'border-gray-300'
                                            } rounded-md shadow-sm focus:outline-none focus:ring-deep-green focus:border-deep-green`}
                                    />
                                    {errors.specifications && (
                                        <p className="mt-1 text-sm text-red-500">{errors.specifications}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="category_id" className="block text-sm font-medium text-gray-700 mb-1">
                                        Kategori
                                    </label>
                                    <select
                                        id="category_id"
                                        value={data.category_id}
                                        onChange={(e) => setData('category_id', e.target.value)}
                                        className={`mt-1 block w-full px-3 py-2 border ${errors.category_id ? 'border-red-500' : 'border-gray-300'
                                            } rounded-md shadow-sm focus:outline-none focus:ring-deep-green focus:border-deep-green`}
                                        required
                                    >
                                        <option value="">Pilih Kategori</option>
                                        {categories.map(category => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.category_id && (
                                        <p className="mt-1 text-sm text-red-500">{errors.category_id}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Status Ketersediaan
                                    </label>
                                    <div className="flex items-center mt-2">
                                        <input
                                            type="checkbox"
                                            id="is_available"
                                            checked={data.is_available}
                                            onChange={(e) => setData('is_available', e.target.checked)}
                                            className="h-4 w-4 text-deep-green focus:ring-deep-green border-gray-300 rounded"
                                        />
                                        <label htmlFor="is_available" className="ml-2 block text-sm text-gray-700">
                                            Tersedia untuk disewa
                                        </label>
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                                        Gambar Produk
                                    </label>
                                    <div
                                        className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md cursor-pointer transition-colors ${isDragging ? 'border-deep-green bg-green-50' : 'border-gray-300 hover:border-deep-green'
                                            }`}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                        onClick={() => document.getElementById('image').click()}
                                    >
                                        <div className="space-y-1 text-center pointer-events-none">
                                            {imagePreview ? (
                                                <div className="mb-4">
                                                    <img
                                                        src={imagePreview}
                                                        alt="Preview"
                                                        className="mx-auto h-32 w-32 object-cover rounded-md"
                                                    />
                                                </div>
                                            ) : (
                                                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                            )}
                                            <div className="flex text-sm text-gray-600 justify-center">
                                                <span className="relative font-medium text-deep-green">
                                                    Upload file
                                                </span>
                                                <p className="pl-1">atau drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">
                                                PNG, JPG, GIF up to 5MB
                                            </p>
                                        </div>
                                        <input
                                            id="image"
                                            type="file"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                    </div>
                                    {errors.image && (
                                        <p className="mt-1 text-sm text-red-500">{errors.image}</p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <Link
                                    href="/admin/items"
                                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md mr-3 hover:bg-gray-400 transition-colors"
                                >
                                    Batal
                                </Link>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-deep-green text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-50"
                                >
                                    {processing ? 'Menyimpan...' : 'Simpan'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemsCreate;