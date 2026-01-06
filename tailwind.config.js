/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                cream: {
                    DEFAULT: '#FAFAF9',
                    50: '#FFFFFF',
                    100: '#FAFAF9',
                    200: '#F5F5F4',
                    300: '#E7E5E4',
                    400: '#D6D3D1',
                    500: '#A8A29E',
                },
                midnight: {
                    DEFAULT: '#0F172A',
                    50: '#334155',
                    100: '#1E293B',
                    200: '#0F172A',
                    300: '#0A0F1C',
                    400: '#050812',
                    500: '#020408',
                },
                gold: {
                    DEFAULT: '#D4AF37',
                    50: '#F5EDD0',
                    100: '#F0E4B8',
                    200: '#E7D388',
                    300: '#DEC258',
                    400: '#D4AF37',
                    500: '#B8962D',
                    600: '#8F7423',
                    700: '#665319',
                    800: '#3D310F',
                    900: '#141005',
                },
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'float': '0 20px 60px -15px rgba(0, 0, 0, 0.3)',
                'float-lg': '0 30px 80px -20px rgba(0, 0, 0, 0.4)',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            },
            backdropBlur: {
                xs: '2px',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
}
