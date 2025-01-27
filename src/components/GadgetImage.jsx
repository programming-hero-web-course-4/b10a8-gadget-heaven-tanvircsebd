import React from "react";
import gadget from "../assets/banner.jpg";

const GadgetImage = () => {
  return (
    // <div className="absolute bottom-[-60%] left-1/2 transform -translate-x-1/2 z-20">
    <div>
      <img
        src={gadget}
        alt="VR Headset"
        className="max-w-xl rounded-lg shadow-2xl"
      />
    </div>
  );
};

export default GadgetImage;
