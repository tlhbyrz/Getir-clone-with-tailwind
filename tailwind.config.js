module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '540px',
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
      '2xl': '1920px'
    },
    extend: {
      backgroundColor: {
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7'
      },
      backgroundImage: theme => ({
        "mobile-app": "url('https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
