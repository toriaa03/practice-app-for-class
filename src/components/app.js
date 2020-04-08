import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavContainer from "./navigation/nav-container";
import TvShows from "./pages/tvshows";
import Movies from "./pages/movies";
import Music from "./pages/music";
import Me from "./pages/me";


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }
  render() {
    return (
      <div className="app">
        <Router>
        <h1>Class Project App!</h1>

        <NavContainer />

        <Route exact path="/" component={Me} />
        <Route path="/tvshows" component={TvShows} />
        <Route path="/movies" component={Movies} />
        <Route path="/music" component={Music} />

        

        </Router>
      </div>
    );
  }
}
