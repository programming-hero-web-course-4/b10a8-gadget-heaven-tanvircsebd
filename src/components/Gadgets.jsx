import React, { useState, useEffect } from "react";
import Gadget from "./Gadget";

const Gadgets = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch products dynamically from products.json
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  useEffect(() => {
    // Filter products based on the selected category
    if (selectedCategory && selectedCategory !== "All") {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    } else {
      setFilteredProducts(products); // Show all products when "All" is selected
    }
  }, [selectedCategory, products]);

  return (
    <div>
      <h2 className="text-xl font-bold mt-12 mb-4">
        {/* {selectedCategory ? `Products in ${selectedCategory}` : "All Products"} */}
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <Gadget key={product.product_id} gadget={product} />
        ))}
      </div>
    </div>
  );
};

export default Gadgets;

// import React, { useState, useEffect } from "react";

// const Gadgets = ({ selectedCategory }) => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products dynamically from products.json
//     fetch("./products.json")
//       .then((response) => response.json())
//       .then((data) => setProducts(data.products))
//       .catch((error) => console.error("Error loading products:", error));
//   }, []);

//   useEffect(() => {
//     // Filter products based on the selected category
//     if (selectedCategory) {
//       setFilteredProducts(
//         products.filter((product) => product.category === selectedCategory)
//       );
//     } else {
//       setFilteredProducts(products); // Show all products by default
//     }
//   }, [selectedCategory, products]);

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">
//         {selectedCategory ? `Products in ${selectedCategory}` : "All Products"}
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="p-4 bg-white rounded-lg shadow hover:shadow-md"
//           >
//             <h3 className="font-bold">{product.name}</h3>
//             <p className="text-gray-500">{product.category}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gadgets;

// 2nd part

// import React, { useEffect, useState } from "react";
// import Gadget from "./Gadget";

// const Gadgets = () => {
//   const [gadgets, setGadgets] = useState([]);

//   useEffect(() => {
//     fetch("./products.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setGadgets(data.products);
//       });
//   }, []);
//   return (
//     <div>
//       <h2 className="text-4xl font-bold text-center">Books</h2>

//       <p>Total Products: {gadgets.length}</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {gadgets.map((gadget) => (
//           <Gadget gadget={gadget} key={gadget.product_id}></Gadget>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gadgets;
