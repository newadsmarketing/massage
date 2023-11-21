import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";

import styled from "styled-components";

const Container = styled.section`
  position: relative;
`;

function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <About />
      <Project />
      <Footer />
    </Container>
  );
}

export default App;
