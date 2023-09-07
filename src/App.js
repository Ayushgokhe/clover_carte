// import React, { useEffect, useState } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.js";
// import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Navbar from "./Navbar";
// import Home from "./Home";
// import Cart from "./Cart";

// // function withProps(Component, props) {
// //   return function(matchProps) {
// //     return <Component {...props} {...matchProps} />
// //   }
// // }

// const App = () => {
//   const [show, setShow] = useState(true);
//   const [cartVal, setCartVal] = useState([]);

//   const addToCart = (val) => {
//     // cartVal.push(val)
//     // console.log(cartVal)
//     setCartVal([...cartVal, val]);
//   };

//   const handleChange = (val, d) => {
//     const ind = cartVal.indexOf(val);
//     const arr = cartVal
//     arr[ind].amount += d;

//     if(arr[ind].amount === 0) arr[ind].amount = 1;
//     setCartVal([...arr]);
//   };

//   return (
//     <>
//       <Main>
//         <Navbar setShow={setShow} />
//         <Routes>
//           {show ? (
//             <Route path="/" Component={() => <Home addToCart={addToCart} />} />
//           ) : (
//             <Route
//               path="/cart"
//               Component={() => (
//                 <Cart
//                   cart={cartVal}
//                   setCartVal={setCartVal}
//                   handleChange={handleChange}
//                 />
//               )}
//             />
//           )}
//           {/* <Route path="/cart" Component={Cart}/> */}
//         </Routes>
//       </Main>
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Product from "./Components/Product";
import Cart1 from "./Components/Cart1";
import "./App.css";

const App = () => {
  // const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    console.log(item);
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    // let ind = 0;
    // cart.forEach((data, index) => {
    //   if (data.id == item.id) ind = index;
    // });
    // const tempArr = cart;
    // tempArr[ind] += d;
    // if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    // setCart([...tempArr]);
  };

  return (
    <>
      <Main>
        <Nav size={cart.length} />
        <Routes>
          {/* {show ? ( */}
          {/* // <Product handleClick={handleClick} /> */}
          <Route
            path="/"
            Component={() => <Product handleClick={handleClick} />}
          />
          {/* ) : ( */}
          {/* // <Cart1 cart={cart} setCart={setCart} handleChange={handleChange} /> */}
          <Route
            path="/cart"
            Component={() => (
              <Cart1
                cart={cart}
                setCart={setCart}
                handleChange={handleChange}
              />
            )}
          />
          {/* )} */}
        </Routes>
        {warning && (
          <div className="warning">Item is already added to your cart!</div>
        )}
      </Main>
    </>
  );
};

export default App;
