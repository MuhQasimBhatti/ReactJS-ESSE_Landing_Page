import React from "react";
import {
  ESSE,
  bank,
  delivery,
  location,
  smokedown,
  smokeup,
  water,
  whatsapp,
} from "./images/index";

function InfoCard({ icon, text }) {
  return (
    <div className="flex gap-5 p-2 font-sans font-semibold text-white items-center">
      <img src={icon} className="h-12 md:h-16 lg:h-16 xl:h-20" alt="Icon" />
      <p className="sm:text-lg md:text-xl xl:text-3xl  text-white">{text}</p>
    </div>
  );
}

const App = () => {
  return (
    <div className="bg-gradient-to-l from-[#0b4480] to-[#185954] min-h-screen overflow-hidden relative">
      {/* LOGO */}
      <div>
        <img src={water} alt="any" className="absolute"/>
        <img src={smokeup} alt="any" className="absolute right-0 top-0" />
      <div className="flex">
        <div className="flex mt-3 gap-1.5">
          <div className="w-2 bg-white border-r rounded-r-md"></div>
          <div className="w-1  text-white sm:text-base md:text-4xl font-serif">
            ESSE
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="lg:flex p-4">
        {/* Card */}
        <div className="lg:4/6  flex items-center justify-between" >
          <img src={ESSE} alt="any" />
        </div>

        {/* Content list */}
        <div className="lg:w-2/6 mx-10 flex items-center justify-between">
          <div className="">
            <div className="relative w-full">
              <div className="bg-white text-[#0b4480] p-4 md:pl-12 shadow-md">
                <div className="flex">
                  <p className="font-bold text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-9xl">$125</p>
                  <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-2xl pt-3">
                    /CARTON
                  </p>
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl">(10 Packets)</p>
              </div>
              <div className="absolute left-0 bottom-0 w-0 h-0 border border-l-32 border-t-20 border-white"></div>
            </div>

            <div className="sm:mx-5 md:mx-10 my-5">
              <InfoCard icon={location} text="Pickup Windsor 3181, Melbourne" />
              <InfoCard
                icon={delivery}
                text="Shipping $10 standard $15 express"
              />
              <InfoCard icon={bank} text="Bank Transfer Only" />
            </div>

            <div>
              <div className="w-full h-1 border-t-2 border-dashed border-[#488ae8] mt-5" />
              <div className="flex justify-between items-center mt-5">
                <p className="text-white sm:text-base md:text-xl font-semibold">
                  CONTACT US
                </p>
                <div className="flex items-center">
                  <img
                    src={whatsapp}
                    alt="WhatsApp Icon"
                    className="xs:h-3 sm:h-8 md:h-10"
                  />
                  <p className="text-white sm:text-base md:text-xl font-semibold ml-2">
                    0405424883
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={smokedown} alt="any" className="absolute left-0 bottom-0"/>
      </div>
    </div>
  );
};

export default App;
