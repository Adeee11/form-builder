import { AboutSection } from "../AboutSection";
import { FooterSection } from "../FooterSection";
import { HeroSection } from "../HeroSection";
import { Navbar } from "../Navbar";
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
