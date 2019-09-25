import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import DownArrow from '../../assets/DownArrow';
import Home from '../../assets/Home';
import Payment from '../../assets/Payment';
import Wallet from '../../assets/Wallet';
import Settings from '../../assets/Settings';
import Transfers from '../../assets/Transfers';

const NavSection = () => {
  return (
    <section className='nav-section'>
      <header className='nav-header'>
        <div className='logo'>
          <h5>B</h5>
        </div>
        <div className='name'>
          <h4>Buisness name</h4>
        </div>
        <div className='icon'>
          <DownArrow width='10px' height='10px' color='#818b9c' />
        </div>
      </header>
      <main className='nav-section-links'>
        <ul>
          <NavLink
            className='nav-link'
            activeClassName='activeRoute'
            to='/dashboard'
          >
            <div className='link-icon'>
              <Home width='15px' height='15px' />
            </div>
            Dashboard
          </NavLink>
          <NavLink
            className='nav-link'
            activeClassName='activeRoute'
            to='/balances'
          >
            <div className='link-icon'>
              <Wallet width='15px' height='15px' />
            </div>
            Balances
          </NavLink>
          <NavLink
            className='nav-link'
            activeClassName='activeRoute'
            to='/payment'
          >
            <div className='link-icon'>
              <Payment width='15px' height='15px' />
            </div>
            Payment
          </NavLink>
          <NavLink
            className='nav-link'
            activeClassName='activeRoute'
            to='/transfers'
          >
            <div className='link-icon'>
              <Transfers width='15px' height='15px' />
            </div>
            Transfers
          </NavLink>
          <NavLink
            className='nav-link'
            activeClassName='activeRoute'
            to='/developers'
          >
            <div className='link-icon'>{'{/}'}</div>
            Developers
          </NavLink>
          <NavLink
            className='nav-link'
            activeClassName='activeRoute'
            to='/settings'
          >
            <div className='link-icon'>
              <Settings width='15px' height='15px' />
            </div>
            Settings
          </NavLink>
        </ul>
      </main>
    </section>
  );
};

export default NavSection;
