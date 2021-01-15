import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../conponents/Header.jsx';
import Logo from '../conponents/Logo';
import Scafold from '../conponents/Scafold.jsx';
import { Axios } from '../helper/axios_config';

const Login = () => {
  let history = useHistory();

  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleForm = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const submitForm = (event) => {
    event.preventDefault();
    console.log({ formData });
    Axios.post('http://localhost:8000/login', { email: formData.email, password: formData.password }).then((response) => {
      console.log({ response });
      history.push('user')
    }).catch((err) => {
      console.log({ err });
    });
  }

  return (
    <>
      <Scafold className={''}>
        <Header />
        <div className={"flex w-full h-screen sm:items-center sm:justify-center"}>
          <form className={"flex flex-col items-center justify-center w-full h-auto rounded-md sm:p-12 lg:w-5/12 bg-arc-dark_1"}>
            <Logo className={'w-48 h-48 m-5 sm:w-48 sm:h-48 lg:m-5'} />
            <input name={'email'} value={formData.email} onChange={handleForm} placeholder={"Username"} className={"w-full h-12 p-2 m-2 text-lg text-center rounded-sm outline-none lg:w-8/12 bg-arc-dark_3 text-arc-light_1"} type="text" />
            <input name={'password'} type="password" value={formData.password} onChange={handleForm} placeholder={"Password"} className={"w-full h-12 p-2 m-2 text-lg text-center rounded-sm outline-none lg:w-8/12 bg-arc-dark_3 text-arc-light_1"} />
            <button type={"submit"} onClick={submitForm} className={"w-48 h-12 m-4 text-lg font-semibold rounded-sm bg-arc-accent_1 text-arc-light_1"} >
              Login
            </button>
            <a className={"w-full font-mono text-center text-arc-light_1"} href={"http://localhost:3000"}>create account</a>
            <a className={"w-full font-mono text-center text-arc-light_1"} href={"http://localhost:3000"}>forgot password</a>
          </form>
        </div>
      </Scafold>
    </>
  )
}

export default Login
