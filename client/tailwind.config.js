module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          montserrat: ["Montserrat", "sans-serif"],
        },
        animation: {
          fadeIn: "fadeIn 0.3s ease-in-out",
          fadeOut: "fadeOut 0.3s ease-in-out",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0, transform: "translateY(20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          fadeOut: {
            "0%": { opacity: 1, transform: "translateY(0)" },
            "100%": { opacity: 0, transform: "translateY(-20px)" },
          },
        },
        colors: {
          customBg: "oklch(45% 0.085 224.283)", // Add your custom oklch color
        },
      },
    },
    plugins: [],
  };