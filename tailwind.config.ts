import type { Config } from 'tailwindcss';

// Tailwind is scoped to the NEW (rebranded) routes/components only.
// `preflight` is disabled so it never resets the existing bespoke SCSS pages.
export default <Partial<Config>>{
  corePlugins: {
    preflight: false
  },
  // Scopes every utility under `.tw` (e.g. `.tw .grid`) so Tailwind reliably
  // wins over the existing global SCSS classes (`.grid`, `.card`, ...) that
  // share the same names — without affecting any of the old SCSS pages.
  important: '.tw',
  content: [
    './components/freelance/**/*.{vue,js,ts}',
    './pages/freelance.vue',
    './pages/freelance/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        // Mirrors assets/styles/colors.scss so new + old stay visually in sync
        navy: '#020617',
        'navy-soft': '#0c0f20',
        modal: '#0c1439',
        ink: '#01020d',
        brand: {
          DEFAULT: '#2bcc69',
          hover: '#60f285',
          shadow: '#059329'
        },
        cloud: '#959fbb',
        slatey: '#7e80a0',
        hair: '#1a1f3c'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['GT Walsheim Trial Bd', 'Inter', 'sans-serif']
      },
      borderRadius: {
        card: '24px'
      },
      boxShadow: {
        brand: '4px 4px 0px 0px #059329',
        'brand-lg': '6px 6px 0px 0px #059329',
        glow: '0 0 60px -10px rgba(43, 204, 105, 0.45)'
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(circle at center, transparent 0%, #020617 75%)',
        'brand-gradient': 'linear-gradient(135deg, #2bcc69 0%, #60f285 100%)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'ticker': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.38, 0.98, 0.6, 0.9) both',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'ticker': 'ticker 30s linear infinite'
      }
    }
  }
};
