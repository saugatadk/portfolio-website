import './App.css';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Footer from './Components/Footer/Footer';
import Heading from './Components/Heading/Heading';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <>
      <Heading />
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
