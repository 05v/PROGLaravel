const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                gray: {
                    '100': '#f7fafc',
                    '300': '#d1d5db',
                    '700': '#374151',
                    '800': '#1f2937',
                    '900': '#111827',
                },
                white: '#ffffff',
                black: '#000000',
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            // Andere mogelijke aanpassingen
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
