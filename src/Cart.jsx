// import React from "react";

// const Cart = (props) => {
//   const cart = props.cart;
//   // const setCart = props.setCart;

//   // for (const property in cart) {
//   //   console.log(`${property}: ${cart[property]}`);
//   // }
//   // console.log(cart);
//   // const cartItem = () => {
//   //   // alert(JSON.stringify(cart))
//   // };

//   return (
//     <>
//       <div>
//         {cart.map((item) => {
//           return (
//             <div key={item.id}>
//               <img src={cart.img} alt="error" />
//               <div> {cart.name} </div>
//             </div>
//           );
//         })}
//       </div>
//       ;
//     </>
//   );
// };

// export default Cart;

import React from 'react'

const Cart = ({cartVal, setCartVal, handleChange}) => {

// const [price, setPrice] = useState(0)

// const handleRemove = (id) => {
//   const arr = cartVal.filter((val) => val.id !== id)
//   setCartVal(arr);
//   handlePrice();
// };

// const handlePrice = () => {
//   let ans = 0;
//   cartVal.map((val)=> (ans += val.amount * val.price))
//   setPrice(ans)
// }

// useEffect(()=>{
//   handlePrice()
// })

  return (
    <div>
      hey11
      {
        cartVal.map((val)=>(
          <div>
            hey
            <img src={val.img} alt="" />
            <p>{val.name}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Cart;