import React from "react";
import { Link, useLocation } from "react-router-dom";
import GadgetImage from "./GadgetImage";

const Banner = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="relative bg-purple-600 text-white mb-56">
      {/* Header Section */}
      {location.pathname == "/" && (
        <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6 z-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h2>
          <p className="max-w-3xl mb-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <Link to="/dashboard">
            <button className="btn btn-primary">Shop Now</button>
          </Link>
        </div>
      )}
      {location.pathname.includes("/gadget") && (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 z-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Product Details
          </h2>
          <p className="max-w-3xl mb-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <Link to="/dashboard">
            <button className="btn btn-primary">Shop Now</button>
          </Link>
        </div>
      )}
      {location.pathname == "/dashboard" && (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 z-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Dashboard</h2>
          <p className="max-w-3xl mb-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <Link to="/dashboard">
            <button className="btn btn-primary">Shop Now</button>
          </Link>
        </div>
      )}

      {/* Conditionally Render Gadget Image */}
      {location.pathname == "/" && (
        <div className="absolute bottom-[-80%] left-1/2 transform -translate-x-1/2 z-10">
          <GadgetImage />
        </div>
      )}
    </div>
  );
};

export default Banner;
