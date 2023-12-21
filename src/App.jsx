import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import { useRef, useCallback } from 'react';

function App() {
  const residenciesRef = useRef(null);
  const valueRef = useRef(null);
  const contactRef = useRef(null);
  const getStartedRef = useRef(null);

  const scrollTo = useCallback((ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);


  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header 
          onResidenciesClick={() => scrollTo(residenciesRef)}
          onValueClick={() => scrollTo(valueRef)}
          onContactClick={() => scrollTo(contactRef)}
          onGetStartedClick={() => scrollTo(getStartedRef)}
        />
        <Hero />
      </div>
      <Residencies ref={residenciesRef} />
      <Value ref={valueRef} />
      <Contact ref={contactRef} />
      <GetStarted ref={getStartedRef} />
      <Footer />
    </div>
  );
}

export default App;
