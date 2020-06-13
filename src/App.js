import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage"

function App() {
    return (
      <Router>
        {/* <StoreProvider> */}
          <Route exact path='/' component={LandingPage} />
        {/* </StoreProvider> */}
      </Router>
  );
}

export default App;
