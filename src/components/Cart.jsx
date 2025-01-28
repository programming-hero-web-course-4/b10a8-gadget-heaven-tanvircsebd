import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredCartList } from "../utility/AddToDb";
import Gadget from "./Gadget";
import { Helmet } from "react-helmet";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  let gadgets = useLoaderData();
  gadgets = gadgets.products;

  useEffect(() => {
    const storedCart = getStoredCartList();

    const cartList = gadgets.filter((gadget) =>
      storedCart.includes(gadget.product_id)
    );
    console.log(gadgets, storedCart, cartList);
    setCarts(cartList);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Carts - Gadget Heaven</title>
      </Helmet>
      {/* <h2 className="text-3xl my-8">This is Gadget Cart</h2> */}
      <h2>
        Number:
        {carts.length}
      </h2>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          {carts.map((gadget) => (
            <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Cart;
