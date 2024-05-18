import React from 'react';
import AOS from "aos";

const LaguDaerah = ({ nama, asal }) => {

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
      <div className="group rounded-[38px] border-ivory border-[5px] flex flex-col items-center justify-center lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] mb-10 drop-shadow-md hover:bg-ivory duration-300" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="50">
        <h1 className="uppercase font-raja leading-tight text-ivory lg:text-[48px] text-[35px] text-center mx-2 group-hover:text-burgundy duration-300">{nama}</h1>
        <p className="font-bhadra text-ivory lg:text-[18px] text-[14px] text-center mb-2 group-hover:text-burgundy mt-[-5px] duration-300">FROM</p>
        <p className="uppercase font-bhadra text-ivory lg:text-[24px] text-[15px] text-center mx-1 group-hover:text-burgundy duration-300 mt-[-5px]">{asal}</p>
      </div>
    </div>
  );
};

export default LaguDaerah;
