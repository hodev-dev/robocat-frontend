import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cover from '../assets/img/cover.jpg';
import Header from '../conponents/Header';
import Scafold from '../conponents/Scafold';
import { Axios } from '../helper/axios_config';
import { logout } from '../redux/authSlice';
const User = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    Axios.get('/api/user').then((response) => {
      console.log('at User console log', response);
    }).catch((err) => {
      if (err.response.status === 401) {
        dispatch(logout());
      }
    });
  }, [dispatch])

  return (
    <Scafold className={'items-center'}>
      <Header />
      <div className={'flex flex-row w-8/12 h-auto mt-5 rounded-lg bg-arc-dark_1'}>
        <div className={'w-10/12'}>left</div>
        <div className={'w-2/12 p-2'}>
          <img className={"rounded-lg"} src={Cover} alt="" srcset="" />
        </div>
      </div>
    </Scafold>
  )
}

export default User
