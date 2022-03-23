import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import logo from "./logo.svg";

function App() {
  return (
    <>
      <Header />
      <main className="p-2 p-md-3">
        <section className="mx-auto px-3 bg-white border h-100 rounded">
          <About />
          <Project />
          <Resume />
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
