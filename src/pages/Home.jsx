import { Container, Box } from "@mui/material";
import HeroSection from "../components/home/HeroSection";
import ServicesOverview from "../components/home/ServicesOverview";
import AboutUsSection from "../components/home/AboutUsSection";
import ContactSection from "../components/home/ContactSection";
import LocationMap from "../components/home/LocationMap";
import FadeInSection from "../components/animation/FadeInSection";

const Home = () => {
  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ px: 0 }}>
        <FadeInSection delay={0.1} type="fadeUp">
          <HeroSection />
        </FadeInSection>
        <FadeInSection delay={0.1} type="fadeUp">
          <ServicesOverview />
        </FadeInSection>
        <FadeInSection delay={0.2} type="slideLeft">
          <AboutUsSection />
        </FadeInSection>
        <FadeInSection delay={0.3} type="slideRight">
          <LocationMap />
        </FadeInSection>
        <FadeInSection delay={0.4} type="fadeScale">
          <ContactSection />
        </FadeInSection>
      </Container>
    </Box>
  );
};

export default Home;
