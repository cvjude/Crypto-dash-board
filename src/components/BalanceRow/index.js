import React from 'react';
import './style.scss';

export default function Balances({
  image,
  currencyName,
  availPriceForigen,
  availPriceNgn,
  pendingPriceForiegn,
  pendingPriceNgn
}) {
  return (
    <li className='item list'>
      <div className='left'>
        <img src={image} alt='' />
        <p className='currency-name'>{currencyName}</p>
      </div>
      <div className='right'>
        <div className='currency'>
          <p>{availPriceForigen}</p>
          <p className='naira'>{availPriceNgn}</p>
        </div>
        <div className='currency'>
          <p>{pendingPriceForiegn}</p>
          <p className='naira'>{pendingPriceNgn}</p>
        </div>
      </div>
    </li>
  );
}
