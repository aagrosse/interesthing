import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage"
import Admin from "./pages/Dashboard/Dashboard"

function App() {
    return (
      <Router>
        {/* <StoreProvider> */}
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/dashboard' component={Admin} />
        {/* </StoreProvider> */}
      </Router>
  );
}

export default App;
