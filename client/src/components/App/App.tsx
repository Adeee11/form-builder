import { HeroSection } from '../HeroSection';
import { Navbar } from '../Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
