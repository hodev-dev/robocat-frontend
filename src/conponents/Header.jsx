import React from 'react';
import Logo from '../conponents/Logo';

const Header = () => {
  return (
    <div className={"flex items-center justify-center w-full h-16 bg-arc-dark_1"}>
      <div className={'items-center justify-center hidden w-4/12 lg:flex'}>
      </div>
      <input placeholder={"Search"} className={"w-full h-10 p-2 text-lg text-center rounded-sm outline-none lg:w-6/12 bg-arc-dark_2 text-arc-light_1"} type="text" />
      <div className={'items-center justify-end hidden w-4/12 lg:flex'}>
        <Logo className={"w-12 h-12 mr-28"} />
      </div>
    </div>
  )
}

export default Header
