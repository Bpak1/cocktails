import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import OverView from './overView';
import Detail from './Detail';
import history from '../history';


class App extends Component{
  render(){
    return(
      <div className="ui container">
        <Router history={history}>
          <Route exact path="/" component={OverView} />
          <Route exact path="/:id" component={Detail} />
        </Router>
      </div>
    );
  }
}

export default App;
