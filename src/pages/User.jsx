import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
  }, [])

  return (
    <div>
      user
    </div>
  )
}

export default User
