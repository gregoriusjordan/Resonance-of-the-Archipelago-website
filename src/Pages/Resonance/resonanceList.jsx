import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../Components/Navbar/Navbar";
import AOS from "aos";
import AlatMusik from "../../Components/AlatMusik/AlatMusik";
import alatMusikData from "../../Data/alatMusik";
import Footer from '../../Components/Footer/Footer';

const ResonanceList = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [alatMusik, setAlatMusik] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
    

    setTimeout(() => {
      setAlatMusik(alatMusikData);
      setIsFetching(false);
    }, 50); 
  }, []);

  window.scrollTo({ top: 0, behavior: "smooth" });

  const handleClick = (index) => {
    navigate(`/resonance/detail/${index}`);
  };

  return (
    <div className="container-lg md:mx-auto bg-burgundys scrollbar scrollbar-thumb-taupe scrollbar-track-burgundy">
      <br/><br/><br/><br/>
      <div className="flex justify-center flex-col" data-aos="fade-up" data-aos-offset="50">
        <h1 className="mt-10 lg:text-[90px] text-[60px] font-raja text-center text-ivory drop-shadow-md">Resonance</h1>
        <h2 className="lg:text-[35px] text-[20px] font-raja text-center text-ivory lg:mb-6">
          “In the silence of our souls, we find resonance, where echoes of <br/> our dreams dance in consonance.”
        </h2>
        <hr className="h-[3px] mx-14 my-4 bg-ivory border-3 mb-14 rounded-xl"/>
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
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-14" data-aos="fade-up" data-aos-offset="100" data-aos-duration="1200">
            {alatMusik.map((alatMusik, index) => (
              <div key={index} onClick={() => handleClick(index)}>
                <AlatMusik
                  nama={alatMusik.name}
                  asal={alatMusik.region}
                  image={alatMusik.image}
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
};

export default ResonanceList;
