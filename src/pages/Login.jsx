import React from 'react'
import Header from '../conponents/Header.jsx'
import Logo from '../conponents/Logo'
import Scafold from '../conponents/Scafold.jsx'

const Login = () => {
  return (
    <>
      <Scafold className={''}>
        <Header />
        <div className={"flex w-full h-screen sm:items-center sm:justify-center"}>
          <div className={"flex flex-col items-center justify-center w-full h-auto rounded-md sm:p-12 lg:w-5/12 bg-arc-dark_1"}>
            <Logo className={'w-48 h-48 m-5 sm:w-48 sm:h-48 lg:m-5'} />
            <input placeholder={"Username"} className={"w-full h-12 p-2 m-2 text-lg text-center rounded-sm outline-none lg:w-8/12 bg-arc-dark_3 text-arc-light_1"} type="text" />
            <input placeholder={"Password"} className={"w-full h-12 p-2 m-2 text-lg text-center rounded-sm outline-none lg:w-8/12 bg-arc-dark_3 text-arc-light_1"} type="text" />
            <button className={"w-48 h-12 m-4 text-lg font-semibold rounded-sm bg-arc-accent_1 text-arc-light_1"} >
              Login
            </button>
            <a className={"w-full font-mono text-center text-arc-light_1"} href={"#"}>create account</a>
            <a className={"w-full font-mono text-center text-arc-light_1"} href={"#"}>forgot password</a>
          </div>
        </div>
      </Scafold>
    </>
  )
}

export default Login
