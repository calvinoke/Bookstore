import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
          <Route exact path='/' component={ShowBookList} />
          <Route path='/CreateBook' component={CreateBook} />
          <Route path='/UpdateBookInfo' component={UpdateBookInfo} />
          <Route path='/ShowBookDetails' component={ShowBookDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;