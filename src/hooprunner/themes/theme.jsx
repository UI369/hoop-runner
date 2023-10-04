import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      900: "darkblue",
      800: "#002366", // Slightly lighter than darkblue
      700: "#003399", // ...
      600: "#0040cc",
      500: "#0052e6", // Base shade
      400: "#3366ff",
      300: "#668cff",
      200: "#99b3ff",
      100: "#ccd9ff", // Very light blue
      50: "#e6eaff", // Almost white with a hint of blue
    },
    // ... you can add other color definitions here
  },
  components: {
    Link: {
      baseStyle: {
        fontWeight: "bold",
        textDecoration: "none",
      },
      variants: {
        internalLink: {
          bg: "brand.900",
          color: "white",
          borderRadius: "5px",
          transition: "background-color 0.3s",
          _hover: {
            bg: "brand.600",
            textDecoration: "none",
          },
          display: "inline-block",
          padding: "10px 20px",
          textAlign: "center",
          width: "200px",
          marginRight: "1em",
          marginBottom: "1em",
          marginTop: "1em",
        },
      },
    },
  },
  // Here you can add other theme customizations:
  fonts: {
    heading: "Arial, sans-serif",
    body: "Arial, sans-serif",
  },
  // Custom breakpoints, components styling, etc.
});

export default theme;
