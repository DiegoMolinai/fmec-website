const heroSectionConfig = {
  slides: [
    {
      title: "Bienvenido a Taller Mecánico",
      subtitle: "Especialistas en reparación, mantención y servicios automotrices.",
      buttonText: "Ver Servicios",
      buttonLink: "/services",
      backgroundImage: "/assets/home/heroSection/carousel_image_1.png",
    },
    {
      title: "Confía tu vehículo a profesionales",
      subtitle: "Más de 15 años de experiencia a tu servicio.",
      buttonText: "Contáctanos",
      buttonLink: "/contact",
    },
    {
      title: "Calidad y rapidez garantizadas",
      subtitle: "Trabajamos con las mejores herramientas del mercado.",
      buttonText: "Nuestros Servicios",
      buttonLink: "/services",
    },
  ],

  // ✅ Agregamos parámetros configurables
  swiperSettings: {
    autoplayDelay: 5000,
    navigationColor: "#FFFFFF",
    navigationHoverColor: "#D1D1D1",
    bulletColor: "rgba(255,255,255,0.4)",
    bulletActiveColor: "#D1D1D1",
  },
};

export default heroSectionConfig;
