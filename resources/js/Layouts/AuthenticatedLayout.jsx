import React from 'react';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { CartProvider } from '@/Components/CartContext';

export default function Authenticated({ children }) {
    const user = usePage().props.auth.user;

    return (
        <CartProvider>
            <div className="min-h-screen bg-gray-50">
                <Head title="Prawira Outdoor" />

                <Navbar user={user} />

                <main>{children}</main>
            </div>
        </CartProvider>
    );
}