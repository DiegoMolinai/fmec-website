import { Box, Typography, Button, Stack } from "@mui/material";
import contactSectionConfig from "../../config/home/contactSectionConfig";
import config from "../../config/config";

const ContactSection = () => {
  return (
    <section id="contact" style={{ marginTop: "2rem", }}>
      <Box
        sx={{
          backgroundColor: config.colors.primary,
          borderRadius: 2,
          p: 4,
          color: config.colors.secondary,
          textAlign: "center",
          transition: "all 0.4s ease",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 10px 24px rgba(0, 0, 0, 0.2)",
                  },
        }}
      >
        <Typography variant="h4" fontWeight={700} gutterBottom>
          {contactSectionConfig.heading}
        </Typography>
        <Typography variant="body1" mb={3}>
          {contactSectionConfig.message} <br />
          Llámanos al {config.contact.phone}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          {contactSectionConfig.buttons.map((btn, idx) => (
            <Button
              key={idx}
              variant={btn.variant}
              href={btn.link}
              sx={
                btn.variant === "outlined"
                  ? {
                      color: config.colors.secondary,
                      borderColor: config.colors.secondary,
                      "&:hover": {
                        backgroundColor: config.colors.accent,
                        color: config.colors.textPrimary,
                      },
                    }
                  : {
                      backgroundColor: config.colors.secondary,
                      color: config.colors.primary,
                      "&:hover": {
                        backgroundColor: config.colors.accent,
                      },
                    }
              }
              target={btn.link.includes("wa.me") ? "_blank" : "_self"}
            >
              {btn.text}
            </Button>
          ))}
        </Stack>
      </Box>
    </section>
  );
};

export default ContactSection;
