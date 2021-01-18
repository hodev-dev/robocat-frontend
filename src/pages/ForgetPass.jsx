import React from 'react';
import Header from '../conponents/Header.jsx';
import Logo from '../conponents/Logo';
import Scafold from '../conponents/Scafold.jsx';

const ForgetPass = () => {
  return (
    <Scafold className={''}>
      <Header />
      <div className={"flex w-full h-screen sm:items-center sm:justify-center"}>
        <form className={"flex flex-col items-center justify-center w-full h-auto rounded-md sm:p-12 lg:w-5/12 bg-arc-dark_1"}>
          <Logo className={'w-48 h-48 m-5 sm:w-48 sm:h-48 lg:m-5'} />
          <input name={'email'} placeholder={"Email"} className={"w-full h-12 p-2 m-2 text-lg text-center rounded-sm outline-none lg:w-8/12 bg-arc-dark_3 text-arc-light_1"} type="text" />
          <button type={"submit"} className={"w-48 h-12 m-4 text-lg font-semibold rounded-sm bg-arc-accent_1 text-arc-light_1"} >
            Reset Password
          </button>
          <a className={"w-full font-mono text-center text-arc-light_1"} href={"http://localhost:3000"}>already have account ?</a>
          <a className={"w-full font-mono text-center text-arc-light_1"} href={"http://localhost:3000"}>create new account</a>
        </form>
      </div>
    </Scafold>
  )
}

export default ForgetPass
