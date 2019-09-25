import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavSection from './components/NavSection';
import Transfers from './pages/Transfers';
import Balances from './pages/Balances';
import MainHeader from './components/MainHeader';
import './App.scss';

function App() {
  return (
    <Router>
      <div className='App'>
        <aside className='side-section'>
          <NavSection />
        </aside>
        <main className='main-section'>
          <div className='container'>
            <MainHeader />
            <Route exact path='/transfers' component={Transfers} />
            <Route exact path='/balances' component={Balances} />
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
