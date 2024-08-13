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
                'header-beige': '#FFF7ED',
                'header-gray': '#4D4D4D',
                'button-orange': '#FF8C38'
            },
            backgroundImage: {
                'hero-image': "url('./src/assets/images/hero_img_2.jpg')"
            }
        },
    },
    plugins: [],
}