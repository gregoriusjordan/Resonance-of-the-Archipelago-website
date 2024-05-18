import React, { useEffect, useState } from "react";
import "./aboutus.css";
import Navbar from "../Components/Navbar/Navbar";
import greg from "../Assets/greg.png";
import olivia from "../Assets/oliv.png";
import lia from "../Assets/lia.jpg";
import abe from "../Assets/abe.png";
import Footer from "../Components/Footer/Footer";
import totoro from "../Assets/Totoro.png";
import otter from "../Assets/otterlette.png";
import scara from "../Assets/fatmeow.png";
import omen from "../Assets/omen.png";

const AboutUs = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [contactInfo, setContactInfo] = useState({});
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchCatFact();
  }, []);

  const fetchCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setCatFact(data.fact);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
    }
  };

  const teamMembers = [
    {
      name: "Gregorius Jordan",
      contact: "gregoriusjordan@gmail.com",
      instagram: "@gregorius.jordan",
      funFact: "Gregorius is a ghibli boy (he's a totoro)",
      quote: "hhhhRRRRGGGHHHOOOOOUGGGHHH *totoro noises*",
      image: greg,
      tambah: totoro,
    },
    {
      name: "Abraham Pilar",
      contact: "abrahampilaro@gmail.com",
      instagram: "@abplrsmn",
      funFact: "i stroke my pickle",
      quote: "dont use half ass, use the whole ass",
      image: abe,
      tambah: omen,
    },
    {
      name: "Qonita Azalia",
      contact: "qonita2307@gmail.com",
      instagram: "@azxlix",
      funFact: "she worships scaramouche",
      quote: "what if i said 'fr' and it was fake",
      image: lia,
      tambah: scara,
    },
    {
      name: "Olivia Karissa",
      contact: "olivia.karissa@gmail.com",
      instagram: "@oliviakarissa_",
      funFact: "Olivia loves otters (romantically)",
      quote: "watashi wa olivia desu~",
      image: olivia,
      tambah: otter,
    },
  ];

  const handleCardClick = (member) => {
    setContactInfo(member);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setContactInfo({});
  };

  return (
    <div className="flex justify-center mt-28">
      <Navbar />
      <br /><br /><br />
      <div>
      <p className="mt-4 text-center text-ivory font-bhadra lg:text-xl text-lg"> Click on one of us! </p>
        <div className="card mt-4 flex max-sm:flex-col max-md:flex-col max-sm:w-[350px] max-md:h-[600px] max-md:w-[600px]">
          {teamMembers.map((member, index) => (
            <p key={index} onClick={() => handleCardClick(member)} className="flex flex-col">
              <img src={member.image} alt={`${member.name}'s photo`} />
              <span className="text-ivory">{member.name}</span>
            </p>
          ))}
        </div>
       
        <br />
        <div className="text-below-card">
          Ketloverz
        </div>
        <div className="description-text flex flex-wrap">
          Introducing Ketloverz, your ultimate destination for embracing the rich tapestry of Indonesian traditional music and culture. At Ketloverz, we are passionate advocates for preserving and celebrating the timeless melodies, rhythms, and instruments that define Indonesia's musical heritage.
        </div>
        <br /><br />
        <div className="gif-container">
          <img src="https://64.media.tumblr.com/e642b66f8548fa1485621bd82d3eacc9/df8c8427627025f7-72/s640x960/af7dc108c6fd722e684f767aa7ad6b9f72f9d9c9.gifv" alt="Ketloverz GIF" />
        </div>
        <div className="cat-fact-box mt-4">
          <p className="text-ivory font-bhadra lg:text-2xl">Cat Fact</p>
          <div className="ivory-box max-sm:w-[350px]">
            <p>{catFact}</p>
          </div>
        </div>
        <br /><br /><br />
        <Footer/>
      </div>

      {popupVisible && (
        <div className="popup">
          <div className="popup-content">
            <div className="flex justify-center mb-6">
            <img src={contactInfo.tambah} className="lg:w-[80px]"></img>
            </div>
            <span className="close-btn" onClick={handleClosePopup}>&times;</span>
            <p>Email: {contactInfo.contact}</p>
            <p>Instagram: {contactInfo.instagram}</p>
            <p>Fun Fact: {contactInfo.funFact}</p>
            <p>"{contactInfo.quote}"</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
