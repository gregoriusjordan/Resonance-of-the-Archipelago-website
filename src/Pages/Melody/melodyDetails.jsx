import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import laguDaerahData from "../../Data/laguDaerah";
import LaguDaerahDetails from "../../Components/LaguDaerah/LaguDaerahDetail";
import Footer from "../../Components/Footer/Footer";
import FortuneCookie from "../../Components/FortuneCookie";
import AOS from "aos";

const MelodyDetails = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const currentIndex = parseInt(index, 10);
  const selectedLaguDaerah = laguDaerahData[currentIndex];

  const handleClick = (index) => {
    navigate(`/melody/detail/${index}`);

    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  };

  return (
    <div className="bg-burgundys">
      <br/><br/><br/><br/>
      <div className="mt-14 mb-10">
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
      <div className="mt-4 mb-14">
        <div className="flex justify-center mb-2">
          <h1 className="text-center text-ivory font-raja lg:text-4xl text-2xl"> You found a Fortune Cookie!</h1>
        </div>
        <div className="flex justify-center">
        <FortuneCookie/>
        </div>
      </div>
      <div className="mt-4">
        <Footer/>
      </div>
    </div>
  );
};

export default MelodyDetails;
