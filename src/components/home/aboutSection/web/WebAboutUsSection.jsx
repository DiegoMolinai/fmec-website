import { Box, Typography, Paper, Grid } from "@mui/material";
import aboutUsSectionConfig from "../../../../config/home/aboutUsSectionConfig";
import config from "../../../../config/config";
import iconMap from "../../../../config/iconMap";

const WebAboutUsSection = () => {
  return (
    <section id="about" style={{ marginTop: "2rem" }}>
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography variant="h4" fontWeight={700} textAlign="center" gutterBottom sx={{ color: config.colors.secondary }}>
          {aboutUsSectionConfig.heading}
        </Typography>

        <Typography variant="body1" textAlign="center" maxWidth="md" mx="auto" mb={6} sx={{ color: config.colors.secondary }}>
          {aboutUsSectionConfig.description}
        </Typography>

        <Grid container spacing={4}>
          {aboutUsSectionConfig.values.map((item, index) => {
            const Icon = iconMap[item.iconName];
            return (
              <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Paper elevation={3} sx={paperCardStyle}>
                  {Icon && <Icon sx={{ fontSize: 40, mb: 2, color: config.colors.primary }} />}
                  <Typography variant="h6" fontWeight={700} gutterBottom>{item.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{item.text}</Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        <Grid container spacing={4} mt={6}>
          {[aboutUsSectionConfig.mission, aboutUsSectionConfig.vision].map((section, idx) => {
            const Icon = iconMap[section.iconName];
            return (
              <Grid item size={{ xs: 12, md: 6 }} key={idx}>
                <Paper elevation={2} sx={paperCardStyle}>
                  {Icon && <Icon sx={{ fontSize: 50, mb: 2, color: config.colors.primary }} />}
                  <Typography variant="h6" fontWeight={700} gutterBottom>{section.title}</Typography>
                  <Typography variant="body1" sx={{ color: config.colors.textSecondary }}>{section.text}</Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </section>
  );
};

const paperCardStyle = {
  p: 4,
  borderRadius: 3,
  backgroundColor: config.colors.secondary,
  border: `1px solid ${config.colors.accent}`,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  transition: "all 0.4s ease",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 10px 24px rgba(0, 0, 0, 0.2)",
  },
};

export default WebAboutUsSection;
