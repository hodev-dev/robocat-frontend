import produce from "immer";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../conponents/Header.jsx';
import Logo from '../conponents/Logo';
import Scafold from '../conponents/Scafold.jsx';
import { Axios } from '../helper/axios_config.js';
import { login } from '../redux/authSlice';

const Regester = () => {

  const dispatch = useDispatch();
  const [_name, setName] = useState('');
  const [_email, setEmail] = useState('');
  const [_password, setPassword] = useState('');
  const [_repeatPassword, setRepeatPassword] = useState('');

  const [errors, setErrors] = useState({});

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleName = (event) => {
    setName(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleRepeatPassword = (event) => {
    setRepeatPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (_name === '' || _email === '' || _password === '' || _repeatPassword === '') {
      const nextState = produce(errors, draftState => {
        draftState.require = [];
        draftState.require.push("لطفا همه ی فیلد ها را وارد کنید");
      });
      setErrors(nextState);
    }
    else if (_password !== _repeatPassword) {
      const nextState = produce(errors, draftState => {
        draftState.repeatPassword = [];
        draftState.repeatPassword.push("رمزعبور و تکرار ان باید یکسان باشد");
      });
      setErrors(nextState);
    }
    else {
      Axios.post('regester', { email: _email, password: _password, name: _name }).then((response) => {
        console.log({ response });
        setErrors({});
        dispatch(login(response))
      }).catch((err) => {
        if (err.response) {
          console.log(err.response.data.errors);
          setErrors(err.response.data.errors);
        }
      });
    }
  }

  const renderError = () => {
    return Object.keys(errors).map((key, index) => {
      return errors[key].map((error) => {
        return (
          <h1 className={'font-mono text-sm'} key={Math.random()}>{error}</h1>
        )
      })
    });
  }

  return (
    <Scafold className={''}>
      <Header />
      <div className={"flex flex-col w-full h-screen sm:items-center sm:justify-center"}>
        <div className={(JSON.stringify(errors) !== '{}') ? "flex p-5 flex-col items-end w-full h-auto text-red-400 rounded-md sm:p-12 lg:w-5/12 bg-arc-dark_3" : 'hidden'}>
          {renderError()}
        </div>
        <form className={"flex flex-col items-center justify-center w-full h-auto rounded-md sm:p-12 lg:w-5/12 bg-arc-dark_1"}>
          <Logo className={'w-32 h-32 m-5 sm:w-32 sm:h-32 lg:m-5'} />
          <div className={'flex flex-col items-center justify-center w-full p-4'}>
            <input onChange={handleName} name={'name'} placeholder={"name"} className={`w-full h-12 p-2 m-2 text-lg text-center rounded-sm outline-none lg:w-8/12 bg-arc-dark_3 text-arc-light_1 ${errors.hasOwnProperty('name') ? 'border-pink-900 border' : ''}`} type="text" required />
            <input onChange={handleEmail} name={'email'} placeholder={"Email"} className={`w-full h-12 p-2 m-2 text-lg text-center rounded-sm outline-none lg:w-8/12 bg-arc-dark_3 text-arc-light_1 ${errors.hasOwnProperty('email') ? 'border-pink-900 border' : ''}`} type="text" required />
            <input onChange={handlePassword} name={'password'} type="Password" placeholder={"Password"} className={`w-full h-12 p-2 m-2 text-lg text-center rounded-sm outline-none lg:w-8/12 bg-arc-dark_3 text-arc-light_1 ${errors.hasOwnProperty('password') ? 'border-pink-900 border' : ''}`} required />
            <input onChange={handleRepeatPassword} name={'repeat password'} type="Password" placeholder={"repeat password"} className={`w-full h-12 p-2 m-2 text-lg text-center rounded-sm outline-none lg:w-8/12 bg-arc-dark_3 text-arc-light_1 ${errors.hasOwnProperty('repeatPassword') ? 'border-pink-900 border' : ''}`} required />
          </div>
          <button onClick={handleSubmit} type={"submit"} className={"w-48 h-12 m-4 text-lg font-semibold rounded-sm bg-arc-accent_1 text-arc-light_1"} >
            Regester
          </button>
          <a className={"w-full font-mono text-center text-arc-light_1"} href={"http://localhost:3000"}>already have account ?</a>
          <a className={"w-full font-mono text-center text-arc-light_1"} href={"http://localhost:3000"}>forgot password</a>
        </form>
      </div>
    </Scafold>
  )
}

export default Regester
