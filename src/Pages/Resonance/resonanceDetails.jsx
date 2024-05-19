import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import alatMusikData from "../../Data/alatMusik";
import AlatMusikDetails from "../../Components/AlatMusik/AlatMusikDetail";
import AlatMusik from "../../Components/AlatMusik/AlatMusik";
import Footer from "../../Components/Footer/Footer";


const ResonanceDetails = () => {
  const { index } = useParams();
  const currentIndex = parseInt(index, 10);
  const selectedAlatMusik = alatMusikData[currentIndex];
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
  }, []);
  

  const otherAlatMusik = alatMusikData.filter((_, i) => i !== currentIndex);
  const randomIndexes = getRandomIndexes(otherAlatMusik.length, 6);
  const randomAlatMusik = randomIndexes.map(index => otherAlatMusik[index]);

  const handleClick = (index) => {
    navigate(`/resonance/detail/${index}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div data-aos="fade-up">
        <div className="mt-[150px] mb-14 mx-2 max-md:mx-4 max-sm:mx-4">
        {selectedAlatMusik ? (
          <AlatMusikDetails
            alatMusik={selectedAlatMusik}
            currentIndex={currentIndex}
            alatMusikArray={alatMusikData}
          />
        ) : (
          <p className="text-ivory">Instrument not found </p>
        )}
      </div>
      <hr className="h-[3px] mx-14 my-4 bg-ivory border-3 lg:mb-14 mb-6 rounded-xl" />
      <div className="flex justify-center">
        <h1 className="font-raja text-ivory lg:text-[60px] text-[45px]">Other Resonances</h1>
      </div>
      <div className="mt-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-2 lg:mx-14 mx-2">
        {randomAlatMusik.map((alatMusik, i) => (
          <div
            key={i}
            onClick={() => handleClick(alatMusikData.indexOf(alatMusik))}
           className="mx-2">
            <AlatMusik
              nama={alatMusik.name}
              asal={alatMusik.region}
              image={alatMusik.image}
            />
          </div>
        ))}
      </div>
      </div>
      <div className="mt-4">
        <Footer/>
      </div>
    </div>
  );
};

function getRandomIndexes(length, count) {
  const indexes = [];
  while (indexes.length < count) {
    const index = Math.floor(Math.random() * length);
    if (!indexes.includes(index)) {
      indexes.push(index);
    }
  }
  return indexes;
}

export default ResonanceDetails;
