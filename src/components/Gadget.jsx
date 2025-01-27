import React from "react";
import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    specifications,
    availability,
    rating,
  } = gadget;
  return (
    <div className="card bg-base-100 shadow-xl">
      {/* <figure className="px-10 pt-10"> */}
      <figure className="">
        <img src={product_image} alt={product_title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/gadget/${product_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
