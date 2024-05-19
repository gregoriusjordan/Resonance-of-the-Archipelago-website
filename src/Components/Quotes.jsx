import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const[author, setAuthor] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const apiKey = 'sSE8M181YuAtFAs0O0WE5A==uwHc66m2hAwDRHwP';
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
          headers: {
            'X-Api-Key': apiKey,
          },
        });
        if (response.data && response.data.length > 0) {
          setQuote(response.data[0].quote);
          setAuthor(response.data[0].author);
        }
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className='mx-16'>
      <p className='text-ivory text-center lg:text-xl text-lg font-bhadra'>"{quote}"</p>
      <p className='text-ivory text-center font-quick'> ━ {author}</p>
    </div>
  );
};

export default Quotes;

/*greg dont forget da blutut spiker ai wan borou for da sten*/