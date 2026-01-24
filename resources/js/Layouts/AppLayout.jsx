import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { usePage } from '@inertiajs/react';

export default function Authenticated({ children }) {
    const user = usePage().props.auth.user;

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar user={user} />
            
            <main>{children}</main>
        </div>
    );
}