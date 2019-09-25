import React from 'react';
import Modal from '../../components/Modal';
import ListItem from '../../components/BalanceRow';
import './style.scss';
import lists from '../../assets/lists';

const list = lists.map((listItem, index) => (
  <ListItem key={index} {...listItem} />
));

export default function Balances() {
  return (
    <Modal>
      {
        <ul className='balances'>
          <li className='item'>
            <div className='left'>
              <p>Name</p>
            </div>
            <div className='right'>
              <div>
                <p>Pending</p>
              </div>
              <div>
                <p>Available</p>
              </div>
            </div>
          </li>
          {list}
        </ul>
      }
    </Modal>
  );
}
