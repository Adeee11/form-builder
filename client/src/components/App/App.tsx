import { AboutSection } from "../AboutSection";
import { FooterSection } from "../FooterSection";
import { HeroSection } from "../HeroSection";
import { Navbar } from "../Navbar";
import { Footer, Main } from "./App.styles";

const App = () => {
  return (
    <>
      
        <Navbar />
      <Main>
        <HeroSection />
        <AboutSection />
      </Main>
      <Footer>
        <FooterSection />
      </Footer>
    </>
  );
};

export default App;
