import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const LaguDaerahDetails = ({ laguDaerah }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const formattedLyrics = laguDaerah.lirik.replace(/(?!^)([A-Z])/g, '\n$1');

  return (
    <div className="flex flex-col items-center p-4">
      <div className="grid bg-ivory rounded-[20px] p-4 w-full max-w-[1000px] gap-4">
        <div className="flex justify-start w-full">
          <button
            onClick={handleBack}
            className="mt-2 ms-2 rounded-[50px] border-burgundy border-2 lg:h-[60px] lg:w-[60px] h-[40px] w-[40px] text-burgundy flex items-center justify-center hover:bg-burgundy hover:text-ivory duration-150"
          ><FontAwesomeIcon icon={faArrowLeft} size="lg" />
          </button>
        </div>
        <div className="bg-ivory text-burgundy p-4 my-2 rounded-[20px]">
          <h1 className="mb-4 text-burgundy text-5xl text-center font-raja">
            {laguDaerah.nama}
          </h1>
          <h2 className="mb-1 text-burgundy text-center text-[30px] font-raja mt-[-20px]">
            {laguDaerah.asal}
          </h2>
          <hr className="border-burgundy border-2 mb-4 mx-20"/>
          <p className="text-burgundy text-[22px] text-center whitespace-pre-line font-bhadra" style={{ lineHeight: '2'}}>{formattedLyrics}</p>
        </div>
      </div>
      <div className="grid bg-ivory rounded-[20px] p-3 w-full max-w-[1000px] gap-4 mt-10">
        <div className="bg-ivory text-burgundy p-4 rounded-[30px] mx-4">
          <h2 className="mb-2 font-raja text-burgundy text-5xl">Sejarah</h2>
          <p className="text-burgundy text-lg whitespace-pre-line font-bhadra text-justify">{laguDaerah.sejarah}</p>
        </div>
      </div>
    </div>
  );
};

export default LaguDaerahDetails;
