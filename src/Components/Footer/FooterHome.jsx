import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-burgundy lg:h-[240px] h-[280px] w-full lg:p-8 p-6">
      <div className="flex lg:flex-row flex-col">
        <div className="flex flex-col lg:ms-4">
          <h1 className="text-ivory font-inter lg:text-xl text-sm text-left font-bold">
            Resonance of The Archipelago
          </h1>
          <h1 className="text-ivory font-inter lg:text-lg text-sm mt-2">
            © Ketloverz 2024. Made with 🩵 by Ketloverz.
          </h1>
        </div>
        <div className="flex flex-col lg:ms-40 max-sm:mt-4">
          <h1 className="text-ivory font-inter lg:text-xl text-sm font-bold text-left lg:mb-6 mb-2">
            Contacts
          </h1>
          <div className="flex justify-start max-sm:mb-2">
            <a
              href="https://open.spotify.com/playlist/3yuaVzvV2Am3HD202qzRRI?si=9e9b929539c74ae7"
              target="_blank"
            >
              <div className="flex flex-row items-center">
                <FontAwesomeIcon
                  icon={faSpotify}
                  className="text-ivory lg:text-2xl text-lg text-left"
                />
                <p className="text-left text-ivory lg:text-md text-sm font-inter ms-4">
                  {" "}
                  Indonesian Cultural Heritage Playlist{" "}
                </p>
              </div>
            </a>
          </div>
          <div className="flex justify-start lg:mt-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row items-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-ivory lg:text-2xl text-lg text-left"
                />
                <p className="text-left text-ivory lg:text-md text-sm font-inter ms-4">
                  {" "}
                  @ketloverz{" "}
                </p>
              </div>
            </a>
          </div>
          <div className="flex justify-start lg:mt-4 max-sm:mt-2">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-ivory lg:text-2xl text-lg text-left"
                />
                <p className="text-left text-ivory lg:text-md text-sm font-inter ms-4">
                  {" "}
                  93655055589{" "}
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:ms-40 max-sm:mt-4">
          <h1 className="text-ivory font-inter lg:text-xl text-sm font-bold text-left lg:mb-6 mb-2">
            Address
          </h1>
          <div className="flex justify-start ">
            <div className="flex flex-row items-center">
              <a
                href="https://maps.app.goo.gl/SFCfwGQ7bi3hXd3g8"
                target="_blank"
              >
                <p className="text-left text-ivory lg:text-md text-sm font-inter">
                  269 Nagahamachō Aoshima, Ōzu-shi,
                  <br /> Ehime-ken 799-3470, Japan
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
