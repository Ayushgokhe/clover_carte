import React from "react";
import Sdata from "../Sdata";
import Card from "./Card";
import '../App.css'


const Product = ({handleClick}) => {
  return (
    <div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-11 mx-auto">
            <h2 className="text-center mt-2">
              Inspiration for your first order
            </h2>
            <div className="home_base">
              {Sdata.map((item) => {
                return(
                <Card item={item} key={item.id} handleClick={handleClick} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
