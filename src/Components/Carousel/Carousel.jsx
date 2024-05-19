import React, { useRef, useState, useEffect } from "react";
import "./Carousel.css";
import angklungs from "../../Assets/Angklung (2).gif";
import gambang from "../../Assets/Gambang (1).gif";
import rumba from "../../Assets/Rumba.gif";
import rebab from "../../Assets/Rebab.gif";
import tifa from "../../Assets/Tifa.gif";
import Slider from "react-slick";
import angklungSound from "../../Assets/suara angklung.mp3";
import gambangSound from "../../Assets/SFX Alat Musik/gambang.mp3";
import rumbaSound from "../../Assets/SFX Alat Musik/rumba.mp3";
import rebabSound from "../../Assets/SFX Alat Musik/rebab.mp3";
import tifaSound from "../../Assets/SFX Alat Musik/tifa.mp3";
import ReactAudioPlayer from "react-audio-player";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();
  const audioRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    speed: 400,
    slidesToShow: 1,
    afterChange: (current) => {
      setCurrentSlide(current);
      handleAudioPlay(current);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "20px",
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleAudioPlay = (index) => {
    audioRefs.current.forEach((audioRef, i) => {
      if (audioRef.current) {
        if (i === index) {
          audioRef.current.audioEl.current.play();
        } else {
          audioRef.current.audioEl.current.pause();
          audioRef.current.audioEl.current.currentTime = 0;
        }
      }
    });
  };

  const handleClick = (index) => {
    navigate(`/resonance/detail/${index}`);
  };

  useEffect(() => {
    handleAudioPlay(currentSlide);
  }, []);

  return (
    <div className="slider-container mt-20 mb-0">
      <Slider {...settings} className="container flex justify-center mx-auto">
        <div>
          <img
            src={angklungs}
            className="drop-shadow-md lg:w-[380px] w-[250px] mx-auto"
            alt="Angklung GIF"
            onClick={() => handleClick(1)}
          />
          <ReactAudioPlayer
            src={angklungSound}
            ref={audioRefs.current[0]}
            volume={0.3}
          />
          <h1 className="font-raja text-[40px] lg:text-[60px] text-ivory text-center tracking-wide">
            Angklung
          </h1>
          <h3 className="font-stardos text-[20px] lg:text-[30px] text-ivory text-center mb-4 mt-[-18px]">
            Jawa Barat
          </h3>
        </div>
        <div>
          <img
            src={gambang}
            className="drop-shadow-md lg:w-[380px] w-[250px] mx-auto"
            alt="Gambang GIF"
            onClick={() => handleClick(6)}
          />
          <ReactAudioPlayer
            src={gambangSound}
            ref={audioRefs.current[1]}
            volume={0.3}
          />
          <h1 className="font-raja text-[30px] lg:text-[60px] text-ivory text-center tracking-wide">
            Gambang
          </h1>
          <h3 className="font-stardos text-[20px] lg:text-[30px] text-ivory text-center mb-4">
            DKI Jakarta
          </h3>
        </div>
        <div>
          <img
            src={rumba}
            className="drop-shadow-md lg:w-[380px] w-[250px] mx-auto"
            alt="Rumba GIF"
            onClick={() => handleClick(13)}
          />
          <ReactAudioPlayer
            src={rumbaSound}
            ref={audioRefs.current[2]}
            volume={0.3}
          />
          <h1 className="font-raja text-[30px] lg:text-[60px] text-ivory text-center tracking-wide">
            Rumba
          </h1>
          <h3 className="font-stardos text-[20px] lg:text-[30px] text-ivory text-center mb-4">
            Maluku
          </h3>
        </div>
        <div>
          <img
            src={rebab}
            className="drop-shadow-md lg:w-[380px] w-[250px] mx-auto"
            alt="Rebab GIF"
            onClick={() => handleClick(3)}
          />
          <ReactAudioPlayer
            src={rebabSound}
            ref={audioRefs.current[3]}
            volume={0.3}
          />
          <h1 className="font-raja text-[30px] lg:text-[60px] text-ivory text-center tracking-wide">
            Rebab
          </h1>
          <h3 className="font-stardos text-[20px] lg:text-[30px] text-ivory text-center mb-4">
            Jawa Barat
          </h3>
        </div>
        <div>
          <img
            src={tifa}
            className="drop-shadow-md lg:w-[380px] w-[250px] mx-auto"
            alt="Tifa GIF"
            onClick={() => handleClick(5)}
          />
          <ReactAudioPlayer
            src={tifaSound}
            ref={audioRefs.current[4]}
            volume={0.3}
          />
          <h1 className="font-raja text-[30px] lg:text-[60px] text-ivory text-center tracking-wide">
            Tifa
          </h1>
          <h3 className="font-stardos text-[20px] lg:text-[30px] text-ivory text-center mb-4">
            Papua
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
