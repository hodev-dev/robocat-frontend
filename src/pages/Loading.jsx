import React from 'react';
import { MetroSpinner } from "react-spinners-kit";
import Header from '../conponents/Header.jsx';
import Scafold from '../conponents/Scafold.jsx';

const Loading = () => {
  return (
    <Scafold className={''}>
      <Header />
      <div className={"flex flex-col items-center justify-center w-full h-screen sm:items-center sm:justify-center"}>
        <form className={"flex flex-col items-center justify-center w-full h-auto p-12 rounded-md lg:w-6/12 lg:w-5/12 bg-arc-dark_1"}>
          <MetroSpinner size={100} color={"#13E398"} />
          <h1 className={"w-full mt-10 font-mono text-2xl text-center text-arc-light_1 lg:w-6/12"}>Loading</h1>
        </form>
      </div>
    </Scafold>
  )
}

export default Loading
