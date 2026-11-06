/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        city: {
          ivory: '#FBF9F4',       // Warm inviting background
          sand: '#F3ECE0',        // Warm beige foundation
          cream: '#FFFDF9',       // Clean card surface
          card: '#FFFFFF',
          sage: {
            50: '#F1F7F1',
            100: '#DFEDDF',
            200: '#C2DEC2',
            400: '#7FA87E',
            500: '#5F8E5E',       // Vibrant lively sage
            600: '#467245',
            700: '#345533',
          },
          blue: {
            50: '#EFF6FC',
            100: '#DBECF9',
            200: '#B6D9F3',
            400: '#5B9DD9',
            500: '#3B82C4',       // Sky/dusty blue
            600: '#2867A3',
            700: '#1D4C79',
          },
          teal: {
            50: '#EDFAF7',
            100: '#D2F3EC',
            200: '#A4E7DA',
            400: '#3DBCA7',
            500: '#2A9D8F',       // Vivid rich sea teal
            600: '#207F74',
            700: '#165B53',
          },
          terracotta: {
            50: '#FEF3EE',
            100: '#FDE4D9',
            200: '#FAC6B2',
            400: '#E87A54',
            500: '#D95C32',       // Warm energetic terracotta
            600: '#B8451F',
            700: '#8C3114',
          },
          amber: {
            50: '#FFF9EB',
            100: '#FEF0CB',
            400: '#F5B738',
            500: '#E79E1B',
            600: '#C07B0B',
          },
          charcoal: {
            950: '#0F1215',
            900: '#1A1F26',       // Deep clear readable slate
            800: '#27303B',
            700: '#3D4B5C',       // High contrast body text
            500: '#5F7185',       // Secondary readable text
            300: '#94A3B8',
            150: '#CBD5E1',
            100: '#E2E8F0',
          }
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'Outfit', 'sans-serif'],
        heading: ['Outfit', 'Space Grotesk', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'poly-sm': '0 2px 0 0 rgba(26, 31, 38, 0.08)',
        'poly': '0 4px 0 0 rgba(26, 31, 38, 0.1)',
        'poly-lg': '0 8px 0 0 rgba(26, 31, 38, 0.12)',
        'card': '0 10px 30px -10px rgba(26, 31, 38, 0.08), 0 2px 6px -2px rgba(26, 31, 38, 0.04)',
        'card-hover': '0 20px 40px -15px rgba(26, 31, 38, 0.15), 0 6px 12px -3px rgba(26, 31, 38, 0.06)',
      }
    },
  },
  plugins: [],
}
