import React , { useState,useEffect}from "react";

import { PRODUCTS } from "../../Products";
import { Product } from "./product";
import "./shop.css";



export const Shop = () => {
  const [title, setTitle] = useState("");
  const shopTitle = "Welcome to, our Fashion House"; // The text you want to display

  useEffect(() => {
    const typingDelay = 100; // Adjust the delay between each character
    const typeTitle = async () => {
      for (let i = 0; i <= shopTitle.length; i++) {
        setTitle(shopTitle.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, typingDelay));
      }
    };
    typeTitle();
  }, []);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1> {title} </h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
        
      </div>
      

      
    </div>
  );
};