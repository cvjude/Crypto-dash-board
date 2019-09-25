import React from 'react';

const payments = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 15 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.5 6.12556L3.5 3.58V7V7.5H4H11.6429V10.3235H9.84375H7.03125H6.69807L6.56979 10.631L4.61409 15.3191L0.5 13.3217V6.12556Z'
        stroke='currentColor'
      />
      <rect
        x='3.5'
        y='3.5'
        width='11'
        height='4'
        rx='0.5'
        stroke='currentColor'
      />
      <path
        d='M4 0.5H14C14.2761 0.5 14.5 0.723857 14.5 1V3.5H3.5V1C3.5 0.723858 3.72386 0.5 4 0.5Z'
        stroke='currentColor'
      />
    </svg>
  );
};

export default payments;
