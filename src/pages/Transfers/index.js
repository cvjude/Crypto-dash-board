import React from 'react';
import Modal from '../../components/Modal';
import DownArrow from '../../assets/Icons/DownArrow';
import './style.scss';

export default function Transfers() {
  return (
    <Modal>
      {
        <div className='transfers'>
          <header>
            <button>
              <div className='transfer-button'>
                <p>New transfer</p>
                <DownArrow width='10px' height='10px' />
              </div>
            </button>
          </header>
          <div className='reference'>
            <p>Reference</p>
            <p className='align-right'>Status</p>
            <p className='align-right'>Amount</p>
          </div>
          <div className='transfers'>
            <h2>You haven't made any transfers yet</h2>
            <p>Your tansfers will be displayed here</p>
          </div>
        </div>
      }
    </Modal>
  );
}
