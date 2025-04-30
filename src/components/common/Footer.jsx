import {
    Box,
    Container,
    Typography,
    Stack,
    Divider,
    Grid,
    IconButton,
  } from "@mui/material";
  import GitHubIcon from "@mui/icons-material/GitHub";
  import LinkedInIcon from "@mui/icons-material/LinkedIn";
  import FacebookIcon from "@mui/icons-material/Facebook";
  import config from "../../config/config";
  
  const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <Box
        component="footer"
        sx={{
          mt: 8,
          py: 4,
          backgroundColor: config.colors.primary,
          color: config.colors.secondary,
          borderTop: `2px solid ${config.colors.accent}`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="space-between">
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" fontWeight={600}>
                {config.appName}
              </Typography>
              <Typography variant="body2" color={config.colors.accent}>
                © {currentYear} Todos los derechos reservados.
              </Typography>
            </Grid>
  
            <Grid item xs={12} md="auto">
              <Stack direction="row" spacing={2} justifyContent="flex-end">
                {config.socialLinks.map((link) => (
                  <IconButton
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: config.colors.secondary,
                      "&:hover": {
                        color: config.colors.accent,
                      },
                    }}
                  >
                    {{
                      Facebook: <FacebookIcon />,
                      GitHub: <GitHubIcon />,
                      LinkedIn: <LinkedInIcon />,
                    }[link.name] || null}
                  </IconButton>
                ))}
              </Stack>
            </Grid>
          </Grid>
  
          <Divider
            sx={{
              width: "50px",
              height: "3px",
              backgroundColor: config.colors.accent,
              borderRadius: 2,
              mx: "auto",
              mt: 4,
            }}
          />
        </Container>
      </Box>
    );
  };
  
  export default Footer;
  