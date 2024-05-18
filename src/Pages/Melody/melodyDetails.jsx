import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import laguDaerahData from "../../Data/laguDaerah";
import LaguDaerahDetails from "../../Components/LaguDaerah/LaguDaerahDetail";

const MelodyDetails = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const currentIndex = parseInt(index, 10);
  const selectedLaguDaerah = laguDaerahData[currentIndex];

  const handleClick = (index) => {
    navigate(`/melody/detail/${index}`);
  };

  return (
    <div className="bg-burgundys">
      <br/><br/><br/><br/>
      <div className="mt-10 mb-14">
        {selectedLaguDaerah ? (
          <LaguDaerahDetails
            laguDaerah={selectedLaguDaerah}
            currentIndex={currentIndex}
            laguDaerahData={laguDaerahData}
          />
        ) : (
          <p className="text-ivory">Song not found </p>
        )}
      </div>
    </div>
  );
};

export default MelodyDetails;
