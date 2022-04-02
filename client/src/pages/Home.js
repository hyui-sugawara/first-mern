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
      <div>Home</div>
      <p>{message}</p>
    </>
  );
};

export default Home;
