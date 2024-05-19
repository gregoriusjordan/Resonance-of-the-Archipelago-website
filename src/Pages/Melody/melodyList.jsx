import React, { useEffect, useState } from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import laguDaerahData from "../../Data/laguDaerah";
import LaguDaerah from "../../Components/LaguDaerah/LaguDaerah";
import { useNavigate } from "react-router-dom";
import Footer from '../../Components/Footer/Footer';

const Melody = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [laguDaerahs, setLaguDaerahs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: 'ease',
      anchorPlacement: 'top-bottom',
    });

    setTimeout(() => {
      setLaguDaerahs(laguDaerahData);
      setIsFetching(false);
    }, 500);

    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => {
      AOS.refresh();
    };
  }, []);

  const handleClick = (index) => {
    navigate(`/melody/detail/${index}`);
    
  };

  return (
    <div className="container-lg md:mx-auto bg-burgundys scrollbar scrollbar-thumb-taupe scrollbar-track-burgundy">
      <br/><br/><br/><br/>
      <div className="flex justify-center flex-col bg-burgundys" data-aos="fade-up" data-aos-offset="50">
        <h1 className="font-ivory mt-10 lg:text-[90px] text-[75px] font-raja text-center text-ivory drop-shadow-md">Melody</h1>
        <h2 className="font-ivory lg:text-[35px] text-[25px] font-raja text-center text-ivory">
          “In life's grand symphony, let your heart be free, and dance to the rhythm of your own melody.”
        </h2>
        <br/>
        <hr className="h-[3px] mx-14 my-8 bg-ivory border-3"/>
        <br/>
        {isFetching ? (
          <div className='flex justify-center'>
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-ivory border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status">
              <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-14">
            {laguDaerahs.map((laguDaerah, index) => (
              <div key={index} onClick={() => handleClick(index)}>
                <LaguDaerah 
                  nama={laguDaerah.nama}
                  asal={laguDaerah.asal}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='mt-16'>
      <Footer/>
      </div>
    </div>
  );
}

export default Melody;
