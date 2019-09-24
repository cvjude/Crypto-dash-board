import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavSection from './components/NavSection';
import Transfers from './pages/Transfers';
import Balances from './pages/Balances';
import './App.scss';

function App() {
  return (
    <Router>
      <div className='App'>
        <aside className='side-section'>
          <NavSection />
        </aside>
        <main className='main-section'>
          <Route exact path='/transfers' component={Transfers} />
          <Route exact path='/balances' component={Balances} />
        </main>
      </div>
    </Router>
  );
}

export default App;
