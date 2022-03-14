import { AboutSection } from "../../components/AboutSection";
import { FooterSection } from "../../components/FooterSection";
import { HeroSection } from "../../components/HeroSection";
import { Navbar } from "../../components/Navbar";
import { Footer, Main, Wrapper } from "./App.styles";

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <Main>
        <HeroSection />
        <AboutSection />
      </Main>
      <Footer>
        <FooterSection />
      </Footer>
    </Wrapper>
  );
};

export default App;
