import React, { useState, useEffect } from "react";

const Categories = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories dynamically from categories.json
    fetch("/categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories))
      .catch((error) => console.error("Error loading categories:", error));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mt-12 mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onCategorySelect(category)} // Notify parent about selected category
            className="p-2 bg-white rounded-lg shadow hover:bg-gray-100 cursor-pointer"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

// import React, { useState, useEffect } from "react";

// const Categories = ({ onCategorySelect }) => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     // Fetch categories dynamically from categories.json
//     fetch("/categories.json")
//       .then((response) => response.json())
//       .then((data) => setCategories(data.categories))
//       .catch((error) => console.error("Error loading categories:", error));
//   }, []);

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Categories</h2>
//       <ul className="space-y-2">
//         {categories.map((category, index) => (
//           <li
//             key={index}
//             onClick={() => onCategorySelect(category)} // Notify parent about selected category
//             className="p-2 bg-white rounded-lg shadow hover:bg-gray-100 cursor-pointer"
//           >
//             {category}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Categories;

// import React from "react";

// const Categories = () => {
//   // Sample categories
//   const categories = [
//     "Electronics",
//     "Mobile Phones",
//     "Laptops",
//     "Home Appliances",
//     "Gaming Consoles",
//     "Cameras",
//     "Wearable Tech",
//   ];

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Categories</h2>
//       <ul className="space-y-2">
//         {categories.map((category, index) => (
//           <li
//             key={index}
//             className="p-2 bg-white rounded-lg shadow hover:bg-gray-100 cursor-pointer"
//           >
//             {category}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Categories;
