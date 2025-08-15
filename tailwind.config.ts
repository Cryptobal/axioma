import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        // Cyan / azul eléctrico como acento principal
        primary: '#00B4D8',
        primaryForeground: '#001018',
        // Gard tokens mapeados a CSS variables
        gard: {
          background: 'hsl(var(--gard-background))',
          foreground: 'hsl(var(--gard-foreground))',
        },
        accent: {
          brand: 'var(--color-accent-brand)',
          brandHover: 'var(--color-accent-brand-hover)',
          orange: 'var(--color-accent-orange)',
          orangeAa: 'var(--color-accent-orange-aa)'
        },
        fg: {
          primary: 'var(--color-fg-primary)',
          muted: 'var(--color-fg-muted)'
        },
        surface: {
          DEFAULT: 'var(--color-bg-default)',
          section: 'var(--color-bg-section)'
        },
        border: {
          subtle: 'var(--color-border-subtle)',
          dark: 'var(--color-border-dark)'
        },
        ring: 'var(--gard-focus-ring)'
      },
      fontFamily: {
        title: ['var(--font-space-grotesk)'],
        body: ['var(--font-inter)'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        // Gard radii
        lg: 'var(--radius-lg)',
        md: 'var(--radius-md)',
        sm: 'var(--radius-sm)'
      },
      boxShadow: {
        card: '0 8px 30px rgba(0, 0, 0, 0.25)',
        // Gard shadows
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

export default config


