import React, { useState } from "react";
import Gadgets from "./Gadgets";
import Categories from "./Categories";
import { Helmet } from "react-helmet";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Update selected category
  };

  return (
    <div className="flex gap-4 p-4">
      <Helmet>
        <title>Home - Gadget Heaven</title>
      </Helmet>
      {/* Categories Component */}
      <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
        <Categories onCategorySelect={handleCategorySelect} />
      </div>

      {/* Gadgets Component */}
      <div className="w-3/4">
        <Gadgets selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default Home;

// import React, { useState } from "react";
// import Gadgets from "./Gadgets";
// import Categories from "./Categories";

// const Home = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category); // Update selected category
//   };

//   return (
//     <div className="flex gap-4 p-4">
//       {/* Categories Component */}
//       <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
//         <Categories onCategorySelect={handleCategorySelect} />
//       </div>

//       {/* Gadgets Component */}
//       <div className="w-3/4">
//         <Gadgets selectedCategory={selectedCategory} />
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import Gadgets from "./Gadgets";
// import Categories from "./Categories";

// const Home = () => {
//   return (
//     <div className="flex gap-4 p-4">
//       {/* Categories Component - 1/4 width */}
//       <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
//         <Categories />
//       </div>

//       {/* Gadgets Component - 3/4 width */}
//       <div className="w-3/4">
//         <Gadgets />
//       </div>
//     </div>
//   );
// };

// export default Home;
