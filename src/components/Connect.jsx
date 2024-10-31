import React from 'react';
import ConnectCard from './ConnectCard';

function Connect() {
  return (
    <div className='grid gap-4 grid-cols-2 grid-rows-2 mt-0'>
      <ConnectCard name={"Email"} l={"yahiaamr90@gmail.com"} type={"mail"}/>
      <ConnectCard name={"Phone"} l={"01020460092"} type={"phone"}/>
    </div>
  )
}

export default Connect