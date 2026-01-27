import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-white">
            <Head title="Register - Prawira Outdoor" />

            {/* Left Side - Image (Hidden on mobile) */}
            <div className="hidden lg:flex lg:w-1/2 bg-deep-green items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
                <div className="relative z-10 text-center px-10">
                    <h2 className="text-4xl font-bold text-white mb-4">Mulai Petualanganmu</h2>
                    <p className="text-gray-100 text-lg">
                        Bergabunglah dengan komunitas kami dan sewa peralatan camping dengan mudah.
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                            </svg>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Buat Akun Baru</h2>
                        <p className="text-gray-500 mt-2 text-sm sm:text-base">Daftar sekarang untuk mulai menyewa.</p>
                    </div>

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="name" value="Nama Lengkap" className="text-gray-700 font-medium" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full border-gray-300 focus:border-deep-green focus:ring-deep-green rounded-md shadow-sm py-2.5 sm:py-3 text-sm sm:text-base"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                                placeholder="Jhon Doe"
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" className="text-gray-700 font-medium" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full border-gray-300 focus:border-deep-green focus:ring-deep-green rounded-md shadow-sm py-2.5 sm:py-3 text-sm sm:text-base"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                required
                                placeholder="nama@email.com"
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" className="text-gray-700 font-medium" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full border-gray-300 focus:border-deep-green focus:ring-deep-green rounded-md shadow-sm py-2.5 sm:py-3 text-sm sm:text-base"
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                                placeholder="••••••••"
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password_confirmation" value="Konfirmasi Password" className="text-gray-700 font-medium" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full border-gray-300 focus:border-deep-green focus:ring-deep-green rounded-md shadow-sm py-2.5 sm:py-3 text-sm sm:text-base"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                                placeholder="••••••••"
                            />
                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>

                        <div className="mt-6 sm:mt-8">
                            <PrimaryButton className="w-full justify-center py-2.5 sm:py-3 bg-deep-green hover:bg-deep-green/90 text-sm sm:text-base" disabled={processing}>
                                Daftar Sekarang
                            </PrimaryButton>
                        </div>

                        <div className="mt-4 sm:mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Sudah punya akun?{' '}
                                <Link href={route('login')} className="font-medium text-deep-green hover:text-deep-green/80">
                                    Masuk disini
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}