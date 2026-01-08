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
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
