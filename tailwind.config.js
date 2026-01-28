import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'deep-green': '#fe6f0f',
                'sand': '#D4A574',
                'dark-charcoal': '#2D3142',
            },
            screens: {
                'xs': '475px',
                ...defaultTheme.screens,
            },
        },
    },

    plugins: [forms],
};