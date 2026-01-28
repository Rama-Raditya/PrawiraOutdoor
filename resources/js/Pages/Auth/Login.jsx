import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { Shield, Lock, Mail } from 'lucide-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Admin Login - Prawira Outdoor" />
            
            <div className="min-h-screen flex bg-gradient-to-br from-deep-green via-deep-green to-green-800 relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnpNNiAzNGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTM2IDM0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20 pointer-events-none"></div>

                {/* Left Side - Branding */}
                <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12">
                    <div className="text-white max-w-md">
                        <div className="mb-8">
                            <div className="flex items-center mb-4">
                                <Shield size={48} className="text-sand" />
                            </div>
                            <h1 className="text-4xl font-bold mb-4">Prawira Outdoor</h1>
                            <h2 className="text-2xl font-semibold mb-2">Admin Panel</h2>
                            <div className="w-20 h-1 bg-sand mb-6"></div>
                            <p className="text-lg text-white/90 leading-relaxed">
                                Sistem manajemen persewaan alat camping profesional untuk mengelola inventori, pesanan, dan pelanggan dengan mudah.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 rounded-full bg-sand/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Kelola Produk</h3>
                                    <p className="text-white/70 text-sm">Tambah, edit, dan monitor stok produk secara real-time</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 rounded-full bg-sand/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Dashboard Analytics</h3>
                                    <p className="text-white/70 text-sm">Lihat statistik dan performa bisnis dalam satu dashboard</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 rounded-full bg-sand/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Manajemen Kategori</h3>
                                    <p className="text-white/70 text-sm">Organisir produk dengan sistem kategori yang fleksibel</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10">
                            <p className="text-white/60 text-sm">
                                © 2026 Prawira Outdoor. Sistem Admin Panel v1.0
                            </p>
                        </div>
                    </div>
                </div>  

                {/* Right Side - Login Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 relative z-10">
                    <div className="w-full max-w-md">
                        {/* Logo for mobile */}
                        <div className="lg:hidden mb-8 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4">
                                <Shield size={32} className="text-deep-green" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Prawira Outdoor Admin</h2>
                        </div>

                        {/* Login Card */}
                        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
                            <div className="mb-8">
                                <div className="flex items-center justify-center w-14 h-14 bg-deep-green rounded-xl mb-4">
                                    <Lock size={28} className="text-white" />
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Admin Login</h2>
                                <p className="text-gray-500 mt-2">Masuk ke dashboard administrasi</p>
                            </div>

                            {status && (
                                <div className="mb-6 text-sm font-medium text-green-600 bg-green-50 p-4 rounded-lg border border-green-200">
                                    {status}
                                </div>
                            )}

                            <form onSubmit={submit} className="space-y-6">
                                <div>
                                    <InputLabel htmlFor="email" className="text-gray-700 font-semibold mb-2">
                                        <div className="flex items-center">
                                            <Mail size={16} className="mr-2 text-gray-500" />
                                            Email Administrator
                                        </div>
                                    </InputLabel>
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full border-gray-300 focus:border-deep-green focus:ring-deep-green rounded-lg shadow-sm py-3 px-4 text-base"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="admin@prawiraoutdoor.com"
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="password" className="text-gray-700 font-semibold mb-2">
                                        <div className="flex items-center">
                                            <Lock size={16} className="mr-2 text-gray-500" />
                                            Password
                                        </div>
                                    </InputLabel>
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full border-gray-300 focus:border-deep-green focus:ring-deep-green rounded-lg shadow-sm py-3 px-4 text-base"
                                        autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="••••••••"
                                    />
                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center cursor-pointer">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                            className="text-deep-green focus:ring-deep-green rounded"
                                        />
                                        <span className="ms-2 text-sm text-gray-600">Ingat saya</span>
                                    </label>

                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className="text-sm text-deep-green hover:text-deep-green/80 font-medium"
                                        >
                                            Lupa password?
                                        </Link>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <PrimaryButton 
                                        className="w-full justify-center py-3 bg-deep-green hover:bg-deep-green/90 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200" 
                                        disabled={processing}
                                    >
                                        {processing ? (
                                            <div className="flex items-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Memproses...
                                            </div>
                                        ) : (
                                            'Masuk ke Dashboard'
                                        )}
                                    </PrimaryButton>

                                    <Link
                                        href="/"
                                        className="w-full inline-flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-green transition-colors duration-200"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                        </svg>
                                        Kembali ke Beranda
                                    </Link>
                                </div>
                            </form>

                            {/* Security Notice */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <div className="flex items-start space-x-2 text-xs text-gray-500">
                                    <Shield size={16} className="text-gray-400 flex-shrink-0 mt-0.5" />
                                    <p>
                                        Halaman ini dikhususkan untuk administrator Prawira Outdoor. 
                                        Akses tidak sah akan dicatat dan dilaporkan.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-6 text-center">
                            <p className="text-white/80 text-sm">
                                Butuh bantuan? Hubungi{' '}
                                <a href="mailto:support@prawiraoutdoor.com" className="text-sand font-medium hover:underline">
                                    support@prawiraoutdoor.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}