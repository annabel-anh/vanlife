/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'footer-gray': '#252525',
                'footer-gray-light': '#AAAAAA',
                'body-beige': '#FFF7ED',
                'header-gray': '#4D4D4D',
                'primary-orange': '#FF8C38',
                'secondary-orange': '#FFCC8D',
                'tertiary-orange': '#FFEAD0',
                'rugged-pill': '#115E59',
                'simple-pill': '#E17654',
                'luxury-pill': '#161616',
                'black':'#161616'
            },
            backgroundImage: {
                'hero-image': "url('./src/assets/images/hero_img_2.jpg')"
            }
        },
    },
    plugins: [],
}