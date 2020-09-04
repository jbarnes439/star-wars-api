import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends React.Component {





  render() {
    return (
      <ErrorBoundary>
      <main className='App'>
        <Header />
        <Search />
      </main>
      </ErrorBoundary>
    );
  }
}

export default App;
