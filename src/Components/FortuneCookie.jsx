import React, { useState, useEffect } from 'react';
import axios from 'axios';
import fortunes from "../Assets/fortune.gif";

const FortuneCookie = () => {
  const [fortune, setFortune] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFortune = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://fortune-cookie4.p.rapidapi.com/slack',
          headers: {
            'X-RapidAPI-Key': '7fa9d5a7camsh586836a0ac4a23dp16c911jsn819c6443f635',
            'X-RapidAPI-Host': 'fortune-cookie4.p.rapidapi.com'
          }
        };
        const response = await axios.request(options);
        setFortune(response.data.text);
        setError('');
      } catch (error) {
        setError('Failed to fetch fortune.');
        console.error(error);
      }
    };

    fetchFortune();
  }, []);

  return (
    <div className="rounded-xl bg-ivory p-4 lg:w-[500px] mx-4">
      <h2 className="font-bhadra font-bold text-center text-xl text-burgundy">Fortune Cookie</h2>
      {error && <p className="fortune-error">{error}</p>}
      {fortune && (
        <div className="mt-2">
            <div className='flex justify-center'>
                <img className="lg:w-[300px] w-[200px]" src={fortunes} ></img>
            </div>
          <p className="text-burgundy text-lg font-bhadra text-center">{fortune}</p>
        </div>
      )}
    </div>
  );
};

export default FortuneCookie;
