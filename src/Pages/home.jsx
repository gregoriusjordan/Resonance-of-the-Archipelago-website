import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import "../App.css";
import Carousel from "../Components/Carousel/Carousel";
import MegaMendung from "../Assets/Megamendung.png";
import Map from "../Components/Map/Map";
import AOS from "aos";
import "aos/dist/aos.css";
import Shelf from "../Components/Shelf/Shelf";
import FooterHome from "../Components/Footer/FooterHome";
import alatMusik from "../Data/alatMusik";
import Weather from "../Components/Weather";

const Home = () => {
  const navigate = useNavigate();
  const [alatMusikArr, setAlatMusik] = useState([]);

  useEffect(() => {
    setAlatMusik(alatMusik);
    window.scrollTo({ top: 0, behavior: "smooth" });

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
  }, []);

  const handleClick = (index) => {
    const actualIndex = index + 6; 
    navigate(`/resonance/detail/${actualIndex}`);
  };

  return (
    <div className="container-lg md:mx-auto bg-burgundys scrollbar scrollbar-thumb-taupe scrollbar-track-burgundy">
      <br />
      <br />
      <br />
      <br />
      <div
        className="mt-10"
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <h1 className="font-raja text-ivory text-center mt-16 lg:text-[80px] text-[40px] drop-shadow-md tracking-wide">
          Resonance of the Archipelago
        </h1>
        <h1 className="font-quick font-semibold text-ivory text-center lg:text-xl text-sm mb-5 lg:mt-[-15px] mt-[-10px] mx-2">
          Let’s explore the beauty of Indonesia from the resonance of its
          archipelago.
        </h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <Carousel />
      </div>  

      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-center"
      >
        <img src={MegaMendung} />
        <div className="bg-ivory text-center">
          <br />
          <div data-aos="zoom-in" data-aos-duration="1000">
            <h1 className="font-raja find text-7xl text-burgundy max-sm:text-5xl">
              Find Your Melody!
            </h1>
            <h2 className="font-quick text-3xl text-burgundy font-normal max-sm:text-xl">
              Click on the island.
            </h2>
            <Link to="/melody">
              <Map />
            </Link>
          </div>
          <div
            className="mt-28 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:mx-8"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            {alatMusikArr.slice(6, 10).map((alatMusik, index) => (
              <div key={index} onClick={() => handleClick(index)}>
                <Shelf
                  nama={alatMusik.name}
                  asal={alatMusik.region}
                  image={alatMusik.image}
                />
              </div>
            ))}
          </div>
          <div className="mt-16" data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000">
            <Weather />
          </div>
          <div data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000">
          <h1 className="mt-14 font-raja lg:text-5xl text-2xl text-burgundy text-center">Let's listen to the melody!</h1>
          <div className="mt-2 flex justify-center mx-6" >
            <iframe
              src="https://open.spotify.com/embed/playlist/3yuaVzvV2Am3HD202qzRRI"
              className="lg:w-[650px] md:w-[500px] w-[300px]"
              height="400"
              allowtransparency="true"
              allow="encrypted-media"
              title="Spotify Playlist"
            ></iframe>
          </div>
          </div>
      
          <div className="mt-16">
            <FooterHome />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
