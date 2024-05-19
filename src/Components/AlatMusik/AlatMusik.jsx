import React from 'react';
import AOS from 'aos';
import "./AlatMusik.css";

const AlatMusik = ({nama, asal, image }) => {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });

  return (
    <div className="flex justify-center">
      <div className="lg:rounded-[43px] rounded-[30px] resonance border-ivory border-[5px] flex flex-col items-center justify-center lg:w-[320px] lg:h-[380px] w-[220px] h-[280px] mb-10 drop-shadow-md tracking-wide" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="50">
        <img
          src={image}
          alt={nama}
          className="lg:w-[228px] lg:h-[228px] w-[150px] h-[150px] hover:scale-[1.12] duration-300"
        />
        <h1 className="font-raja text-ivory lg:text-[60px] text-[45px] text-center lg:mt-[-15px] drop-shadow-md tracking-wide">{nama}</h1>
        <p className="font-quick font-medium text-cream lg:text-[25px] text-[15px] text-center lg:mt-[-30px] mt-[-15px] tracking-wide">{asal}</p>
      </div>
    </div>
  );
};

export default AlatMusik;
