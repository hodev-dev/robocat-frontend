import React, { useEffect } from 'react';
import { Counter } from './conponents/Counter';
import { Axios } from './helper/axios_config';

function App() {

  useEffect(() => {
    Axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
      console.log({ response });
    });
  }, []);

  return (
    <Counter />
  );
}

export default App;
