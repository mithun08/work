import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../components/Home/homePage';
import NotFoundPage from '../components/Layout/notFoundPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="">
       <Switch>
        <Route exact path="/" component={HomePage} />        
        <Route  component={NotFoundPage} />
         </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
