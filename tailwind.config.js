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
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                accent: 'var(--color-accent)',
                background: 'var(--color-background)',
                surface: 'var(--color-surface)',
                'text-primary': 'var(--color-text)',
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                display: ['Playfair Display', 'serif'],
            },
            borderRadius: {
                DEFAULT: 'var(--radius)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease forwards',
                'fade-in': 'fadeIn 0.6s ease forwards',
                'fade-in-down': 'fadeInDown 0.6s ease forwards',
                'slide-in-left': 'slideInLeft 0.6s ease forwards',
                'slide-in-right': 'slideInRight 0.6s ease forwards',
                'scale-in': 'scaleIn 0.5s ease forwards',
                'float': 'float 3s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                'rotate-in': 'rotateIn 0.6s ease forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-50px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(50px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.9' },
                },
                rotateIn: {
                    '0%': { opacity: '0', transform: 'rotate(-10deg) scale(0.9)' },
                    '100%': { opacity: '1', transform: 'rotate(0) scale(1)' },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
