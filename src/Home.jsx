import React, { useState } from "react";
import "./App.css";
import Sdata from "./Sdata";

const Home = ({addToCart}) => {

  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-11 mx-auto">
          <h2 className="text-center mt-2">Inspiration for your first order</h2>
          <div className="home_base">
            {Sdata.map((val) => {
              return (
                <div className="home_container" key={val.id}>
                  <div className="home_content1">
                    <img src={val.img} alt="" />
                  </div>
                  <div className="home_content2">
                    <li>
                      <b>{val.name}</b>
                    </li>
                    <li>{val.price}</li>
                    {/* {cart[val.id] > 0 ? (
                      <div className="button_div" style={{ display: "flex" }}>
                        <button onClick={() => addToCart(val.id, -1)}>
                          <span className="span_button">-</span>
                        </button>
                        <p>{cart[val.id]}</p>
                        <button onClick={() => addToCart(val.id, 1)}>
                          <span className="span_button">+</span>
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(val.id, 1, val)}
                        id={val.id}
                        className="home_btn"
                      >
                        Add To Cart
                      </button>
                    )} */}
                    <button
                    onClick={() => addToCart(val)}
                    className="home_btn">
                      Add TO Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
