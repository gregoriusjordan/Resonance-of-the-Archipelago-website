import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCirclePlay,
  faCirclePause,
} from "@fortawesome/free-solid-svg-icons";
import ReactAudioPlayer from "react-audio-player";
import soundwave from "../../Assets/soundwave.gif";

const AlatMusikDetails = ({ alatMusik, currentIndex, alatMusikArray }) => {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.audioEl.current.play();
    }
  }, []);

  if (!alatMusik) {
    return <p>Instrument data not available</p>;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  const handlePlayPauseClick = () => {
    if (audioRef.current) {
      const audioElement = audioRef.current.audioEl.current;
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % alatMusikArray.length;
    navigate(`/resonance/detail/${nextIndex}`);
  };

  return (
    <div className="flex justify-center">
      <div className="flex bg-ivory lg:rounded-[60px] rounded-[30px] lg:w-[1150px] lg:h-[750px] w-[650px] drop-shadow-xl flex-col">
        <div className="flex flex-row justify-between">
          <div className="lg:ms-10 ms-6 lg:mt-4">
            <button
              className="mt-4 rounded-[50px] border-burgundy border-2 lg:h-[60px] h-[50px] w-[50px] lg:w-[60px] text-burgundy flex items-center justify-center hover:bg-burgundy hover:text-ivory duration-150"
              onClick={handleBackClick}
            >
              <FontAwesomeIcon icon={faArrowLeft} size="lg" />
            </button>
          </div>
          <div className="lg:mt-4 lg:me-[30px] me-[25px]">
            <button
              className="mt-4 rounded-[50px] border-burgundy border-2 lg:h-[60px] lg:w-[60px] h-[50px] w-[50px] text-burgundy flex items-center justify-center hover:bg-burgundy hover:text-ivory duration-150"
              onClick={handleNextClick}
            >
              <FontAwesomeIcon icon={faArrowRight} size="lg" />
            </button>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col">
          <div className="flex content-center flex-col">
            <div className="lg:ms-6 lg:mt-16 mt-4 lg:me-10 flex justify-center">
              <img
                src={alatMusik.image}
                alt={alatMusik.name}
                className="lg:w-[380px] lg:h-[380px] w-[200px] h-[200px] hover:scale-[1.12] duration-300 drop-shadow-lg"
              />
            </div>
            <div className="flex justify-center lg:space-x-4 mt-6">
              <button
                className="mt-4 rounded-[25px] border-[#7E0B0B] border-4 lg:h-[80px] lg:w-[250px] h-[60px] w-[150px] text-[#7E0B0B] duration-[300ms]"
                onClick={handlePlayPauseClick}
              >
                <div className="flex justify-start lg:ms-6 ms-4 flex-row lg:mt-[-28px] mt-[-8px]">
                  <div className="content-center">
                    <FontAwesomeIcon
                      icon={isPlaying ? faCirclePause : faCirclePlay}
                      className="lg:text-[40px] text-[30px]"
                    />
                  </div>
                  <div>
                    <img
                      src={soundwave}
                      alt="soundwave gif"
                      className="lg:w-[130px] w-[70px] ms-4"
                    />
                  </div>
                </div>
              </button>
            </div>
            <div>
              <ReactAudioPlayer
                src={alatMusik.sound}
                ref={audioRef}
                autoPlay
                volume={0.3}
              />
            </div>
          </div>

          <div className="flex content-center flex-col lg:w-[640px] lg:h-[550px] lg:me-6 mx-6">
            <div className="mb-2 lg:mt-10 mt-6">
              <h1 className="lg:text-[60px] text-[40px] font-raja text-center text-burgundy">
                {alatMusik.name}
              </h1>
            </div>
            <p className="font-bhadra text-justify lg:text-[20px] text-[15px] text-burgundy lg:leading-10 lg:tracking-wide indent-12 mb-4">
              {alatMusik.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlatMusikDetails;
