import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishListItems, setWishListItems] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  const navigate = useNavigate();

  // Load products and filter data from localStorage
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setAllProducts(data.products);

        // Retrieve IDs from localStorage
        const cartIds = JSON.parse(localStorage.getItem("cart-list")) || [];
        const wishListIds = JSON.parse(localStorage.getItem("wish-list")) || [];

        // Filter products based on IDs
        const filteredCartItems = data.products.filter((product) =>
          cartIds.includes(product.product_id)
        );

        const filteredWishListItems = data.products.filter((product) =>
          wishListIds.includes(product.product_id)
        );

        setCartItems(filteredCartItems);
        setWishListItems(filteredWishListItems);

        // Calculate total price
        const totalPrice = filteredCartItems.reduce(
          (total, item) => total + item.price,
          0
        );
        setTotalCartPrice(totalPrice);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSortByPrice = () => {
    const sortedCart = [...cartItems].sort((a, b) => b.price - a.price);
    setCartItems(sortedCart);
    setSorted(true);
  };

  const handlePurchase = () => {
    // Empty the cart and reset total price
    setCartItems([]);
    setTotalCartPrice(0);

    // Show the congratulatory modal
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    // Hide the modal and redirect to home page
    setModalVisible(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Helmet>
        <title>Dashboard - Gadget Heaven</title>
      </Helmet>
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>

      <Tabs>
        <TabList>
          <Tab>Cart</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Cart Items</h2>
              <button
                onClick={handleSortByPrice}
                className="btn btn-primary"
                disabled={sorted}
              >
                {sorted ? "Sorted by Price" : "Sort by Price"}
              </button>
            </div>
            <div className="mt-4">
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.product_id}
                        className="card bg-base-100 shadow-md"
                      >
                        <figure>
                          <img
                            src={item.product_image}
                            alt={item.product_title}
                          />
                        </figure>
                        <div className="card-body">
                          <h3 className="card-title">{item.product_title}</h3>
                          <p>Price: ${item.price}</p>
                          <p>Checking</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xl font-bold mt-4">
                    Total Price: ${totalCartPrice.toFixed(2)}
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Purchase Button */}
          <div className="mt-6">
            <button
              onClick={handlePurchase}
              className="btn btn-success"
              disabled={cartItems.length === 0 || totalCartPrice === 0}
            >
              Purchase
            </button>
          </div>
        </TabPanel>

        <TabPanel>
          <div>
            <h2 className="text-2xl font-bold">Wish List Items</h2>
            <div className="mt-4">
              {wishListItems.length === 0 ? (
                <p>Your wish list is empty.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {wishListItems.map((item) => (
                    <div
                      key={item.product_id}
                      className="card bg-base-100 shadow-md"
                    >
                      <figure>
                        <img
                          src={item.product_image}
                          alt={item.product_title}
                        />
                      </figure>
                      <div className="card-body">
                        <h3 className="card-title">{item.product_title}</h3>
                        <p>Price: ${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </TabPanel>
      </Tabs>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold text-green-600">
              Congratulations!
            </h2>
            <p>Your purchase was successful.</p>
            <div className="mt-4 flex justify-end">
              <button onClick={handleCloseModal} className="btn btn-primary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

// const Dashboard = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [wishListItems, setWishListItems] = useState([]);
//   const [allProducts, setAllProducts] = useState([]);
//   const [sorted, setSorted] = useState(false);

//   // Get current location
//   const location = useLocation();

//   // Load products and filter data from localStorage
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("/products.json");
//         const data = await response.json();
//         setAllProducts(data.products);

//         // Retrieve IDs from localStorage
//         const cartIds = JSON.parse(localStorage.getItem("cart-list")) || [];
//         const wishListIds = JSON.parse(localStorage.getItem("wish-list")) || [];

//         // Filter products based on IDs
//         const filteredCartItems = data.products.filter((product) =>
//           cartIds.includes(product.product_id)
//         );

//         const filteredWishListItems = data.products.filter((product) =>
//           wishListIds.includes(product.product_id)
//         );

//         setCartItems(filteredCartItems);
//         setWishListItems(filteredWishListItems);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleSortByPrice = () => {
//     const sortedCart = [...cartItems].sort((a, b) => b.price - a.price);
//     setCartItems(sortedCart);
//     setSorted(true);
//   };

//   const totalCartPrice = cartItems.reduce(
//     (total, item) => total + item.price,
//     0
//   );

//   // Define background color based on route
//   const backgroundColor =
//     location.pathname === "/dashboard" ? "bg-gray-100" : "bg-white";

//   return (
//     <div className={`min-h-screen ${backgroundColor} p-6`}>
//       <h1 className="text-4xl font-bold mb-4">Dashboard</h1>

//       <Tabs>
//         <TabList>
//           <Tab>Cart</Tab>
//           <Tab>Wish List</Tab>
//         </TabList>

//         {/* Cart Tab Panel */}
//         <TabPanel>
//           <div>
//             <div className="flex justify-between items-center">
//               <h2 className="text-2xl font-bold">Cart Items</h2>
//               <button
//                 onClick={handleSortByPrice}
//                 className="btn btn-primary"
//                 disabled={sorted}
//               >
//                 {sorted ? "Sorted by Price" : "Sort by Price"}
//               </button>
//             </div>
//             <div className="mt-4">
//               {cartItems.length === 0 ? (
//                 <p>Your cart is empty.</p>
//               ) : (
//                 <>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {cartItems.map((item) => (
//                       <div
//                         key={item.product_id}
//                         className="card bg-base-100 shadow-md"
//                       >
//                         <figure>
//                           <img
//                             src={item.product_image}
//                             alt={item.product_title}
//                           />
//                         </figure>
//                         <div className="card-body">
//                           <h3 className="card-title">{item.product_title}</h3>
//                           <p>Price: ${item.price}</p>
//                           <p>Checking</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   <p className="text-xl font-bold mt-4">
//                     Total Price: ${totalCartPrice.toFixed(2)}
//                   </p>
//                 </>
//               )}
//             </div>
//           </div>
//         </TabPanel>

//         {/* Wish List Tab Panel */}
//         <TabPanel>
//           <div>
//             <h2 className="text-2xl font-bold">Wish List Items</h2>
//             <div className="mt-4">
//               {wishListItems.length === 0 ? (
//                 <p>Your wish list is empty.</p>
//               ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {wishListItems.map((item) => (
//                     <div
//                       key={item.product_id}
//                       className="card bg-base-100 shadow-md"
//                     >
//                       <figure>
//                         <img
//                           src={item.product_image}
//                           alt={item.product_title}
//                         />
//                       </figure>
//                       <div className="card-body">
//                         <h3 className="card-title">{item.product_title}</h3>
//                         <p>Price: ${item.price}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </TabPanel>
//       </Tabs>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from "react";
// import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

// const Dashboard = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [wishListItems, setWishListItems] = useState([]);
//   const [allProducts, setAllProducts] = useState([]);
//   const [sorted, setSorted] = useState(false);

//   // Load products and filter data from localStorage
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("/products.json");
//         const data = await response.json();
//         setAllProducts(data.products);

//         // Retrieve IDs from localStorage
//         const cartIds = JSON.parse(localStorage.getItem("cart-list")) || [];
//         const wishListIds = JSON.parse(localStorage.getItem("wish-list")) || [];

//         // Filter products based on IDs
//         const filteredCartItems = data.products.filter((product) =>
//           cartIds.includes(product.product_id)
//         );

//         const filteredWishListItems = data.products.filter((product) =>
//           wishListIds.includes(product.product_id)
//         );

//         setCartItems(filteredCartItems);
//         setWishListItems(filteredWishListItems);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleSortByPrice = () => {
//     const sortedCart = [...cartItems].sort((a, b) => b.price - a.price);
//     setCartItems(sortedCart);
//     setSorted(true);
//   };

//   const totalCartPrice = cartItems.reduce(
//     (total, item) => total + item.price,
//     0
//   );

//   return (
//     <div className="min-h-screen bg-base-200 p-6">
//       <h1 className="text-4xl font-bold mb-4">Dashboard</h1>

//       <Tabs>
//         <TabList>
//           <Tab>Cart</Tab>
//           <Tab>Wish List</Tab>
//         </TabList>

//         {/* Cart Tab Panel */}
//         <TabPanel>
//           <div>
//             <div className="flex justify-between items-center">
//               <h2 className="text-2xl font-bold">Cart Items</h2>
//               <button
//                 onClick={handleSortByPrice}
//                 className="btn btn-primary"
//                 disabled={sorted}
//               >
//                 {sorted ? "Sorted by Price" : "Sort by Price"}
//               </button>
//             </div>
//             <div className="mt-4">
//               {cartItems.length === 0 ? (
//                 <p>Your cart is empty.</p>
//               ) : (
//                 <>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {cartItems.map((item) => (
//                       <div
//                         key={item.product_id}
//                         className="card bg-base-100 shadow-md"
//                       >
//                         <figure>
//                           <img
//                             src={item.product_image}
//                             alt={item.product_title}
//                           />
//                         </figure>
//                         <div className="card-body">
//                           <h3 className="card-title">{item.product_title}</h3>
//                           <p>Price: ${item.price}</p>
//                           <p>Checking</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   <p className="text-xl font-bold mt-4">
//                     Total Price: ${totalCartPrice.toFixed(2)}
//                   </p>
//                 </>
//               )}
//             </div>
//           </div>
//         </TabPanel>

//         {/* Wish List Tab Panel */}
//         <TabPanel>
//           <div>
//             <h2 className="text-2xl font-bold">Wish List Items</h2>
//             <div className="mt-4">
//               {wishListItems.length === 0 ? (
//                 <p>Your wish list is empty.</p>
//               ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {wishListItems.map((item) => (
//                     <div
//                       key={item.product_id}
//                       className="card bg-base-100 shadow-md"
//                     >
//                       <figure>
//                         <img
//                           src={item.product_image}
//                           alt={item.product_title}
//                         />
//                       </figure>
//                       <div className="card-body">
//                         <h3 className="card-title">{item.product_title}</h3>
//                         <p>Price: ${item.price}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </TabPanel>
//       </Tabs>
//     </div>
//   );
// };

// export default Dashboard;
