import React from "react";
import Navbar from "./Navbar";
import shop from "./shop.css";
import { category_list } from "../assets/assets";

const Home = ({ categ, setCateg }) => {
  return (
    <>
      <Navbar />
      <div className="max-w-[90%] md:max-w-[70%] mx-auto">
        <img
          src="/images/baner-1.png"
          alt="baner"
          className="rounded-lg justify-self-center w-[100%] mt-5"
        />
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

export default Home;
