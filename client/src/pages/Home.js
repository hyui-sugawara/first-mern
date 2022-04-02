import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const url = 'http://localhost:3001';

const Home = () => {
  const [message, setMessage] = useState('');

  const getMessage = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setMessage(data.message);
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <>
      <Navbar />
      <div className='text-center'>
        <h1 className='text-3xl font-bold'>Hello world!</h1>
        <p>{message}</p>
      </div>
    </>
  );
};

export default Home;
