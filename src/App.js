import React, { useState } from 'react';
import { Switch, Route } from 'react-router';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import { SliderData, SliderDataTwo } from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';
import Footer from './components/Footer';
import NoMatch from "./components/NoMatch"
import About from './components/About';
import Contact from './components/Contact';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      {isOpen && <Dropdown isOpen={isOpen} toggle={toggle}/>}
      <Switch>
        <Route exact path="/">
          <Hero slides={SliderData} buttonDisplay="true"/>
          <InfoSection {...InfoData} displayButton={true}/>
        </Route>
        <Route path="/about">
          <About slides={SliderDataTwo}/>
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
