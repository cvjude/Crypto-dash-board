import React from 'react';

const Wallet = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 13 13'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <mask id='path-1-inside-1' fill='currentColor'>
      <path d='M0 2.78572H12C12.5523 2.78572 13 3.23344 13 3.78572V12C13 12.5523 12.5523 13 12 13H3C1.34315 13 0 11.6569 0 10V2.78572Z' />
    </mask>
    <path
      d='M0 2.78572H12C12.5523 2.78572 13 3.23344 13 3.78572V12C13 12.5523 12.5523 13 12 13H3C1.34315 13 0 11.6569 0 10V2.78572Z'
      stroke='currentColor'
      strokeWidth='2.4'
      mask='url(#path-1-inside-1)'
    />
    <mask id='path-2-inside-2' fill='currentColor'>
      <path d='M0 2.47619C0 1.10863 1.10863 0 2.47619 0H10.375C10.9273 0 11.375 0.447715 11.375 1V2.71429C11.375 3.26657 10.9273 3.71429 10.375 3.71429H1.2381C0.554314 3.71429 0 3.15997 0 2.47619V2.47619Z' />
    </mask>
    <path
      d='M0 2.47619C0 1.10863 1.10863 0 2.47619 0H10.375C10.9273 0 11.375 0.447715 11.375 1V2.71429C11.375 3.26657 10.9273 3.71429 10.375 3.71429H1.2381C0.554314 3.71429 0 3.15997 0 2.47619V2.47619Z'
      stroke='currentColor'
      strokeWidth='2.4'
      mask='url(#path-2-inside-2)'
    />
    <path
      d='M11 6.6H12.4V9.4H11C10.2268 9.4 9.6 8.7732 9.6 8C9.6 7.2268 10.2268 6.6 11 6.6Z'
      stroke='currentColor'
      strokeWidth='1.2'
    />
  </svg>
);

export default Wallet;
