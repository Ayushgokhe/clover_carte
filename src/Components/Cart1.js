import React, { useEffect, useState } from "react";
import "../App.css";

const Cart1 = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item)=>{
        ans += item.amount * item.price
    })
    setPrice(ans)
}

const handleRemove = (id) =>{
    const arr = cart.filter((item)=>item.id !== id);
    setCart(arr);
    // handlePrice()
}

    useEffect(()=>{
        handlePrice();
    })

  return (
    <>
      <div className="container-fluid nav_bg" >
        <div className="row">
          <div className="col-11 mx-auto mainn">
            {cart?.map((item) => {
              return (
                <div className="cart_box" key={item.id}>
                  <div className="cart1_img">
                    <img src={item.img} />
                  </div>
                    <p className="cart1_p">{item.name}</p>
                  <div className="cart1_btn">
                    <button onClick={()=>handleChange(item, -1)}>-</button>
                    <p>{item.amount}</p>
                    <button onClick={()=>handleChange(item, +1)}>+</button>
                  </div>
                  <div className="cart1_price">
                    <span>Rs. {item.price}</span>
                    <button onClick={()=>handleRemove(item.id)}>Remove</button>
                  </div>
                </div>
              );
            })}
            <div>
              <span><b>Total price</b></span>
              <span><b> Rs = {price}</b></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart1;
