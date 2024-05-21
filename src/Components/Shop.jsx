import React from "react";
import Navbar from "./Navbar";
import shop from "./shop.css";
import { category_list } from "../assets/assets";

const Shop = ({ categ, setCateg }) => {
  return (
    <>
      <Navbar />
      <div className="max-w-[90%] md:max-w-[80%] mx-auto">
        <div className="cat-list">
          {category_list.map((item, index) => {
            return (
              <div
                className="cat-item-list"
                onClick={() =>
                  setCateg((prev) =>
                    prev == item.cat_name ? "All" : item.cat_name
                  )
                }
                key={index}
              >
                <img
                  className={categ === item.cat_name ? "active" : ""}
                  src={item.cat_image}
                  alt=""
                />
                <p>{item.cat_name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;
