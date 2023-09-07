import React from "react";
import '../App.css'

const Card = ({ item, handleClick }) => {
  const { img, name, price } = item;
  return (
    <>
      <div className="home_container">
        <div className="home_content1">
          <img src={img} alt="" />
        </div>
        <div className="home_content2">
          <li>
            <b>{name}</b>
          </li>
          <li>{price}</li>
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
          <button onClick={() => handleClick(item)} className="home_btn">
            Add TO Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
