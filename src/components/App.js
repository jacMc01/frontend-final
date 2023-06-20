import React from 'react';
import '../App.css';
import Header from './Header';
import Main from "./Main";
import Panel from "./Panel";
import Description from "./Description";
import Box from "./Box";
import Information from "./Information";
import Contact from "./Contact";
import Footer from "./Footer";
import Aplication from "./Aplication"

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
          <Description />
          <Panel />
          <Box />
          <Information />
          <Contact />
          <Footer />
        </Route>

        <Route path="/app">
          <Aplication  />
        </Route>

      </Switch>
    </>
  );
}

export default App;
