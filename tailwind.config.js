
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'neon-red': '#ff003c',
        'neon-red-dim': '#4d0012',
        'dark-bg': '#020202',
        'tech-gray': '#1a1a1a',
        // Zenith OS Colors
        'cyber-bg': '#050505',
        'cyber-card': '#0c0c0c',
        'cyber-accent': '#ff3131',
        'cyber-green': '#00f2ff',
        'cyber-border': 'rgba(255,49,49,0.45)',
        'cyber-dim': 'rgba(255,255,255,0.12)',
        'cyber-yellow': '#ffea00',
        'cyber-orange': '#ff5f00',
      },
      fontFamily: {
        cyber: ['"Orbitron"', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
        'scan-gradient': 'linear-gradient(180deg, transparent 0%, rgba(255, 0, 60, 0.1) 50%, transparent 100%)',
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 1s linear infinite',
        'commit-pulse': 'commitPulse 0.5s infinite ease-in-out',
        'nexus-pulse': 'nexusPulse 2s infinite ease-in-out',
        'forge-pulse': 'forgePulse 2.5s infinite ease-in-out',
        'qc-flicker': 'qcFlicker 4s infinite step-end',
        'scan-sweep': 'scanSweep 3s linear infinite',
        'hologram': 'hologram 3s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        },
        commitPulse: {
          '0%': { backgroundColor: '#ff3131', boxShadow: '0 0 5px #ff3131' },
          '50%': { backgroundColor: '#ffffff', boxShadow: '0 0 40px #ffffff', color: '#000' },
          '100%': { backgroundColor: '#ff3131', boxShadow: '0 0 5px #ff3131' },
        },
        nexusPulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 2px #00f2ff)', opacity: '0.5' },
          '50%': { filter: 'drop-shadow(0 0 10px #00f2ff)', opacity: '1' },
        },
        forgePulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 242, 255, 0.3)', borderColor: 'rgba(0, 242, 255, 0.5)' },
          '50%': { boxShadow: '0 0 80px rgba(0, 242, 255, 0.9)', borderColor: 'rgba(0, 242, 255, 1)' },
        },
        qcFlicker: {
          '0%': { opacity: '1', transform: 'skew(0deg)', filter: 'contrast(1)' },
          '5%': { opacity: '0.7', transform: 'skew(2deg)', filter: 'contrast(1.5)' },
          '10%': { opacity: '1', transform: 'skew(0deg)' },
          '15%': { opacity: '0.8', transform: 'scaleY(1.1)' },
          '20%': { opacity: '1', transform: 'scaleY(1)' },
          '100%': { opacity: '1' },
        },
        scanSweep: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        hologram: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
