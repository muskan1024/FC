import React from "react";
import Navbar from "./Navbar";
import shop from "./shop.css"
import { category_list } from "../assets/assets";

const Shop = ({categ,setCateg}) => {
  return (
    <>
      <Navbar />
      
       {/* <div className="w-80% m-auto ml-20 ">
        <div className="flex  gap-10 mt-10 ">
<img className="w-20 h-20  border-indigo-500/100"  src="/images/Ellipse 1.png" alt="" />
<img className="w-20 h-20"  src="/images/shit.png" alt="" />
<img className="w-20 h-20"  src="/images/uniform.png" alt="" />
<img className="w-20 h-20"  src="/images/trouser.png" alt="" />
<img className="w-20 h-20"  src="/images/tshirt.png" alt="" />
<img className="w-20 h-20"  src="/images/coat.png" alt="" />
        </div>
        
        </div> */}
        <div className="cat-list">
          {
            category_list.map((item,index)=>{
              return(
                <div className="cat-item-list" onClick={()=>setCateg(prev=>prev==item.cat_name?"All":item.cat_name)} key={index} >
                  <img className={categ===item.cat_name?"active":""} src={item.cat_image} alt="" />
                  <p>{item.cat_name}</p>
                </div>
              )
            })
          }
        </div>
    </>
  );
};

export default Shop;
