import React from 'react';
import { MetroSpinner } from "react-spinners-kit";

const Loading = () => {
  return (
    <div className={"flex flex-col items-center justify-center w-full h-auto sm:items-center sm:justify-center bg-arc-dark_1"}>
      <form className={"flex flex-col items-center justify-center w-full h-auto p-12 rounded-md "}>
        <MetroSpinner size={100} color={"#13E398"} />
        <h1 className={"w-full mt-10 font-mono text-2xl text-center text-arc-light_1 lg:w-6/12"}>Loading</h1>
      </form>
    </div>
  )
}

export default Loading
