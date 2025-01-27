import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredCartList, addToStoredWishList } from "../utility/AddToDb";
import ReactStars from "react-rating-stars-component";

const GadgetDetail = () => {
  const { gadgetId } = useParams();
  const data = useLoaderData();
  const gadgets = data.products;

  const gadget = gadgets.find((gadget) => gadget.product_id === gadgetId);
  const {
    product_id,
    product_title,
    product_image,
    availability,
    category,
    description,
    specifications,
    rating,
    price,
  } = gadget;

  const [isWishListed, setIsWishListed] = useState(false);

  useEffect(() => {
    // Check if the product is already in the wish list
    const storedWishList = JSON.parse(localStorage.getItem("wishList")) || [];
    if (storedWishList.includes(product_id)) {
      setIsWishListed(true);
    }
  }, [product_id]);

  const handleAddToCart = (id) => {
    addToStoredCartList(id);
    alert("Item added to cart!");
  };

  const handleAddToWishList = (id) => {
    addToStoredWishList(id);
    setIsWishListed(true);
    alert("Item added to wish list!");
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={product_image}
          className="max-w-sm rounded-lg shadow-2xl"
          alt={product_title}
        />
        <div>
          <h1 className="text-5xl font-bold">{product_title}</h1>
          <p className="py-6">Price: ${price}</p>
          <p className="py-6">
            Specifications:
            {specifications.map((specification, index) => (
              <ol key={index}>
                <li>{specification}</li>
              </ol>
            ))}
          </p>
          <div className="py-4">
            <ReactStars
              count={5}
              value={rating}
              size={24}
              activeColor="#ffd700"
              edit={false}
            />
          </div>
          <button
            onClick={() => handleAddToCart(product_id)}
            className="btn btn-primary mr-2"
          >
            Add to Cart 🛒
          </button>
          <button
            onClick={() => handleAddToWishList(product_id)}
            className={`btn btn-accent ${isWishListed ? "btn-disabled" : ""}`}
            disabled={isWishListed}
          >
            {isWishListed ? "Wish Listed ♥" : "Add to Wish List ♥"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetail;

// import { list } from "postcss";
// import React from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import { addToStoredCartList, addToStoredWishList } from "../utility/AddToDb";

// const GadgetDetail = () => {
//   const { gadgetId } = useParams();
//   const data = useLoaderData();
//   const gadgets = data.products;

//   const gadget = gadgets.find((gadget) => gadget.product_id === gadgetId);
//   const {
//     product_id,
//     product_title,
//     product_image,
//     availability,
//     category,
//     description,
//     specifications,
//     rating,
//     price,
//   } = gadget;
//   console.log(gadget);
//   const handleAddToCart = (id) => {
//     addToStoredCartList(id);
//   };

//   const handleAddToWishList = (id) => {
//     addToStoredWishList(id);
//   };

//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row">
//         <img src={product_image} className="max-w-sm rounded-lg shadow-2xl" />
//         <div>
//           <h1 className="text-5xl font-bold">{product_title}</h1>
//           <p className="py-6">Price: {price}</p>
//           <p className="py-6">
//             Specification:
//             {specifications.map((specification) => (
//               <ol>
//                 <li>{specification}</li>
//               </ol>
//             ))}
//           </p>

//           <button
//             onClick={() => handleAddToCart(product_id)}
//             className="btn btn-primary"
//           >
//             Add to Cart
//           </button>
//           <button
//             onClick={() => handleAddToWishList(product_id)}
//             className="btn btn-accent"
//           >
//             Add to Wish List
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GadgetDetail;
