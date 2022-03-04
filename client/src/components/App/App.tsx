import { About } from "../About";
import { Footer } from "../Footer";
import { HeroContainer } from "../HeroContainer";
import { HowToUseSection } from "../HowToUseSection";
import { IntegrationsSection } from "../IntegrationsSection";
import { Navbar } from "../Navbar";
import { Testinomials } from "../Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroContainer />
      <About />
      <HowToUseSection />
      <IntegrationsSection />
      <Testinomials />
      <Footer />
    </div>
  );
}

export default App;
