import React from "react";
import { Link, useLocation } from "react-router-dom";
import GadgetImage from "./GadgetImage";

const Banner = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="relative bg-purple-600 text-white mb-56">
      {/* Header Section */}
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 z-20">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="max-w-3xl mb-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <Link to="/dashboard">
          <button className="btn btn-primary">Shop Now</button>
        </Link>
      </div>

      {/* Conditionally Render Gadget Image */}
      {location.pathname == "/" && (
        <div className="absolute bottom-[-45%] left-1/2 transform -translate-x-1/2 z-10">
          <GadgetImage />
        </div>
      )}
    </div>
  );
};

export default Banner;

//  2nd version

// import React from "react";
// import gadget from "../assets/banner.jpg";
// import { Link } from "react-router-dom";

// const Banner = () => {
//   return (
//     <div className="relative bg-purple-600 text-white mb-56">
//       {/* Header Section */}
//       <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 z-20">
//         <h1 className="text-4xl lg:text-5xl font-bold mb-4">
//           Upgrade Your Tech Accessorize with Gadget Heaven Accessories
//         </h1>
//         <p className="max-w-3xl mb-6">
//           Explore the latest gadgets that will take your experience to the next
//           level. From smart devices to the coolest accessories, we have it all!
//         </p>
//         <Link to="/dashboard">
//           <button className="btn btn-primary">Shop Now</button>
//         </Link>
//       </div>

//       <div className="absolute bottom-[-60%] left-1/2 transform -translate-x-1/2 z-10">
//         <img
//           src={gadget}
//           alt="VR Headset"
//           className="max-w-xl rounded-lg shadow-2xl"
//         />
//       </div>
//     </div>
//   );
// };

// export default Banner;

// import React from "react";
// import banner from "../assets/banner.jpg";

// const Banner = () => {
//   return (
//     <div className="hero min-h-screen bg-purple-600 text-white">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <img
//           src={banner} // Replace with the image you want
//           alt="VR Headset"
//           className="max-w-lg rounded-lg shadow-2xl"
//         />
//         <div className="text-center lg:text-left">
//           <h1 className="text-4xl lg:text-5xl font-bold">
//             Upgrade Your Tech Accessorize with Gadget Heaven Accessories
//           </h1>
//           <p className="py-6">
//             Explore the latest gadgets that will take your experience to the
//             next level. From smart devices to the coolest accessories, we have
//             it all!
//           </p>
//           <button className="btn btn-primary">Shop Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
