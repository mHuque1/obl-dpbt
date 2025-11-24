export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primarios
        verde: {
          principal: '#52C41A',
          claro: '#F6FFED',
          hover: '#45A514',
        },
        naranja: {
          cta: '#FF9500',
          claro: '#FFB84D',
        },
        azul: {
          confianza: '#4A90E2',
        },
        // Neutros
        gris: {
          claro: '#F5F5F5',
          medio: '#CCCCCC',
          oscuro: '#666666',
        },
        beige: {
          ilustracion: '#F5E6D3',
        },
        // Feedback
        amarillo: {
          estrellas: '#FFD700',
        },
      },
    },
  },
  plugins: [],
};
