import React from 'react';
import ConnectCard from './ConnectCard';

function Connect() {
  return (
    <div className='grid gap-4 grid-cols-2 grid-rows-2 mt-0'>
      <ConnectCard/>
      <ConnectCard/>
      <ConnectCard/>
      <ConnectCard/>
    </div>
  )
}

export default Connect