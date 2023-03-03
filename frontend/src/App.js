import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
          <Route exact path='/' Component={ShowBookList} />
          <Route path='/CreateBook' Component={CreateBook} />
          <Route path='/UpdateBookInfo' Component={UpdateBookInfo} />
          <Route path='/ShowBookDetails' Component={ShowBookDetails} />
        </div>
      </Router>
    );
  }
}

export default App;