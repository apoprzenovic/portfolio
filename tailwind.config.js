/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        'src/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'main-dark-blue': '#020c12',
                'main-medium-blue': '#03121a',
                'main-black': '#0A0A0A',
                'main-baby-blue': '#a0c9f8',
                'main-green': '#538083',
                'main-blue': '#6d99e8',
                'gray-75': '#BFBFBF',
            },
            fontFamily: {
                'main-questrial': ['Questrial', 'sans-serif'],
                'main-dm-sans': ['DM Sans', 'sans-serif'],
            },
            spacing: {
                '41': '10.25rem',
            }
        },
    },
    plugins: [require('flowbite/plugin')],
}
