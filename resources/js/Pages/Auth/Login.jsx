import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';

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
        <div className="min-h-screen flex flex-col lg:flex-row bg-white">
            <Head title="Log in - Prawira Outdoor" />

            {/* Left Side - Image (Hidden on mobile) */}
            <div className="hidden lg:flex lg:w-1/2 bg-deep-green items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
                <div className="relative z-10 text-center px-10">
                    <h2 className="text-4xl font-bold text-white mb-4">Selamat Datang Kembali</h2>
                    <p className="text-gray-100 text-lg">
                        Siap untuk petualangan berikutnya? Masuk untuk menyewa peralatan camping terbaik.
                    </p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-16 relative">
                <div className="w-full max-w-md">
                    <Link href="/" className="absolute top-4 sm:top-8 right-4 sm:right-8 text-gray-500 hover:text-deep-green flex items-center text-sm sm:text-base">
                        <ArrowLeft size={20} className="mr-1" />
                        Kembali
                    </Link>

                    <div className="mb-6 sm:mb-8 mt-8 sm:mt-0">
                        <div className="h-12 w-12 bg-deep-green rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Masuk Akun</h2>
                        <p className="text-gray-500 mt-2 text-sm sm:text-base">Masukan detail akun anda untuk melanjutkan.</p>
                    </div>

                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600 bg-green-50 p-3 rounded-md">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="email" value="Email" className="text-gray-700 font-medium" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full border-gray-300 focus:border-deep-green focus:ring-deep-green rounded-md shadow-sm py-2.5 sm:py-3 text-sm sm:text-base"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="nama@email.com"
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4 sm:mt-6">
                            <InputLabel htmlFor="password" value="Password" className="text-gray-700 font-medium" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full border-gray-300 focus:border-deep-green focus:ring-deep-green rounded-md shadow-sm py-2.5 sm:py-3 text-sm sm:text-base"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="••••••••"
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="text-deep-green focus:ring-deep-green"
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

                        <div className="mt-6 sm:mt-8">
                            <PrimaryButton className="w-full justify-center py-2.5 sm:py-3 bg-deep-green hover:bg-deep-green/90 text-sm sm:text-base" disabled={processing}>
                                Masuk Sekarang
                            </PrimaryButton>
                        </div>

                        <div className="mt-4 sm:mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Belum punya akun?{' '}
                                <Link href={route('register')} className="font-medium text-deep-green hover:text-deep-green/80">
                                    Daftar disini
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}