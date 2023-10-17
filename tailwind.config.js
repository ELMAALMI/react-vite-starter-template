const colors = require('./src/ui/theme/colors.js');
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter']
            },
            colors
        }
    },
    plugins: []
};
