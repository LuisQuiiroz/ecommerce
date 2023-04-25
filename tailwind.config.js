/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'kumbh-sans': ['"Kumbh Sans"', 'sans-serif']
      },
      fontWeight: {
        'k-bold': 700
      },
      colors: {
        'cus-primary': 'hsl(26, 100%, 55%)',
        'cus-pale-primary': 'hsl(25, 100%, 94%)',
        'cus-very-dark-blue': 'hsl(220, 13%, 13%)',
        'cus-dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'cus-grayish-blue': 'hsl(220, 14%, 75%)',
        'cus-light-grayish-blue': 'hsl(223, 64%, 98%)'
      },
      aspectRatio: {
        '4/3': '4 / 3'
      }
    }
  },
  plugins: []
}
