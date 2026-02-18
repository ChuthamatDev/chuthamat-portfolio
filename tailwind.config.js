/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'apple-bg': '#F5F5F7',
                'apple-text': '#1D1D1F',
                'apple-gray': '#86868B',
            },
            fontFamily: {
                sans: [
                    'Inter',
                    'SF Pro Display',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'system-ui',
                    'sans-serif',
                ],
            },
            borderRadius: {
                apple: '18px',
                'apple-lg': '28px',
            },
            boxShadow: {
                apple: '0 4px 20px rgba(0, 0, 0, 0.08)',
                'apple-lg': '0 8px 40px rgba(0, 0, 0, 0.12)',
            },
        },
    },
    plugins: [],
}
