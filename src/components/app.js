import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import OverView from './overView';
import Detail from './Detail';
import SearchBar from './searchBar';
import SearchByIngredient from './searchByIngredient';

import history from '../history';

class App extends Component{
  render(){
    return(
      <div>
      <Router history={history}>

        <div className="ui inverted vertical masthead center aligned segment">
          <div className="pusher">
            <div className="ui text container">
              <h1 className="ui inverted header">Select a drink to get started</h1>
              <h3>Let's mix things up</h3>
            </div>
          </div>
          <div>


          </div>
        </div>
        <div className="ui container">
          <div className="ui pointing secondary menu">
            <Link to="/" className="item">Overview</Link>
            <Link to="/search" className="item">Search</Link>
          </div>
            <Route exact path="/" component={OverView} />
            <Route exact path="/cocktail/:id" component={Detail} />
            <Route exact path="/search" component={SearchBar} />
            <Route exact path="/SearchByIngredient/:term" component={SearchByIngredient} />

        </div>
        <div className="ui inverted vertical footer segment">
          <div className="ui container">
            <p>This project was created by <a href="https://github.com/bpak1">Bart Pak</a></p>
          </div>
        </div>
        </Router>

      </div>
    );
  }
}

export default App;
