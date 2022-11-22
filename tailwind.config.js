/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '140px',
  
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'ml': '900px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'lgm': '1124px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        
        '3xl': '1836px',
        // => @media (min-width: 1536px) { ... }
      },
    },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["18px", "28px"],
      xl: ["20px", "28px"],
      "2xl": ["24px", "32px"],
      "3xl": ["30px ", "36px"],
      "4xl": ["36px ", "40px"],
      "5xl": ["48px ", "1"],
      "6xl": ["60px ", "1"],
      "7xl": ["72px ", "1"],
      "7.5xl": ["80px ", "1"],
      "8xl": ["96px ", "1"],
      "8.5xl": ["108px ", "1"],
      "9xl": ["128px", "1"],
      "9.5xl": ["160px", "1"],
      "10xl": ["200px", "1"],
      "10.5xl": ["230px", "1"],
      "11xl": ["260px", "1"],
      "12xl": ["280px", "1"],
      "15xl": ["360px", "1"],
    },
  },
  plugins: [],
}
