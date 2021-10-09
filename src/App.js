import React, { useState } from 'react';
import { Switch, Route } from 'react-router';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';
import Footer from './components/Footer';
import NoMatch from "./components/NoMatch"


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route exact path="/">
          <Hero slides={SliderData}/>
          <InfoSection {...InfoData}/>
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
