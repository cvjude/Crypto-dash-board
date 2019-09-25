import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Bell from '../../assets/Icons/Bell';
import './style.scss';

class MainSection extends Component {
  state = {
    value: true
  };

  handleChange = e => {
    this.setState({
      value: e.target.checked
    });
  };

  render() {
    const {
      location: { pathname }
    } = this.props;
    const { value } = this.state;
    const pathName = pathname.substr(1);
    return (
      <div className='main-header'>
        <h2 className='head'>
          {pathName.charAt(0).toUpperCase() + pathName.slice(1)}
        </h2>
        <div className='right'>
          <div className='slide-button'>
            <label className='toggle'>
              <input
                onChange={this.handleChange}
                data-test='checkbox'
                type='checkbox'
                className='toggle_input'
                checked={value}
              />
              <div className='toggle-control' />
            </label>
            <p className='slide-description'>Test Mode</p>
          </div>

          <div className='notification'>
            <Bell width='24px' height='24px' />
            <div className='notify-num'>
              <p>1</p>
            </div>
          </div>

          <div className='user-profile'>
            <div className='user-logo'>
              <p>O</p>
            </div>
            <div className='user-name'>
              <p>Oluwatobi Mayowa</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MainSection);
