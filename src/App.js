import NavBar from "./Components/Navbar";
import AboutMe from "./Components/Sections/AboutMe";
import Footer from "./Components/Sections/Footer";
import Home from "./Components/Sections/Home";
import Projects from "./Components/Sections/Projects";
import Skills from "./Components/Sections/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
